import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

function HamburgerButton({ openHook }) {
  const [open, setOpen] = openHook;

  return (
    <button
      className="mr-16 text-neutral-900 dark:text-neutral-50 hover:text-neutral-500 dark:hover:text-slate-700"
      onClick={() => setOpen(!open)}
      aria-label="Menú hamburguesa"
    >
      {open ? <MenuOpenIcon /> : <MenuIcon />}
    </button>
  );
}

export default HamburgerButton;
