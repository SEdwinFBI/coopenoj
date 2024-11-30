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
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
  const path = useLocation();
  const newPath:string[]= path.pathname.split("/");
  useEffect(() => {
    handelChange();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path.pathname]);

  const handelChange = () => {
    menuList.forEach(
      (item,index)=>{
        if (newPath[1] == item.navigate) {
          setValue(index);
        }
      }
    )
  };

  return (
    <>
      <AppBar sx={{ backgroundColor: "white" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <img src="/logo.png" style={{ width: "150px" }} />
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
                ".MuiTabs-indicator": { backgroundColor: colors.secondary },
              }}
              value={value}
              onChange={handelChange}
            >
              {/**menu list */}
              {menuList.map((item, index) => (
                <Tab
                  key={index}
                  sx={{
                    color: colors.primary,
                    "&:hover": { color: colors.secondary },
                    "&.Mui-selected": { color: colors.secondary },
                  }}
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
