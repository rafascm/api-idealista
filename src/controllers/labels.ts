import { Request, Response } from 'express'
import Label from '../models/Label'

const getLabels = (_req: Request, res: Response) => {
  res.send(Label.findAll()).status(200)
}
export { getLabels }
