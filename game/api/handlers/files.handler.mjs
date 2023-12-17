<<<<<<<< HEAD:game/api/handlers/files.handler.mjs
/**
 * Search all js files in a specified directory.
 * @author Loïc MAES
 * @year 2023
 */
import fs from 'fs'

export function isDirectory (path) {
    return fs.lstatSync(path).isDirectory()
}

export default function recover (path, recursive) {
    const files = []

    fs.readdirSync(path).forEach(file => {
        const child = `${path}/${file}`

        if (file.includes('-lock.')) return
        if (recursive && isDirectory(child)) recover(`${child}/`, recursive).forEach(f => files.push(`${file}/${f}`))
        else if (file.endsWith('.mjs')) files.push(file)
    })

    return files
}
========
/**
 * Search all js files in a specified directory.
 * @author Loïc MAES
 * @copy All rights reserves © 2023
 */
const fs = require('fs')

function isDirectory (path) {
    return fs.lstatSync(path).isDirectory()
}

function recover (path, recursive) {
    const files = []

    fs.readdirSync(path).forEach(file => {
        const child = `${path}/${file}`
        if (recursive && isDirectory(child)) recover(`${child}/`, recursive).forEach(f => files.push(`${file}/${f}`))
        else if (file.endsWith('.js')) files.push(file)
    })

    return files
}

module.exports = recover
>>>>>>>> origin/main:game/api/handlers/fileHandler.js
