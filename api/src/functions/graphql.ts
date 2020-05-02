import {
  createGraphQLHandler,
  makeMergedSchema,
  makeServices,
  getUserFromContext,
  setContext,
} from '@redwoodjs/api'
import importAll from '@redwoodjs/api/importAll.macro'
import { db } from 'src/lib/db'

const schemas = importAll('api', 'graphql')
const services = importAll('api', 'services')

export const handler = createGraphQLHandler(
  {
    schema: makeMergedSchema({
      schemas,
      services: makeServices({ services }),
    }),
    context: async (context) => {
      const user = await getUserFromContext(context)
      setContext({ user })
    },
  },
  db
  // onException
)
