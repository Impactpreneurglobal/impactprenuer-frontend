"use client"

import React, { useState } from 'react';

interface FaqItemsProps {
    question: string,
    answer: string
}

const FaqItem:React.FC<FaqItemsProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left focus:outline-none group"
      >
        <span className="text-gray-900 font-medium group-hover:text-green-600 transition-colors duration-200">
          {question}
        </span>
        <svg
          className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="mt-3 text-sm text-gray-500 leading-relaxed animate-fadeIn">
            {answer}
        </div>
      )}
    </div>
  );
};

export default FaqItem;