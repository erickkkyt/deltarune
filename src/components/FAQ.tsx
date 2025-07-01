'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the relationship to Undertale?",
      answer: "Created by Toby Fox, this game is set in an alternate universe with familiar characters in new roles. While sharing some characters like Toriel and Sans, it represents a fresh story in the Dark World."
    },
    {
      question: "How does the combat system work?",
      answer: "Features turn-based battles with bullet-hell mechanics and team-based combat. Players control Kris, Susie, and Ralsei using the TP system for special abilities and magic spells."
    },
    {
      question: "How many chapters are available?",
      answer: "Chapters 1 and 2 are currently available for free. Additional chapters are planned for future release as the story continues to expand."
    },
    {
      question: "What platforms can I play on?",
      answer: "Available on Windows, macOS, PlayStation, Nintendo Switch, and through free deltarune online browser versions for easy access anywhere."
    },
    {
      question: "Who are the main characters?",
      answer: "The main characters are Kris (the human protagonist), Susie (a rebellious monster), and Ralsei (the kind Dark Prince). Together they explore the Dark World adventure."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-gray-900 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-mono">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div className="w-24 h-0.5 bg-blue-400 mx-auto"></div>
          <p className="text-gray-400 text-sm mt-4">
            Common questions about this RPG adventure by Toby Fox
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-black border border-gray-700 overflow-hidden transition-all duration-300 hover:border-blue-400"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-sm font-bold text-white pr-4 font-mono">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-5 h-5 text-blue-400 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-4 border-t border-gray-700">
                  <p className="text-gray-300 text-sm leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
