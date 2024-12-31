import express from 'express';
import { getDashboard, logCommunication } from '../controllers/userController.js';

const router = express.Router();

router.get('/dashboard', getDashboard); // Dashboard data
router.post('/communication', logCommunication); // Log communication

export default router;
