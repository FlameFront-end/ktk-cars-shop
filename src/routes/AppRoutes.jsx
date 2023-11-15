import { Route, Routes } from "react-router-dom";

import { Home, Profile } from "../pages";
import NewsDetail from "../pages/NewsDetail/NewsDetail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Profile />} path="/profile" />
      <Route element={<NewsDetail />} path="/news/:id" />
    </Routes>
  );
};

export default AppRoutes;
