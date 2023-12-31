import { Route, Routes } from "react-router-dom";

import {
  CardPage,
  HomePage,
  NewsDetailPage,
  ProductDetailPage,
  UserProfile,
} from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<UserProfile />} path="/profile" />
      <Route element={<NewsDetailPage />} path="/news/:id" />
      <Route element={<CardPage />} path="/card" />
      <Route element={<ProductDetailPage />} path="/:id" />
    </Routes>
  );
};

export default AppRoutes;
