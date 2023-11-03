const Model = require('@structs/model')
const {DataTypes} = require("sequelize");

module.exports = new Model('class', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    number: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
}, {
    timestamps: false
})
