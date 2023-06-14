import { model, Schema} from "mongoose"  //schema molde del dato, lo que le da forma

let collection = "movies"
let schema = new Schema({
    title: {type: String, required: true,unique:true}, 
    capacity: {type: Number, required: true},
    price: {type: Number, required: true}
})

let Movie = model(collection,schema) //model metodo que crea un modelo dentro de la collection

export default Movie 