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
  //const btnClass = variant
  return (
    <button
      className={clsx(className, styles.wrapper, styles[variant])}
      {...rest}>
      {children}
    </button>
  )
}

export default Button
