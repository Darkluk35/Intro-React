import { useState } from 'react'

const TweetForm = ({ addTweet }) => {
  const [content, setContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!content.trim()) return
    addTweet(content)
    setContent('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder='¿Qué está pasando?'
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type='submit'>Twittear</button>
    </form>
  )
}

export default TweetForm
