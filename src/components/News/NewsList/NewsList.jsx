import { Typography } from "@mui/material";
import React from "react";

import { news } from "../../../data";
import { NewsItem } from "../../index";
import s from "./NewsList.module.scss";

const NewsList = () => {
  return (
    <div className={s.news}>
      <Typography textAlign="center" variant="h4">
        Новости
      </Typography>
      <div className={s.newsList}>
        {news.map((news) => (
          <NewsItem key={news.id} {...news} />
        ))}
      </div>
    </div>
  );
};

export default NewsList;
