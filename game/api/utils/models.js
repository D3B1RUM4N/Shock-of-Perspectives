const { sequelize } = require('@database')

function getModel (name) {
    return sequelize.models[name]
}

module.exports = {
    getModel
}
