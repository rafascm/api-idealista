const { Router } = require('express')
const labels = require('./labels')
const tasks = require('./tasks')

const routes = Router()
routes.use('/labels', labels)
routes.use('/tasks', tasks)

module.exports = routes
