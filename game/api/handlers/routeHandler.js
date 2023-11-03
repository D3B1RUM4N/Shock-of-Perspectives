/**
 * Expose routes publicly
 * @author Loïc MAES
 * @copy All rights reserves © 2023
 */
const Ascii = require('ascii-table')

function registerRoutes (app) {
    const routes = require('@handlers/fileHandler')('./routes', true)
    const table = new Ascii('Routes')

    if (routes.length === 0) {
        table.addRow('No data!')
        return console.log(table.toString())
    }

    routes.forEach(path => {
        const route = require(`@routes/${path}`)
        route.register(app)
        table.addRow(route.method, route.path, '🔷 Loaded')
    })

    table.setHeading('Method', 'Path', 'Status')
    console.log(table.toString())
}

module.exports = registerRoutes
