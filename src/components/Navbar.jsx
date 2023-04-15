import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation(); /*a function to locate where you are in*/

  useEffect(() => {
    /*run this useeffect(setExpandNavbar to false) whenever the location changes, so the menubar closes when a component is clicked*/
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          {expandNavbar ? <CloseIcon className="closeIcon" /> : <ReorderIcon />}
        </button>
      </div>
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/experience"> Experience </Link>
      </div>
    </div>
  );
}

export default Navbar;
