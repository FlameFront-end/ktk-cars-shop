import { Route, Routes } from "react-router-dom";

import { CardPage, HomePage, NewsDetail, UserProfile } from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<UserProfile />} path="/profile" />
      <Route element={<NewsDetail />} path="/news/:id" />
      <Route element={<CardPage />} path="/card" />
    </Routes>
  );
};

export default AppRoutes;
