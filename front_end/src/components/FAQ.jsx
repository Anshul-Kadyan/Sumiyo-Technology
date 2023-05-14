import { faqData } from "../constant/index";
import { useState } from "react";
import SingleFAQ from "./SingleFAQ";

export default function FAQ() {
  const [questions, setQuestions] = useState(faqData);

  return (
    <section>
      <div className="flex flex-col items-center justify-center md:px-14 px-3 py-2 bg-grey">
        <div className="md:text-base text-sm font-light font-roboto">
          How can we help You ?
        </div>
        <div className="font-bold font-patrick md:text-6xl text-2xl md:pb-4 pb-2">
          Freaquently Asked Question's
        </div>
        <div className="md:text-base text-sm font-light font-roboto max-w-2xl text-center">
          Curious about Sumiyo Technology! Checkout our most common FAQ's. Feel
          free to contact us about about busniess and get facutal responses.
        </div>
      </div>
      <div className="flex justify-center md:py-24 py-10">
        <div className="flex flex-col md:gap-7 gap-4 md:w-full w-[300px] md:px-48 px-4">
          {faqData.map((questions, index) => {
            return <SingleFAQ key={index} {...questions} />;
          })}
        </div>
      </div>
    </section>
  );
}
