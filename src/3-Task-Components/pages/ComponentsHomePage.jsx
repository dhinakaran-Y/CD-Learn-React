import Accordion from "../components/Accordion";
import Dropdown from "../components/Dropdown";
import Anchor from "../../components/Anchor";
import RatingDiv from "../components/RatingDiv";
import RatingDiv2 from "../components/RatingDiv2";

const ComponentsHomePage = () => {

  const accordionData = [
    {
      id: 1,
      title: "What is React?",
      content:
        "React is a JavaScript library for building user interfaces using components and a virtual DOM.",
    },
    {
      id: 2,
      title: "What is Tailwind CSS?",
      content:
        "Tailwind CSS is a utility-first CSS framework that lets you build modern UI directly in your markup.",
    },
    {
      id: 3,
      title: "Why use an Accordion?",
      content:
        "Accordions help organize content by hiding sections until users need them.",
    },
  ];

  return (
    <>
      <main className="w-screen h-screen text-black! bg-linear-to-br from-slate-900 via-violet-900 to-slate-900 bg-no-repeat min-h-screen">
        <Anchor path={"/"} link={"Home"} />
        <div className="py-10">
          {accordionData.map((accordion) => {
            return (
              <Accordion
                id={accordion.id}
                title={accordion.title}
                content={accordion.content}
              />
            );
          })}
        </div>
        <hr />
        <div className="flex justify-center py-10">
          <Dropdown />
        </div>
        <hr />
        <div className="flex justify-center py-10">
          <RatingDiv />
        </div>
        <div className="flex justify-center py-10">
          <RatingDiv2 />
        </div>
      </main>
    </>
  );
};

export default ComponentsHomePage;
