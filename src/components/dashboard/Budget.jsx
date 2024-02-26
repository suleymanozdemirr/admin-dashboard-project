import { CgMoreVerticalAlt } from "react-icons/cg"
import { CiSquareCheck } from "react-icons/ci"
import Deposit from "./Deposit"

export const budget = [
  {
    id: 19,
    title: "Subscriptions",
    type: "Automated",
    amount: 22000,
  },
  {
    id: 20,
    title: "Loan Payment",
    type: "Automated",
    amount: 16000,
  },
  {
    id: 21,
    title: "Foodstuff",
    type: "Automated",
    amount: 20000,
  },
  {
    id: 22,
    title: "Subscriptions",
    type: null,
    amount: 10000,
  },
  {
    id: 23,
    title: "Subscriptions",
    type: null,
    amount: 40000,
  },
]

export default function Budget() {
  return (
    <div className='grid grid-cols-3 gap-[25px] mt-[25px] pb-[15px]'>
      <div className='h-full bg-white rounded-lg px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
        <div className='flex items-center justify-between mt-3'>
          <h3 className='text-lg font-normal'>Budget</h3>
          <div className='rounded-full p-2 hover:bg-slate-100'>
            <CgMoreVerticalAlt size={20} />
          </div>
        </div>
        <div className='flex items-center justify-between mt-3'>
          <h2 className='text-2xl font-medium'>Cash</h2>
          <span className='text-2xl font-medium'>$ 100,000</span>
        </div>
        <div className='mt-4 rounded-md p-2 bg-slate-100 mb-4'>
          {budget.map((budget) => (
            <div
              className='flex items-center justify-between mb-4'
              key={budget.id}
            >
              <div className='flex items-start justify-center gap-x-4'>
                <CiSquareCheck size={20} />
                <p className='font-medium'>
                  {budget.title}
                  <span className='font-light text-sm block mt-1 opacity-90'>
                    {budget.type}
                  </span>
                </p>
              </div>
              <span className='mb-4'>$ {budget.amount}</span>
            </div>
          ))}
        </div>
      </div>
      <Deposit />
    </div>
  )
}
