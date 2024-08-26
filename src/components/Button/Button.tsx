import clsx from "clsx/lite"
import React, { ComponentProps } from "react"

import styles from "./Button.module.css"

export interface ButtonProps extends ComponentProps<"button"> {
  variant?: "filled" | "outline"
}

function Button({
  variant = "filled",
  children,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button className={clsx(className, styles.wrapper)} {...rest}>
      {children}
    </button>
  )
}

export default Button
