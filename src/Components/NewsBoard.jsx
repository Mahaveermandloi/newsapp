import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category, country }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);

      try {
        let url = "";
      

        if (country) {
          category = null;
          // Set category to null
          // If only country is selected
          url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=e1cc7ca5a45043ec87132b6286f12e24`;
        } else {
          country = null;
          // Set country to null
          // If only category is selected or neither is selected
          url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=e1cc7ca5a45043ec87132b6286f12e24`;
        }
        

        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch news");
        }

        if (data.articles.length === 0) {
          throw new Error("No news articles found");
        }

        setArticles(data.articles);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category, country]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2 className="text-center text-5xl p-5 font-semibold">Latest News</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:ml-14">
        {articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
            pubDate={news.publishedAt}
            source={news.source.name}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;
