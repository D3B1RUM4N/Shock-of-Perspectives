/**
 * Foreign key structure.
 * @author Loïc MAES
 * @copy All rights reserves © 2023
 */
class Method {
    static HAS_ONE = 'has_one'
    static HAS_MANY = 'has_many'
    static BELONGS_TO = 'belongs_to'
    static BELONGS_TO_MANY = 'belongs_to_many'
}

class ForeignKey {
    method
    source
    target
    options

    constructor (method, source, target, options) {
        this.method = method
        this.source = source
        this.target = target
        this.options = options
    }

    register () {
        switch (this.method) {
            case 'has_one':
                this.source.hasOne(this.target, this.options)
                break
            case 'has_many':
                this.source.hasMany(this.target, this.options)
                break
            case 'belongs_to':
                this.source.belongsTo(this.target, this.options)
                break
            case 'belongs_to_many':
                this.source.belongsToMany(this.target, this.options)
                break
            default:
                console.log('Invalid method!')
                break
        }
    }
}

module.exports = {
    ForeignKey,
    Method
}
