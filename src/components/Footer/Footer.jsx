import { Link, Stack } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

import s from "./Footer.module.scss";
const Footer = () => {
  return (
    <Stack
      bgcolor="#1976d2"
      className={s.footer}
      color="white"
      direction="row"
      gap={20}
      justifyContent="center"
      padding="20px 0"
    >
      <Link color="#FFF" href={`tel:8-800-111-11-11`}>
        8-800-111-11-11
      </Link>
      <Stack
        direction="row"
        spacing={2}
        sx={{ display: { sm: "flex", xs: "none" } }}
      >
        <Link color="#FFF" component={RouterLink} to="/">
          Индекс Драйв
        </Link>
        <Link color="#FFF" component={RouterLink} to="/profile">
          Личный кабинет
        </Link>
      </Stack>
    </Stack>
  );
};

export default Footer;
