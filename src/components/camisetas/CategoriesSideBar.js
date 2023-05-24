import React from "react";

const CategoriesSideBar = ({ categorias, setCategoriaSelected }) => {
  const onCategoriaChange = (event) => {
    setCategoriaSelected(event.target.value);
  };

  return (
    <div className="flex flex-col">
      <label className="flex flex-row label cursor-pointer">
        <span className="label-text text-base">Todo</span>
        <input
          id="categoria-todo"
          type="radio"
          name="radio-1"
          className="radio ml-auto"
          defaultChecked={true}
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
            value={item.name}
            onChange={onCategoriaChange}
          />
        </label>
      ))}
    </div>
  );
};

export default CategoriesSideBar;
