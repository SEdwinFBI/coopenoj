import { Box, Container } from "@mui/material";
import Carousel from "../components/Carousel";
import { carouselInicio } from "../utils/imagesUtils";
import ContainerCard from "../containers/ContainerCard";

import {productosYServicios} from "../utils/Products"

const Services = () => {
  return (
    <Box component="section">
      <Box>
        <Carousel carouselImages={carouselInicio} />
      </Box>
      <Container sx={{marginTop:"100px",marginBottom:"130px"}}>
        <ContainerCard cardsInfo={productosYServicios} spacing={3} border="70px 0 70px 0" justify={true}/>
      </Container>
    </Box>
  );
};

export default Services;
