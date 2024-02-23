import React from "react"
import Cards from "./Cards"
import Transactions from "./Transactions"

export default function Wrapper() {
  return (
    <div className='grid gap-y-5'>
      <div className='flex grid-cols-1 gap-x-1'>
        <Cards />
        <Transactions />
      </div>
    </div>
  )
}
