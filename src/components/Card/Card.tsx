import React, { ComponentProps } from "react"

import styles from "./Card.module.css"

export interface CardProps extends ComponentProps<"article"> {
  textColor: string
  backgroundColor: string
}

function Card({ textColor, backgroundColor, children }: CardProps) {
  return <article className={styles.wrapper}>{children}</article>
}

export default Card
