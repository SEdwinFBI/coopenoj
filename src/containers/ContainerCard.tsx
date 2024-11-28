import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
//import Paper from "@mui/material/Paper";
//import { styled } from "@mui/material/styles";
import CardInfo from "../components/CardInfo";
import { principalCardProps } from "../utils/PrincipalCard";


/*const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));*/
interface ContainerCardInterface {
  cardsInfo: principalCardProps[];
  spacing?:number;
  border?:string;
  justify?:boolean;
}

const ContainerCard: React.FC<ContainerCardInterface> = ({ cardsInfo,spacing=0,border="0px",justify=false }) => {
  return (
    <Box >
      <Grid container spacing={spacing} columns={{ xs: 1, sm: 3, md: 3 }}>
        {cardsInfo.map((info,index) => (
          <Grid size={1} key={index} >
            <CardInfo data={info} border={border} justify={justify}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ContainerCard;
