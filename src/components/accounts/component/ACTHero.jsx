import React from "react";

export default function ACTHero({ data }) {
  const list = data.card_list;
  console.log(list);
  return (
    <section className="pt-[65px]">
      <div style={{ backgroundColor: data.color }}>
        <div className="flex justify-around pt-16 pb-10 text-white">
          <div className="w-2/3 flex pb-10">
            <div className="min-w-[500px]">
              <p className="font-semibold">{data.id}</p>
              <p className="py-4 text-5xl w-2/3 font-semibold leading-[3.5rem] ">
                {data.heading}
              </p>
              <p className="pb-6 w-1/2">{data.description}</p>
              <button className="bg-[#2f3ccf] text-white py-4 px-5 rounded hover:shadow-xl hover:-translate-y-1 transition-all">
                Get {data.id}
              </button>
            </div>
            <div className="min-h-[300px] w-full h-[450px] min-w-[500px] flex items-center">
              <img
                alt="home1_img"
                className="min-h-[200px] w-full h-full min-w-[200px] object-cover object-center"
                src={data.img1}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            alt="home2_img"
            className="h-[70vh] object-cover object-center"
            src={data.img2}
          />
        </div>
      </div>
      <div className="mt-28">
        <div className="flex justify-center">
          <p className="py-4 px-6 text-6xl w-2/3 font-semibold leading-[3.5rem] text-center">
            Choose {data.id} if you like the sound of:
          </p>
        </div>
        <div className="flex justify-center items-center gap-10">
          <div className="flex flex-col">
            {data.card_list.map((item) => (
              <div className="flex gap-3 py-3 w-[90%]">
                <svg fill="#2C38C0" height={24} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                </svg>
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
          <div>
            <img alt="card type" className="max-h-2/3 max-w-[300px]" src={data.card_img} />
          </div>
        </div>
      </div>
    </section>
  );
}
