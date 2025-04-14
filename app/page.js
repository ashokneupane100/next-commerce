'use client'

import { useState } from "react"

function Card({ children }) {
  return (
    <div className="border rounded-md border-gray-600 p-4">
      {children}
    </div>
  )
}

export default function Home() {
  const [isVisible, setIsVisible] = useState(true)
  const name = 'Ashok'
  const handleClick = () => {
    setIsVisible(!isVisible)
    
  }
  



  return (
    <>
      <div className="p-20 space-y-4">
        <div>Hello, {name}</div>
        {isVisible && <><Card>This is being passed from the parent.</Card></>}
      

        <button onClick={handleClick}>{isVisible ? "Hide" :"Show"}</button>
      </div>
    </>
  )
}