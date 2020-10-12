import {
  createGraphQLHandler,
  makeMergedSchema,
  makeServices,
} from '@redwoodjs/api'

import services from 'src/services/**/*.{ts,js}'
import schemas from 'src/graphql/**/*.{ts,js}'
import { db } from 'src/lib/db'

import { getCurrentUser } from 'src/lib/auth'

export const handler = createGraphQLHandler({
  schema: makeMergedSchema({
    schemas,
    services: makeServices({ services }),
  }),
  getCurrentUser,
  onException: () => {
    db.$disconnect()
  },
})
