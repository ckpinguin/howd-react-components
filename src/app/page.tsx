"use client"
import React from "react"

import Button from "@/components/Button"
import Card from "@/components/Card"
import Spinner from "@/components/Spinner"

export default function Home() {
  return (
    <main>
      <Card textColor="#000000" backgroundColor="#c8c6c6">
        <p>
          This is just a test. A rather short one by the way. And now with a bit
          more text, that should brake the lines.
        </p>
      </Card>
      <Spinner />
      <Button variant="filled">Filled</Button>
      <Button variant="outline">Outline</Button>
    </main>
  )
}
