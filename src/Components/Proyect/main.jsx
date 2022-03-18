import { Proyectos } from "../Data/proyects";
import { Container, Recentes } from "./style";
const Proyect = () => {
  const iconUri = "https://icons8.com/icon/B3YslypXlynV/link--v2";
  return (
    <Recentes>
      {Proyectos.map(({ title, description, lenguage, repo }) => {
        return (
          <Container>
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
              <a href={repo} target="_blank">
                {/* <img src={iconUri} /> */}
                Code
              </a>
            </div>
            <div>
              {lenguage.map((el) => {
                return <img src={el} width={30} />;
              })}
            </div>
          </Container>
        );
      })}
    </Recentes>
  );
};

export default Proyect;
