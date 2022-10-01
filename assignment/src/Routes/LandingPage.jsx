import React from "react";
import Carousel from "../Components/Carousel";
import styles from "../Styles/LandingPage.module.css";

const images = [
  {
    id: 1,
    img_url:
      "https://hellofitness.in/laravel/resources/uploads/images/sub-categories/16172735631617099922img.jpg",
    HLine: "STRENGTH",
    status: true,
  },
  {
    id: 2,
    img_url:
      "https://hellofitness.in/laravel/resources/uploads/images/sub-categories/16172739411615213589carl-barcelo-hHzzdVQnkn0-unsplash.jpg",
    HLine: "MOBILITY",
    status: false,
  },
  {
    id: 3,
    img_url:
      "https://hellofitness.in/laravel/resources/uploads/images/sub-categories/1617273827pexels-photo-1199590.jpeg",
    HLine: "DRILLS",
    status: false,
  },
];

const LandingPage = () => {
  return (
    <>
      <div className={styles.landingPage_sectionCont}>
        <div className={styles.landingPage_sectionTitle}>
          <p>Runner's Workout</p>
        </div>
        <Carousel data={images} />
      </div>
    </>
  );
};

export default LandingPage;
