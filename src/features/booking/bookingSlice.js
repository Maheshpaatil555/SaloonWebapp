import { createSlice } from "@reduxjs/toolkit";
import { servicesList } from "./servicesData";

const initialState = {
  allServices: servicesList,
  cart: [],
  bookings: [] // each booking: { id, date, startTime, endTime, items, totalPrice }
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // action.payload = { id,name,price,time }
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.cart = state.cart.filter(i => i.id !== id);
    },
    clearCart: (state) => {
      state.cart = [];
    },
    completeBooking: (state, action) => {
      // action.payload = { date, startTime, endTime, items, totalPrice, id }
      state.bookings.push(action.payload);
      state.cart = [];
    }
  }
});

export const { addToCart, removeFromCart, clearCart, completeBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
