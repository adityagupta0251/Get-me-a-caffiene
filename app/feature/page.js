"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog } from "@headlessui/react"
import Link from "next/link"

export default function MyComponent() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedFeature, setSelectedFeature] = useState(null)


  return (
    <h1 className="pt-200px">Subscribed to</h1>
  )
}
