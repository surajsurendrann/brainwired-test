import React, { useContext } from "react";
import Card from "../components/Card";
import styles from "../styles/Home.module.css";
import { UserContext } from "../components/userContext";

const Home = () => {
  const { users } = useContext(UserContext);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {users.map((user) => (
          <Card user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
