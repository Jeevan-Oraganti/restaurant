import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
  const { firstName, lastName, email, phone, date, time, people, message } =
    req.body;
  if (!firstName || !lastName || !email || !phone || !date || !time) {
    return next(new ErrorHandler(400, "Please fill in all the fields"));
  }
  try {
    await Reservation.create({
      firstName,
      lastName,
      email,
      phone,
      date,
      time,
    });
    return res.status(201).json({
      success: true,
      message: "Reservation sent successfully",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const ValidationError = Object.values(error.errors).map(
        (err) => err.message
      );
      return next(new ErrorHandler(400, ValidationError.join(" ")));
    }
  }
};
// Path: error/error.js
