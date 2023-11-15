import {
  Button,
  Drawer,
  FormGroup,
  List,
  ListItem,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

import s from "./SearchFormSidebar.module.scss";

const useStyles = {
  button: {
    marginTop: (theme) => theme.spacing(2),
  },
};

const SearchFormSidebar = ({ isOpen, onClose }) => {
  const [carClass, setCarClass] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");

  const handleSearch = () => {
    console.log("Searching...", { brand, carClass, model });
  };

  return (
    <Drawer anchor="left" onClose={onClose} open={isOpen}>
      <List
        sx={{
          alignItems: "center",
          height: "100%",
          justifyContent: "center",
        }}
      >
        <ListItem
          sx={{
            alignItems: "center",
            height: "100%",
            justifyContent: "center",
          }}
        >
          <FormGroup autoComplete="off" className={s.form} noValidate>
            <TextField
              label="Класс автомобиля"
              onChange={(e) => setCarClass(e.target.value)}
              value={carClass}
              variant="outlined"
            />
            <TextField
              label="Марка"
              onChange={(e) => setBrand(e.target.value)}
              value={brand}
              variant="outlined"
            />
            <TextField
              label="Модель"
              onChange={(e) => setModel(e.target.value)}
              value={model}
              variant="outlined"
            />
            <Button
              color="primary"
              onClick={handleSearch}
              sx={useStyles.button}
              variant="contained"
            >
              Поиск автомобилей
            </Button>
          </FormGroup>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SearchFormSidebar;
