import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  image: string;
  instagram: string;
  facebook: string;
  linkedin: string;
  bio: string;
  password: string; // Added password field for JWT auth
}

const schema: Schema<IUser> = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    }, // Added password field for JWT auth
    image: {
      type: String,
      required: false, // Made optional for registration
      default: "", // Default empty string
    },
    instagram: String,
    facebook: String,
    linkedin: String,
    bio: String,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model<IUser>("User", schema);

export default User;
