import React from "react";
import AccordionCard from "../Ui/AccordionCard/AccordionCard";
import Styles from "./faq.module.css";
const Faq = () => {
  const faqData = [
    {
      id: 1,
      header: "Given the COVID-19 pandemic, can I go on safari?",
      body: "Yes - we are open, and you absolutely can go on safari currently, subject to the particular travel conditions of your home country and safari destination.  In fact, there are many reasons why a safari is the perfect socially distanced holiday.",
    },
    {
      id: 2,
      header: "Is it safe to go on safari?",
      body: "Absolutely. Quads Africa has operated camps in East Africa for two decades and has maintained an exemplary safety record over this time. Our safety practices and procedures are not only effective in managing any emergency situation but also in preventing any unsafe situations from occurring both in camp and outside in the bush.",
    },
    {
      id: 3,
      header: "Where are you situated??",
      body: "Absolutely. Quads Africa has operated camps in East Africa for two decades and has maintained an exemplary safety record over this time. Our safety practices and procedures are not only effective in managing any emergency situation but also in preventing any unsafe situations from occurring both in camp and outside in the bush.",
    },
  ];
  return (
    <div className={Styles.container}>
      <h1 className="d-flex justify-content-center">FAQ</h1>
      {faqData.map((item, index) => {
        return (
          <AccordionCard key={item.id} header={item.header} body={item.body} />
        );
      })}
    </div>
  );
};

export default Faq;
