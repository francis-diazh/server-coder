import express from "express"
import 'dotenv/config.js'  //configura las variables de entorno
import router from "./router/index.js"
import error_handler from "./middlewares/error.js"
import not_found_handler from "./middlewares/notfound.js"

const server = express()

//middlewares
server.use('/public',express.static('public'))   //con este metodo public es una carpeta estatica donde todos pueden acceder
server.use(express.json()) // con este metodo podemos leer transformar manejar datos tipo JSON
server.use(express.urlencoded({extended:true})) //metodo para leer consultas (params query)

//endpoint
server.use('/api',router)
server.use(error_handler) //errores que suceden en los endpoints
server.use(not_found_handler) //errores de endpoint que no existen

export default server