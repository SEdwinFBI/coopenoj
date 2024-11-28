import { ReactElement } from "react";
import Services from "../pages/Services";
import Inicio from "../pages/Inicio";
import Product from "../pages/Product";

//rutas 
interface Route {
    path?: string;
    element: ReactElement;
    indexApp?: boolean;
    children?:Route[];
}

const routes: Route[]=[
    {
        element:<Inicio/>,//sin path porque es una ruta index
        indexApp:true, 
    },
    {
        path:"services/*",
        element: <Services/>,
   
    },
    {
        path:"services/product",
        element:<Product/>
    }
];




export default routes;
