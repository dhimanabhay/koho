const data = [
  {
    title: "Easy",
    description: "Free and easy earning on the must-haves.",
    price_title: "Free",
    price_description: "Always & forever",
    btnText: "Try Easy, free",
    link: "/Easy",
    list: [
      { title: "1% cash back on groceries, and transportation" },
      { title: "3% interest on your entire balance" },
      { title: "No monthly fees" },
    ],
  },
  {
    title: "Essential",
    description: "Earn more on the essentials your wallet cares about.",
    price_title: "$4/month",
    price_description: "Starting from*",
    btnText: "Try Essential, free",
    link: "/Essential",
    list: [
      { title: "1% cash back on groceries, transportation, food, and drink" },
      { title: "5% interest on your entire balance" },
      { title: "30% off Credit Building" },
    ],
  },
  {
    title: "Extra",
    description: "Earn extra on your spending and savings.",
    price_title: "$9/month",
    price_description: "Starting from*",
    btnText: "Try Extra, free",
    link: "/Extra",
    list: [
      { title: "2% cash back on groceries, and transportation" },
      { title: "3% interest on your entire balance" },
      { title: "30% off Credit Building" },
      { title: "No foreign transaction fees" },
    ],
  },
];

export default function Plan() {
  return (
    <section className="flex py-10 justify-center">
      <div className="flex flex-col items-center justify-center w-3/4">
        <div className="flex flex-col gap-5 items-center">
          <p className="text-4xl font-semibold text-gray-800">
            Pick a plan and try it <span class="text-blue-700">free</span>
          </p>
          <p className=" text-gray-600">
            All KOHO plans come with a free{" "}
            <span className="font-bold">30 day trial</span> so you can see if it
            suits you.
          </p>
        </div>
        <div className="flex mt-10 gap-7 h-[500px] w-[800px]">
          {data.map((item) => (
            <div className="flex z-0 relative flex-col w-1/3 rounded-2xl bg-[#EFF1FC] hover:bg-slate-50 hover:shadow-2xl">
              <div className="px-6 py-4 ">
                <p className="text-xl text-gray-800 font-bold">{item.title}</p>
                <p className="text-gray-700 text-sm font-light">
                  {item.description}
                </p>
              </div>
              <div className="px-6 py-4">
                <p className="text-blue-500 text-xs">
                  {item.price_description}
                </p>
                <p className="text-xl text-gray-800 font-bold">
                  {item.price_title}
                </p>
              </div>
              <button className="self-center bg-[#235696] text-white w-4/5 py-4 my-1 px-3 rounded hover:shadow-xl hover:-translate-y-1 transition-all">
                {item.btnText}
              </button>
              <div className="px-6 py-4 flex flex-col gap-3">
                {item.list.map((point, index) => (
                  <div className="flex  gap-2  ">
                    <div className="pt-1">
                      <svg
                        height="15"
                        // width={15}
                        fill="#235696"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm">{point.title}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute bottom-0 w-full flex justify-center">
                <a href={item.link} className=" px-6 py-4 text-xs text-blue-500">
                  View all benefits
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 235696
