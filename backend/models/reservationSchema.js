import mongoose from "mongoose";
import validate from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 30,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 30,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: (email) => validate.isEmail(email),
      message: "Invalid email",
    },
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: (phone) =>
        validate.isMobilePhone(phone, "any", { strictMode: false }),
      message: "Invalid phone number",
    },
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
    enum: ["12:00", "15:00", "18:00", "21:00"],
  },
  people: {
    type: Number,
    required: true,
    min: 1,
    max: 10,
  },
  message: {
    type: String,
    trim: true,
    maxlength: 100,
  },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
// Path: routes/reservationRoute.js
