import React from "react";

const data = [
  {
    title: "The best account for better finances",
    description:
      "KOHO is a free spending and savings account designed for all Canadians. Equipped with our prepaid Mastercard® and mobile app, you’ll be able to budget, spend, and save like a pro.",
    img: require("./images/homeItem_1.jpg"),
  },
  {
    title: "Cash back on the must-haves",
    description:
      "Get 1% cash back on things like your grocery run or your Uber ride, then cash it out in-app wherever, whenever!",
    img: require("./images/homeItem_2.jpg"),
  },
  {
    title: "Plans for all sorts of spending and saving",
    description:
      "With our new KOHO plans, you can choose an account that’s got just what your wallet needs – get boosted cash back, access to high interest on both your spending and savings account, and start Credit Building for less.",
    img: require("./images/homeItem_3.jpg"),
  },
  {
    title: "Stay connected and protected",
    description:
      "Lock your card in-app, securely shop online, and rest assured your money is protected with top-tier security. It’s no wonder why KOHO is trusted by over one million Canadians.",
    img: require("./images/homeItem_4.jpg"),
  },
];

export default function HomeItem() {
  return (
    <section className="flex flex-col gap-14 items-center pb-10">
      {data.map((item) => (
        <div className="flex justify-between w-3/4">
          <div className="flex flex-col justify-center gap-5 w-1/3">
            <p className="text-4xl font-semibold text-gray-800">{item.title}</p>
            <p className="text-sm text-gray-600">{item.description}</p>
            <div>pay list</div>
          </div>
          <div className="container w-[400px] max-w-[600px]">
            <img alt="itemcard" className="w-full h-auto" src={item.img} />
          </div>
        </div>
      ))}
    </section>
  );
}
