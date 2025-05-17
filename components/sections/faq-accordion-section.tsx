"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import FAQAccordion from "@/components/ui/faq-accordion";
import { Button } from "@/components/ui/button";

export default function FAQAccordionSection() {
  return (
    <section className="py-32 bg-light-mint">
      <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-semibold mb-6 text-charcoal">Frequently Asked Questions</h2>
            <p className="text-charcoal/80 text-lg">
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
          
          <div className="mt-16 text-center">
            <p className="mb-8 text-charcoal/80 text-lg">Don't see your question answered here?</p>
            <Link href="/contact">
              <Button 
                variant="outline"
                className="border-primary-mint text-charcoal hover:text-charcoal hover:bg-primary-mint/10 rounded-[24px] px-8 py-6 text-lg font-medium transition-all duration-300"
              >
                Contact Us for More Information
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 