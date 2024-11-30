type menuItem = {
    label: string;
    navigate:string;

}

export const menuList: menuItem[] =[
    {
        label: "Inicio",
        navigate:"",
    },
    {
        label:"Productos",
        navigate:"services"
    },
    {
        label:"Ubicacion",
        navigate:"ubicacion"
    },
    {
        label:"Contacto",
        navigate:"contacto"
    }
]