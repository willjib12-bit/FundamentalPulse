interface Props {
  label: string
  children: React.ReactNode
  className?: string
}

export default function BriefSection({ label, children, className = '' }: Props) {
  return (
    <div className={className}>
      <p className="text-[12px] font-medium tracking-label text-text-muted/80 mb-2.5">
        {label}
      </p>
      {children}
    </div>
  )
}
