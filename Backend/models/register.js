import mongoose from "mongoose";

const register = mongoose.Schema(
  {
    userName: { type: String, trim: true },
    email: { type: String, trim: true },
    password: { type: String, trim: true },
  },
  {
    timestamps: true,
  }
);

export const Register = mongoose.model("Register", register);
