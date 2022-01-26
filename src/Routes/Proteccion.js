import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Proteccion = () => {
  const nombre = useSelector(state => state.usuario);

  // Aquí va la condición. Puede ser una condición de cualquier tipo. Lo que
  // Importa es que valide si el usuario está loggeado o no
  if (nombre !== "") {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};

export default Proteccion;
