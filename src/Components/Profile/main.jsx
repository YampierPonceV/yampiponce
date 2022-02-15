import { Personales, Sociales } from "../Data/info";
import { ContainerPerfil, LastProfile, ContainerLinks, Social } from "./style";
const About = () => {
  const { name, description, image } = Personales;
  return (
    <ContainerPerfil>
      <LastProfile>
        <div>
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
        <img src={image} alt={name} width={190} />
      </LastProfile>
      <ContainerLinks>
        {Sociales.map(({ name, icon, user, url }) => {
          return (
            <Social>
              <img src={icon} alt={name} width={50} />
              <div>
                <p>{name}</p>
                <a href={url} target="_blank">{user}</a>
              </div>
            </Social>
          );
        })}
      </ContainerLinks>
    </ContainerPerfil>
  );
};

export default About;
