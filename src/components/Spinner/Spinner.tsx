import { Loader } from "lucide-react"
import React from "react"

import styles from "./Spinner.module.css"

export interface SpinnerProps {}

function Spinner({}: SpinnerProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading..."
      className={styles.wrapper}>
      <Loader size="48px" />
    </div>
  )
}

export default Spinner
