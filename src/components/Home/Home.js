import { H, P, SubH2 } from "../../styles/Headers.styled";
import { HomeStyled } from "../../styles/Home.styled";

const Home = () => {
  return (
    <HomeStyled>
      <article className="home-main-content">
        <SubH2 className="home-sub-heading">SO, YOU WANT TO TRAVEL TO</SubH2>
        <H className="home-main-heading">SPACE</H>
        <P className="home-pgh">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </P>
      </article>
      <article className="home-button">
        <button className="landing-page-button">EXPLORE</button>
      </article>
    </HomeStyled>
  );
};

export default Home;
