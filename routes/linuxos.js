import express from 'express'
import { createLinuxOS, getLinuxOSbyId, getAllLinuxOS, updateLinuxOS, deleteLinuxOS } from '../controllers/linuxos.js'


const router = express.Router()


router.get('/', getAllLinuxOS)
router.get('/:id', getLinuxOSbyId)
router.post('/', createLinuxOS)
router.put('/:id', updateLinuxOS)
router.delete('/:id', deleteLinuxOS)



export default router