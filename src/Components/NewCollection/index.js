import React from "react";
import "../Catalog/Catalog.style.css";
import { FaStar } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import { StoreData } from "../../Utils/StoreData";

export const NewCollection = () => {
  return (
    <section id="catalog">
      <h2>new collection</h2>
      <div className="nav_menu">
        <span className="left-arrow">&larr;</span>
        <span className="right-arrow">&rarr;</span>
        <nav>
          <ul>
            <li>
              material <MdKeyboardArrowDown />
            </li>
            <li>
              price <MdKeyboardArrowDown />
            </li>
            <li>
              rating <MdKeyboardArrowDown />
            </li>
          </ul>
        </nav>
      </div>
      <div className="items_container">
        {StoreData.slice(0, 4).map((product, id) => {
          return (
            <div className="items_card" key={id}>
              <div className="product_image">
                <img src={product.image} alt={product.name} />
              </div>
              <p className="product-rating">
                <span>{product.rating}</span>
                <span className="star_icon">
                  <FaStar color="#eebc25" />
                </span>
              </p>
              <p>{product.item_name} </p>
              <div>
                <span className="price-tag">$ {product.price}</span>
                <span>
                  <span>
                    <BsHandbag size={18} spacing={200}/>
                  </span>
                  <span>
                    <CiHeart size={18} />
                  </span>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
