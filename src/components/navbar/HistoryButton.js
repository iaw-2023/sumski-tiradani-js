import HistoryIcon from "@mui/icons-material/History";
import { Link } from "react-router-dom";

const HistoryButton = () => {
  return (
    <button
      className="text-neutral-900 dark:text-neutral-50 pr-4 hover:text-neutral-50 dark:hover:text-slate-700"
      size={30}
    >
      <Link to="/history">
        <HistoryIcon />
      </Link>
    </button>
  );
};

export default HistoryButton;
