import React, { useState } from 'react';

interface FAQProps {
  faqs: { question: string; answer: string }[];
  contact?: { url: string };
  colors?: {
    lightMode?: {
      background?: string;
      text?: string;
      border?: string;
    };
    darkMode?: {
      background?: string;
      text?: string;
      border?: string;
    };
  };
}

const FAQ: React.FC<FAQProps> = ({ faqs, colors,contact }) => {
  const [isOpen, setIsOpen] = useState<boolean[]>(Array(faqs.length).fill(false));

  const toggleDropdown = (index: number) => {
    setIsOpen(isOpen.map((open, i) => (i === index ? !open : open)));
  };

  const defaultColors = {
    lightMode: {
      background: '#fff',
      text: '#000',
      border: '#ddd',
    },
    darkMode: {
      background: '#333',
      text: '#fff',
      border: '#444',
    },
  };

  const appliedColors = {
    lightMode: { ...defaultColors.lightMode, ...colors?.lightMode },
    darkMode: { ...defaultColors.darkMode, ...colors?.darkMode },
  };

  const isDarkMode = document.documentElement.classList.contains('dark');
  const modeColors = isDarkMode ? appliedColors.darkMode : appliedColors.lightMode;

  return (
    <section
      className="mx-auto max-w-7xl px-2 py-10"
      style={{ backgroundColor: modeColors.background }}
    >
      
      <div className="mx-auto mt-8 rounded-xl max-w-3xl space-y-4 md:mt-16">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="cursor-pointer rounded-md border hover:shadow-lg transition-all duration-200"
            style={{ borderColor: modeColors.border }}
          >
            <button
              type="button"
              className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
              onClick={() => toggleDropdown(index)}
            >
              <span className="text-lg font-semibold" style={{ color: modeColors.text }}>
                {faq.question}
              </span>
            </button>
            {isOpen[index] && (
              <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                <p style={{ color: modeColors.text }}>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="text-base mt-6 text-center">
        Can’t find what you are looking for?{' '}
        <a href={contact?.url} className="font-semibold" style={{ color: modeColors.text }}>
          COntact Us 
        </a>
      </p>
    </section>
  );
};

export { FAQ };
