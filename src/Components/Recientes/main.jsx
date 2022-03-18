import Proyect from "../Proyect/main";
import { ContainerRecientes, P } from "./style";

const Recientes = () => {
  return (
    <ContainerRecientes>
      <h2>Proyectos</h2>
      <P>📰 Proyectos más recientes</P>
      <hr></hr>
      <Proyect />
    </ContainerRecientes>
  );
};

export default Recientes;
