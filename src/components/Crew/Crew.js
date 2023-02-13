import { useState } from "react";
import data from "../../data.json";
import { CrewStyled } from "../../styles/Crew.styled";
import { SubH2, H, P } from "../../styles/Headers.styled";
import { CrewNavbutton } from "../../styles/Navbuttons.styled";

const Crew = () => {
  const { crew } = data;
  const [value, setValue] = useState(0);
  const { name, images, role, bio } = crew[value];

  return (
    <CrewStyled>
      <section className="crew-section-head">
        <SubH2 fontSize="20px">
          <span>02</span> meet your crew
        </SubH2>
      </section>
      <section className="crew-section-content">
        <article className="crew-image">
          <img
            src={require(`../../assets/crew/${images.png}`)}
            alt="planet-img"
          />
        </article>
        <article className="crew-nav-tab">
          {crew.map((el, index) => (
            <CrewNavbutton
              className={index === value ? "button-active" : ""}
              key={index}
              onClick={() => setValue(index)}
            ></CrewNavbutton>
          ))}
        </article>
        <article className="crew-info">
          <SubH2 className="crew-role">{role}</SubH2>
          <H fontSize={"24px"} className="crew-name">
            {name}
          </H>
          <P className="crew-bio">{bio}</P>
        </article>
      </section>
    </CrewStyled>
  );
};

export default Crew;
