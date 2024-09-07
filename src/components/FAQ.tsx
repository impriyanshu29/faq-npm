// src/components/FAQ.tsx
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
  contact?: { url: string };
  classNames?: {
    section?: string;
    question?: string;
    answer?: string;
    border?: string;
    button?: string;
    container?: string;
    link?: string;
  };
}

const FAQ: React.FC<FAQProps> = ({ faqs, contact, classNames }) => {
  const [isOpen, setIsOpen] = useState<boolean[]>(Array(faqs.length).fill(false));

  const toggleDropdown = (index: number) => {
    setIsOpen(isOpen.map((open, i) => (i === index ? !open : open)));
  };

  return (
    <section
      className={`mx-auto h-full max-w-7xl px-2 py-10 md:px-0 ${classNames?.section || 'bg-gradient-to-r from-white to-gray-100 dark:from-black dark:to-gray-900'}`}
    >
      <div className={`mx-auto mt-8 rounded-xl max-w-3xl space-y-4 md:mt-16 ${classNames?.container}`}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`cursor-pointer rounded-md border shadow-lg transition-all duration-200 hover:shadow-lg hover:border-black ${classNames?.border || 'border-gray-300 dark:border-gray-600'}`}
          >
            <button
              type="button"
              className={`flex w-full items-center justify-between px-4 py-5 sm:p-6 ${classNames?.button}`}
              onClick={() => toggleDropdown(index)}
            >
              <span className={`flex text-lg font-semibold ${classNames?.question || 'text-gray-800 dark:text-gray-200'}`}>
                {faq.question}
              </span>
            </button>
            {isOpen[index] && (
              <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                <p className={`${classNames?.answer || 'text-gray-600 dark:text-gray-400'}`}>
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      {contact?.url && (
        <p className={`text-base mt-6 text-center ${classNames?.link || 'text-gray-600 dark:text-gray-400'}`}>
          Can’t find what you are looking for?{' '}
          <a
            href={contact.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-600 dark:text-blue-400 hover:underline"
          >
            Contact Us..
          </a>
        </p>
      )}
    </section>
  );
};

export { FAQ };
