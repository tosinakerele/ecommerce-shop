import React from "react";
import "./NavBar.style.css";
import { BiSearch, BiHeart, BiShoppingBag } from "react-icons/bi";

const NavBar = () => {
  return (
    <header>
      <div className="logo">LOGO</div>
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
