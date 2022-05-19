import { Router } from 'express'
import EmployeeController from '../controllers/EmployeeController.js'

const employeeRoutes = Router()

employeeRoutes.post('/', EmployeeController.createEmployee)
employeeRoutes.get('/', EmployeeController.getAllEmployees)
employeeRoutes.get('/:id', EmployeeController.getEmployee)
employeeRoutes.patch('/', EmployeeController.updateEmployee)
employeeRoutes.delete('/:id', EmployeeController.deleteEmployee)

export default employeeRoutes
