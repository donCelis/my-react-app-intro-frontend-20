import { useState } from 'react'

const ButtonsCounter = () => {
  const [value, setValue] = useState(0)

  return (
    <div className='d-flex align-items-center gap-3 my-3'>
      <button className='btn btn-primary'>-</button>
      <p className='m-0'>{value}</p>
      <button className='btn btn-primary' onClick={() => setValue(value + 1)}>
        +
      </button>
    </div>
  )
}

export default ButtonsCounter
