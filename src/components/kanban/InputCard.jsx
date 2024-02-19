// burada yeni bir kart veya liste eklemek için kullanılan bileşen bulunmaktadır.
// Bu bileşen, InputCard bileşenini kullanarak, yeni bir kart veya liste eklemek için kullanılır.
import React, { useState } from "react"
import { MdOutlineClear } from "react-icons/md"

export default function InputCard({ setOpen, columnId, type }) {
  const [title, setTitle] = useState("")
  return (
    <div className='bg-gray-200 p-16 rounded-md'>
      <div className='w-full m-auto'>
        <textarea
          className='w-full h-16 bg-white p-2 border-none text-base border-b-2 border-b-stone-300 resize-none'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={`Enter a title for this ${
            type === "card" ? "card" : "list"
          }`}
          autoFocus
        />
      </div>
      <div className='w-[268px] my-1 mx-auto flex items-center'>
        <button className='h-8 w-24 bg-neutral-600 cursor-pointer border-none rounded-lg text-white font-bold mr-2 hover:bg-blue-500'>
          {type === "card" ? "Add Card" : "Add List"}
        </button>
        <button className='bg-none border-none cursor-pointer button hover:text-blue-500 transition-colors duration-300'>
          <MdOutlineClear size={25} />
        </button>
      </div>
    </div>
  )
}
