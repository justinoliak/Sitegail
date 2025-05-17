"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQ = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  faqs: FAQ[];
};

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border border-light-mint/30 rounded-xl overflow-hidden">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex items-center justify-between p-4 bg-white text-left font-medium text-charcoal hover:bg-light-mint/5 focus:outline-none transition-colors"
            aria-expanded={openIndex === index}
          >
            <span>{faq.question}</span>
            <ChevronDown
              className={`h-5 w-5 text-accent-mint transform transition-transform duration-200 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`p-4 bg-light-mint/5 text-charcoal/80 transition-all duration-200 ${
              openIndex === index ? "block" : "hidden"
            }`}
          >
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
} 