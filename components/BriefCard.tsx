'use client'

import { DailyBrief } from '@/lib/types'
import BriefSection from './BriefSection'

const biasColors = {
  bullish: { text: 'text-bias-bullish', bg: 'bg-bias-bullish/8', border: 'border-bias-bullish/15', arrow: '↑' },
  bearish: { text: 'text-bias-bearish', bg: 'bg-bias-bearish/8', border: 'border-bias-bearish/15', arrow: '↓' },
  neutral: { text: 'text-bias-neutral', bg: 'bg-bias-neutral/8', border: 'border-bias-neutral/15', arrow: '→' },
}

const confidenceColors = {
  high: 'text-confidence-high',
  medium: 'text-confidence-medium',
  low: 'text-confidence-low',
}

interface Props {
  brief: DailyBrief
}

export default function BriefCard({ brief }: Props) {
  const sessionDate = new Date(brief.sessionDate).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  })

  const bias = biasColors[brief.bias]
  const confColor = confidenceColors[brief.confidence]

  return (
    <div className="w-full space-y-6">

      {/* Top row: date left, asset right */}
      <div className="flex items-center justify-between">
        <span className="text-[13px] text-text-muted/60">{sessionDate}</span>
        <span className="text-[13px] text-text-muted/80">
          {brief.marketLabel}
          <span className="ml-1.5 text-text-muted/50">{brief.market}</span>
        </span>
      </div>

      {/* Main bias block — dominant element */}
      <div className="flex flex-col items-center py-6">
        <div className={`flex items-center gap-3 px-8 py-4 rounded-xl border ${bias.bg} ${bias.border}`}>
          <span className={`text-[18px] ${bias.text} opacity-40`}>{bias.arrow}</span>
          <span className={`text-[40px] font-semibold tracking-[-0.03em] leading-none ${bias.text}`}>
            {brief.bias.charAt(0).toUpperCase() + brief.bias.slice(1)}
          </span>
        </div>

        {/* Confidence — directly below bias, secondary */}
        <p className={`mt-3 text-[13px] tracking-label ${confColor}`}>
          {brief.confidence.charAt(0).toUpperCase() + brief.confidence.slice(1)} confidence
        </p>
      </div>

      {/* Summary */}
      <p className="text-[15px] leading-relaxed text-text-secondary">
        {brief.summary}
      </p>

      {/* Collapsed reasoning trigger — non-functional for now (Step 2) */}
      <div className="border-t border-surface-border pt-4">
        <button className="flex items-center gap-2 text-[12px] font-medium tracking-label text-text-muted/80 hover:text-text-secondary transition-colors">
          <span className="text-[10px]">▸</span>
          Why this view
        </button>
      </div>

      {/* Watch today — always visible */}
      <BriefSection label="Watch today">
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {brief.watchlist.map((item, i) => (
            <span key={i} className="text-sm text-text-primary">
              {item.time && (
                <span className="text-text-muted mr-1.5" style={{ fontVariantNumeric: 'tabular-nums' }}>{item.time}</span>
              )}
              {item.label}
            </span>
          ))}
        </div>
      </BriefSection>

    </div>
  )
}
