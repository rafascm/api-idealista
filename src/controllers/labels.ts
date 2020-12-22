import { Request, Response } from 'express'

const getLabels = (_req: Request, res: Response) => {
  res.send('labels').status(200)
}
export { getLabels }
