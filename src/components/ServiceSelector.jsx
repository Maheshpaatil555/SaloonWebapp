import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/booking/bookingSlice";

export default function ServiceSelector() {
  const dispatch = useDispatch();
  const allServices = useSelector((s) => s.booking.allServices);
  const cartItems = useSelector((s) => s.booking.cart); // assuming cart slice is named 'cart'

  const [openIndex, setOpenIndex] = useState(null);

  const handleAddToCart = (service) => {
    // check if item is already in cart
    const alreadyInCart = cartItems.some((item) => item.id === service.id);

    if (!alreadyInCart) {
      dispatch(addToCart(service));
      setOpenIndex(null);
    } else {
      alert("This service is already in the cart!");
    }
  };

  return (
    <div className="grid grid-cols-1 bg-[#f9f8f7] text-[#5f433e] border p-4 rounded-xl gap-5 w-full min-h-4">
      {allServices.map((cat, i) => (
        <div key={i}>
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="ps-1  font-medium">{cat.category}</span>
            <ChevronDown
              size={20}
              className={`text-black transition-transform duration-300 ${
                openIndex === i ? "rotate-180" : ""
              }`}
            />
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === i ? "max-h-[500px] mt-2 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="border rounded-lg bg-white shadow">
              {cat.services.map((s) => (
                <div
                  key={s.id}
                  className={`p-3 text-gray-700 font-desc hover:bg-[#f9f8f7] hover:rounded-lg cursor-pointer ${
                    cartItems.some((item) => item.id === s.id) ? "opacity-50  cursor-not-allowed" : ""
                  }`}
                  onClick={() => handleAddToCart(s)}
                >
                  {s.name} — ₹{s.price}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
