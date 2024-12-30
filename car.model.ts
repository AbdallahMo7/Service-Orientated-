/* eslint-disable prettier/prettier */
import { Schema, model, Document } from 'mongoose';

// Define the schema for the 'cars' collection
const carSchema = new Schema(
  {
    type: { type: String, required: true },
    color: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { collection: 'cars' } // Explicitly set the collection name
);

// Define the TypeScript interface for a Car document
export interface Car extends Document {
  type: string;
  color: string;
  price: number;
}

// Export the model
export const CarModel = model<Car>('Car', carSchema);
