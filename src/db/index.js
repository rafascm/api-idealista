require('dotenv').config()

const { Sequelize } = require('sequelize')

const connectionString = process.env.DATABASE_URL
const db = new Sequelize(connectionString,
  {
    dialect: 'postgres',
    dialectOptions: { ssl: { rejectUnauthorized: false } }
  }
)

module.exports = db
