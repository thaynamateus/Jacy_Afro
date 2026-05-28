import { Outlet } from "react-router-dom";
import style from "../css/Agendar.module.css";

function Agendar() {
  return (
    <section className={style.container_agendar}>
    <h2>Agendar</h2>
      <Outlet />
    </section>
  );
}

export default Agendar;