const Label = require('../models/Label.js')

const getLabels = async (_req, res) => {
  res.send(await Label.findAll()).status(200)
}

module.exports = { getLabels }
