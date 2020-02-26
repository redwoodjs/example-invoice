# Failed calculateDatabaseSteps at 2020-02-26T20:54:57.174Z
## RPC One-Liner
```json
{"id":2,"jsonrpc":"2.0","method":"calculateDatabaseSteps","params":{"projectInfo":"","assumeToBeApplied":[],"stepsToApply":[{"stepType":"CreateModel","model":"User"},{"stepType":"CreateField","model":"User","field":"id","type":"Int","arity":"required"},{"stepType":"CreateDirective","model":"User","field":"id","directive":"id"},{"stepType":"CreateField","model":"User","field":"accessTokens","type":"AccessToken","arity":"list"},{"stepType":"CreateField","model":"User","field":"invoices","type":"Invoice","arity":"list"},{"stepType":"CreateModel","model":"AccessToken"},{"stepType":"CreateField","model":"AccessToken","field":"id","type":"Int","arity":"required"},{"stepType":"CreateDirective","model":"AccessToken","field":"id","directive":"id"},{"stepType":"CreateField","model":"AccessToken","field":"user","type":"User","arity":"optional"},{"stepType":"CreateField","model":"AccessToken","field":"sub","type":"String","arity":"required"},{"stepType":"CreateDirective","model":"AccessToken","field":"sub","directive":"unique"},{"stepType":"CreateModel","model":"Invoice"},{"stepType":"CreateField","model":"Invoice","field":"id","type":"String","arity":"required"},{"stepType":"CreateDirective","model":"Invoice","field":"id","directive":"default"},{"stepType":"CreateDirectiveArgument","model":"Invoice","field":"id","directive":"default","argument":"","value":"cuid()"},{"stepType":"CreateDirective","model":"Invoice","field":"id","directive":"id"},{"stepType":"CreateField","model":"Invoice","field":"user","type":"User","arity":"required"},{"stepType":"CreateField","model":"Invoice","field":"invoiceNumber","type":"String","arity":"required"},{"stepType":"CreateField","model":"Invoice","field":"date","type":"String","arity":"required"},{"stepType":"CreateField","model":"Invoice","field":"body","type":"String","arity":"required"},{"stepType":"CreateField","model":"Invoice","field":"createdAt","type":"DateTime","arity":"required"},{"stepType":"CreateDirective","model":"Invoice","field":"createdAt","directive":"default"},{"stepType":"CreateDirectiveArgument","model":"Invoice","field":"createdAt","directive":"default","argument":"","value":"now()"},{"stepType":"CreateField","model":"Invoice","field":"updatedAt","type":"DateTime","arity":"required"},{"stepType":"CreateDirective","model":"Invoice","field":"updatedAt","directive":"updatedAt"}],"sourceConfig":"datasource sqlite {\n  url      = \"file:./dev.sqlite\"\n  provider = \"sqlite\"\n}\n\ngenerator photonjs {\n  provider = \"prisma-client-js\"\n}\n\nmodel Invoice {\n  id            String   @default(cuid()) @id\n  invoiceNumber String\n  date          String\n  body          String\n  createdAt     DateTime @default(now())\n  updatedAt     DateTime @updatedAt\n}"}}
```

## RPC Input Readable
```json
{
  "id": 2,
  "jsonrpc": "2.0",
  "method": "calculateDatabaseSteps",
  "params": {
    "projectInfo": "",
    "assumeToBeApplied": [],
    "stepsToApply": [
      {
        "stepType": "CreateModel",
        "model": "User"
      },
      {
        "stepType": "CreateField",
        "model": "User",
        "field": "id",
        "type": "Int",
        "arity": "required"
      },
      {
        "stepType": "CreateDirective",
        "model": "User",
        "field": "id",
        "directive": "id"
      },
      {
        "stepType": "CreateField",
        "model": "User",
        "field": "accessTokens",
        "type": "AccessToken",
        "arity": "list"
      },
      {
        "stepType": "CreateField",
        "model": "User",
        "field": "invoices",
        "type": "Invoice",
        "arity": "list"
      },
      {
        "stepType": "CreateModel",
        "model": "AccessToken"
      },
      {
        "stepType": "CreateField",
        "model": "AccessToken",
        "field": "id",
        "type": "Int",
        "arity": "required"
      },
      {
        "stepType": "CreateDirective",
        "model": "AccessToken",
        "field": "id",
        "directive": "id"
      },
      {
        "stepType": "CreateField",
        "model": "AccessToken",
        "field": "user",
        "type": "User",
        "arity": "optional"
      },
      {
        "stepType": "CreateField",
        "model": "AccessToken",
        "field": "sub",
        "type": "String",
        "arity": "required"
      },
      {
        "stepType": "CreateDirective",
        "model": "AccessToken",
        "field": "sub",
        "directive": "unique"
      },
      {
        "stepType": "CreateModel",
        "model": "Invoice"
      },
      {
        "stepType": "CreateField",
        "model": "Invoice",
        "field": "id",
        "type": "String",
        "arity": "required"
      },
      {
        "stepType": "CreateDirective",
        "model": "Invoice",
        "field": "id",
        "directive": "default"
      },
      {
        "stepType": "CreateDirectiveArgument",
        "model": "Invoice",
        "field": "id",
        "directive": "default",
        "argument": "",
        "value": "cuid()"
      },
      {
        "stepType": "CreateDirective",
        "model": "Invoice",
        "field": "id",
        "directive": "id"
      },
      {
        "stepType": "CreateField",
        "model": "Invoice",
        "field": "user",
        "type": "User",
        "arity": "required"
      },
      {
        "stepType": "CreateField",
        "model": "Invoice",
        "field": "invoiceNumber",
        "type": "String",
        "arity": "required"
      },
      {
        "stepType": "CreateField",
        "model": "Invoice",
        "field": "date",
        "type": "String",
        "arity": "required"
      },
      {
        "stepType": "CreateField",
        "model": "Invoice",
        "field": "body",
        "type": "String",
        "arity": "required"
      },
      {
        "stepType": "CreateField",
        "model": "Invoice",
        "field": "createdAt",
        "type": "DateTime",
        "arity": "required"
      },
      {
        "stepType": "CreateDirective",
        "model": "Invoice",
        "field": "createdAt",
        "directive": "default"
      },
      {
        "stepType": "CreateDirectiveArgument",
        "model": "Invoice",
        "field": "createdAt",
        "directive": "default",
        "argument": "",
        "value": "now()"
      },
      {
        "stepType": "CreateField",
        "model": "Invoice",
        "field": "updatedAt",
        "type": "DateTime",
        "arity": "required"
      },
      {
        "stepType": "CreateDirective",
        "model": "Invoice",
        "field": "updatedAt",
        "directive": "updatedAt"
      }
    ],
    "sourceConfig": "datasource sqlite {\n  url      = \"file:./dev.sqlite\"\n  provider = \"sqlite\"\n}\n\ngenerator photonjs {\n  provider = \"prisma-client-js\"\n}\n\nmodel Invoice {\n  id            String   @default(cuid()) @id\n  invoiceNumber String\n  date          String\n  body          String\n  createdAt     DateTime @default(now())\n  updatedAt     DateTime @updatedAt\n}"
  }
}
```

## Stack Trace
```bash
Feb 26 21:54:57.155  INFO migration_engine: Starting migration engine RPC server git_hash="4f8eb5bd9628db47402dc855ad0b6c7cfc915d46"
Feb 26 21:54:57.160  INFO quaint::single: Starting a sqlite pool with 1 connections.
Feb 26 21:54:57.169  INFO ListMigrations: migration_core::commands::list_migrations: Returning 0 migrations (0 pending).
```
