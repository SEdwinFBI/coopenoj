import { Route, Routes } from "react-router-dom"
import listRoutes from "./ListRoutes";
import Layout from "../containers/Layout";

const RoutesApp = () => {
  return (
  <Routes>
    <Route path="/" element={<Layout/>}>
    {
      //manejo de rutas
        listRoutes.map((route,index) => route.indexApp ? (
          <Route key={index} index element={route.element}/>
        ) : (
            <Route key={index} path={route.path} element={route.element}/>
        ))
    }
            <Route  path="*" element={<h1>404 - Página no encontrada</h1>}/>
    </Route>
    
  </Routes>
  )
}

export default RoutesApp