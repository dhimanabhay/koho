import React from "react";

export default function HomeSlider() {
  return (
    <section className="flex justify-center pt-52 pb-10">
      <div className="w-3/4 flex justify-between border-b-2 border-gray-300 pb-10">
        <div className="min-w-[600px]">
          <text className="border border-blue-700 rounded-xl px-3 py-[4px] text-blue-700 text">
            New
          </text>
          <p className="py-4 text-5xl w-1/2 font-semibold leading-[3.5rem] ">Earn up to 5% interest on your entire balance</p>
          <p className="pb-6 w-1/2 text-gray-600 text">
            Whether its tucked away in a savinigs vault or ready to go in your
            spendable, earn up to 5% on your money.
          </p>
          <button className="bg-[#395ba4] text-white py-3 px-2 rounded hover:shadow-xl hover:-translate-y-1 transition-all">
            Open Account
          </button>
        </div>
        <div className="min-h-[300px] h-[300px] w-[500px] min-w-[500px] flex items-center">
          <img
            alt="home1_img"
            className="min-h-[200px] min-w-[200px] object-cover object-center"
            src={require("./images/home1.jpg")}
          />
        </div>
      </div>
    </section>
  );
}
