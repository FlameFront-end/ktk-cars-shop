import {
  Box,
  Button,
  Card,
  CardContent,
  Modal,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import { AddCardModal } from "../../components";

function generateFakeCards() {
  const cardTypes = ["Visa", "MasterCard", "Мир"];
  const fakeCards = [];

  for (let i = 0; i < 3; i++) {
    fakeCards.push({
      cardType: cardTypes[i],
      isActive: Math.random() < 0.5,
      last4Digits: String(Math.floor(Math.random() * 10000)).padStart(4, "0"),
    });
  }

  return fakeCards;
}

const fakeCards = generateFakeCards();

const CardPage = () => {
  const [cards, setCards] = useState(fakeCards);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddCard = (newCard) => {
    setCards([...cards, newCard]);
    setIsModalOpen(false);
  };

  const handleDeleteCard = (index) => {
    const updatedCards = [...cards];
    updatedCards.splice(index, 1);
    setCards(updatedCards);
  };

  return (
    <div>
      <Typography gutterBottom variant="h4">
        Банковские карты
      </Typography>
      {cards.map((card, index) => (
        <Card key={index} style={{ marginBottom: "16px" }}>
          <CardContent>
            <Typography variant="h6">
              **** **** **** {card.last4Digits}
            </Typography>
            <Typography color="textSecondary" variant="body2">
              Тип: {card.cardType}, Активность:{" "}
              {card.isActive ? "Активна" : "Закончился срок"}
            </Typography>
            <Button color="error" onClick={() => handleDeleteCard(index)}>
              Удалить карту
            </Button>
          </CardContent>
        </Card>
      ))}
      <Button onClick={() => setIsModalOpen(true)}>
        Добавить банковскую карту
      </Button>

      <Modal
        onClose={() => setIsModalOpen(false)}
        open={isModalOpen}
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ bgcolor: "background.paper", p: 2, width: 400 }}>
          <AddCardModal onAddCard={handleAddCard} />
        </Box>
      </Modal>
    </div>
  );
};

export default CardPage;
