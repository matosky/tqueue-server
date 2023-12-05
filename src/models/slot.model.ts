// slot.model.js
import mongoose from 'mongoose';
import Delivery from './delivery.model';

const slotSchema = new mongoose.Schema({
  slotNumber: { type: Number, required: false },
  deliveries: { type: [Delivery.schema], required: false }, 
});

const Slot = mongoose.model('Slot', slotSchema);

export default Slot;
