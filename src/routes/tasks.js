const { Router } = require('express')
const { getTasks } = require('../controllers/tasks')

const router = Router()

router.get('/', getTasks)

module.exports = router
