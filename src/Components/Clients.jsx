import React from "react";
import { coinbase, binance, dropbox, airbnb } from "../assets";

const Clients = () => {
  return (
    <section className="w-full overflow-hidden bg-primary py-6">
      <div className="relative">
        <div className="flex animate-scroll-x gap-8 px-4">
          {[airbnb, binance, coinbase, dropbox].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`client-${index}`}
              className="w-[100px] sm:w-[140px] md:w-[160px] h-[40px] object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
