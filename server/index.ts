import { config } from 'dotenv'
import { startServer } from './services/server.service'

const ENV = config()

const PORT = (process.env.port ? Number.parseInt(process.env.port) : 8080) || 8080;

startServer(PORT)