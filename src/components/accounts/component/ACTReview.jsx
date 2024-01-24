import React from "react";

export default function ACTReview({ data }) {
  return (
    <section
      className="py-10 mt-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${data.bg_img})` }}
    >
      <div className="flex justify-center py-10">
        <div className="w-4/5">
          <p className="text-white text-4xl">Don’t just take our word for it</p>
          <div className="mt-8 flex gap-10">
            {data.list.map((item, index) => (
              <div
                key={index}
                className="max-w-[400px] relative w-[400px] bg-white rounded-3xl p-6"
              >
                <img
                  className="my-2 h-[20px]"
                  src={require("../images/stars.jpg")}
                  alt="stars review"
                />
                <p className="mb-10">{item}</p>
                <img className="z-0 absolute bottom-2 my-2 h-[20px] self-end" src={data.img_list[index]} alt={`store download ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
