"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import FAQAccordion from "@/components/ui/faq-accordion";

export default function FAQAccordionSection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-charcoal mb-4">Frequently Asked Questions</h2>
            <p className="text-base md:text-lg text-charcoal/80">
              We're here to address your concerns about BTL Exion treatments
            </p>
          </div>
          
          <FAQAccordion 
            faqs={[
              {
                question: "How many treatments will I need?",
                answer: "Most patients see optimal results after 4-6 treatments, spaced 1-2 weeks apart. However, Dr. Krishnan will create a personalized treatment plan based on your specific concerns and goals during your consultation."
              },
              {
                question: "Is there any downtime after BTL Exion treatments?",
                answer: "BTL Exion treatments are designed to be non-invasive with minimal to no downtime. Most patients return to their normal activities immediately after treatment. Some may experience mild redness that typically subsides within a few hours."
              },
              {
                question: "When will I see results?",
                answer: "Some patients notice improvements after their first session, but optimal results typically develop over 2-3 months as your body naturally produces new collagen and elastin. Results continue to improve with each treatment session."
              },
              {
                question: "Are BTL Exion treatments painful?",
                answer: "Most patients describe the treatments as comfortable with sensations of warmth and gentle muscle contractions. The BTL Exion system includes built-in cooling technology to maintain comfort throughout your session."
              },
              {
                question: "How long do results last?",
                answer: "Results can last 6-12 months or longer, depending on your age, skin condition, and lifestyle factors. Maintenance treatments every 3-6 months can help extend your results."
              },
              {
                question: "Is BTL Exion safe for all skin types?",
                answer: "Yes, BTL Exion treatments are safe and effective for all skin types and tones. During your consultation, Dr. Krishnan will assess your skin condition to ensure the treatment is appropriate for your specific situation."
              }
            ]} 
          />
          
          <div className="mt-8 text-center">
            <p className="mb-4 text-charcoal/80">Don't see your question answered here?</p>
            <Link href="/contact" className="text-accent-mint hover:underline font-medium inline-flex items-center">
              Contact us for more information
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 