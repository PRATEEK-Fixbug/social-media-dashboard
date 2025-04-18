import React, { useEffect, useState } from "react";

function Home() {
  const [metrics, setMetrics] = useState(null);

  useEffect(() => {
    fetch("https://social-media-dashboard-cyqa.onrender.com/api/metrics")
      .then((res) => res.json())
      .then((data) => setMetrics(data))
      .catch((err) => console.error("Failed to fetch metrics:", err));
  }, []);
  

  return (
    <div className="home-content">
      
      {metrics && (
        <div className="content-box">
          <h3>📈 Live Metrics</h3>
          <ul>
            <li>
              🐦 <strong>Twitter</strong> – Followers: {metrics.twitter.followers}, Tweets: {metrics.twitter.tweets}
            </li>
            <li>
              📺 <strong>YouTube</strong> – Subscribers: {metrics.youtube.subscribers}, Views: {metrics.youtube.views}
            </li>
            <li>
              📸 <strong>Instagram</strong> – Followers: {metrics.instagram.followers}, Posts: {metrics.instagram.posts}
            </li>
          </ul>
        </div>
      )}


<div className="content-box">
        <h2>📊 Current Use Case</h2>
        <p>
          This dashboard provides a real-time overview of your social media
          performance. It shows the number of followers, posts, views, and
          subscribers from Twitter, YouTube, and Instagram.
        </p>
      </div>

      <div className="content-box">
        <h2>🔮 Future Scope</h2>
        <p>
          This project can be extended to include analytics, sentiment analysis,
          cross-platform comparisons, AI-based recommendations, and more social
          platforms like TikTok and LinkedIn.
        </p>
      </div>
    </div>
  );
}

export default Home;
