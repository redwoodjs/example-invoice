import { graphQLServerlessFunction } from '@hammerframework/hammer-api'
import { Photon } from '@generated/photon'
import { AuthenticationError } from 'apollo-server-lambda'

import { getAccessToken } from 'src/lib/auth0'
import * as currentUser from 'src/graphql/currentUser'
import * as invoices from 'src/graphql/invoices'

const photon = new Photon()

export const userFindOrCreate = async ({ sub }) => {
  const { id, user } = await photon.accessTokens.upsert({
    where: { sub },
    update: { sub },
    create: { sub },
    select: {
      id: true,
      sub: true,
      user: true,
    },
  })

  if (user) {
    return user
  }

  // If the user is null then we have to create one.
  // Ordinarily we would fetch a normalized standard identifier
  // like the email address, but for now we'll just stick to
  // one account per identity service.
  // https://auth0.com/docs/users/normalized/auth0/identify-users
  const newUser = await photon.users.create({
    data: {
      accessTokens: {
        connect: { id: id },
      },
    },
  })
  return newUser
}

const server = graphQLServerlessFunction({
  context: async ({ event }) => {
    return {
      photon,
      currentUser: async () => {
        try {
          const accessToken = await getAccessToken(event.headers)
          return userFindOrCreate(accessToken)
        } catch (e) {
          throw new AuthenticationError('You are not authenticated')
        }
      },
    }
  },
  schemaTypes: { currentUser, invoices },
})

export const handler = server.createHandler()
