import { Bias, Confidence } from '@/lib/types'

const biasConfig = {
  bullish: {
    label: 'Bullish',
    arrow: '↑',
    color: 'text-bias-bullish',
    bg: 'bg-bias-bullish/8',
    border: 'border-bias-bullish/15',
    glow: 'shadow-[0_0_20px_rgba(34,197,94,0.06)]',
  },
  bearish: {
    label: 'Bearish',
    arrow: '↓',
    color: 'text-bias-bearish',
    bg: 'bg-bias-bearish/8',
    border: 'border-bias-bearish/15',
    glow: 'shadow-[0_0_20px_rgba(239,68,68,0.06)]',
  },
  neutral: {
    label: 'Neutral',
    arrow: '→',
    color: 'text-bias-neutral',
    bg: 'bg-bias-neutral/8',
    border: 'border-bias-neutral/15',
    glow: '',
  },
}

const confidenceConfig = {
  high: { label: 'High confidence', color: 'text-confidence-high' },
  medium: { label: 'Medium confidence', color: 'text-confidence-medium' },
  low: { label: 'Low confidence', color: 'text-confidence-low' },
}

interface Props {
  bias: Bias
  confidence: Confidence
}

export default function BiasIndicator({ bias, confidence }: Props) {
  const b = biasConfig[bias]
  const c = confidenceConfig[confidence]

  return (
    <div className="flex items-center gap-5">
      <div className={`inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg border ${b.bg} ${b.border} ${b.glow}`}>
        <span className={`text-[13px] ${b.color} opacity-50`}>{b.arrow}</span>
        <span className={`text-[28px] font-semibold tracking-[-0.02em] ${b.color}`}>
          {b.label}
        </span>
      </div>
      <span className={`text-[13px] tracking-label ${c.color}`}>
        {c.label}
      </span>
    </div>
  )
}
