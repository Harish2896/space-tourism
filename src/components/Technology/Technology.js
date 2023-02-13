import { H, P, SubH2 } from "../../styles/Headers.styled";
import { TechnologyStyled } from "../../styles/Technology.styled";
import data from "../../data.json";
import { useState } from "react";
import { TechnologyNavbutton } from "../../styles/Navbuttons.styled";

const Technology = () => {
  const { technology } = data;
  const [value, setValue] = useState(0);
  const { name, images, description } = technology[value];
  return (
    <TechnologyStyled>
      <section>
        <SubH2 fontSize="20px" className="technology-section-head">
          <span>03</span> space launch 101
        </SubH2>
      </section>
      <section className="technology-section-content">
        <article className="technology-image">
          <img
            className="portrait"
            src={require(`../../assets/technology/${images.portrait}`)}
            alt="vehicle-img"
          />
          <img
            className="landscape"
            src={require(`../../assets/technology/${images.landscape}`)}
            alt="vehicle-img"
          />
        </article>
        <article className="technology-nav-tab">
          {technology.map((el, index) => (
            <TechnologyNavbutton
              key={index}
              className={index === value ? "button-active" : ""}
              onClick={() => setValue(index)}
            >
              {index + 1}
            </TechnologyNavbutton>
          ))}
        </article>
        <article className="technology-info">
          <SubH2 className="technology-title">the terminology...</SubH2>
          <H fontSize={"24px"} className="vehicle-name">
            {name}
          </H>
          <P className="vehicle-description">{description}</P>
        </article>
      </section>
    </TechnologyStyled>
  );
};

export default Technology;
