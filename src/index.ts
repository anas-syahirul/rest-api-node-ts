import express, { Application, Request, Response } from 'express'

const app: Application = express()
const port: number = 4000

app.use('/health', (req: Request, res: Response) => {
  res.status(200).send({ status: 200, data: 'Hellooo' })
})

app.listen(port, () => console.log(`Server is listening on port ${port}`))
