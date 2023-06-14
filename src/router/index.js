import { Router } from "express";
import movies_router from "./movies.js";

let router = Router()

router.use('/movies',movies_router) //obligo a mi enrutador a que use todas las rutas que define en el movies_router

export default router