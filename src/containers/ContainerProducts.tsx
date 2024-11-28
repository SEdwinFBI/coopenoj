import { Box, Grid2, Typography } from "@mui/material";
import CardProductos from "../components/CardProductos";
import { productosYServiciosType } from "../utils/Products";
import "../styles/shadow.css"
import { colors } from "../utils/colors";

interface ContainerProductsProps {
  data: productosYServiciosType[];
}

const ContainerProducts: React.FC<ContainerProductsProps> = ({ data }) => {
  return (
    <Box
      className="shadowEffect"
      sx={{
        padding: "15px",
        position: "relative",
        transform: "translateY(-1%)",
        backgroundColor: "white",
        borderRadius: "5px",
        textAlign: "center",
        justifyContent: "center",

      }}
    >
      <Typography variant="h5" sx={{ color:colors.primary}} >
        <strong>Productos y servicios</strong>
      </Typography>
      <Grid2
        container
        spacing={2}
        columns={{ xs: 2, sm: 4 }}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        {data.map(((item,index) => (
          <Grid2 size={1} key={index}>
            <CardProductos data={item} />
          </Grid2>
        )))}
      </Grid2>
    </Box>
  );
};

export default ContainerProducts;
