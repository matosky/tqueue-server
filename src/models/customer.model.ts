import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  customerId: {
    type: String,
    required: false,
  },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
});

const Customer = mongoose.model("customer", customerSchema);

export default Customer;
