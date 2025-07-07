'use client';

import { useTranslations } from 'next-intl';

export default function FAQ() {
  const t = useTranslations('faq');

  const faqs = [
    {
      question: t('questions.undertale.question'),
      answer: t('questions.undertale.answer')
    },
    {
      question: t('questions.combat.question'),
      answer: t('questions.combat.answer')
    },
    {
      question: t('questions.chapters.question'),
      answer: t('questions.chapters.answer')
    },
    {
      question: t('questions.platforms.question'),
      answer: t('questions.platforms.answer')
    },
    {
      question: t('questions.characters.question'),
      answer: t('questions.characters.answer')
    }
  ];

  return (
    <section id="faq" className="bg-gray-900 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-mono">
            {t('title')}
          </h2>
          <div className="w-24 h-0.5 bg-blue-400 mx-auto"></div>
          <p className="text-gray-400 text-sm mt-4">
            {t('subtitle')}
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-black border border-gray-700 p-6 rounded-lg hover:border-blue-400 transition-colors"
            >
              <h3 className="text-lg font-bold text-white mb-4 font-mono">
                {faq.question}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
