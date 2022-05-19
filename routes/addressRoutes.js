import { Router } from 'express'
import AddressController from '../controllers/AddressController.js'

const addressRoutes = Router()

addressRoutes.post('/', AddressController.createAddress)
addressRoutes.get('/', AddressController.getAllAddress)
addressRoutes.get('/:id', AddressController.getAddress)
addressRoutes.patch('/', AddressController.updateAddress)
addressRoutes.delete('/:id', AddressController.deleteAddress)

export default addressRoutes
