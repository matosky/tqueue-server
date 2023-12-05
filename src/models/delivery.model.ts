// delivery.model.js
import mongoose from 'mongoose';

export const deliverySchema = new mongoose.Schema({
  customerID: { type: String, required: false },
  customerName: { type: String, required: false },
  pickUpLocation: { type: String, required: false },
  dropOffLocation: { type: String, required: false },
});

const Delivery = mongoose.model('Delivery', deliverySchema);

export default Delivery;
