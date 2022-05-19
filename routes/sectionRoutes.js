import { Router } from 'express'
import SectionController from '../controllers/SectionController.js'

const sectionRoutes = Router()

sectionRoutes.post('/', SectionController.createSection)
sectionRoutes.get('/', SectionController.getAllSections)
sectionRoutes.get('/:id', SectionController.getSection)
sectionRoutes.patch('/', SectionController.updateSection)
sectionRoutes.delete('/:id', SectionController.deleteSection)

export default sectionRoutes
