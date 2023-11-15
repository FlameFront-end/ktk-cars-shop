import React from "react";
import { useParams } from "react-router-dom";

const NewsDetail = () => {
  const { id } = useParams();
  return <div>Детали новости с id {id}</div>;
};

export default NewsDetail;
