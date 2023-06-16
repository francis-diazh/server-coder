import { Router } from "express";
import movies_router from "./movies.js";
import carts_router from "./carts.js";

const router = Router()

router.use('/movies',movies_router) //obligo a mi enrutador a que use todas las rutas que define en el movies_router
router.use('/carts',carts_router)

export default router