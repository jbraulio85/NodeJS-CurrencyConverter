import { Router } from "express";
import { convertData } from "./convertidor.controller.js";

const router = Router()

router.post('/', convertData)

export default router