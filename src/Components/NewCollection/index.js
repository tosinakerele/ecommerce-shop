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
        <div className="nav_arrows">
          <span className="left-arrow">&larr;</span>
          <span className="right-arrow">&rarr;</span>
        </div>
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
                    <BsHandbag size={18} spacing={200} />
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
      <div className="help_girls">
        <article>
          {" "}
          <h2>we help girls find their own style</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea rerum
            neque sed praesentium, voluptate eum. Magni, ad ducimus ab
            doloremque earum numquam consequatur delectus, quibusdam praesentium
            porro alias enim est?
          </p>
          <br />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequuntur nobis, possimus dolores odit alias maiores. Unde obcaecati officia assumenda.</p>
        </article>
        <div className="help_girls_image">
          <img
            src="https://images.pexels.com/photos/3965548/pexels-photo-3965548.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
