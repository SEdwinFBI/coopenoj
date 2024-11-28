import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { menuList } from "../utils/menuUtilis";
import useWindowSize from "../hooks/useWindowSize";
import { colors } from "../utils/colors";

interface MenuMobileProps {
  isOpen?: boolean;
  onOpen?: (value: boolean) => void;
}

const MenuMobile: FC<MenuMobileProps> = ({ isOpen = false, onOpen }) => {

  const navigate = useNavigate();
  const {width}=useWindowSize();

  return (
    <>
      <Drawer open={isOpen} onClose={onOpen}>
        <List sx={{ width: width/2.5 }}>
          <ListItemButton>
            <ListItemIcon>
            <img src="/logo.png" style={{width:"120px"}}/>
            </ListItemIcon>
          </ListItemButton>
          {menuList.map((item,index) => (
            <ListItemButton key={index}
              onClick={() => {
                navigate(item.navigate);
               if(onOpen) return onOpen(false);
              }}
            >
              <ListItemText primary={item.label} sx={{color: colors.primary,"&:hover":{color:colors.secondary}}} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default MenuMobile;
