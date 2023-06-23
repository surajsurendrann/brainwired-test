import React from "react";
import styles from "../styles/Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.backButton} onClick={handleNavigate}>
        go back
      </div>
      <Link to="/" className={styles.link}>
        USER MANAGEMENT
      </Link>
    </div>
  );
};

export default Navbar;
