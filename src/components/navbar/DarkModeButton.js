import useDarkTheme from "../../hooks/useDarkTheme";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function DarkModeButton() {
  const [colorTheme, setTheme] = useDarkTheme();

  const toggleDarkMode = () => {
    setTheme(colorTheme);
  };

  return (
    <button
      className="text-neutral-900 dark:text-neutral-50 hover:text-neutral-500 dark:hover:text-slate-700"
      onClick={toggleDarkMode}
      size={30}
      aria-label="Botón modo oscuro"
      alt="Botón modo oscuro"
    >
      {colorTheme === "light" ? (
        <DarkModeIcon color="inherit" />
      ) : (
        <LightModeIcon color="inherit" />
      )}
    </button>
  );
}
