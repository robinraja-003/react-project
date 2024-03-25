import React, { useEffect, useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBars,
  faXmark,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  const location = useLocation();

  function toggleSidebar() {
    const sidebar = document.querySelector(".sidebar");
    const filterbar = document.querySelector(".filterbar");

    // Hide filterbar if it's displayed
    if (filterbar.style.display === "flex") {
      filterbar.style.display = "none";
    }

    // Toggle sidebar display
    sidebar.style.display = sidebar.style.display === "flex" ? "none" : "flex";
  }

  function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
  }
  function toggleFilterbar() {
    const filterbar = document.querySelector(".filterbar");
    if (filterbar.style.display === "flex") {
      // If filter bar is already displayed, hide it
      filterbar.style.display = "none";
    } else {
      // Otherwise, show the filter bar
      filterbar.style.display = "flex";
    }
  }

  useEffect(() => {
    if (location.pathname === "/checkout") {
      hideSidebar();
    }
  }, [location.pathname]);
  function hideFilterbar() {
    const filterbar = document.querySelector(".filterbar");
    filterbar.style.display = "none";
  }
  useEffect(() => {
    if (
      location.pathname === "/checkout" ||
      location.pathname === "/cart" ||
      location.pathname === "/men" ||
      location.pathname === "/women" ||
      location.pathname === "/sneakers" ||
      location.pathname === "/watches" ||
      location.pathname === "/electronics" ||
      location.pathname === "/"
    ) {
      hideSidebar();
      hideFilterbar();
    }
  }, [location.pathname]);

  return (
    <>
      <div className="header">
        <Link to="/">
          <img
            className="header_logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </Link>

        <Link
          to="/signup"
          onClick={() => {
            window.location.href = "/signup";
          }}
        >
          <div className="header_option hideOnMobile ">
            <span className="header_optionLineOne">Create New Account </span>
            <span className="header_optionLineTwo">Sign Up</span>
          </div>
        </Link>

        <div className="header_search">
          <input className="header_searchInput" type="text" />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="header_searchIcon"
          />
        </div>
        <div className="fiter" onClick={toggleFilterbar}>
          <span className="filter_option">Filter</span>
          <span className="filter_icon">
            <FontAwesomeIcon icon={faFilter} />
          </span>
        </div>

        <div className="header_nav">
          <Link to="/login">
            <div className="header_option hideOnMobile ">
              <span className="header_optionLineOne">Hello </span>
              <span className="header_optionLineTwo">Sign In</span>
            </div>
          </Link>

          <div className="header_option hideOnMobile ">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
          <div className="header_option hideOnMobile ">
            <span className="header_optionLineOne">Your </span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
          <Link to="/checkout">
            <div className="header_optionBag  ">
              <FontAwesomeIcon icon={faShoppingBag} />
              <span className="header_optionLineTwo header_bagCount">
                {basket?.length}
              </span>
            </div>
          </Link>

          <FontAwesomeIcon
            icon={faBars}
            className="menuBar menuButton"
            onClick={toggleSidebar}
          />
        </div>
      </div>
      <nav>
        <ul className="sidebar">
          <li>
            <FontAwesomeIcon
              icon={faXmark}
              className="menuBar"
              onClick={hideSidebar}
            />
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Sign In</Link>
          </li>
          <li>
            <Link to="/checkout">Cart</Link>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className="filterbar">
          <li>
            <Link to="/men">Men</Link>
          </li>
          <li>
            <Link to="/women">Women</Link>
          </li>
          <li>
            <Link to="/sneakers">Sneakers</Link>
          </li>
          <li>
            <Link to="/watches">Watches</Link>
          </li>
          <li>
            <Link to="/electronics">Electronics</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
