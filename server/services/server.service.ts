import { APIService } from './api.service';
import express from 'express'

export function startServer(port: number) {

    const app = express()

    app.listen(port, () => {
        console.log(`Server initiated on port ${port}`)
    })

    setupRoutes(app)
}

function setupRoutes(app: express.Application) {
    app.get('/api/v1/forecast/location/:location', async (req: express.Request, res: express.Response) => {
        try {
            const weather = await APIService.get(req.params.location)
            res.status(200).send(weather)
        } catch (err) {
            res.status(400).send(err)
        }
    })

    app.get('/api/v1/forecast/latlong/:lat/:long', async (req: express.Request, res: express.Response) => {
        try {
            const weather = await APIService.get('', { lat: Number.parseFloat(req.params.lat), long: Number.parseFloat(req.params.long) })
            res.status(200).send(weather)
        }
        catch (err) {
            res.status(400).send(err)
        }
    })
}