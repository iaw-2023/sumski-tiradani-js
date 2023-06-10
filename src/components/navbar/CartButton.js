import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";

export default function CartButton({ onClick }) {
  const [cart] = useContext(CartContext);
  const cantItems = cart.reduce(
    (total, currentItem) => (total = total + currentItem.pedidos.length),
    0
  );

  return (
    <Link className="pt-1" to="/cart">
      <button
        className="group text-neutral-900 dark:text-neutral-50 pr-3 hover:text-neutral-500 dark:hover:text-slate-700"
        onClick={onClick}
        size={30}
      >
        <div className="relative">
          <ShoppingCartIcon />
          {cart.length > 0 ? (
            <div className="absolute rounded-full bg-red-600 w-4 top-3 left-3 align-middle">
              <p className="text-xs text-white group-hover:text-black text-center">
                {cantItems}
              </p>
            </div>
          ) : null}
        </div>
      </button>
    </Link>
  );
}
