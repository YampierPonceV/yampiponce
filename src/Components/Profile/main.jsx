import { Personales } from "../Data/info";
import { ContainerPerfil, LastProfile } from "./style";
const About = () => {
  const { name, description, image } = Personales;
  return (
    <ContainerPerfil>
      <LastProfile>
        <div>
            <h1>{name}</h1>
            <p>{description}</p>
        </div>
          <img src={image} alt={name} width={200} />
      </LastProfile>
      <section>
        <div></div>
      </section>
    </ContainerPerfil>
  );
};

export default About;
