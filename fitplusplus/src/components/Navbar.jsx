import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.scss";

const Navbar = (props) => {
  return (
    <div>
      <nav>
        <div id="back-btn">
          <Link to={props.backLink}>
            <svg
              width="36"
              height="29"
              viewBox="0 0 36 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.3749 12.6249H8.02613L17.9505 2.70057L15.2993 0.0493164L0.848633 14.4999L15.2993 28.9506L17.9505 26.2993L8.02613 16.3749H35.3749V12.6249Z"
                fill="#CECCD8"
              />
            </svg>
          </Link>
        </div>
      </nav>
      <div className="line"></div>
    </div>
  );
};

export default Navbar;
