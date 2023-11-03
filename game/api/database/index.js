/**
 * Database setup.
 * @author Loïc MAES
 * @copy All rights reserves © 2023
 */
const { Sequelize } = require('sequelize')

const dialect = process.env.DB_DIALECT || 'sqlite'
let sequelize
switch (dialect) {
    case 'sqlite':
        sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: process.env.DB_STORAGE || 'database.db',
            logging: false
        })
        break
    case 'mysql': case 'mariadb':
        sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER || 'root', process.env.DB_PASSWORD, {
            host: process.env.DB_HOST || 'localhost',
            port: parseInt(process.env.DB_PORT || '3306'),
            dialect,
            logging: false
        })
        break
    default:
        break
}

function initDatabase () {
    if (!sequelize) return console.log('Unable to find the dialect!')

    console.log('Loading database...')
    const modelHandler = require('@handlers/modelHandler')

    console.log('Registering models...')
    modelHandler.registerModels(sequelize)
    console.log('Registering foreign keys...')
    modelHandler.registerForeignKeys()

    sequelize.sync({ force: true }).then(_ => {
        console.log('Database synchronized!')
    }).catch(console.log)
}

module.exports = {
    sequelize,
    initDatabase
}
