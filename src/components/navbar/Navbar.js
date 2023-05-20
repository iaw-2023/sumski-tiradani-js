import { React, useState, useRef } from "react";
import NavLogo from "./NavLogo";
import NavbarLink from "./Navbar-Link";
import DarkModeButton from "../DarkModeButton";
import HamburgerMenu from "./HamburgerMenu";
import HamburgerButton from "./HamburgerButton";

const links = [
  { text: "Home", url: "/" },
  { text: "Prueba", url: "/prueba" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  function DesktopContent() {
    return (
      <div className="hidden sm:flex flex-auto">
        <NavLogo link="/" onClick={() => setOpen(false)} />
        {links.map(function (link, index) {
          return <NavbarLink key={index} text={link.text} link={link.url} />;
        })}
        <span className="m-auto" />
      </div>
    );
  }

  function MobileContent() {
    return (
      <div className="flex sm:hidden flex-auto">
        <HamburgerButton openHook={[open, setOpen]} />
        <NavLogo link="/" onClick={() => setOpen(false)} center />
      </div>
    );
  }

  return (
    <div className="fixed top-0 w-full shadow-2xl" ref={navRef}>
      <nav className="flex p-4 transition-colors bg-slate-300 dark:bg-slate-900 dark:text-white">
        <DesktopContent />
        <MobileContent />
        <DarkModeButton />
      </nav>
      <HamburgerMenu openHook={[open, setOpen]} navRef={navRef} links={links} />
    </div>
  );
}

export default Navbar;