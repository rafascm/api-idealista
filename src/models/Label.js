const { Sequelize } = require('sequelize')
const sequelize = require('../db/index')
const Task = require('./Task')

class Label extends Sequelize.Model {}

const attributes = {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  color: Sequelize.STRING
}

const options = {
  sequelize,
  timestamps: false,
  modelName: 'label'
}

Label.init(attributes, options)
Label.belongsTo(Task)
module.exports = Label
