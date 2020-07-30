const { getConfig } = require('@redwoodjs/core')

const config = getConfig({ type: 'jest', target: 'node' })

module.exports = config
