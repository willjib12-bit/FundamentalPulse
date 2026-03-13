'use client'

import { useState, useEffect } from 'react'
import BriefCardV2 from './BriefCardV2'
import { MOCK_XAUUSD } from '@/lib/mock-data'

export function DemoAnimatedBriefCard() {
  const [expanded, setExpanded] = useState(false)
  const [showCursor, setShowCursor] = useState(false)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [cursorClicked, setCursorClicked] = useState(false)

  useEffect(() => {
    // Animation sequence
    const sequence = [
      { delay: 3000, action: () => setShowCursor(true) }, // Show cursor after 3s
      { delay: 4500, action: () => setCursorPosition({ x: 85, y: 75 }) }, // Move to button
      { delay: 6000, action: () => setCursorClicked(true) }, // Click
      { delay: 6200, action: () => setExpanded(true) }, // Expand card
      { delay: 6200, action: () => setShowCursor(false) }, // Hide cursor
    ]

    const timers = sequence.map(({ delay, action }) => 
      setTimeout(action, delay)
    )

    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <div className="relative w-full">
      {/* Cursor */}
      {showCursor && (
        <div
          className="absolute z-10 pointer-events-none transition-all duration-1000 ease-out"
          style={{
            left: `${cursorPosition.x}%`,
            top: `${cursorPosition.y}%`,
            transform: `translate(-50%, -50%) ${cursorClicked ? 'scale(0.9)' : 'scale(1)'}`,
          }}
        >
          <div className="relative">
            {/* Cursor shape */}
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none"
              className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
            >
              <path 
                d="M3 2L3 17L7 13L10 16L12 14L9 11L13 7L3 2Z" 
                fill="currentColor"
                stroke="rgba(0,0,0,0.2)"
                strokeWidth="0.5"
              />
            </svg>
            {/* Click effect */}
            {cursorClicked && (
              <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
            )}
          </div>
        </div>
      )}
      
      {/* BriefCard */}
      <BriefCardV2 brief={MOCK_XAUUSD} expanded={expanded} />
    </div>
  )
}
