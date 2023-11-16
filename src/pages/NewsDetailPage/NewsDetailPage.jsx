import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
import { Link as RouterLink, useParams } from "react-router-dom";

import { news } from "../../data";

const NewsDetailPage = () => {
  const { id } = useParams();

  const newsItem = news.find((item) => item.id === parseInt(id, 10));

  if (!newsItem) {
    return <div>Новость не найдена</div>;
  }

  return (
    <Container maxWidth="md" sx={{ marginTop: 2 }}>
      <Button color="primary" sx={{ marginBottom: "20px" }} variant="contained">
        <RouterLink to="/">Назад</RouterLink>
      </Button>
      <Card>
        <CardMedia
          alt={newsItem.title}
          component="img"
          image={newsItem.image}
          sx={{
            height: "400px",
            width: "100%",
          }}
        />
        <CardContent>
          <Typography component="div" gutterBottom variant="h4">
            {newsItem.title}
          </Typography>
          <Typography color="text.secondary" variant="body1">
            {newsItem.description}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default NewsDetailPage;
