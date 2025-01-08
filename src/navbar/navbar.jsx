import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import mecLogo from "../assets/mecLogo.png";
import kerala_chapter from "../assets/kerala_chapter.jpg";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

export default function Navbar() {
  const [mobilenav, setmobilenav] = useState(false);

  return (
    <div className="navbar">
      <div className="logo-div">
        <div className="logo-text">
          <a href="https://r10.ieee.org/kerala-es/" target="_blank">
            <img className="logo-image" src={kerala_chapter} alt="" />
          </a>
          <span>IEEE KERALA CHAPTER</span>
        </div>
        <span className="ictest">ICTEST</span>
      </div>
      <ul>
        <li>
          <div className="hover-circle"></div>
          <a href={"/"}>home</a>
        </li>
        <li>
          <div className="hover-circle"></div>
          <a href={"/forauthors"}>For Authors</a>
        </li>
        <li>
          <div className="hover-circle"></div>
          <a href={"/"}>committee </a>
        </li>
        <li>
          <div className="hover-circle"></div>
          <a href={"/guidelines"}>guidelines </a>
        </li>
        <li>
          <div className="hover-circle"></div>
          <a href={"/gallery"}>
            ICTEST <span className="year-2024">2024</span>
          </a>
        </li>
      </ul>
      <div className="logo-div mec-logo">
        <div className="logo-text">
          <a href="https://www.mec.ac.in/" target="_blank">
            <img className="mec-logo" src={mecLogo} alt="" />
          </a>
          <span>Govt. Model Engineering College</span>
        </div>
      </div>
      <button onClick={() => setmobilenav(!mobilenav)} className="hamburger">
        {!mobilenav ? (
          <RxHamburgerMenu className="text-[40px] text-gray-light" />
        ) : (
          <IoCloseOutline className="text-[40px] text-gray-light" />
        )}
      </button>

      {mobilenav && (
        <div className="element">
          <ul>
            <li>
              <div className="hover-circle"></div>
              <a href={"/"}>home</a>
            </li>
            <li>
              <div className="hover-circle"></div>
              <a href={"/forauthors"}>For Authors</a>
            </li>
            <li>
              <div className="hover-circle"></div>
              <a href={"/"}>committee </a>
            </li>
            <li>
              <div className="hover-circle"></div>
              <a href={"/guidelines"}>guidelines </a>
            </li>
            <li>
              <div className="hover-circle"></div>
              <a href={"/gallery"}>
                ICTEST <span className="year-2024">2024</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
