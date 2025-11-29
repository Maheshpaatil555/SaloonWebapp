import React, { useState } from "react";
import DateTimePicker from "../components/DateTimePicker";
import ServiceSelector from "../components/ServiceSelector";
import CartSummary from "../components/CartSummary";
import { useSelector } from "react-redux";
import WorkerUI from "../components/WorkerUI";
import Hero from "../components/Hero";

export default function BookAppointment(){
  const bookings = useSelector(s=>s.booking.bookings);
  const [selectedStart, setSelectedStart] = useState({date:"", time:""});
  return (
    <div>
  <Hero title="BOOK  APPOINTMENT" bgImage="/assist/banner.jpg" />
    <div className="p-6 max-w-5xl pt-6 mb-5  mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-4">
        <DateTimePicker bookings={bookings} onSelect={setSelectedStart} />
        <ServiceSelector />
      </div>
      <div>
         <WorkerUI/>
        <CartSummary selectedStart={selectedStart} />
      </div>
    </div>
    </div>
  );
}
