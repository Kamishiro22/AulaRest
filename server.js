import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import configMongoDB from './database/dbconfing.js'
import routerLinuxOS from './routes/linuxos.js'

//Setup environment variables
dotenv.config()

//init Express app
const app = express()


//Config BD
configMongoDB()

//Express middlewares
app.use(express.json())
app.use(cors({
  origin: '*'
}))


//Rotas
app.get('/', (req, res) => {
  res.send('Hello TPSI 11 20')
})


app.use('/linuxos', routerLinuxOS)

//Subimos o sv
app.listen(process.env.PORT || 3000, ()=>{console.log(`Server running`)})
