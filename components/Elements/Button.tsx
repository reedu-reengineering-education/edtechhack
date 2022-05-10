import clsx from 'clsx'
import * as React from 'react'

import { Spinner } from '@/components/Elements/Spinner'

const variants = {
  primary: 'bg-mango-500 text-black hover:bg-mango-600',
  inverse: 'bg-white text-blue-600 hover:bg-blue-600:text-white',
  danger: 'bg-red-600 text-white hover:bg-red-50:text-red-600',
}

const sizes = {
  sm: 'py-3 px-6 text-sm',
  md: 'py-4 px-8 text-md',
  lg: 'py-6 px-10 text-lg',
}

type IconProps =
  | { startIcon: React.ReactElement; endIcon?: never }
  | { endIcon: React.ReactElement; startIcon?: never }
  | { endIcon?: undefined; startIcon?: undefined }

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  isLoading?: boolean
} & IconProps

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'button',
      className = '',
      variant = 'primary',
      size = 'md',
      isLoading = false,
      startIcon,
      endIcon,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={clsx(
          'flex items-center justify-center rounded-full font-medium shadow hover:shadow-lg focus:outline-none disabled:cursor-not-allowed disabled:opacity-70',
          variants[variant],
          sizes[size],
          className,
        )}
        {...props}
      >
        {isLoading && <Spinner size="sm" className="text-current" />}
        {!isLoading && startIcon}
        <span className="mx-2">{props.children}</span> {!isLoading && endIcon}
      </button>
    )
  },
)

Button.displayName = 'Button'
