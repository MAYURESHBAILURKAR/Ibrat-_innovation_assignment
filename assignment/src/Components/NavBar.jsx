import React from "react";
import styles from "../Styles/Navbar.module.css";

const NavBar = () => {
  const link = [
    {
      image: "https://static.cure.fit/assets/images/Livefit.svg",
      title: "LIVE",
      id: 1,
    },
    {
      image:
        "https://www.hellofitness.in/laravel/resources/assets/member-card.png",
      title: "MEMBERSHIPS",
      id: 2,
    },
    {
      image: "https://www.hellofitness.in/laravel/resources/assets/speed.png",
      title: "PLANS",
      id: 3,
    },
    {
      image:
        "https://www.hellofitness.in/laravel/resources/assets/four-rounded-squares-button.png",
      title: "MORE",
      id: 4,
    },
  ];
  return (
    <div className={styles.NavbarMain_cont}>
      <div className={styles.NavbarLogo_div}>
        <img src="https://www.hellofitness.in/logo.png" alt="logo" />
      </div>
      <div className={styles.NavbarMenu_cont}>
        {link.map((el) => (
          <div key={el.id} className={styles.NavbarMenu_div}>
            <div className={styles.NavbarMenu_Imgdiv}>
              <img src={el.image} alt="" />
            </div>
            <span>
              {el.title}
            </span>
          </div>
        ))}
      </div>

      <div className={styles.NavbarLogin_cont}>
        <img
          src="https://img.icons8.com/material-rounded/48/000000/user.png"
          alt=""
        />
        <p>Login</p>
      </div>
    </div>
  );
};

export default NavBar;
