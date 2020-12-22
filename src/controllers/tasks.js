const Task = require('../models/Task.js')

const getTasks = async (_req, res) => {
  res.send(await Task.findAll()).status(200)
}

module.exports = { getTasks }
