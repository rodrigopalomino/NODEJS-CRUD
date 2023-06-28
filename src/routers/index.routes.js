import { Router } from "express"
import { create, getCreate, getEmpleados,getUpdateArticulo,deleteArticulo, updateArticulo } from '../controllers/index.controller.js'

const router = Router()
//rutas


router.get('/', getEmpleados)

router.get('/create', getCreate)
router.post('/create', create)

router.get('/delete/:id', deleteArticulo)

router.get('/update/:id', getUpdateArticulo)
router.post('/update/:id', updateArticulo)



export default router