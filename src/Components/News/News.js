import React from "react";
import { Link } from "react-router-dom";

function News(props) {
  return (
    <div>
      <p>Başlık: {props.title}</p>
      <p>Id: {props.id}</p>
    </div>
  );
}

export default News;
