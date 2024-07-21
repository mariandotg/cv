import { type SlotProps } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '../../lib/utils'
import { SlotString } from 'astro/runtime/server/render/slot.js'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function injectClassOnSlotString(
  children: React.ReactElement,
  className: string,
): SlotString {
  console.log('injectClassOnSlotString: ', children.props)
  const stringValue: string = children.props.toString()
  console.log(stringValue)
  const index = stringValue.indexOf('>\n')

  const modifiedValue =
    index !== -1
      ? stringValue.slice(0, index) +
        ` class="${className}">\n` +
        stringValue.slice(index + 2)
      : stringValue

  console.log(modifiedValue.toString())
  return new SlotString(modifiedValue, null)
}

const Slot: React.FunctionComponent<SlotProps> = (props) => {
  const { children, className } = props
  if (!React.isValidElement(children)) {
    console.log('no valid children')
    return
  }
  // If it's called inside a React component
  if (children.props.children !== undefined) {
    console.log('valid children')
    //@ts-ignore
    return React.cloneElement(children, { className })
  }

  console.log('LOOOOL')
  // If it's called inside a Astro component(or page)
  const newValue = injectClassOnSlotString(children, className || '')
  const newChildren = {
    ...children,
    props: { ...children.props, value: newValue },
  }
  return React.cloneElement(newChildren)
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    // console.log(props.children)
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
