const { Sequelize } = require('sequelize')
const sequelize = require('../db/index')

class Task extends Sequelize.Model {}

const attributes = {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: Sequelize.STRING,
  ischecked: Sequelize.BOOLEAN
}

const options = {
  sequelize,
  timestamps: false,
  modelName: 'task'
}

Task.init(attributes, options)

module.exports = Task
