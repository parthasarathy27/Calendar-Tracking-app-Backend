import express from 'express';
import {
  addCompany,
  editCompany,
  deleteCompany,
} from '../controllers/adminController.js';
import Company from '../models/Company.js';

const router = express.Router();

router.post('/company', addCompany);
router.put('/company/:id', editCompany);
router.delete('/company/:id', deleteCompany);
router.get('/company', async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).json(companies);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching companies', error });
  }
});

export default router;
