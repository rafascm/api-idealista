const { Sequelize } = require('sequelize')
const sequelize = require('../db/index')

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

module.exports = Label
