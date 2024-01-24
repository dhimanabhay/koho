const data = [
  {
    title: "Credit Building",
    description: "Build your credit history for only $10/m.",
    btnText: "Get started",
    color: "#2D5BA8",
    img: require("./images/card1.jpg"),
    from: "#FF8571",
    to:"#F1EAE0",
  },
  {
    title: "Earn Interest",
    description: "Earn interest on both your spending and savings account.",
    btnText: "Earn interest",
    color: "#FF8571",
    img: require("./images/card2.jpg"),
    from: "#E4E0DD",
    to:"#2D5BA8",
  },
  {
    title: "Cover",
    description:
      "Life happens. We’ve got you covered with zero-interest overdraft protection.",
    btnText: "Unlock cover",
    color: "#2D5BA8",
    img: require("./images/card3.jpg"),
    from: "#EDE6E0",
    to:"#F3D3D9",
  },
];

export default function HomeCard() {
  return (
    <section className="flex py-10 justify-center">
      <div className="flex flex-col items-center justify-center w-3/4">
        <div className="flex flex-col gap-5 items-center">
          <p className="text-4xl font-semibold text-gray-800">
            It’s not just another card
          </p>
          <p className=" text-gray-600">
            We’ve thought of just about everything you’d need to improve your
            financial health.
          </p>
        </div>
        <div className="flex mt-10 gap-5 h-[600px] w-[1100px]">
          {data.map((item) => (
            <div
            style={{
              backgroundImage: `linear-gradient(to bottom, ${item.from} 70%, ${item.to} 30%)`,
            }}
            className="flex flex-col justify-between w-1/3 rounded-3xl">
              <div className="px-6 py-2 h-1/4">
                <p className="text-gray-700 pb-3">{item.title}</p>
                <p className="text-2xl text-gray-800">{item.description}</p>
              </div>
              <div className="h-1/2">
                <img
                alt="img item"
                className="object-contain w-full h-full"
                src={item.img} />
              </div>
              <button
                style={{
                  backgroundColor: item.color,
                }}
                className="self-end mr-6 mb-3 w-1/2 text-white py-4 px-3 rounded hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                {item.btnText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
