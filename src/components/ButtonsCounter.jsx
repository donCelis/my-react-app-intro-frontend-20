/* eslint-disable no-self-compare */
import { useEffect, useState } from 'react'

const ButtonsCounter = ({ count }) => {
  console.log('Render ButtonsCounter')
  const [value, setValue] = useState(0)
  const [isFav, setIsFav] = useState(false)

  /* ciclo de vida de un componente */
  /*
    Cargo el componente -> renderiza (montar)
    Cuando hago un cambio de estado -> se vuelve a renderizar el componente (actualizar)
    Cuando desmonto un componente -> ejecutar una función
  */

  /* esto se ejecuta cada que hay se carga el componente o se modifique un estado */
  // useEffect(() => {
  //   console.log('useEffect')
  //   setValue(1)
  // })

  /* esto solo se ejecuta cuando se carga el componente por primera vez */
  // useEffect(() => {
  //   console.log('useEffect')
  //   setValue(1)
  // }, [])

  /* esto se ejecuta la primera vez que se carga y cuando cambia un estado en concreto */
  /* en el arreglo de dependencias solo se pueden poner tipos primitivos */
  // useEffect(() => {
  //   console.log('useEffect')
  // }, [isFav])

  // console.log('boolean', true === true) // -> true
  // console.log('number', 1 === 1) // -> true
  // console.log('string', '' === '') // -> true
  // console.log('object', {} === {}) // -> false
  // console.log('array', [] === []) // -> false
  // console.log('null', null === null) // -> true
  // console.log('undefined', undefined === undefined) // -> true

  return (
    <div className='d-flex align-items-center gap-3 my-3'>
      <button className='btn btn-primary' onClick={() => value !== 0 && setValue(value - 1)}>-</button>
      <p className='m-0'>{value}</p>
      <button className='btn btn-primary' onClick={() => count > value && setValue(value + 1)}>
        +
      </button>
      <button disabled={value === 0} className='btn btn-success'>Comprar</button>
      <button className='btn btn-info' onClick={() => setIsFav(!isFav)}>{isFav ? '❤️' : '🤍'}</button>
    </div>
  )
}

export default ButtonsCounter
