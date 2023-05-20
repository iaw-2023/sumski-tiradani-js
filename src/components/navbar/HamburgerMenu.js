import { useState, useEffect } from "react";
import Divider from "@mui/material/Divider";
import NavbarLink from "./Navbar-Link";

function HamburgerMenu({ openHook, navRef, links }) {
  const [open, setOpen] = openHook;

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
      if (width > 640) setOpen(false);
    };

    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, [width, setOpen]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef, setOpen]);

  if (open)
    return (
      <>
        <Divider variant="fullWidth" />
        <div className="flex flex-row sm:hidden w-full p-2 transition-colors bg-slate-300 dark:bg-slate-900 dark:text-white">
          <ul className="m-auto flex-col">
            {links.map(function (link, index) {
              return (
                <li className="flex content-center">
                  <NavbarLink
                    key={index}
                    text={link.text}
                    link={link.url}
                    onClick={() => setOpen(!open)}
                    center
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  else return <></>;
}

export default HamburgerMenu;
