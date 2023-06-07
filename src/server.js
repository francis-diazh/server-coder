import server from "./app.js"
import { connect } from "mongoose"

const port = process.env.PORT || 8080  //para acceder a una variable de entorno
const ready = () => {
    console.log("server ready on port "+port)
    connect(process.env.LINK_MONGO) //depende del link y devuelve un promise
        .then(()=>console.log("connected to database"))
        .catch(err=>console.log(err))
}

server.listen(port,ready)