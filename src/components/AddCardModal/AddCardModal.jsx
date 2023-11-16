import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const AddCardModal = ({ onAddCard }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleAddCard = () => {
    const newCard = {
      cardType: getCardType(cardNumber),
      isActive: true,
      last4Digits: cardNumber.slice(-4),
    };

    onAddCard(newCard);
  };

  const getCardType = (cardNumber) => {
    if (cardNumber.startsWith("1111")) return "Visa";
    if (cardNumber.startsWith("2222")) return "MasterCard";
    if (cardNumber.startsWith("3333")) return "Мир";
    return "Неизвестно";
  };

  return (
    <div>
      <Typography gutterBottom variant="h5">
        Добавить банковскую карту
      </Typography>
      <TextField
        fullWidth
        label="Номер карты"
        margin="normal"
        onChange={(e) => setCardNumber(e.target.value)}
        value={cardNumber}
      />
      <TextField
        fullWidth
        label="Имя и фамилия держателя карты"
        margin="normal"
        onChange={(e) => setCardHolder(e.target.value)}
        value={cardHolder}
      />
      <TextField
        fullWidth
        label="Дата окончания"
        margin="normal"
        onChange={(e) => setExpiryDate(e.target.value)}
        value={expiryDate}
      />
      <TextField
        fullWidth
        label="CVV/CVC"
        margin="normal"
        onChange={(e) => setCvv(e.target.value)}
        value={cvv}
      />
      <Button color="primary" onClick={handleAddCard}>
        Добавить
      </Button>
    </div>
  );
};

export default AddCardModal;
