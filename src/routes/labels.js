const { Router } = require('express')
const { getLabels } = require('../controllers/labels')

const router = Router()

router.get('/', getLabels)

module.exports = router
