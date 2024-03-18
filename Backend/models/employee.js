import mongoose from "mongoose";

const employee = mongoose.Schema(
  {
    userName: { type: String, trim: true },
    email: { type: String, trim: true },
    mobile: { type: String, trim: true },
    designation: { type: String, trim: true },
    gender: { type: String, trim: true },
    course: { type: String, trim: true },
    img: { type: String, trim: true },
  },
  {
    timestamps: true,
  }
);

export const Employee = mongoose.model("Employee", employee);
