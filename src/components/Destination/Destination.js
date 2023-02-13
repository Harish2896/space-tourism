import { useState } from "react";
import data from "../../data.json";
import { H, P, SubH1, SubH2 } from "../../styles/Headers.styled";
import { DestinationNavbutton } from "../../styles/Navbuttons.styled";
import { DestinationStyled } from "../../styles/Destination.styled";

const Planet = () => {
  const { destinations } = data;
  const [planet] = useState(destinations);
  const [value, setValue] = useState(0);
  const { name, images, description, distance, travel } = planet[value];

  return (
    <DestinationStyled>
      <section className="section-heading">
        <SubH2 fontSize="20px">
          <span>01</span> pick your destination
        </SubH2>
      </section>
      <section className="section-main-content">
        <article className="planet-image">
          <img
            src={require(`../../assets/destination/${images.png}`)}
            alt="planet-img"
          />
        </article>
        <article className={`destination-content`}>
          <div className="inner-nav-tab">
            {planet.map((el, index) => (
              <DestinationNavbutton
                className={index === value ? "button-active" : ""}
                key={index}
                onClick={() => setValue(index)}
              >
                {el.name}
              </DestinationNavbutton>
            ))}
          </div>
          <H className="p-heading">{name}</H>
          <P className="destination-pgh">{description}</P>
          <footer>
            <div>
              <SubH2 className="distance-heading">AVG. DISTANCE</SubH2>
              <SubH1 className="distance">{distance}</SubH1>
            </div>
            <div>
              <SubH2 className="distance-heading">Est. travel time</SubH2>
              <SubH1 className="distance">{travel}</SubH1>
            </div>
          </footer>
        </article>
      </section>
    </DestinationStyled>
  );
};

export default Planet;
