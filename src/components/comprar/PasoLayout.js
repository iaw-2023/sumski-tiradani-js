function PasoLayout({ paso, title, content, buttons }) {
  return (
    <div className="flex flex-col space-y-4">
      <p className="text-2xl font-bold">{(paso ? paso + ". " : "") + title}</p>
      {content}
      <div className="flex flex-row w-full space-x-4">{buttons}</div>
    </div>
  );
}

export default PasoLayout;
