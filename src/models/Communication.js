// File: src/models/Communication.js

const mongoose = require('mongoose');

const communicationSchema = new mongoose.Schema({
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
    type: { type: String, required: true }, // e.g., LinkedIn Post, Email
    date: { type: Date, required: true },
    notes: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Communication', communicationSchema);
