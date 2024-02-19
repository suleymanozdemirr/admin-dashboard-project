// taskın altına input eklemek için kullanılan component
// Bu component, InputCard componentini kullanarak, taskın altına input eklemek için kullanılır.
import Collapse from "@mui/material/Collapse"
import InputCard from "./InputCard"
import { useState } from "react"

export default function InputContainer({ columnId, type }) {
  const [open, setOpen] = useState(false)
  return (
    <div className='w-full max-w-[300px] mr-2'>
      <Collapse in={open}>
        <InputCard setOpen={setOpen} columnId={columnId} type={type} />
      </Collapse>
      <Collapse in={!open}>
        <div className='w-full max-w-[300px] rounded-md bg-gray-200 py-2 px-0 opacity-80'>
          <button
            className='cursor-pointer bg-none w-full p-2 border-none m-auto text-left text-sm hover:bg-zinc-300'
            onClick={() => setOpen((prev) => !prev)}
          >
            {type === "card" ? "+ Add Card" : "Add List"}
          </button>
        </div>
      </Collapse>
    </div>
  )
}
