const Model = require('@structs/model')
const { DataTypes } = require('sequelize')

module.exports = new Model('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})
