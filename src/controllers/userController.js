import Company from '../models/Company.js';

export const getDashboard = async (req, res) => {
  try {
    const companies = await Company.find();
    const overdueCount = companies.filter(c => new Date(c.nextScheduledCommunication) < new Date()).length;
    const dueTodayCount = companies.filter(c => new Date(c.nextScheduledCommunication).toDateString() === new Date().toDateString()).length;

    res.status(200).json({
      companies,
      overdueCount,
      dueTodayCount,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching dashboard data', error: error.message });
  }
};

export const logCommunication = async (req, res) => {
  try {
    const { companyId, type, date, notes } = req.body;

    const company = await Company.findById(companyId);
    if (!company) return res.status(404).json({ message: 'Company not found' });

    company.lastCommunications.push({ type, date, notes });

    if (company.communicationPeriodicity) {
      const periodicityDays = parseInt(company.communicationPeriodicity, 10);
      if (!isNaN(periodicityDays)) {
        const lastDate = new Date(date);
        lastDate.setDate(lastDate.getDate() + periodicityDays);
        company.nextScheduledCommunication = lastDate;
      }
    }

    await company.save();
    res.status(200).json({ message: 'Communication logged successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error logging communication', error: error.message });
  }
};
