'use client'

import { useState } from 'react'

interface FormState {
  status: 'idle' | 'submitting' | 'success' | 'error'
  message: string
}

export function EmailSignupForm({ variant = 'primary' }: { variant?: 'primary' | 'secondary' }) {
  const [email, setEmail] = useState('')
  const [formState, setFormState] = useState<FormState>({ status: 'idle', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!email.trim()) {
      setFormState({ status: 'error', message: 'Email required' })
      return
    }
    
    if (!email.includes('@') || !email.includes('.')) {
      setFormState({ status: 'error', message: 'Invalid email' })
      return
    }

    setFormState({ status: 'submitting', message: '' })

    try {
      const formData = new FormData()
      formData.append('email', email)

      const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || '', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      })

      if (response.ok) {
        setFormState({ status: 'success', message: 'Thanks! You\'re on the list.' })
        setEmail('')
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      setFormState({ status: 'error', message: 'Something went wrong. Try again.' })
    }
  }

  const buttonStyles = variant === 'primary' 
    ? 'font-sans px-7 py-3 rounded-lg bg-landing-accent text-white font-medium hover:bg-landing-accent/95 hover:shadow-lg hover:shadow-landing-accent/25 active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100'
    : 'font-sans px-7 py-3 rounded-lg bg-landing-accent text-white font-medium hover:bg-landing-accent/95 hover:shadow-lg hover:shadow-landing-accent/25 active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100'

  const containerStyles = variant === 'primary'
    ? 'flex flex-col sm:flex-row gap-3 justify-center max-w-sm mx-auto'
    : 'flex flex-col sm:flex-row gap-4 justify-center max-w-sm mx-auto'

  return (
    <form onSubmit={handleSubmit} className={containerStyles}>
      <div className="flex-1">
        <input 
          type="email" 
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={formState.status === 'submitting' || formState.status === 'success'}
          className="font-sans w-full px-5 py-3 rounded-lg border border-landing-border bg-landing-surface text-landing-text placeholder-landing-text-muted focus:outline-none focus:ring-2 focus:ring-landing-accent/20 focus:border-landing-accent transition-all duration-200 disabled:opacity-50"
        />
      </div>
      <button 
        type="submit"
        disabled={formState.status === 'submitting' || formState.status === 'success'}
        className={buttonStyles}
      >
        {formState.status === 'submitting' ? 'Joining...' : 'Join early access'}
      </button>
      
      {/* Form feedback */}
      {formState.message && (
        <div className={`w-full text-center text-sm mt-2 ${
          formState.status === 'success' 
            ? 'text-green-600' 
            : 'text-red-600'
        }`}>
          {formState.message}
        </div>
      )}
    </form>
  )
}
