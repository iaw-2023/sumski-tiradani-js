const CompraLayout = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
      <div className="w-full md:w-4/6">{children[0]}</div>
      <div className="w-full md:w-2/6">{children[1]}</div>
    </div>
  );
};

export default CompraLayout;
