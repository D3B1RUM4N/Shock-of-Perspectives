import {getModel} from "#db/index.mjs";

const reactions = [
  {
    label: 'TitleButtonFight',
    icon: 'ButtonFight'
  },
  {
    label: 'TitleButtonTalk',
    icon: 'ButtonTalk'
  },
  {
    label: 'TitleButtonInsult',
    icon: 'ButtonInsult'
  }
]

export default async function seed () {
  let count = 0

  console.log('')
  for (let r of reactions) {
    console.log(`[Seeder] Creating reaction (${++count}/${reactions.length})...`)
    try {
      await getModel('reaction').create({
        label: r.label,
        icon: r.icon
      })
    } catch (e) { console.log(e) }
  }
}
