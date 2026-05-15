import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
}

const variants = {
  primary: 'bg-[#238000] text-white shadow-lg shadow-[#238000]/25 hover:bg-[#1f7000]',
  secondary:
    'border border-[#b8e69a] bg-white text-slate-900 hover:border-[#a9f56f] hover:text-[#1f7000] dark:border-[#1d6200] dark:bg-slate-900 dark:text-white',
  ghost: 'text-slate-700 hover:bg-[#d7f5c8] dark:text-slate-200 dark:hover:bg-[#145000]/50',
}

export function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold transition duration-200 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
