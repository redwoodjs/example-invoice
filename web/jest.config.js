const { getConfig } = require('@redwoodjs/core')

const config = getConfig({ type: 'jest', target: 'browser' })

module.exports = config
