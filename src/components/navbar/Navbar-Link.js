import { NavLink } from "react-router-dom";

function NavbarLink({ center, text, link, onClick }) {
  if (center)
    return (
      <NavLink
        className="m-auto my-1 align-middle hover:font-bold"
        to={link}
        onClick={onClick}
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? "bold" : "",
          };
        }}
      >
        {text}
      </NavLink>
    );
  else
    return (
      <NavLink
        className="m-1 hover:font-bold"
        to={link}
        onClick={onClick}
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? "bold" : "",
          };
        }}
      >
        {text}
      </NavLink>
    );
}

export default NavbarLink;
