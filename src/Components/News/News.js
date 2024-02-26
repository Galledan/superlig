import React from "react";

function News(props) {
  return (
    <div>
      <p>Başlık: {props.title}</p>
      <p>Id: {props.id}</p>
    </div>
  );
}

export default News;
