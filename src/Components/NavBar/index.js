import React, { useState } from "react";
import "./NavBar.style.css";
import { BiSearch, BiHeart, BiShoppingBag } from "react-icons/bi";
import { MdMenu, MdOutlineClose } from "react-icons/md";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((open) => !open);
  };
  return (
    <header>
      <div className="logo">
        <h4>LOGO</h4>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">catalog</a>{" "}
          </li>
          <li>
            <a href="#">delivery</a>
          </li>
          <li>
            <a href="#">last chance to buy</a>
          </li>
          <li>
            <a href="#">address</a>
          </li>
        </ul>
      </nav>

      <nav className="mobile_menu">
        <span className={!open ? "close" : "open"} onClick={handleToggle}>
          <MdOutlineClose size={25} />
        </span>
        <span className={!open ? "open" : "close"} onClick={handleToggle}>
          {" "}
          <MdMenu size={25} />
        </span>
      </nav>

      <nav>
        <ul>
          <li>
            <a href="#">
              {" "}
              <BiHeart />
            </a>
          </li>
          <li>
            <a href="#">
              {" "}
              <BiShoppingBag />
            </a>
          </li>
          <li>
            <a href="#">
              {" "}
              <BiSearch />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
