import  express  from "express";
import dotenv from 'dotenv'
import mustache from 'mustache-express'
import path from 'path'

import maiRoutes from './routes/index'



dotenv.config()

const server = express();

server.set('view engine', 'mustache')
server.set('views',path.join(__dirname,'views'))
server.engine('mustache', mustache())

server.use(express.static(path.join(__dirname, '../public')))


//Rotas

server.use(maiRoutes)

server.use((req,res) => {
	res.send('paginaNão encontrada!')
})

server.listen(process.env.PORT)