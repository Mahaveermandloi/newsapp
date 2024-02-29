import React from "react";
import defaultImage from "../assets/news.jpg";

const NewsCard = ({ title, description, src, url, pubDate, source }) => {
  return (
    <section className="p-5">
      <div className="max-w-sm rounded overflow-hidden shadow-xl h-full  hover:shadow-2xl ">
        {src ? (
          <img className="w-full h-40 object-cover" src={src} alt="News" />
        ) : (
          <img
            className="w-full h-40 object-cover"
            src={defaultImage}
            alt="Default News"
          />
        )}
        <div className="px-6 py-4 h-48">
          <div className="font-bold text-xl mb-2 overflow-hidden whitespace-nowrap overflow-ellipsis">
            {title}
          </div>

          <p className="text-xs my-3">
            Source: <span className="text-red-600">{source}</span>
            <br />
            Published At: <span className="text-red-600 ">{pubDate}</span>
          </p>

          <p className="text-gray-700 text-base overflow-hidden h-20">
            {description}
          </p>
        </div>
        <div className="px-6 my-4 ">
          <a href={url} className="text-blue-500">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsCard;
