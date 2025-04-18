import React, { useEffect, useState } from "react";

function Home() {
  const [metrics, setMetrics] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/metrics")
      .then((response) => response.json())
      .then((data) => setMetrics(data))
      .catch((error) => console.error("Error fetching metrics:", error));
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
