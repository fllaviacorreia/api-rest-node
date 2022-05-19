import { Router } from 'express'
import ProductController from '../controllers/ProductController.js'

const productRoutes = Router()

productRoutes.post('/', ProductController.createProduct)
productRoutes.get('/', ProductController.getAllProducts)
productRoutes.get('/:id', ProductController.getProduct)
productRoutes.patch('/', ProductController.updateProduct)
productRoutes.delete('/:id', ProductController.deleteProduct)

export default productRoutes
