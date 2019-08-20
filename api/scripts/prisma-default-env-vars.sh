#!/bin/sh

# At the moment it's difficult to provide easily overwriteable defaults to
# Prisma in our current directory configuration:
# 
# 1. Prisma reads .env vars where the command is run
# 2. Prisma does not allow the datamodel's path to be configured
# 3. As a result our prisma2 command is run in `./api/` and not in `./` 
#    where our command resides
# 4. Prisma's `enabled()` flag doesn't work.

if [[ -z "${PRISMA_PROVIDER}" ]]; then
  PRISMA_PROVIDER="sqlite"
fi

if [[ -z "${PRISMA_URL}" ]]; then
  PRISMA_URL="file:dev.sqlite"
fi

echo "Prisma Provider: ${PRISMA_PROVIDER}"
echo "Prisma URL     : ${PRISMA_URL}"

export PRISMA_URL=$PRISMA_URL; export PRISMA_PROVIDER=$PRISMA_PROVIDER; yarn prisma2 $1
