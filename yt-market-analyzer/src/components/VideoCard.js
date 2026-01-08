export default function VideoCard({ title, video }) {
  return (
    <div className="border p-4 rounded shadow mb-4">
      <h3 className="text-xl font-bold">{title}</h3>
      <div className="flex space-x-4 mt-2">
        <img src={video.video_info.thumbnail} alt={title} className="w-48 rounded" />
        <div>
          <p><strong>Channel:</strong> {video.video_info.channel}</p>
          <p><strong>Published:</strong> {video.video_info.publishedAt}</p>
          <p><strong>Views:</strong> {video.video_stats.views}</p>
          <p><strong>Likes:</strong> {video.video_stats.likes}</p>
          <p><strong>Comments:</strong> {video.video_stats.comments}</p>
          <div className="mt-2">
            <h4 className="font-semibold">Market Analysis:</h4>
            <p>{video.market_analysis.slice(0, 300)}...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
