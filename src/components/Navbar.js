import React from "react";
import { Link } from "react-router-dom";
import DarkModeButton from "./DarkModeButton";

function LinkNav(props) {
  return (
    <>
      <Link className="m-1 hover:font-bold" to={props.link}>
        {props.children}
      </Link>
    </>
  );
}

function Logo({ center }) {
  return <p className={center ? "m-auto" : "m-1"}>LOGO</p>;
}

function Navbar() {
  return (
    <nav className="fixed top-0 w-full p-2 transition-colors shadow-2xl bg-slate-300 dark:bg-slate-900 dark:text-white">
      <div className="hidden sm:flex">
        <Logo />
        <LinkNav link="/">Home</LinkNav>
        <LinkNav link="/prueba">Prueba</LinkNav>
        <span className="m-auto"></span>
        <DarkModeButton />
      </div>
      <div className="flex sm:hidden">
        <p>Bur</p>
        <Logo center />
        <DarkModeButton />
      </div>
    </nav>
  );
}

export default Navbar;
