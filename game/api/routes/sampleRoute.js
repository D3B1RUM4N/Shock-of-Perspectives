const {Route, Method} = require("../structures/route");

module.exports = new Route(Method.GET, '/', (req, res) => {
    res.json('👋 Hello buddy!')
})
