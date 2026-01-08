export default function TweetCard({ tweet }) {
  return (
    <div className="border p-4 rounded shadow mb-2">
      <p><strong>{tweet.username} ({tweet.handle})</strong></p>
      <p>{tweet.content}</p>
      <p>Retweets: {tweet.retweets} | Likes: {tweet.likes}</p>
    </div>
  );
}
