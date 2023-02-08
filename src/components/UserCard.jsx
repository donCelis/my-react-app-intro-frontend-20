const UserCard = ({ name, validate, age }) => {
  return (
    <article>
      <h2>{name}</h2>
      <p>{validate ? '🤣' : '🥲'}</p>
      <p>{age <= 18 ? 'puede entrar' : 'no puede entrar'}</p>
      {age && <p>{age}</p>}
      <p>{age}</p>
    </article>
  )
}

export default UserCard
