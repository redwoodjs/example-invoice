# Hammer-API

## What's inside?

### A graphQL serverless function

```js
// api/src/functions/graphql
import { graphQLServerlessFunction } from '@hammerframework/hammer'

const server = graphQLServerlessFunction({
    context:  {
        photon: /* ... */,
        currentUser: /* ... */,
    },
})

export const handler = server.createHandler();
```
