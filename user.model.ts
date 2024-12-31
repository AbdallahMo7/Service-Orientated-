/* eslint-disable prettier/prettier */
import { Schema, model, Document } from 'mongoose';

// Define the schema for the 'users' collection
const userSchema = new Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
  },
  { collection: 'users' } // Explicitly set the collection name
);

// Define the TypeScript interface for a document in the 'users' collection
export interface User extends Document {
  firstname: string;
  lastname: string;
}

// Create and export the Mongoose model
export const UserModel = model<User>('User', userSchema);
