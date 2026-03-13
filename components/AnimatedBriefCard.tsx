'use client'

import { useState, useEffect } from 'react'
import BriefCardV2 from './BriefCardV2'
import { MOCK_XAUUSD } from '@/lib/mock-data'

export function AnimatedBriefCard() {
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    // Start in closed state, then expand after delay
    const timer = setTimeout(() => {
      setIsExpanded(true)
    }, 3000) // 3 second delay

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-full">
      <BriefCardV2 brief={MOCK_XAUUSD} expanded={isExpanded} />
    </div>
  )
}
