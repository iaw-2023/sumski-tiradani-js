import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

function HamburgerButton({ openHook }) {
  const [open, setOpen] = openHook;

  return (
    <button className="mr-20" onClick={() => setOpen(!open)}>
      {open ? <MenuOpenIcon /> : <MenuIcon />}
    </button>
  );
}

export default HamburgerButton;
