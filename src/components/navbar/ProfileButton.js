import { Link } from "react-router-dom";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useAuth0 } from "@auth0/auth0-react";

export default function ProfileButton() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <button
      className="group text-neutral-900 dark:text-neutral-50 pl-2 hover:text-neutral-500 dark:hover:text-slate-700"
      size={30}
      alt="Profile"
      aria-label="Botón perfil"
    >
      <Link to="/profile" className="pt-1" aria-label="Botón perfil">
        <AccountBoxIcon />
      </Link>
    </button>
  ) : (
    <button
      className="group text-neutral-900 dark:text-neutral-50 pl-2 hover:text-neutral-500 dark:hover:text-slate-700"
      onClick={() => loginWithRedirect()}
      size={30}
      aria-label="Botón login"
      alt="Login"
    >
      <ExitToAppIcon />
    </button>
  );
}
