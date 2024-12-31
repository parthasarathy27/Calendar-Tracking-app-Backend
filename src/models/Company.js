import mongoose from 'mongoose';

const communicationSchema = new mongoose.Schema({
  type: { type: String, required: true },
  date: { type: Date, required: true },
  notes: { type: String, required: true },
});

const CompanySchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  linkedinProfile: { type: String },
  emails: [{ type: String }], // Array of strings
  phoneNumbers: [{ type: String }], // Array of strings
  comments: { type: String },
  communicationPeriodicity: { type: String },
  lastCommunications: [communicationSchema], // Array of communications
  nextScheduledCommunication: { type: Date }, // For scheduling logic
});

const Company = mongoose.model('Company', CompanySchema);

export default Company;
