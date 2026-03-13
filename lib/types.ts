export type Bias = 'bullish' | 'bearish' | 'neutral'
export type Confidence = 'low' | 'medium' | 'high'

export interface WatchlistItem {
  label: string
  time?: string
}

export interface DeeperContext {
  driversDetail: string
  risksDetail: string
  confidenceRationale: string
  intermarketNote?: string
}

export interface DailyBrief {
  market: string
  marketLabel: string
  sessionDate: string
  updatedAt: string
  bias: Bias
  confidence: Confidence
  summary: string
  drivers: string[]
  risks: string[]
  invalidation: string
  watchlist: WatchlistItem[]
  deeperContext: DeeperContext
}
