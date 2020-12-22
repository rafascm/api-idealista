import { Router } from 'express'
import { getLabels } from '../controllers/labels'

const router = Router()

router.get('/', getLabels)

export default router
