'use client'

import { useState } from 'react'
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
  expanded?: boolean
}

export default function BriefCard({ brief, expanded: externalExpanded }: Props) {
  const [internalExpanded, setInternalExpanded] = useState(false)
  const expanded = externalExpanded !== undefined ? externalExpanded : internalExpanded
  const setExpanded = externalExpanded !== undefined ? () => {} : setInternalExpanded

  const sessionDate = new Date(brief.sessionDate).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  })

  const bias = biasColors[brief.bias]
  const confColor = confidenceColors[brief.confidence]
  const biasLabel = brief.bias.charAt(0).toUpperCase() + brief.bias.slice(1)
  const confLabel = brief.confidence.charAt(0).toUpperCase() + brief.confidence.slice(1)

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

      {/* Bias block — large centered when closed, compact inline when open */}
      <div className="transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
        {!expanded ? (
          <div className="flex flex-col items-center py-6">
            <div 
              className={`flex items-center gap-3 px-8 py-4 rounded-xl border ${bias.bg} ${bias.border} transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]`}
              style={{
                background: `linear-gradient(135deg, ${bias.bg.replace('/8', '/12')} 0%, ${bias.bg} 100%)`,
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 1px 3px rgba(0,0,0,0.1)',
              }}
            >
              <span className={`text-[18px] ${bias.text} opacity-30 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]`}>{bias.arrow}</span>
              <span className={`text-[40px] font-semibold tracking-[-0.03em] leading-none ${bias.text} transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]`}>
                {biasLabel}
              </span>
            </div>
            <p className={`mt-3 text-[13px] tracking-label ${confColor} transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]`}>
              {confLabel} confidence
            </p>
          </div>
        ) : (
          <div className="flex items-center gap-4 py-2">
            <div 
                className={`flex items-center gap-2 px-4 py-1.5 rounded-lg border ${bias.bg} ${bias.border} transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]`}
                style={{
                  background: `linear-gradient(135deg, ${bias.bg.replace('/8', '/12')} 0%, ${bias.bg} 100%)`,
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 1px 3px rgba(0,0,0,0.1)',
                }}
              >
                <span className={`text-[12px] ${bias.text} opacity-30 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]`}>{bias.arrow}</span>
              <span className={`text-[22px] font-semibold tracking-[-0.02em] leading-none ${bias.text} transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]`}>
                {biasLabel}
              </span>
            </div>
            <span className={`text-[13px] tracking-label ${confColor} transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]`}>
              {confLabel} confidence
            </span>
          </div>
        )}
      </div>

      {/* Summary — always visible */}
      <p className="text-[15px] leading-relaxed text-text-secondary">
        {brief.summary}
      </p>

      {/* Reasoning toggle */}
      <div className="border-t border-surface-border pt-4">
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-[12px] font-medium tracking-label text-text-muted/80 hover:text-text-secondary transition-colors"
        >
          <span
            className="text-[10px] inline-block transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
            style={{ transform: expanded ? 'rotate(90deg)' : 'rotate(0deg)' }}
          >
            ▸
          </span>
          View reasoning
        </button>

        {/* Expanded reasoning — drivers, risks, invalidation */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
            expanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className={`mt-5 space-y-5 ${expanded ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'} transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]`}>
            <BriefSection label="Drivers">
              <ul className="space-y-1.5">
                {brief.drivers.map((d, i) => (
                  <li key={i} className="text-sm text-text-primary flex items-start gap-2">
                    <span className="text-text-muted mt-0.5 shrink-0">·</span>
                    {d}
                  </li>
                ))}
              </ul>
            </BriefSection>

            <BriefSection label="Key risks">
              <ul className="space-y-1.5">
                {brief.risks.map((r, i) => (
                  <li key={i} className="text-sm text-text-primary flex items-start gap-2">
                    <span className="text-text-muted mt-0.5 shrink-0">·</span>
                    {r}
                  </li>
                ))}
              </ul>
            </BriefSection>

            <BriefSection label="Invalidation">
              <p className="text-sm text-text-secondary italic">
                {brief.invalidation}
              </p>
            </BriefSection>
          </div>
        </div>
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
