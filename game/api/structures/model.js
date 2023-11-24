/**
 * Model structure.
 * @author Loïc MAES
 * @copy All rights reserves © 2023
 */
class Model {
    name
    attributes
    options

    constructor (name, attributes, options) {
        this.name = name
        this.attributes = attributes
        this.options = options
    }

    register (sequelize) {
        sequelize.define(this.name, this.attributes, this.options)
    }
}

module.exports = Model
