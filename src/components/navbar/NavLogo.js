import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function NavLogo({ link, onClick, center }) {
  return (
    <Link
      className={center ? " m-auto" : "pr-2 m-1"}
      to={link}
      onClick={onClick}
    >
      <img className={"w-7"} src={Logo} alt="TuCasaca.com" />
    </Link>
  );
}

export default NavLogo;
