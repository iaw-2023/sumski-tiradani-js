const Error = ({ message }) => {
  return (
    <div className="w-full text-center align-middle">
      <p className="text-3xl font-bold">Se ha producido un error</p>
      <p className="text-lg font-thin">{message}</p>
    </div>
  );
};

export default Error;
