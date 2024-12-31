const Company = require('../models/Company');
const Communication = require('../models/Communication');

exports.getOverdueCommunications = async () => {
  const now = new Date();
  return Communication.find({ date: { $lt: now }, completed: false });
};

exports.getTodayCommunications = async () => {
  const today = new Date();
  const start = new Date(today.setHours(0, 0, 0, 0));
  const end = new Date(today.setHours(23, 59, 59, 999));

  return Communication.find({ date: { $gte: start, $lte: end }, completed: false });
};
