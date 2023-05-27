import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

export default function CartButton({ onClick }) {
  return (
    <button
      className="text-neutral-900 dark:text-neutral-50 pr-3 hover:text-neutral-500 dark:hover:text-slate-700"
      onClick={onClick}
      size={30}
    >
      <Link to="/cart">
        <ShoppingCartIcon />
      </Link>
    </button>
  );
}
