import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import '../style/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
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
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/Who"> Who </Link>
        <Link to="/Work"> Work </Link>
        <Link to="/Contact"> Contact </Link>
      </div>
    </div>
  );
}

export default Navbar;