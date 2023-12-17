import {getModel} from "#db/index.mjs";
import {HttpStatus} from "#structs/route.mjs";
import {UniqueConstraintError, ValidationError} from "sequelize";

const modelName = 'altercation'

export async function createAltercation (res, payload) {
    if (!payload) return res.status(HttpStatus.BAD_REQUEST).json(`No label provided!`)
    
    try {
        res.status(HttpStatus.OK).json(await getModel(modelName).create({
            label: payload
        }))
    } catch (e) {
        if (e instanceof UniqueConstraintError) return res.status(HttpStatus.CONFLICT).json(e)
        if (e instanceof ValidationError) return res.status(HttpStatus.BAD_REQUEST).json(e)
        res.status(HttpStatus.INTERNAL_ERROR).json(e)
    }
}

export async function getAltercation (res, payload) {
    try {
        const altercation = getModel(modelName).findByPk(payload)
        if (!altercation) return res.status(HttpStatus.NOT_FOUND).json()
        res.json(altercation)
    } catch (e) {
        res.status(HttpStatus.INTERNAL_ERROR).json(e)
    }
}

export async function getRandomAltercation (res) {
    try {
        const model = getModel(modelName)
        const list = await model.findAll({
            attributes: {
                include: [ 'id' ]
            }
        })
        if (list.length === 0) return res.status(HttpStatus.NO_CONTENT).json()

        const mapped = list.map(e => e.id)
        const element = await model.findByPk(mapped[Math.floor(Math.random() * mapped.length)])
        if (!element) return res.status(HttpStatus.NOT_FOUND).json()

        res.json(element)
    } catch (e) {
        res.status(HttpStatus.INTERNAL_ERROR).json(e)
    }
}

export async function deleteAltercation (res, payload) {
    try {
        const model = getModel(modelName)
        const old = await model.findByPk(payload)
        if (!old) return res.status(HttpStatus.NOT_FOUND).json()
        await model.destroy({ where: { id: payload } })
        res.json(old)
    } catch (e) {
        res.status(HttpStatus.INTERNAL_ERROR).json(e)
    }
}
