import { Router } from 'express'
import { getLabels } from '../controllers/labels'

const router = Router()

router.use('/', getLabels)

export default router
