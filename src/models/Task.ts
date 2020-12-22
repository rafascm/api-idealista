import GeneralModel from './GeneralModel'

class Task extends GeneralModel {
  constructor (public name: string) {
    super('tasks')
  }

  post () {
    return this.addRow('name', this.name)
  }
}

export default Task
