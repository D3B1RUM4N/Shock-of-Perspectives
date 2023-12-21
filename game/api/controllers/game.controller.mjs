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

    const step = await getModel('step').create({
      sessionCode: session,
      altercationId: altercation,
      reactionId: reaction
    })
    if (await getModel('step').count({ where: { sessionCode: session } }) === (process.env.NODE_ENV === 'development' ? 2 : 7)) return res.status(300).json()
    res.status(HttpStatus.CREATED).json(step)
  } catch (e) {
    if (e instanceof UniqueConstraintError) return res.status(HttpStatus.CONFLICT).json(e)
    if (e instanceof ValidationError) return res.status(HttpStatus.BAD_REQUEST).json(e)
    res.status(HttpStatus.INTERNAL_ERROR).json(e)
  }
}

export async function getResume (res, session) {
  try {
    if (!await getModel('session').findByPk(session)) return res.status(HttpStatus.NOT_FOUND).json('No session found!')

    const steps = await getModel('step').findAll({ where: { sessionCode: session } })
    if (steps.length === 0) return res.status(HttpStatus.NO_CONTENT).json()
    res.json(steps)
  } catch (e) {
    console.log(e)
    res.status(HttpStatus.INTERNAL_ERROR).json(e)
  }
}
