import { Box, Container } from "@mui/material";
import Carousel from "../components/Carousel";
import { carouselInicio } from "../utils/imagesUtils";
import ContainerCard from "../containers/ContainerCard";
import ContainerProducts from "../containers/ContainerProducts";
import { principalCard } from "../utils/PrincipalCard";
import { productosYServicios } from "../utils/Products";
import About from "../pages/sections/About";

const Inicio = () => {
  return (
    <section>
      <Box>
        <Carousel carouselImages={carouselInicio} />
      </Box>
      <ContainerCard cardsInfo={principalCard} />
      <Container>
        <ContainerProducts data={productosYServicios} />
      </Container>
      <Box   sx={{ marginTop: "130px", marginBottom:"130px" }}>
        <About />
      </Box>
    </section>
  );
};

export default Inicio;
