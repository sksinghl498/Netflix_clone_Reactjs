import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        handleShow(true);
      });
    };
  }, []);
  console.log(show);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav_logo"
        src="https://bit.ly/3QI9jT6"
        alt="Netflix-logo"
      />

      <img
        className="nav_avatar"
        src="https://bit.ly/3AmeMK1"
        alt="User-logo"
      />
    </div>
  );
}
export default Nav;
