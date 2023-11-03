/**
 * Model handler
 * @author Loïc MAES
 * @copy All rights reserves © 2023
 */
const Ascii = require('ascii-table')

function registerModels (sequelize) {
    const models = require('@handlers/fileHandler')('./database/models', true)
    const table = new Ascii('Database Models')

    if (models.length === 0) {
        table.addRow('No data!')
        return console.log(table.toString())
    }

    models.forEach(file => {
        const model = require(`@models/${file}`)
        model.register(sequelize)
        table.addRow(model.name, '🔷 Loaded')
    })

    table.setHeading('Name', 'State')
    console.log(table.toString())
}

function registerForeignKeys () {
    const keys = require('@handlers/fileHandler')('./database/foreignKeys', true)
    if (keys.length === 0) return console.log('No foreign keys to register.')

    keys.forEach(file => require(`@foreignKeys/${file}`).register())
    console.log(`${keys.length} foreign keys have been registered!`)
}

module.exports = {
    registerModels,
    registerForeignKeys
}
