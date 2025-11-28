import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, completeBooking } from "../features/booking/bookingSlice";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { CiCircleRemove } from "react-icons/ci";

export default function CartSummary({ selectedStart }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Directly read from Redux
  const cart = useSelector((s) => s.booking.cart);
  const bookings = useSelector((s) => s.booking.bookings);

  // Local state for totals
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [endTime, setEndTime] = useState("");

  // Recalculate totals whenever cart changes
  useEffect(() => {
    setTotalPrice(cart.reduce((sum, item) => sum + item.price, 0));
    setTotalTime(cart.reduce((sum, item) => sum + item.time, 0));
  }, [cart]);

  // Recalculate end time whenever start time or totalTime changes
  useEffect(() => {
    if (selectedStart.date && selectedStart.time) {
      const [h, m] = selectedStart.time.split(":").map(Number);
      const startMinutes = h * 60 + m;
      const totalMinutes = startMinutes + totalTime;
      const eh = Math.floor(totalMinutes / 60);
      const em = totalMinutes % 60;
      setEndTime(`${String(eh).padStart(2, "0")}:${String(em).padStart(2, "0")}`);
    } else {
      setEndTime("");
    }
  }, [selectedStart, totalTime]);

  // Handle booking
  const handleBook = () => {
    if (!selectedStart.date || !selectedStart.time) {
      alert("Select date and start time first");
      return;
    }
    if (cart.length === 0) {
      alert("Add at least one service");
      return;
    }

    const start = selectedStart.time;
    const end = endTime;

    const overlap = bookings.some((b) => {
      if (b.date !== selectedStart.date) return false;
      return start < b.endTime && end > b.startTime;
    });

    if (overlap) {
      alert("Selected time collides with existing booking. Choose another slot.");
      return;
    }

    const booking = {
      id: uuidv4(),
      date: selectedStart.date,
      startTime: selectedStart.time,
      endTime,
      items: cart,
      totalPrice,
      createdAt: new Date().toISOString(),
    };

    dispatch(completeBooking(booking));
    navigate("/success");
  };

  return (
    <div className="p-4 mt-4 bg-[#f9f8f7] shadow-xl rounded-2xl">
      <h3 className=" text-2xl font-head text-[#5f433e] mb-2">Cart Summary</h3>

      {cart.length === 0 ? (
        <div className="text-sm text-center font-desc py-4 text-[#5f433e]">No items</div>
      ) : (
        cart.map((item) => (
          <div
            key={item.id} // Unique key is crucial
            className="flex justify-between items-center border rounded p-2 mb-2"
          >
            <div>
              <div className="font-medium font-desc text-[#5f433e]">{item.name}</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-[#5f433e] font-desc">₹{item.price}</div>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-sm text-red-500"
              >
                <CiCircleRemove className="size-5" />
              </button>
            </div>
          </div>
        ))
      )}

      <div className="pt-2 border-t">
        <div className="font-bold font-desc text-black">Total: ₹{totalPrice}</div>
        {endTime && <div className="mt-2">Estimated end: {endTime}</div>}
       
         <button 
          onClick={handleBook}
         className="text-[#5f433e] border font-desc font-semibold mt-2 border-gray-400 w-full px-16 py-2 rounded transition duration-300 hover:bg-[#5f433e] hover:text-white">
            View More
          </button>
      </div>
    </div>
  );
}
