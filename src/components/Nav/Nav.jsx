import SearchIcon from "@mui/icons-material/Search";
import { Link, Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import React, { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";

import { AuthModal, RegistrationModal, SearchFormSidebar } from "../index";
import s from "./Nav.module.scss";

const Nav = () => {
  const [openModalRegister, setOpenModalRegister] = useState(false);
  const handleOpenModalRegister = () => setOpenModalRegister(true);
  const handleCloseModalRegister = () => setOpenModalRegister(false);

  const [openModalAuth, setOpenModalAuth] = useState(false);
  const handleOpenModalAuth = () => setOpenModalAuth(true);
  const handleCloseModalAuth = () => setOpenModalAuth(false);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <AppBar>
        <Toolbar className={s.nav}>
          {isHomePage && (
            <button onClick={handleToggleSidebar}>
              <SearchIcon
                sx={{
                  color: "#FFF",
                }}
              />
            </button>
          )}
          <SearchFormSidebar
            isOpen={isSidebarOpen}
            onClose={handleToggleSidebar}
          />
          <RouterLink to="/">Индекс Драйв</RouterLink>
          <Stack
            direction="row"
            spacing={2}
            sx={{ display: { sm: "flex", xs: "none" } }}
          >
            <Link color="#FFF" component={RouterLink} to="/">
              Главная
            </Link>
            <Link color="#FFF" component={RouterLink} to="/profile">
              Личный кабинет
            </Link>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button onClick={handleOpenModalRegister} sx={{ color: "#fff" }}>
              Регистрация
            </Button>
            <Button onClick={handleOpenModalAuth} sx={{ color: "#fff" }}>
              Вход
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <RegistrationModal
        onClose={handleCloseModalRegister}
        open={openModalRegister}
      />
      <AuthModal onClose={handleCloseModalAuth} open={openModalAuth} />
    </>
  );
};

export default Nav;
