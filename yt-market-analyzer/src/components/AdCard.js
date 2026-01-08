export default function AdCard({ ad }) {
  return (
    <div className="border p-4 rounded shadow mb-2">
      <p>Type: {ad.type}</p>
      <p>Started: {ad.started_date}</p>
      <p>{ad.ad_content_visible}</p>
      {ad.media_link && <a href={ad.media_link} target="_blank" className="text-blue-600">View Media</a>}
    </div>
  );
}
