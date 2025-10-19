import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AboutUs = () => {
  const [date, setDate] = useState(new Date());

  console.log(date);

  const handleNotify = () => {
    toast.success("🎉 You’ll be notified when the About Us page is ready!", {
      position: "top-center",
      autoClose: 3000,
      theme: "colored",
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-300 via-purple-500 to-purple-300 text-center">
      <h1 className="text-5xl md:text-6xl font-bold text-white animate-bounce drop-shadow-lg">
        🚀 About Us page is Coming Soon
      </h1>

      <h2 className="font-bold text-white text-3xl my-5">
        {date.toLocaleTimeString()}
      </h2>

      <p className="mt-5 text-lg text-white/90 animate-pulse">
        Stay tuned! We’re crafting something amazing for you ✨
      </p>

      <div className="mt-10">
        <button
          onClick={handleNotify}
          className="btn btn-outline btn-accent animate-[pulse_2s_infinite]"
        >
          Notify Me
        </button>
      </div>

      <div className="absolute bottom-6 text-white text-sm animate-pulse">
        Developed by <span className="font-bold">Utsho 💎</span>
      </div>
    </div>
  );
};

export default AboutUs;
