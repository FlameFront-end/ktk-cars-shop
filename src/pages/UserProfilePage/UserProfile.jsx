import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const UserProfile = () => {
  const [user] = useState({
    bookings: [
      {
        bookingDate: "2023-11-20",
        branch: "Филиал 1",
        brand: "Toyota",
        carId: "abc123",
        description: "Компактный автомобиль",
        id: 1,
        image: "https://img1.gtimg.com/auto/pics/hv1/0/28/2314/150474990.jpg",
        name: "Corolla",
        returnDate: "2023-11-25",
      },
      {
        bookingDate: "2023-12-01",
        branch: "Филиал 2",
        brand: "Honda",
        carId: "def456",
        description: "Спортивный стиль",
        id: 2,
        image: "https://images.pistonheads.com/nimg/42427/FK2CivicTypeR_09.jpg",
        name: "Civic",
        returnDate: "2023-12-05",
      },
    ],
    bookingsCount: 3,
    firstName: "Иван",
    lastName: "Иванов",
    patronymic: "Иванович",
    points: 150,
  });

  return (
    <div>
      <Typography gutterBottom variant="h4">
        Личный кабинет
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="h6">
            {user.lastName} {user.firstName} {user.patronymic}
          </Typography>
          <Typography color="textSecondary" gutterBottom variant="body2">
            Баллы: {user.points}, Бронирований: {user.bookingsCount}
          </Typography>
          <Stack direction="row" gap={2}>
            <Button color="primary" variant="contained">
              <RouterLink to="/card">Перейти на страницу карт</RouterLink>
            </Button>
            <Button color="secondary" variant="contained">
              Выйти
            </Button>
          </Stack>
        </CardContent>
      </Card>

      <Typography style={{ marginTop: "16px" }} variant="h5">
        Бронирования
      </Typography>
      {user.bookings.map((booking) => (
        <div key={booking.id}>
          <Card style={{ marginTop: "8px" }}>
            <CardMedia
              alt={booking.brand}
              component="img"
              image={booking.image}
              sx={{
                height: "300px",
                width: "500px",
              }}
            />
            <CardContent>
              <Typography variant="h6">
                {booking.brand} {booking.name}
              </Typography>
              <Typography color="textSecondary" variant="body2">
                Описание: {booking.description}
              </Typography>
              <Typography color="textSecondary" variant="body2">
                Дата бронирования: {booking.bookingDate}
              </Typography>
              <Typography color="textSecondary" variant="body2">
                Дата возврата: {booking.returnDate}
              </Typography>
              <Typography color="textSecondary" variant="body2">
                Филиал: {booking.branch}
              </Typography>
            </CardContent>
          </Card>
          <Divider style={{ margin: "8px 0" }} />
        </div>
      ))}
    </div>
  );
};

export default UserProfile;
