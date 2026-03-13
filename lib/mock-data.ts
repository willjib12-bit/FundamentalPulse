import { DailyBrief } from './types'

export const MOCK_XAUUSD: DailyBrief = {
  market: 'XAUUSD',
  marketLabel: 'Gold',
  sessionDate: '2026-03-09',
  updatedAt: '2026-03-09T07:30:00Z',
  bias: 'bullish',
  confidence: 'medium',
  summary:
    'Gold holds a constructive bias as dollar momentum softens and real yields stabilize lower. The main near-term risk is stronger-than-expected US inflation data shifting rate expectations higher.',
  drivers: [
    'DXY losing short-term momentum',
    'Real yields no longer pushing higher',
    'Defensive demand still supportive',
  ],
  risks: [
    'Hot CPI revives rate hike fears',
    'Sharp rebound in yields',
    'USD strength returns into US session',
  ],
  invalidation:
    'Bias weakens if the dollar and yields both reclaim upside momentum after data.',
  watchlist: [
    { label: 'US CPI', time: '14:30' },
    { label: 'Fed Speaker — Waller', time: '16:00' },
    { label: '10Y Treasury Auction', time: '19:00' },
  ],
  deeperContext: {
    driversDetail:
      'The dollar index has pulled back from recent highs after softer labor data last week. This eases one of the primary headwinds for gold. Meanwhile, the 10Y real yield has stabilized around 1.85%, no longer rising aggressively — which removes the main drag on non-yielding assets. Central bank gold buying from China and emerging markets continues to provide a structural floor.',
    risksDetail:
      'Today\'s CPI release is the key risk event. A core CPI print above 0.3% m/m would likely trigger a repricing of rate cut expectations, pushing yields and the dollar higher — both directly bearish for gold. Secondary risk is a hawkish surprise from Fed speaker Waller, who has recently leaned toward patience on cuts.',
    confidenceRationale:
      'Confidence is medium rather than high because while the directional setup is supportive, the CPI release today creates meaningful binary risk. If inflation comes in cool, confidence would move to high. If hot, the bias itself could flip.',
    intermarketNote:
      'Watch DXY and US 10Y yields as the two most directly correlated drivers. A simultaneous move higher in both would be the clearest invalidation signal.',
  },
}
