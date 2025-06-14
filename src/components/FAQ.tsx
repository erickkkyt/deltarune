'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the relationship between Deltarune and Undertale?",
      answer: "According to creator Toby Fox, Deltarune is set in an alternate universe, not a prequel or sequel to Undertale. While Deltarune shares some familiar characters like Toriel, Sans, and Alphys, they appear in completely new roles. Deltarune is an anagram of 'Undertale' and represents a fresh story in the Dark World."
    },
    {
      question: "Is Deltarune a multiplayer game?",
      answer: "Deltarune offers a single-player adventure focused on story and strategy. The Deltarune experience is designed for solo play, where you control Kris and command team members Susie and Ralsei through the Dark World adventure."
    },
    {
      question: "How does Deltarune's combat system work?",
      answer: "Deltarune features turn-based battles with bullet-hell mechanics. Unlike Undertale's single-character combat, Deltarune introduces team-based battles similar to Final Fantasy. Players control Kris, Susie, and Ralsei, using the TP (Tension Points) system for special abilities and magic spells."
    },
    {
      question: "What are the main Deltarune characters?",
      answer: "The main Deltarune characters are Kris (the silent human protagonist), Susie (a rebellious monster classmate), and Ralsei (the kind Dark Prince). Kris is the adopted child of Toriel and Asgore, with an older brother Asriel who is away at college."
    },
    {
      question: "How many Deltarune chapters are available?",
      answer: "Deltarune Chapter 1 was released for free on October 31, 2018, and Deltarune Chapter 2 was released for free on September 17, 2021. Deltarune Chapters 3 and 4 are planned for release as paid content, with future chapters provided as free updates."
    },
    {
      question: "What platforms support Deltarune?",
      answer: "Deltarune is available on Windows, macOS, PlayStation 4, and Nintendo Switch. Future Deltarune releases are planned for PlayStation 5 and Nintendo Switch 2. You can also play Deltarune online through browser versions."
    },
    {
      question: "Does Deltarune have multiple endings?",
      answer: "Unlike Undertale, Toby Fox has stated that Deltarune is planned to have only one ending. However, Deltarune features hidden routes like the 'Snowgrave' path that can significantly change character fates and story progression."
    },
    {
      question: "Who created Deltarune?",
      answer: "Deltarune was created by Toby Fox, the acclaimed developer behind Undertale. The Deltarune development began in 2012, even before Undertale. The game's artwork was created by Toby Fox and Temmie Chang, featuring more detailed and expressive visuals than Undertale."
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
            DELTARUNE FAQ
          </h2>
          <div className="w-24 h-0.5 bg-blue-400 mx-auto"></div>
          <p className="text-gray-400 text-sm mt-4">
            Everything you need to know about Deltarune by Toby Fox
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
