import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "./NewsCard";

const today = new Date();
const currentDate =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

const Feed = (props) => {
  const [news, setNews] = useState([]);

  const getNews = () => {
    axios({
      url: "https://news-panel.herokuapp.com/get-news",
      method: "GET",
    }).then((res) => {
      setNews(res.data);
      console.log(res);
    });
  };
  console.log(currentDate);
  useEffect(() => {
    getNews();
  }, [props.fetchNews]);

  return (
    <div className="flex flex-wrap mt-[75px] mx-10">
      {news
        .filter((element) => element.end_date > currentDate)
        .sort((a, b) => {
          if (a.start_date < b.start_date) return 1;
          else if (a.start_date > b.start_date) return -1;
          else return 0;
        })
        .map((elem) => (
          <NewsCard
            title={elem.title}
            text={elem.content}
            startDate={elem.start_date}
            uid={elem.uid}
            key={elem.uid}
            setFetchNews={props.setFetchNews}
          />
        ))}
    </div>
  );
};

export default Feed;
