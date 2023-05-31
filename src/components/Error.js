import { Link } from "react-router-dom";

const Error = ({ message }) => {
  return (
    <div className="w-full text-center align-middle">
      <p className="text-3xl font-bold">Se ha producido un error</p>
      <p className="text-lg font-thin">{message}</p>
      <Link to="/" className="text-sm w-auto text-blue-400">
        Volver a home
      </Link>
    </div>
  );
};

export default Error;
