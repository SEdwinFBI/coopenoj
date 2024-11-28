import { ReactNode } from "react"
import { CurrencyExchange,CottageOutlined, ElectricBoltOutlined,PaidOutlined,PaymentsOutlined, LocalAtm } from "@mui/icons-material";
import { colors } from "./colors";
import { principalCardProps } from "./PrincipalCard";


export interface productosYServiciosType extends principalCardProps{
    icon: ReactNode;
    title:string;
    navigate:string;
    description?:string;
    colorCard: string;
    fontColor: string;
    strongDescription?: string;
}

export const productosYServicios: productosYServiciosType[]=[
    {
        icon: <LocalAtm sx={{fontSize:"70px",fontWeight:"100"}}/>,
        title:"Ahorros",
        navigate:"product",
        description:"lorem lorem loremlorem loremlor emlor emlore mlorem",
        colorCard: colors.primary,
        fontColor:"white"
    },
    {
        icon: <CurrencyExchange sx={{fontSize:"70px",fontWeight:"100"}}/>,
        title:"Credito Personal",
        navigate:"services",
        description:"lorem loremlo remlorem loremlo remlorem lor emlorem",
        colorCard: colors.primary,
        fontColor:"white",
    },
    {
        icon: <CottageOutlined sx={{fontSize:"70px",fontWeight:"100"}}/>,
        title:"Credito Para Construccion",
        navigate:"services",
        description:"lorem lore lo remlorem loremlo reml oreml orem lorem",
        colorCard: colors.primary,
        fontColor:"white",
    },
    {
        icon: <ElectricBoltOutlined sx={{fontSize:"70px",fontWeight:"100"}}/>,
        title:"Pago de Luz",
        navigate:"services",
        description:"lorem loreml orem lore mloremlo reml oremlo remlor em",
        colorCard: colors.primary,
        fontColor:"white"
    },
    {
        icon: <PaidOutlined sx={{fontSize:"70px",fontWeight:"100"}}/>,
        title:"Ahorros a Plazos",
        navigate:"services",
        description:"lorem loremlore mlor emloremloremlor emlorem lorem",
        colorCard: colors.primary,
        fontColor:"white"
    },
    {
        icon: <PaymentsOutlined sx={{fontSize:"70px",fontWeight:"100"}}/>,
        title:"Cobro de Remesas",
        navigate:"services",
        description:"lorem loremlorem loremlorem oremloreml oremlorem",
        colorCard: colors.primary,
        fontColor:"white"
    
    },

]