import {
  createGraphQLHandler,
  makeMergedSchema,
  makeServices,
} from '@redwoodjs/api'
import importAll from '@redwoodjs/api/importAll.macro'
import { db } from 'src/lib/db'
import { getCurrentUser } from 'src/lib/auth'

const schemas = importAll('api', 'graphql')
const services = importAll('api', 'services')

export const handler = createGraphQLHandler({
  schema: makeMergedSchema({
    schemas,
    services: makeServices({ services }),
  }),
  getCurrentUser,
  onException: () => {
    db.disconnect()
  },
})
