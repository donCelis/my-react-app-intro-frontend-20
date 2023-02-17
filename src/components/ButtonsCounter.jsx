import { useState } from 'react'

const ButtonsCounter = ({ count }) => {
  const MIN_VALUE = 1
  const CERO = 0
  const [value, setValue] = useState(count !== CERO ? MIN_VALUE : CERO)

  return (
    <div className='d-flex align-items-center gap-3 my-3'>
      <button className='btn btn-primary' onClick={() => value > MIN_VALUE && setValue(value - 1)}>-</button>
      <p className='m-0'>{value}</p>
      <button className='btn btn-primary' onClick={() => count > value && setValue(value + 1)}>
        +
      </button>
      <button disabled={value === 0} className='btn btn-success'>Agregar</button>
    </div>
  )
}

export default ButtonsCounter
