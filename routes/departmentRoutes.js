import { Router } from 'express'
import DepartmentController from '../controllers/DepartmentController.js'

const departmentRoutes = Router()

departmentRoutes.post('/', DepartmentController.createDepartment)
departmentRoutes.get('/', DepartmentController.getAllDepartments)
departmentRoutes.get('/:id', DepartmentController.getDepartment)
departmentRoutes.patch('/', DepartmentController.updateDepartment)
departmentRoutes.delete('/:id', DepartmentController.deleteDepartment)

export default departmentRoutes
