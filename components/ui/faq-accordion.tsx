"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border border-[#F7D1D1]/30 rounded-xl overflow-hidden">
          <button
            className="w-full flex items-center justify-between p-4 bg-white text-left font-medium text-[#3C3C3C] hover:bg-[#F7D1D1]/5 focus:outline-none transition-colors"
            onClick={() => toggleFAQ(index)}
          >
            <span>{faq.question}</span>
            <ChevronDown
              className={`h-5 w-5 text-[#B87333] transform transition-transform duration-200 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`p-4 bg-[#F7D1D1]/5 text-[#3C3C3C]/80 transition-all duration-200 ${
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