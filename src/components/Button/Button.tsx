import React, { ComponentProps } from "react"

import styles from "./Button.module.css"

export interface ButtonProps extends ComponentProps<"button"> {
  variant?: "filled" | "outline"
}

function Button({ variant = "filled", children }: ButtonProps) {
  return <button className={styles.wrapper}>{children}</button>
}

export default Button
