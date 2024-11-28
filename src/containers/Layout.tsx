import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import {Box } from "@mui/material";
import Footer from "../components/Footer";

//esqueleto del sitio
const Layout = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
      <Box sx={{ marginTop: "55px"}}>
      <Outlet />
      {/**salida de las vistas */}
      </Box>
      <Footer/>
      </main>
    </>
  );
};

export default Layout;
