import {model, Schema } from "mongoose"

let collection = 'users'
let schema = new Schema ({
    name: {type: String, required:true},
    age: {type: Number, index:true}// ejemplo estadisticos que dependan de la edad
})

let User = model(collection,schema)

export default User