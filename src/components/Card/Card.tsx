import clsx from "clsx/lite"
import React, { ComponentProps } from "react"

import styles from "./Card.module.css"

export interface CardProps extends ComponentProps<"article"> {
  textColor: string
  backgroundColor: string
}

function Card({
  textColor,
  backgroundColor,
  children,
  className,
  ...rest
}: CardProps) {
  return (
    <article className={clsx(styles.wrapper, className)} {...rest}>
      {children}
    </article>
  )
}

export default Card
