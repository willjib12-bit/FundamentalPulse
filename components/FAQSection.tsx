'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "Is this a signal tool?",
    answer: "No. Fundamental Pulse is built to give you a clearer fundamental bias before the session, not entry signals or execution instructions."
  },
  {
    question: "Which markets is it built for?",
    answer: "Fundamental Pulse is being designed first for macro-sensitive markets like gold, major FX pairs, oil, and US indices."
  },
  {
    question: "What do I get in early access?",
    answer: "Early access gives you a first look at the product as it develops, along with the chance to test the format and help shape the product through feedback."
  }
]

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())

  const toggleItem = (index: number) => {
    const newOpen = new Set(openItems)
    if (newOpen.has(index)) {
      newOpen.delete(index)
    } else {
      newOpen.add(index)
    }
    setOpenItems(newOpen)
  }

  return (
    <div className="space-y-6">
      {faqData.map((item, index) => (
        <div key={index} className="border-b border-landing-border pb-6 last:border-0 last:pb-0">
          <button
            onClick={() => toggleItem(index)}
            className="w-full text-left group flex items-center justify-between py-2"
          >
            <h3 className="font-display text-[18px] font-semibold tracking-[-0.03em] text-landing-text pr-4">
              {item.question}
            </h3>
            <div className="flex-shrink-0 text-landing-text-muted transition-transform duration-200 group-hover:text-landing-text" 
                 style={{ transform: openItems.has(index) ? 'rotate(180deg)' : 'rotate(0deg)' }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>
          {openItems.has(index) && (
            <div className="mt-4 text-[17px] leading-[1.65] text-landing-text-secondary">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
