import React from "react";
import NavBar from "../NavBar";
import "./Footer.style.css";
import { BiSearch, BiHeart, BiShoppingBag } from "react-icons/bi";

export const Footer = () => {
  return (
    <div className="footer">
      <footer>
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
      </footer>{" "}
      <div className="footer_grid">
        <p style={{ color: "#ffffff80" }}>
          2004-2021 &copy; Mondi-online fashion store for women's clothing. All
          rights reserved. Worldwide delivery.
        </p>
        <p className="phone_number">0809 984 6538</p>
      </div>
    </div>
  );
};
