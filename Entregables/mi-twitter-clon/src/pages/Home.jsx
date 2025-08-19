import TweetForm from '../components/TweetForm'
import TweetList from '../components/TweetList'
import { useState, useEffect } from 'react'
const Home = ({ user }) => {
  const [tweets, setTweets] = useState([])

  // 1️⃣ Cargar tweets desde localStorage al iniciar
  useEffect(() => {
    const storedTweets = localStorage.getItem('tweets')
    if (storedTweets) {
      setTweets(JSON.parse(storedTweets))
    }
  }, [])

  // 2️⃣ Guardar tweets en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem('tweets', JSON.stringify(tweets))
  }, [tweets])

  const addTweet = (content) => {
    if (!user) return alert('Debes iniciar sesión para twittear.')
    const newTweet = { id: Date.now(), author: user.username, content }
    setTweets([newTweet, ...tweets]) // se actualiza el estado
    // 👆 ya no necesitas llamar manualmente a localStorage aquí
    // porque el useEffect lo hará cada vez que cambien los tweets
  }

  return (
    <div>
      <h1>Inicio</h1>
      {user && <TweetForm addTweet={addTweet} />}
      <TweetList tweets={tweets} />
    </div>
  )
}

export default Home
