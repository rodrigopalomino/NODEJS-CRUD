import express from "express";
//para crear una ruta absoluta 
import {dirname, join} from 'path'
//
import { fileURLToPath } from "url";
//Importar modulo de routes
import indexRoutes from './routers/index.routes.js'
import bodyParser from "body-parser";



const app = express()


app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())


//ruta absoluta dinamica del proyecto
const __dirname = dirname(fileURLToPath(import.meta.url))



//para los html
app.set('view engine', 'ejs')

//pasar la carpeta views a express
app.set('views', join(__dirname,'views'))

app.use(express.static(join(__dirname,'public')))

//usuar los routes
app.use(indexRoutes)
//usar la base de datos

export default app
