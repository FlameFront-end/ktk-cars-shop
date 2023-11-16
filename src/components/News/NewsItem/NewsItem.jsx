import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

import s from "./NewsItem.module.scss";

const NewsItem = ({ description, id, image, title }) => {
  console.log(image);
  return (
    <Card className={s.card}>
      <RouterLink to={`/news/${id}`}>
        <CardActionArea>
          <div className={s.media_wrapper}>
            <img alt="news img" height={300} src={image} width={300} />
          </div>
          <CardContent>
            <Typography
              component="div"
              gutterBottom
              textAlign="center"
              variant="h5"
            >
              {title}
            </Typography>
            <Typography color="text.secondary" variant="body2">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </RouterLink>
    </Card>
  );
};

export default NewsItem;
