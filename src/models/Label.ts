import GeneralModel from './GeneralModel'

class Label extends GeneralModel {
  constructor (public color: string) {
    super('labels')
  }

  post () {
    return this.addRow('color', this.color)
  }
}

export default Label
