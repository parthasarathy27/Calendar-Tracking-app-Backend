import Company from '../models/Company.js';
import Method from '../models/Method.js';

// Add Company
export const addCompany = async (req, res) => {
  try {
    const newCompany = new Company(req.body);
    await newCompany.save();
    res.status(201).json(newCompany);
  } catch (error) {
    res.status(500).json({ message: 'Error adding company', error });
  }
};

// Edit Company
export const editCompany = async (req, res) => {
  try {
    const updatedCompany = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCompany) return res.status(404).json({ message: 'Company not found' });
    res.status(200).json(updatedCompany);
  } catch (error) {
    res.status(500).json({ message: 'Error editing company', error });
  }
};

// Delete Company
export const deleteCompany = async (req, res) => {
  try {
    const company = await Company.findByIdAndDelete(req.params.id);
    if (!company) return res.status(404).json({ message: 'Company not found' });
    res.status(200).json({ message: 'Company deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting company', error });
  }
};

// Add Method
export const addMethod = async (req, res) => {
  try {
    const newMethod = new Method(req.body);
    await newMethod.save();
    res.status(201).json(newMethod);
  } catch (error) {
    res.status(500).json({ message: 'Error adding communication method', error });
  }
};
