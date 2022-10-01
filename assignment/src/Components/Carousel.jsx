import React, { useState } from "react";
// import styles from "../Styles/Carousel.module.css";
import "../Styles/Carousel.css";

const Carousel = ({ data }) => {
  const [rdata, setRdata] = useState(data);
  //   console.log(rdata);
  const handleHover = (id) => {
    let res = data.map((el) =>
      el.id == id ? { ...el, status: true } : { ...el, status: false }
    );
    setRdata([...res]);
    // console.log(res);
  };
  return (
    // <div className={styles.mainCard_cont} >
    //   <div className={styles.mainInner_div}>
    //     {data?.map((el) => (
    //       <div className={styles.slideCard_div} key={el.id}>
    //         <div className={styles.slideCardHeading}>
    //           <h4>{el.HLine}</h4>
    //         </div>
    //         <img src={el.img_url} alt="" className={styles.slideCard_img} />
    //       </div>
    //     ))}
    //   </div>

    <div className="mainCard_cont">
      <div className="mainInner_div">
        {rdata?.map((el) => (
          <div
            className={`slideCard_div card${el.id}`}
            key={el.id}
            onMouseOver={() => handleHover(el.id)}
            style={
              el.status == true
                ? { width: "50%", transition: "all 0.2s ease" }
                : { width: "25%", transition: "all 0.2s ease" }
            }
          >
            <div className="slideCardHeading">
              <div className="slideCardHeading_div">
                <p>{el.HLine}</p>
                {el.status && (
                  <div className="slideCardArrow_div">
                    <img
                      src="https://img.icons8.com/material-sharp/24/000000/circled-chevron-up.png"
                      alt=""
                      className="slideCardArrow_img"
                    />
                  </div>
                )}
              </div>
            </div>
            <img src={el.img_url} alt="" className="slideCard_img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
