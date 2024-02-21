import React from "react";
import News from "../../Components/News/News";
import { Link } from "react-router-dom";

function NewsPage() {
  const news = [
    {
      id: 1,
      title: "Birinci Haber",
      nImg: "asd",
      content:
        "Birinci HaberBirinci HaberBirinci HaberBirinci HaberBirinci HaberBirinci HaberBirinci HaberBirinci HaberBirinci Haber",
    },
    {
      id: 2,
      title: "Birinci Haber",
      nImg: "asd",
      content:
        "Birinci HaberBirinci HaberBirinci HaberBirinci HaberBirinci HaberBirinci HaberBirinci HaberBirinci HaberBirinci Haber",
    },
    {
      id: 3,
      title: "Birinci Haber",
      nImg: "asd",
      content:
        "Birinci HaberBirinci HaberBirinci HaberBirinci HaberBirinci HaberBirinci HaberBirinci HaberBirinci HaberBirinci Haber",
    },
    {
      id: 4,
      title: "Birinci Haber",
      nImg: "asd",
      content:
        "Birinci HaberBirinci HaberBirinci HaberBirinci HaberBirinci HaberBirinci HaberBirinci HaberBirinci HaberBirinci Haber",
    },
    {
      id: 5,
      title: "Birinci Haber",
      nImg: "asd",
      content:
        "Birinci HaberBirinci HaberBirinci HaberBirinci HaberBirinci HaberBirinci HaberBirinci HaberBirinci HaberBirinci Haber",
    },
    {
      id: 6,
      title: "Birinci Haber",
      nImg: "asd",
      content:
        "Birinci HaberBirinci HaberBirinci HaberBirinci HaberBirinci HaberBirinci HaberBirinci HaberBirinci HaberBirinci Haber",
    },
  ];

  return (
    <div>
      {news.map((n) => (
        <Link key={n.id} to={`/news/${n.id}`}>
          <News id={n.id} title={n.title} nImg={n.nImg} content={n.content} />
        </Link>
      ))}
    </div>
  );
}

export default NewsPage;
