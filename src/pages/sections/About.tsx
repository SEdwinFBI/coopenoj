import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { colors } from "../../utils/colors";
import { valores, misionYVision } from "../../utils/info";

const MisionVision = () => {
  return (
    <Box
      id="carousel-component"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <Box className="carousel-inner ">
        {
          <Box className="carousel-item  active" data-bs-interval="3000">
            <Typography variant="h4">
              <strong>{misionYVision[0].title}</strong>
            </Typography>
            <p style={{ textAlign: "justify" }}>
              {misionYVision[0].description}
            </p>
          </Box>
        }

        {misionYVision.map((misionYVision) => (
          <Box key={misionYVision.title} className="carousel-item " data-bs-interval="3000">
            <Typography variant="h5">
              <strong>{misionYVision.title}</strong>
            </Typography>
            <p style={{ textAlign: "justify" }}>{misionYVision.description}</p>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
const Valores = () => {
  return (
    <Box
      id="carousel-component"
      className="carousel slide "
      data-bs-ride="carousel"
    >
      <Box className="carousel-inner ">
        {
          <Box className="carousel-item  active" data-bs-interval="3000">
            <Typography variant="h5">
              <strong>{valores[0].title}</strong>
            </Typography>
            <p style={{ textAlign: "justify" }}>{valores[0].description}</p>
          </Box>
        }

        {valores.map((valor) => (
          <Box key={valor.title} className="carousel-item " data-bs-interval="3000">
            <Typography variant="h5">
              <strong>{valor.title}</strong>
            </Typography>
            <p style={{ textAlign: "justify" }}>{valor.description}</p>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const About = () => {
  return (
    <Box component="section">
      <Grid container spacing={0} columns={{ xs: 1, sm: 1, md: 2 }}>
        <Grid size={1} id="nosotros">
          <Box
            sx={{
              display: "flex",
              height: { xs: "auto", sm: "auto", md: "35rem" },
              backgroundColor: "rgb(207, 211, 230)",
              textAlign: "center",
              padding: "5rem",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: colors.primary,
            }}
          >
            <Typography variant="h4">
              <strong>¿Quienes somos?</strong>
            </Typography>
            <p style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
              laudantium magnam repudiandae tempore nisi error ut quo,
              voluptatem vitae dolorem minima soluta? Ratione, saepe! Tempora
              error velit dolorum praesentium rem. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Dolorum laudantium magnam
              repudiandae tempore nisi error ut quo, voluptatem vitae dolorem
              minima soluta? Ratione, saepe! Tempora error velit dolorum
              praesentium rem.
            </p>
          </Box>
        </Grid>
        <Grid size={1}>
          <Box
            sx={{
              height: { xs: "250px", sm: "35rem" },
              backgroundColor: "blue",
            }}
          >
            <img
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
              src="https://micoope.com.gt/wp-content/uploads/2024/03/PRESTAMOS-PRODUCTIVOS.webp"
              alt=""
            />
          </Box>
        </Grid>
        <Grid size={1} id="misionYVision">
          <Box
            sx={{
              display: "flex",
              height: { xs: "auto", sm: "auto", md: "250px" },
              backgroundColor: colors.primary,
              textAlign: "center",
              padding: "5rem",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
            }}
          >
            <MisionVision />
          </Box>
        </Grid>
        <Grid size={1} id="valores">
          <Box
            sx={{
              display: "flex",
              height: { xs: "auto", sm: "auto", md: "250px" },
              backgroundColor: colors.secondary,
              textAlign: "center",
              padding: "5rem",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
            }}
          >
            <Typography variant="h4">
              <strong>Valores</strong>
            </Typography>
            <Valores />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
