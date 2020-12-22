import { Request, Response } from 'express'

const getTasks = (_req: Request, res: Response) => {
  res.send('tasks').status(200)
}

export { getTasks }
