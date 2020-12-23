const { Sequelize } = require('sequelize')
const sequelize = require('../db/index')
const Label = require('./Label')

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
Task.hasMany(Label)

module.exports = Task
