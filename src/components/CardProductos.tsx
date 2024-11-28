import { Box, Typography } from "@mui/material";
import { colors } from "../utils/colors";
import { productosYServiciosType } from "../utils/Products";
import { useNavigate } from "react-router-dom";

interface CardProductsProps {
  data: productosYServiciosType;
}
const CardProductos: React.FC<CardProductsProps> = ({ data }) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        "&:hover": { background: colors.primary, color: "white" },
        borderRadius: "5px",
        transition: "background 0.1s ease-in-out",
        height: "150px",
        textAlign: "center",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color:colors.primary
      }}
      onClick={() => navigate(data.navigate)}
    >
      {data.icon}
      <Typography variant="h6" sx={{}}>{data.title}</Typography>
    </Box>
  );
};

export default CardProductos;
