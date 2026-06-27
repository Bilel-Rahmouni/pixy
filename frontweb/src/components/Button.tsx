import type { ReactNode, ButtonHTMLAttributes } from 'react'
import './Button.css'

type ButtonVariant = 'primary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  ...props
}: ButtonProps) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim()

  if (href) {
    return (
      <a href={href} className={classes}>
        <span className="btn__label">{children}</span>
        <span className="btn__arrow" aria-hidden="true">→</span>
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      <span className="btn__label">{children}</span>
      <span className="btn__arrow" aria-hidden="true">→</span>
    </button>
  )
}
