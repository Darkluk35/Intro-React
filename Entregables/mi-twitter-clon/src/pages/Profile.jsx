const Profile = ({ user }) => {
  return (
    <div>
      <h1>Perfil</h1>
      <p>Usuario: {user.username}</p>
      <p>Aquí podrías mostrar más información del perfil...</p>
    </div>
  )
}

export default Profile
