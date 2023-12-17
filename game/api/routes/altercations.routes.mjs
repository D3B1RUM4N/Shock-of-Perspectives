import {HttpMethod, Route} from "#structs/route.mjs";
import {createAltercation, getRandomAltercation} from "#controllers/altercations.controller.mjs";

export default [
    // Create an altercation
    new Route(HttpMethod.POST, '/altercations', [], async (req, res) => {
        await createAltercation(res, req.body.label)
    }),
    // Get a random altercation
    new Route(HttpMethod.GET, '/altercations', [], async (req, res) => {
        await getRandomAltercation(res, undefined)
    })
]
