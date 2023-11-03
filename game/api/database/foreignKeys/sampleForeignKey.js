const { getModel } = require('@utils/models')
const { ForeignKey, Method } = require('@structs/foreignKey')

module.exports = new ForeignKey(Method.HAS_MANY, getModel('user'), getModel('class'))
