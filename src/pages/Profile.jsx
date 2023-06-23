import React, { useContext, useEffect } from "react";
import styles from "../styles/Profile.module.css";
import { UserContext } from "../components/userContext";
import { useParams } from "react-router";
import { object } from "prop-types";

const Profile = () => {
  const { users } = useContext(UserContext);
  const { id } = useParams();
  const currentUser = users.filter((user) => user.id?.toString() === id);

  console.log(currentUser);
  return (
    <div className={styles.container}>
      {currentUser.map((user) => (
        <div key={user.id}>
          <table className={styles.ProfileTable}>
            <tr>
              {" "}
              <td>
                <strong>Name :</strong>
              </td>
              <td>{user.name}</td>
            </tr>
            <tr>
              <td>
                <strong>Email</strong> :{" "}
              </td>
              <td>{user.email}</td>
            </tr>
            <tr>
              <td>
                <strong>Username</strong> :{" "}
              </td>
              <td>{user.username}</td>
            </tr>
            <tr>
              <td>
                <strong>Phone</strong> :{" "}
              </td>
              <td>{user.phone}</td>
            </tr>
            <tr>
              <td>
                <strong>Address</strong> :{" "}
              </td>
              <tr>
                <td>Street : </td>
                <td>{user.address.street}</td>
              </tr>
              <tr>
                <td>Suite : </td>
                <td>{user.address.suite}</td>
              </tr>
              <tr>
                <td>City : </td>
                <td>{user.address.city}</td>
              </tr>
              <tr>
                <td>Zipcode : </td>
                <td>{user.address.zipcode}</td>
              </tr>
            </tr>
            <tr>
              <td>
                <strong>Website</strong> :{" "}
              </td>
              <td>{user.website}</td>
            </tr>
            <tr>
              <td>
                <strong>Company</strong> :{" "}
              </td>
              <tr>
                <td>Name : </td>
                <td>{user.company.name}</td>
              </tr>
              <tr>
                <td>Catch Phrase : </td>
                <td>{user.company.catchPhrase}</td>
              </tr>
              <tr>
                <td>Bs : </td>
                <td>{user.company.bs}</td>
              </tr>
            </tr>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Profile;
