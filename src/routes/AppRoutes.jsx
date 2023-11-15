import { Route, Routes } from "react-router-dom";

import NewsDetail from "../components/News/NewsDetail/NewsDetail";
import { Home, Profile } from "../pages";

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
