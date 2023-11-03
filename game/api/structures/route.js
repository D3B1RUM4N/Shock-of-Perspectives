/**
 * Route structure
 * @author Loïc MAES
 * @copy All rights reserves © 2023
 */
class Method {
    static GET = 'get'
    static POST = 'post'
    static PUT = 'put'
    static DELETE = 'delete'
}

class Route {
    method
    path
    callback
    middlewares

    constructor (method, path, callback, ...middlewares) {
        this.method = method
        this.path = path
        this.callback = callback
        this.middlewares = middlewares
    }

    register (app) {
        switch (this.method) {
            case 'get':
                app.get(this.path, this.middlewares, this.callback)
                break;
            case 'post':
                app.post(this.path, this.middlewares, this.callback)
                break;
            case 'put':
                app.put(this.path, this.middlewares, this.callback)
                break;
            case 'delete':
                app.delete(this.path, this.middlewares, this.callback)
                break;
        }
    }
}

module.exports = {
    Method,
    Route
}
