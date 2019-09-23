import path from 'path'
import { queryType, makeSchema } from 'nexus'
import { ApolloServer } from 'apollo-server-lambda'
import { getHammerConfig } from '@hammerframework/hammer-core'

const hammerConfig = getHammerConfig()
const hammerApiDir = path.join(hammerConfig.baseDir, 'api')

export interface Config {
  context?: object
  schemaTypes: object
}

export const graphQLServerlessFunction = (
  { context, schemaTypes }: Config = { schemaTypes: {} }
) => {
  const BaseQueryType = queryType({
    definition(t) {
      t.string('help', {
        resolve() {
          return `Start adding your Nexus schema definitions in ${hammerConfig.api.paths.graphql}`
        },
      })
    },
  })

  const schema = makeSchema({
    types: [BaseQueryType, ...Object.values(schemaTypes)],
    outputs: {
      schema: path.join(hammerConfig.api.paths.generated, 'api-schema.graphql'),
      typegen: path.join(
        hammerConfig.api.paths.generated,
        'generated-types.d.ts'
      ),
    },
  })

  return new ApolloServer({
    schema,
    context,
  })
}
