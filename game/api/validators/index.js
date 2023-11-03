/**
 * Validator utils
 * @author Loïc MAES
 * @copy All rights reserves © 2023
 */
function validate (validator, object, res) {
    const { value, error } = validator.validate(object)

    if (error) {
        res.status(400).json(error)
        return null
    }

    return value
}

module.exports = validate
