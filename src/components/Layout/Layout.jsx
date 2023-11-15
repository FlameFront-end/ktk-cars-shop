import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import NavMobile from "../NavMobile/NavMobile";
import { Footer, Nav } from "../index";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <Box component="main" sx={{ minHeight: "calc(100vh - 61px)", p: 3 }}>
        <Toolbar />
        {children}
      </Box>
      <Footer />
      <NavMobile />
    </>
  );
};

export default Layout;
