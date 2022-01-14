import React from "react";
import styles from "./Home.module.css";
import { Link, useHistory } from "react-router-dom";
import Card from "../../components/shared/Card/Card";
import Button from "../../components/shared/Button/Button";

const Home = () => {
  const signInLinkStyle = {
    color: "#0077ff",
    fontWeight: "bold",
    TextDecoration: "none",
    marginLeft: "10px",
  };
  const history = useHistory();
  function startRegister() {
    history.push("/register");
  }
  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to Codershouse!" icon="./images/mainlogo.png">
        <p className={styles.text}>
          We're working hardto get Codershouse ready for everone! While we wrap
          up the finished youches, we're adding gradually to make sure nothing
          breaks
        </p>
        <div>
          <Button onclick={startRegister} text="Get your username"></Button>
        </div>
        <div className={styles.signinWrapper}>
          <span className={styles.invite}>Have an invite text?</span>
          <Link style={signInLinkStyle} to="/login">
            Sign in
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
