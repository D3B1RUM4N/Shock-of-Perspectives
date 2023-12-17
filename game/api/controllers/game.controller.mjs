import {getModel} from "#db/index.mjs";
import {HttpStatus} from "#structs/route.mjs";
import {UniqueConstraintError, ValidationError} from "sequelize";

export async function react (res, payload) {
  const { session, altercation, reaction } = payload

  try {
    if (!await getModel('session').findByPk(session)) return res.status(HttpStatus.NOT_FOUND).json('No session found!')
    if (!await getModel('altercation').findByPk(altercation)) return res.status(HttpStatus.NOT_FOUND).json('No altercation found!')
    if (!await getModel('reaction').findByPk(reaction)) return res.status(HttpStatus.NOT_FOUND).json('No reaction found!')
    const affects = await getModel('affect').findAll({ where: { reactionId: reaction } })
    for (let a of affects) {
      const stat = await getModel('sessionStat').findOne({ where: { sessionCode: session, statisticId: a.statisticId } })
      let score = stat.score + a.amount
      await getModel('sessionStat').update({
        score
      }, {
        where: {
          sessionCode: session,
          statisticId: a.statisticId
        }
      })
    }

    res.status(HttpStatus.CREATED).json(await getModel('step').create({
      sessionCode: session,
      altercationId: altercation,
      reactionId: reaction
    }))
  } catch (e) {
    if (e instanceof UniqueConstraintError) return res.status(HttpStatus.CONFLICT).json(e)
    if (e instanceof ValidationError) return res.status(HttpStatus.BAD_REQUEST).json(e)
    res.status(HttpStatus.INTERNAL_ERROR).json(e)
  }
}
