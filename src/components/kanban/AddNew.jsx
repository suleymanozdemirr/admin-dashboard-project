import { useState } from "react"

export default function AddNew() {
  const [inputVal, setInputVal] = useState("")
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(inputVal)
  }
  const updateInput = (e) => {
    setInputVal(e.target.value)
  }
  return (
    <div>
      <button>+ Add New</button>
      <form onSubmit={submitHandler}>
        <input value={inputVal} onChange={updateInput} />
        <button>Save</button>
      </form>
    </div>
  )
}
