import { Router } from 'express'
import labels from './labels'
import tasks from './tasks'

const routes = Router()

routes.use('/labels', labels)
routes.use('/tasks', tasks)

export default routes
