import {getModel} from "#db/index.mjs";

const reactions = [
  'Se battre',
  'Réponse posée',
  'Réponse aggressive',
  'Prendre la fuite',
]

export default async function seed () {
  let count = 0

  console.log('')
  for (let r of reactions) {
    console.log(`[Seeder] Creating reaction (${++count}/${reactions.length})...`)
    try {
      await getModel('reaction').create({
        label: r,
        icon: '-'
      })
    } catch (e) { console.log(e) }
  }
}
