import { useState, useEffect } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const CategoriasSelector = ({
  categorias,
  categoriaSelected,
  setCategoriaSelected,
}) => {
  const SM_WIDTH = 640;
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, [width, setOpen]);

  const onCategoriaChange = (event) => {
    setCategoriaSelected(event.target.value);
    setOpen(false);
  };

  return (
    <>
      <div className="flex w-full">
        <p className="text-bold text-xl">Categorias</p>
        <button
          className="inline ml-auto sm:hidden text-neutral-900 dark:text-neutral-50 pr-3 hover:text-neutral-500 dark:hover:text-slate-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </button>
      </div>
      {(width > SM_WIDTH || open) && (
        <div className="flex flex-col w-full">
          <label className="flex flex-row label cursor-pointer">
            <span className="label-text text-base">Todo</span>
            <input
              id="categoria-todo"
              type="radio"
              name="radio-1"
              className="radio ml-auto"
              defaultChecked={categoriaSelected === "%" ? true : false}
              value="%"
              onChange={onCategoriaChange}
            />
          </label>
          {categorias.map((item, itemkey) => (
            <label className="flex flex-row label cursor-pointer" key={itemkey}>
              <span className="label-text text-base">
                {item.name.length > 20
                  ? item.name.substring(0, 20) + "..."
                  : item.name}
              </span>
              <input
                type="radio"
                name="radio-1"
                className="radio ml-auto"
                defaultChecked={categoriaSelected === item.name ? true : false}
                value={item.name}
                onChange={onCategoriaChange}
              />
            </label>
          ))}
        </div>
      )}
    </>
  );
};

export default CategoriasSelector;
