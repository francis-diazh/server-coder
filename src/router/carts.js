import { Router } from "express";
import Cart from "../models/Cart.js";
import User from "../models/User.js"

const carts_router = Router()

//create
carts_router.post('/',async(req,res,next)=>{
    try {
        let one= await Cart.create(req.body)
        return res.status(201).json({
            success: true,
            message: 'id= '+one._id
        })
    } catch (error) {
        next(error)
    }
})

//read all
carts_router.get('/',async(req,res,next)=> {
    try {
        let all = await Cart.find().select('user_id movie_id -_id')
        .populate('user_id','name -_id')
        .populate('movie_id','title -_id')
        return res.status(200).json({
            success:true,
            response:all
        })
    } catch (error) {
        next(error)
    }
})

//read carts from one user
carts_router.get('/users/:uid',async(req,res,next)=> {
    try {
        const uid = req.params.uid
        let all = await Cart.find({user_id:uid}).select('user_id movie_id -_id')
        // .populate('user_id','name -_id') UTILIZANDO PRE NO ES NECESARIO POPULAR AQUI
        // .populate('movie_id','title -_id')
        return res.status(200).json({
            success:true,
            response:all
        })
    } catch (error) {
        next(error)
    }
})

//update cart
carts_router.put('/:cid', async(req,res,next)=>{
    try {
        const cid = req.params.cid
        const data = req.body
        const one = await Cart.findByIdAndUpdate(
            cid,
            data, //objeto con las modificaciones a realizar
            {new:true} //por default new esta false y no devuelve el objeto modificado
        ).populate('user_id','name -_id')
        return res.status(200).json({
            success:true,
            response:one
        })

    } catch (error) {
        next(error)
    }
})

//update cart from one user
carts_router.put('/users/:uid',async(req,res,next)=>{
    try {
        const uid = req.params.uid
        const all = await Cart.updateMany({user_id:uid},{active:false})
        return res.status(200).json({
            success: true,
            response: all
        })
    } catch (error) {
        next(error)
    }
})

//destroy

carts_router.delete('/:cid',async(req,res,next)=>{
    try {
        const cid = req.params.cid
        let one = await Cart.deleteOne({_id:cid})
        return res.status(200).json({
            success: true,
            response:one
        })
    } catch (error) {
        next(error)
    }
})

export default carts_router