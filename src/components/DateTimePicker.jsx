import React, { useState, useMemo, useRef, useEffect } from "react";
import { format, addDays } from "date-fns";

export default function DateTimePicker({ bookings = [], onSelect }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [openTime, setOpenTime] = useState(false);

  const dateRef = useRef(null);
  const timeRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dateRef.current &&
        !dateRef.current.contains(e.target) &&
        openDate
      ) {
        setOpenDate(false);
      }
      if (
        timeRef.current &&
        !timeRef.current.contains(e.target) &&
        openTime
      ) {
        setOpenTime(false);
      }
    };

    const handleScroll = () => {
      if (openDate) setOpenDate(false);
      if (openTime) setOpenTime(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [openDate, openTime]);

  // ---- your remaining code unchanged ----
  const blockedRanges = useMemo(() => {
    if (!date) return [];
    return bookings
      .filter((b) => b.date === date)
      .map((b) => ({ start: b.startTime, end: b.endTime }));
  }, [bookings, date]);

  const isBlocked = (t) =>
    blockedRanges.some((r) => r.start <= t && t < r.end);

  const onDateSelect = (d) => {
    setDate(d);
    setOpenDate(false);
    onSelect?.({ date: d, time });
  };

  const onTimeSelect = (t) => {
    if (isBlocked(t)) return;
    setTime(t);
    setOpenTime(false);
    onSelect?.({ date, time: t });
  };

  const times = [];
  for (let h = 9; h <= 20; h++) {
    for (let m = 0; m < 60; m += 15) {
      times.push(`${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`);
    }
  }

  const next30Days = Array.from({ length: 30 }, (_, i) =>
    format(addDays(new Date(), i), "yyyy-MM-dd")
  );

  return (
    <div className="w-full flex flex-col sm:flex-row gap-3">

      {/* Date Picker */}
      <div className="relative w-full sm:w-1/2" ref={dateRef}>
        <button
          onClick={() => {
            setOpenDate(!openDate);
            setOpenTime(false);
          }}
          className="w-full py-3 rounded-xl bg-[#f9f8f7] text-[#5f433e] font-bold border border-zinc-700 text-sm"
        >
          {date || "Select Date"}
        </button>

        {openDate && (
          <div className="absolute mt-2 bg-white p-3 rounded-xl shadow border border-zinc-700 z-20 w-full max-w-xs sm:max-w-full grid grid-cols-3 gap-2 overflow-y-auto max-h-64">
            {next30Days.map((d) => (
              <button
                key={d}
                onClick={() => onDateSelect(d)}
                className={`py-2 rounded-lg text-xs font-semibold ${
                  d === date
                    ? "bg-pink-600 text-white"
                    : "bg-[#f8f2f2] text-[#6f5450] hover:bg-[#d4c5c5]"
                }`}
              >
                {format(new Date(d), "dd MMM")}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Time Picker */}
      <div className="relative w-full sm:w-1/2" ref={timeRef}>
        <button
          onClick={() => {
            setOpenTime(!openTime);
            setOpenDate(false);
          }}
          className="w-full py-3 rounded-xl bg-[#f9f8f7] text-[#5f433e] font-bold border border-zinc-700 text-sm"
        >
          {time || "Select Time"}
        </button>

        {openTime && (
          <div className="absolute z-20 mt-2 bg-white p-3 rounded-xl shadow border border-zinc-700 max-h-52 overflow-y-auto grid grid-cols-3 gap-2 w-full">
            {times.map((t) => {
              const blocked = isBlocked(t);
              const selected = t === time;

              return (
                <button
                  key={t}
                  disabled={blocked}
                  onClick={() => onTimeSelect(t)}
                  className={`
                    py-2 rounded-lg text-xs font-semibold
                    ${
                      blocked
                        ? "bg-red-900 text-red-400 opacity-40 cursor-not-allowed"
                        : selected
                        ? "bg-pink-600 text-white"
                        : "bg-[#f8f2f2] text-[#6f5450] hover:bg-[#d4c5c5]"
                    }
                  `}
                >
                  {t}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
