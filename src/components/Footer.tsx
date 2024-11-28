import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import "../styles/shadow.css";
import { colors } from "../utils/colors";
import { productosYServicios } from "../utils/Products";
import { Link } from "react-router-dom";



const Footer = () => {
  return (
    <Box sx={{ backgroundColor: colors.primary, color: "white" }} className="footer">
      <Container>
        <Grid
          container
          spacing={4}
          columns={{ xs: 1, sm: 3, md: 5 }}
          sx={{ paddingTop: "50px", paddingBottom: "10px" }}
        >
          <Grid size={1}  sx={{display:"flex",justifyContent:"center",alignItems:"stretch"}}>
            <Box>
              <img
                src="/logo.png"
                style={{ width: "200px" }}
                className="color-blanco"
              />
            </Box>
          </Grid>
          <Grid size={1}>
            <Box >
              <Typography variant="h5">
                <strong>Productos</strong>
              </Typography>
              <ul style={{ display:"flex",listStyleType: "none",flexDirection:"column",margin:"0px",padding:"0px"}}>
                {productosYServicios.map((item, index) => (
                  <li key={index}> <p>{item.title}</p></li>
                ))}
              </ul>
            </Box>
          </Grid>
          <Grid size={1}>
          <hr style={{height: "5px",background:"white",color:"white"}} className="mediaQuery"/>
            <Box>
              <Typography variant="h5">
                <strong>Ubicaciones</strong>{" "}
              </Typography>
              <ul  style={{ display:"flex",listStyleType: "none",flexDirection:"column",margin:"0px",padding:"0px"}}>
                <li><p>Aldea Chuanoj, Totonicapan</p></li>
                <li><p>xosacmalja, Totonicapan</p></li>
               
              </ul>
            </Box>
          </Grid>
          <Grid size={1}>
          <hr style={{height: "5px",background:"white",color:"white"}} className="mediaQuery"/>
            <Box>
              <Typography variant="h5">
                <strong> Nosotros</strong>
              </Typography>
              <ul style={{ display:"flex",listStyleType: "none",flexDirection:"column",margin:"0px",padding:"0px"}}>
                
              <li><Link to="/#nosotros"><p>Quienes somos</p></Link></li>
              <li><Link to="/#misionYVision"><p>Mision y Vision</p></Link></li>
              <li><Link to="/#valores"><p>Valores</p></Link></li>
               
              
              </ul>
            </Box>
          </Grid>
          <Grid size={1}>
          <hr style={{height: "5px",background:"white",color:"white"}} className="mediaQuery"/>
            <Box>
              <Typography variant="h5">
                <strong>Contactanos</strong>
              </Typography>
              <ul style={{ display:"flex",listStyleType: "none",flexDirection:"column",margin:"0px",padding:"0px"}}>
                <li><p>Correo@gmail.com</p></li>
                <li><p>PBX 3233232</p></li>
                <li>icon</li>
                
              </ul>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ paddingBottom: "40px",textAlign:"center" }}>
          <hr style={{height: "5px",background:"white",color:"white",border:"none"}}/>
          <Typography variant="subtitle2">Derechos Reservados ©2024,Cooperativa Coopenoj R.L.</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
