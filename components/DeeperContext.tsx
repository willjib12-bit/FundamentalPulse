'use client'

import { useState } from 'react'
import { DeeperContext as DeeperContextType } from '@/lib/types'

interface Props {
  context: DeeperContextType
}

export default function DeeperContext({ context }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-t border-surface-border pt-5">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-[12px] font-medium tracking-label text-text-muted/80 hover:text-text-secondary transition-colors"
      >
        <span
          className="inline-block transition-transform duration-200"
          style={{ transform: open ? 'rotate(90deg)' : 'rotate(0deg)' }}
        >
          ▸
        </span>
        Deeper context
      </button>

      {open && (
        <div className="mt-4 space-y-5">
          <div>
            <p className="text-[12px] font-medium tracking-label text-text-muted/80 mb-1.5">
              Why this bias
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              {context.driversDetail}
            </p>
          </div>
          <div>
            <p className="text-[12px] font-medium tracking-label text-text-muted/80 mb-1.5">
              Risk detail
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              {context.risksDetail}
            </p>
          </div>
          <div>
            <p className="text-[12px] font-medium tracking-label text-text-muted/80 mb-1.5">
              Confidence rationale
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              {context.confidenceRationale}
            </p>
          </div>
          {context.intermarketNote && (
            <div>
              <p className="text-[12px] font-medium tracking-label text-text-muted/80 mb-1.5">
                Intermarket note
              </p>
              <p className="text-sm text-text-secondary leading-relaxed">
                {context.intermarketNote}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
