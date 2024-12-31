import mongoose from 'mongoose';

const MethodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  sequence: { type: Number, required: true },
  mandatory: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.model('Method', MethodSchema);
