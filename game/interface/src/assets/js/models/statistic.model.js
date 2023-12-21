export class Statistic {
  id
  label
  defaultScore

  constructor (payload) {
    const { id, label, defaultScore } = payload

    this.id           = id
    this.label        = label
    this.defaultScore = defaultScore
  }
}
