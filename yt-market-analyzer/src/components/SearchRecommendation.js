export default function SearchRecommendations({ recommendations }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <h4 className="font-semibold">Google Recommendations</h4>
        <ul className="list-disc ml-5">
          {recommendations.google_recommendations.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold">People Also Ask</h4>
        <ul className="list-disc ml-5">
          {recommendations.people_also_ask.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold">YouTube Recommendations</h4>
        <ul className="list-disc ml-5">
          {recommendations.youtube_recommendations.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}
