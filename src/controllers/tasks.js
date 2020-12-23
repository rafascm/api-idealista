const Task = require('../models/Task.js')

const getTasks = async (_req, res) => {
  res.send(await Task.findAll()).status(200)
}

const postTask = async (req, res) => {
  const { name } = req.body
  if (!name) return res.sendStatus(422)

  // const Labels = Task.hasMany(Label, { as: 'labels' })
  Task.create({
    name: name,
    labels: []
  }, {
    include: [Task.Label]
  })
  res.sendStatus(201)
}
module.exports = { getTasks, postTask }
