import { Document } from "mongoose";

export interface PlannerDocument extends Document {
    _id: string;
    planners: Array<Array<{ date: Date; slots: Slot[] }>>;
  }
  
  export interface Slot {
    slotNumber: number;
    deliveries: Array<Delivery>;
  }
  
  export interface Delivery {
    customerID: string;
    customerName: string;
  }
  
  // Define an interface for the slot object
  export interface SlotUpdate {
    date: Date;
    slotNumber: number;
    customerDelivery: Delivery; // Replace 'any' with the actual type of your customerDelivery
  }