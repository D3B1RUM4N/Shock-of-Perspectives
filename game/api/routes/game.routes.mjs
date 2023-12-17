import {HttpMethod, Route} from "#structs/route.mjs";
import {react} from "#controllers/game.controller.mjs";

export default new Route(HttpMethod.POST, '/game/react', [], async (req, res) => {
  await react(res, req.body)
})
