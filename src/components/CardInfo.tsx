import { Box, Grid2, useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { principalCardProps } from "../utils/PrincipalCard";

interface CardInfoInterface {
  data: principalCardProps;
  border?:string;
  justify?:boolean;
}

const CardInfo: React.FC<CardInfoInterface> = ({ data,border="0px",justify=false}) => {
  const textAlign= justify ? "justify" :"center";
  const theme = useTheme();
  const mediaQuery = useMediaQuery(theme.breakpoints.up("sm"));
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: data.colorCard,
        border: "5px",
        height: { xs: "auto", sm: "20rem" },
        justifyContent: "center",
        alignItems: "center",
        borderRadius:border,
        padding:"15px"
      }}
    >
      <Grid2
        container
        columns={{ xs: 2, sm: 1 }}
        sx={{ alignItem: "center", justifyContent: "center" }}
      >
        {mediaQuery && (
          <Grid2
            size={1}
            sx={{
              display: "flex",
              textAlign: "center",
              alignItem: "center",
              justifyContent: "center",
              color: "white",
            }}
          >
            {data.icon}
          </Grid2>
        )}

        <Grid2
          size={1}
          sx={{ display: "flex", textAlign: textAlign, flexDirection: "column",padding:"15px" }}
        >
          <h1 style={{ color: "white",textAlign: "center" }}>{data.title}</h1>
          <p style={{ color: "white", }}>
            {data.description}
            <strong>{data.strongDescription}</strong>{" "}
          </p>
        </Grid2>

        {!mediaQuery && (
          <Grid2
            size={1}
            sx={{
              display: "flex",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
            }}
          >
            {data.icon}
          </Grid2>
        )}
        <button
          className="btn btn-primary"
          onClick={() => navigate(data.navigate)}
        >
          Mas Información
        </button>
      </Grid2>
    </Box>
  );
};

export default CardInfo;
