import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import s from "./NewsItem.module.scss";

const NewsItem = ({ description, id, image, title }) => {
  console.log(image);
  return (
    <Card className={s.card}>
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
      <Link to={`/news/${id}`}>
        <Button color="primary" size="small">
          Просмотреть новость
        </Button>
      </Link>
    </Card>
  );
};

export default NewsItem;
