const TweetList = ({ tweets }) => {
  return (
    <ul>
      {tweets.map((tweet) => (
        <li key={tweet.id}>
          <strong>@{tweet.author}</strong>: {tweet.content}
        </li>
      ))}
    </ul>

  )
}

export default TweetList
