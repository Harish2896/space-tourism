import { Link, NavLink, Outlet } from "react-router-dom";
import { NavbarStyled } from "../../styles/Navbar.styled";
import logo from "../../assets/shared/logo.svg";
import closeButton from "../../assets/shared/icon-close.svg";
import menuButton from "../../assets/shared/icon-hamburger.svg";
import { useState } from "react";

const Navbar = () => {
  const [isNavMenuOn, setIsNavMenuOn] = useState(false);
  const navItems = [
    { to: "/", linkNum: "00", linkName: "HOME" },
    { to: "/destination", linkNum: "01", linkName: "DESTINATION" },
    { to: "/crew", linkNum: "02", linkName: "CREW" },
    { to: "/technology", linkNum: "03", linkName: "TECHNOLOGY" },
  ];

  return (
    <>
      <NavbarStyled>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className={isNavMenuOn ? "menu-button open" : "menu-button"}>
          <img
            src={menuButton}
            alt="menu"
            onClick={() => setIsNavMenuOn(!isNavMenuOn)}
          />
        </div>
        <ul className={isNavMenuOn ? "nav-links open" : "nav-links"}>
          <li>
            <img
              className="close-button"
              src={closeButton}
              alt="close-menu"
              onClick={() => setIsNavMenuOn(!isNavMenuOn)}
            />
          </li>
          {navItems.map(({ to, linkNum, linkName }, index) => (
            <li key={index}>
              <NavLink to={to} onClick={() => setIsNavMenuOn(!isNavMenuOn)}>
                <span className="link-num">{linkNum}</span>
                <span className="link-name"> {linkName}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </NavbarStyled>
      <Outlet />
    </>
  );
};

export default Navbar;
