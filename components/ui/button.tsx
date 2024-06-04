import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 select-none',
  {
    variants: {
      variant: {
        default:
          'border border-transparent bg-slate-900 text-slate-50 hoverable:hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hoverable:hover:bg-slate-50/90',
        destructive:
          'border border-transparent bg-red-500 text-slate-50 hoverable:hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hoverable:hover:bg-red-900/90',
        outline:
          'border border-slate-200 bg-white hoverable:hover:bg-slate-100 hoverable:hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hoverable:hover:bg-slate-800 dark:hoverable:hover:text-slate-50',
        secondary:
          'border border-transparent bg-slate-100 text-slate-900 hoverable:hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hoverable:hover:bg-slate-800/80',
        ghost:
          'border border-transparent hoverable:hover:bg-slate-100 hoverable:hover:text-slate-900 dark:hoverable:hover:bg-slate-800 dark:hoverable:hover:text-slate-50 dark:data-[state=open]:text-slate-50 dark:data-[state=open]:bg-slate-800 data-[state=open]:text-slate-900 data-[state=open]:bg-slate-100',
        link: 'border border-transparent text-slate-900 underline-offset-4 hoverable:hover:underline dark:text-slate-50',
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
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
