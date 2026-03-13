import { DemoAnimatedBriefCard } from '@/components/DemoAnimatedBriefCard'
import FAQSection from '@/components/FAQSection'
import EmailSignupForm from '@/components/EmailSignupForm'

export default function Home() {
  return (
    <div className="min-h-screen bg-landing-bg">
      
      {/* Hero section */}
      <section className="relative px-8 py-12 sm:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-display text-[13px] font-medium tracking-[0.12em] text-landing-text-muted mb-8">
            Fundamental Pulse
          </p>
          <h1 className="font-display text-[clamp(38px,6.2vw,58px)] font-semibold tracking-[-0.05em] leading-[1.04] text-landing-text mb-6">
            Start the session with a clear fundamental bias, not a guess.
          </h1>
          <p className="font-sans text-[17px] leading-[1.65] text-landing-text-secondary max-w-2xl mx-auto mb-6">
            Most traders don't start the day without macro input. They start it with too much of it, and still no clear bias. Sometimes the bias has already shifted five times before the session even starts.
          </p>
          <p className="font-sans text-[17px] leading-[1.65] text-landing-text-secondary max-w-lg mx-auto mb-8">
            Get a faster, clearer fundamental bias for the asset you trade before the session starts.
          </p>
          <EmailSignupForm variant="primary" />
        </div>
      </section>

      {/* What you get section */}
      <section className="relative px-8 py-16 border-t border-landing-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-[clamp(24px,4vw,32px)] font-semibold tracking-[-0.04em] leading-[1.08] text-landing-text mb-6">
            In seconds, you get
          </h2>
          <p className="font-sans text-[17px] leading-[1.65] text-landing-text-secondary mb-5">
            a clear bias, a confidence level, the biggest risk to the view, and one anchor that grounds the session.
          </p>
          <p className="font-sans text-[17px] leading-[1.65] text-landing-text-secondary italic">
            Not a signal tool. Just a clearer starting point before you trade.
          </p>
        </div>
      </section>

      {/* Mockup intro section */}
      <section className="relative px-8 py-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-[clamp(22px,3.5vw,28px)] font-semibold tracking-[-0.04em] leading-[1.08] text-landing-text mb-6">
            Here's what that looks like
          </h2>
        </div>
      </section>

      {/* Product mockup hero */}
      <section className="relative px-8 pb-24">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Subtle ambient glow */}
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-landing-accent/[0.02] to-transparent blur-lg" />
            
            {/* Clean frame */}
            <div
              className="relative rounded-2xl border border-landing-border/80 bg-landing-surface shadow-[0_0_0_1px_rgba(0,0,0,0.02),0_2px_8px_-2px_rgba(0,0,0,0.04),0_8px_24px_-4px_rgba(0,0,0,0.06),0_16px_48px_-8px_rgba(0,0,0,0.08)]"
            >
              {/* Screen bezel effect */}
              <div className="absolute inset-0 rounded-2xl border border-black/[0.06] pointer-events-none" />
              
              {/* Dark wrapper for mockup */}
              <div className="rounded-2xl overflow-hidden bg-surface p-1">
                <DemoAnimatedBriefCard />
              </div>
            </div>
            
            {/* Very subtle reflection */}
            <div 
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-1/6 bg-gradient-to-b from-white/[0.02] to-transparent rounded-t-2xl pointer-events-none"
              style={{ maskImage: 'linear-gradient(to bottom, black, transparent)' }}
            />
          </div>
        </div>
      </section>

      {/* Why it's different section */}
      <section className="relative px-8 py-16 border-t border-landing-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-[clamp(24px,4vw,32px)] font-semibold tracking-[-0.04em] leading-[1.08] text-landing-text mb-6">
            Why it's different
          </h2>
          <p className="font-sans text-[17px] leading-[1.65] text-landing-text-secondary mb-4">
            Instead of giving you another layer of macro complexity, it turns what matters into a clearer bias before the session starts.
          </p>
          <p className="font-sans text-[17px] leading-[1.65] text-landing-text-secondary italic">
            Fundamental Pulse is built to clarify the context, not fake certainty.
          </p>
        </div>
      </section>

      {/* FAQ section */}
      <section className="relative px-8 py-16 border-t border-landing-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-[clamp(24px,4vw,32px)] font-semibold tracking-[-0.04em] leading-[1.08] text-landing-text mb-8">
            Frequently Asked Questions
          </h2>
          <FAQSection />
        </div>
      </section>

      {/* Final CTA section */}
      <section className="relative px-8 py-20 border-t border-landing-border">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-[clamp(28px,4vw,40px)] font-semibold tracking-[-0.04em] leading-[1.08] text-landing-text mb-8">
            Join early access and start the session with a clearer fundamental bias.
          </h2>
          <p className="font-sans text-[15px] leading-[1.65] text-landing-text-muted mb-8">
            Built for traders who want a clearer starting point before the session. No spam, no signal promises.
          </p>
          <EmailSignupForm variant="secondary" />
        </div>
      </section>

    </div>
  )
}
