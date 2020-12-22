import { Router } from 'express'
import { getTasks } from '../controllers/tasks'

const router = Router()

router.get('/', getTasks)

export default router
