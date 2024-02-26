import React from "react"
import Wrapper from "../components/dashboard/Wrapper"
import Budget from "../components/dashboard/Budget"
import DashboardTable from "../components/dashboard/DashboardTable"

export default function Home() {
  return (
    <div className='pt-[25px] px-[25px]'>
      <Wrapper />
      <Budget />
      <DashboardTable />
    </div>
  )
}
