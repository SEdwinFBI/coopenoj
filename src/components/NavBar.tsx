import {
  AppBar,
  Tabs,
  Tab,
  Toolbar,
  Box,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuMobile from "./MenuMobile";
import { Menu } from "@mui/icons-material";
import { menuList } from "../utils/menuUtilis";
import { colors } from "../utils/colors";

const NavBar = () => {
  const [value, setValue] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const mediaQuery = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <AppBar sx={{ backgroundColor: "white" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <img src="/logo.png" style={{width:"150px"}}/>
          </Box>
          {/**manejo de tamaño */}
          {mediaQuery ? (
            <IconButton
              onClick={() => setIsOpen(true)}
              sx={{ marginLeft: "auto" }}
            >
              <Menu sx={{ color: colors.primary }} />
            </IconButton>
          ) : (
            <Tabs
              sx={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-60%)",
                ".MuiTabs-indicator": { backgroundColor: colors.secondary }
              
              }}
            
              value={value}
              onChange={(_e, value) => setValue(value)}
             
            >
              {/**menu list */}
              {menuList.map((item,index) => (
                <Tab key={index}
                  sx={{color:colors.primary,"&:hover":{color:colors.secondary},"&.Mui-selected": { color: colors.secondary }}}
                  label={item.label}
                  onClick={() => navigate(item.navigate)}

                />
              ))}
            </Tabs>
          )}
        </Toolbar>
        {/**menu mobile */}
        <MenuMobile isOpen={isOpen} onOpen={() => setIsOpen(false)} />
      </AppBar>
    </>
  );
};

export default NavBar;
