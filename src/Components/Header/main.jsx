import { StyleHeader, Wrapper, Listas, Logo } from "./style";
const Header = () => {
  return (
    <StyleHeader>
      <Wrapper>
        <section className="logo"><Logo href="/">YampierPonce</Logo></section>
        <section>
          <nav>
            <Listas>
              <li>
                <a href="">Acerca</a>
              </li>
              <li>
                <a href="">Articulos</a>
              </li>
              <li>
                <a href="">Videos</a>
              </li>
            </Listas>
          </nav>
        </section>
      </Wrapper>
    </StyleHeader>
  );
};

export default Header;
