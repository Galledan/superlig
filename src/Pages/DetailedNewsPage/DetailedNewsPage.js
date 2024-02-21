import React from 'react'
import { useParams } from 'react-router-dom';

function DetailedNewsPage({news}) {
  const { news_id } = useParams();

  const selectedNews = news.find(item => item.id === parseInt(news_id));


    return (
      <div>
        <h2>{selectedNews.title}</h2>
        <p>{selectedNews.content}</p>
      </div>
    );
  }

export default DetailedNewsPage