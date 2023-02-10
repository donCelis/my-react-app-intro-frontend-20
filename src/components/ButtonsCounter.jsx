import { useState } from 'react'

const ButtonsCounter = ({ count }) => {
  const [value, setValue] = useState(0)

  return (
    <div className='d-flex align-items-center gap-3 my-3'>
      <button className='btn btn-primary' onClick={() => value !== 0 && setValue(value - 1)}>-</button>
      <p className='m-0'>{value}</p>
      <button className='btn btn-primary' onClick={() => count > value && setValue(value + 1)}>
        +
      </button>
      <button disabled={value === 0} className='btn btn-success'>Comprar</button>
    </div>
  )
}

export default ButtonsCounter
