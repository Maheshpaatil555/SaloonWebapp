import React from "react";
import { Link } from "react-router-dom";

export default function SuccessPage(){
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow text-center">
        <h1 className="text-2xl font-bold text-green-600 mb-2">Appointment Booked!</h1>
        <p className="mb-4">Your appointment is scheduled. Thank you.</p>
        <Link to="/" className="text-blue-600">Back to bookings</Link>
      </div>
    </div>
  );
}
