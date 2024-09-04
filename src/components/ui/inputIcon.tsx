import * as React from "react"

import { cn } from "@/lib/utils"
import IconWrapper from "../IconWrapper"
import { BsSearch } from "react-icons/bs"
import { IconType } from "react-icons/lib"
import { Button } from "./button"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  Icon: IconType
}

const InputIcon = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, Icon, ...props }, ref) => {
    return (
      <div className='h-14 w-full bg-[#F4F6FE] px-5 flex items-center justify-between'>
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md b-0 bg-[#F4F6FE] outline-none",
            className
          )}
          ref={ref}
          {...props}
        />
        <Button type="submit" variant={'ghost'}>
          <IconWrapper>
            <Icon />
          </IconWrapper>
        </Button>
      </div>
    )
  }
)
InputIcon.displayName = "InputIcon"

export { InputIcon }
