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

import { products } from "../../data";

const ProductDetailPage = () => {
  const { id } = useParams();

  const car = products.find((car) => car.id === parseInt(id, 10));

  if (!car) {
    return <div>Машина не найдена</div>;
  }

  return (
    <Container maxWidth="md" sx={{ marginTop: 2 }}>
      <Button color="primary" sx={{ marginBottom: "20px" }} variant="contained">
        <RouterLink to="/">Назад</RouterLink>
      </Button>
      <Card>
        <CardMedia
          alt={car.title}
          component="img"
          image={car.img}
          sx={{
            height: "400px",
            width: "100%",
          }}
        />
        <CardContent>
          <Typography component="div" gutterBottom variant="h4">
            {car.title}
          </Typography>
          <Typography color="text.secondary" variant="body1">
            {car.description}
          </Typography>
          <Typography component="div" sx={{ marginTop: 2 }} variant="h5">
            {car.price}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProductDetailPage;
