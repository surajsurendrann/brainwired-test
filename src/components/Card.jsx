import { Link } from "react-router-dom";
import styles from "../styles/Card.module.css";
import { useState } from "react";

const Card = ({ user }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link to={`/profile/${user.id}`} className={styles.link}>
      <div
        className={styles.container}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHovered ? (
          <div className={styles.profileButton}>Go to Profile</div>
        ) : (
          <>
            <div className={styles.imgContainer}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/306/306473.png"
                alt="userlogo"
              />
            </div>
            <div className={styles.details}>
              <table style={styles.table}>
                <tr>
                  <td> Name :</td>
                  <td>{user.name}</td>
                </tr>
                <tr>
                  <td> Username : </td>
                  <td>{user.username}</td>
                </tr>
                <tr>
                  <td>Email :</td>
                  <td>{user.email}</td>
                </tr>
              </table>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default Card;
