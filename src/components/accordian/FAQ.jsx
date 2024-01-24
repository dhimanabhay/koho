import Accordion from "./Accordion";
const FAQ = ({data}) => {
  return (
    <section className="flex flex-col items-center w-full">
      <div className="p-4 rounded-lg w-3/4">
        <p className="text-4xl pb-4 font-semibold text-gray-800">Questions?</p>
        {data.map((item) => (
          <Accordion title={item.title} answer={item.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
