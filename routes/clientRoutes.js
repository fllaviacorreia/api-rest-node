import { Router } from 'express'
import ClientController from '../controllers/ClientController.js'

const clientRoutes = Router()

clientRoutes.post('/', ClientController.createClient)
clientRoutes.get('/', ClientController.getAllClient)
clientRoutes.get('/:id', ClientController.getClient)
clientRoutes.patch('/', ClientController.updateClient)
clientRoutes.delete('/:id', ClientController.deleteClient)

export default clientRoutes
