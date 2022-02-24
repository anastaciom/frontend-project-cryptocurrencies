import React from "react";
import {NewsAreaStyle} from './style';
import {useSelector} from 'react-redux';

export default function NewsArea() {

  const news = useSelector((state) => state.auth.data.news.articles)
  return (
    <NewsAreaStyle>
      <h1>Latest news</h1>
      <ul>
        {
          news.map((news, index)=><li key={index}>
            <h3>{news.title}</h3>
            <img src={news.urlToImage} alt={index} />
            <p>{news.description}</p>
            <small>{news.publishedAt}</small>
          </li>)
        }
      </ul>
    </NewsAreaStyle>
  );
}
