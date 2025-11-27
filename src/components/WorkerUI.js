import React from "react";

export default function WorkerUI() {
 const workers = [
  { img: "https://i.pravatar.cc/100?img=1", name: "Anjali", job: "Hair Stylist" },
  { img: "https://i.pravatar.cc/100?img=2", name: "Pooja", job: "Hair Color Specialist" },
  { img: "https://i.pravatar.cc/100?img=3", name: "Riya", job: "Makeup Artist" },
  { img: "https://i.pravatar.cc/100?img=4", name: "Sneha", job: "Nail Artist" },
  { img: "https://i.pravatar.cc/100?img=5", name: "Kajal", job: "Facial & Skin Expert" },
  { img: "https://i.pravatar.cc/100?img=6", name: "Simran", job: "Eyebrow & Threading" },
  { img: "https://i.pravatar.cc/100?img=7", name: "Meera", job: "Spa & Massage Therapist" },
  { img: "https://i.pravatar.cc/100?img=8", name: "Sana", job: "Bridal Makeup Artist" },
  { img: "https://i.pravatar.cc/100?img=9", name: "Tina", job: "Pedicure / Manicure Expert" },
  { img: "https://i.pravatar.cc/100?img=10", name: "Shivani", job: "Skin Treatment Specialist" },
];


  return (
    <div className="w-full bg-[#f9f8f7] text-[#5f433e] p-6 pb-3 rounded-2xl  border border-gray-200">

      <h1 className="text-2xl font-bold text-gray-800 mb-4">Workers</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2 max-h-[286px]  overflow-y-auto pr-2 mb-6">
        {workers.map((w, i) => (
          <div
            key={i}
            className="bg-white border p-3 rounded-xl shadow-sm flex flex-col items-center text-center"
          >
            <img
              src='/user.png'
              alt={w.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <h2 className="mt-2 font-semibold text-gray-800 text-sm">{w.name}</h2>
            <p className="text-gray-500 text-xs">{w.job}</p>
          </div>
        ))}
      </div>     
    </div>
  );
}
