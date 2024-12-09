import { type VariantProps, cva } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"
import { Button as BaseButton } from "@/app/components/ui/button"
import { Slot } from "@radix-ui/react-slot"

const buttonVariants = cva(
  "font-medium rounded-lg hover:opacity-80 active:opacity-100 hover:bg-inherity",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-red text-white py-[0.488rem] px-[0.97606rem]",
        outline: "bg-[rgb(198_0_0_/0.1)] text-white border-2 border-primary-red",
      },
      size: {
        sm: "h-8 px-[13px]",
        md: "h-12 px-[19px]",
        lg: "h-16 px-[25px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  }
)

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean
  asChild?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size, variant, asChild = false, loading, children, ...props }, ref) => {
    const Comp = asChild ? Slot : BaseButton

    return (
      <Comp
        ref={ref}
        {...props}
        disabled={props.disabled || loading}
        className={cn(buttonVariants({ variant, size }), className)}
      >
        {children}
      </Comp>
    )
  }
)

Button.displayName = "Button"