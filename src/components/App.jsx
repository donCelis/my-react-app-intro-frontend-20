import '../styles/App.css'
import UserCard from './UserCard'

function App () {
  return (
    <div className='App'>
      <h1>Aplicación en React</h1>
      <UserCard name='Carlos' />
      <UserCard name='Angelica' />
      <UserCard name='Cesar' />
    </div>
  )
}

export default App
