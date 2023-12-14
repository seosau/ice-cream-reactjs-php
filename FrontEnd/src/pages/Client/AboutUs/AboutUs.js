import React, { useEffect } from "react";
import className from "classnames/bind";
import { Btn } from "../../../components";
import style from "./AboutUs.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
const cx = className.bind(style);

function AboutUs() {
  useEffect(() => {
    const btn = document.getElementsByClassName(cx("btn"));
    const slide = document.getElementById(cx("slide"));
    const windowWidth = window.innerWidth;
    btn[0].addEventListener("click", function () {

      slide.style.transform = "translateX(0px)";
      for (let i = 0; i < 4; i++) {
        btn[i].id = cx("");
      }
      this.id = cx("now-active");
    });

    btn[1].addEventListener("click", function () {
      if (windowWidth <= 430)
        slide.style.transform = "translateX(-100vw)";
      else
        slide.style.transform = "translateX(-800px)";
      for (let i = 0; i < 4; i++) {
        btn[i].id = cx("");
      }
      this.id = cx("now-active");
    });

    btn[2].addEventListener("click", function () {
      if (windowWidth <= 430)
        slide.style.transform = "translateX(-200vw)";
      else
        slide.style.transform = "translateX(-1600px)";
      for (let i = 0; i < 4; i++) {
        btn[i].id = cx("");
      }
      this.id = cx("now-active");
    });

    btn[3].addEventListener("click", function () {
      if (windowWidth <= 430)
        slide.style.transform = "translateX(-300vw)";
      else
        slide.style.transform = "translateX(-2400px)";
      for (let i = 0; i < 4; i++) {
        btn[i].id = cx("");
      }
      this.id = cx("now-active");
    });
  }, []);
  return (
    <div className={cx("main-container")}>
      <div className={cx("banner")}>
        <div className={cx("detail")}>
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing
            <br />
            elit, sed do eiusmod tempor incididunt ut labore et <br />
            dolore magna aliqua.
          </p>
        </div>
      </div>
      {/* ====================Chef=================== */}
      <div className={cx("chef")}>
        <div className={cx("box")}>
          <div className={cx("heading")}>
            <span>Alex Doe</span>
            <h1>Masterchef</h1>
            <img
              src={require("../../../assets/img/separator.png")}
              alt="separator"
            />
          </div>
          <p>
            Maria is a Roman-born pastry chef who spent 15 years in his city
            Rome perfecting his craft and exceptional creations. Vestibulum
            rhoncus ornare tincidunt. Etiam pretium metus sit amet est aliquet
            vulputate.
          </p>
          <div className={cx("flex-btn")}>
            <Btn
              href={"/shop"}
              style={{
                width: "fit-content",
              }}
              value="explore our menu"
            />
            <Btn
              href={"/"}
              style={{
                width: "fit-content",
              }}
              value="visit our shop"
            />
          </div>
        </div>
        <div className={cx("box")}>
          <img src={require("../../../assets/img/ceaf.png")} alt="chef" />
        </div>
      </div>
      {/* ====================Our Story=================== */}
      <div className={cx("story")}>
        <div className={cx("heading")}>
          <h1>Our Story</h1>
          <img
            src={require("../../../assets/img/separator.png")}
            alt="separator"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          nisi et dolor
          <br />
          ornare pellentesque. Nullam porttitor, odio id facilisis dapibus,
          mauris dolor rhoncus
          <br />
          elit, ultricies nulla eros at dui.
          <br />
        </p>
        <Btn
          href={"/home"}
          style={{
            width: "fit-content",
          }}
          value="our service"
        />
      </div>
      {/* ====================Our Team=================== */}
      <div className={cx("team")}>
        <div className={cx("heading")}>
          <span>our team</span>
          <h1>Quality & passion with our services</h1>
          <img
            src={require("../../../assets/img/separator-img.png")}
            alt="Separator"
          />
        </div>
        <div className={cx("box-container")}>
          <div className={cx("box")}>
            <img
              src={require("../../../assets/img/team-1.jpg")}
              className={cx("img")}
              alt="Team Member"
            />
            <div className={cx("content")}>
              <img
                src={require("../../../assets/img/shape-19.png")}
                alt="Shape"
                className={cx("shap")}
              />
              <h2>Ralph Johnson</h2>
              <p>Coffee Chef</p>
            </div>
          </div>
          <div className={cx("box")}>
            <img
              src={require("../../../assets/img/team-2.jpg")}
              className={cx("img")}
              alt="Team Member"
            />
            <div className={cx("content")}>
              <img
                src={require("../../../assets/img/shape-19.png")}
                alt="Shape"
                className={cx("shap")}
              />
              <h2>Fiona Johnson</h2>
              <p>Pastry Chef</p>
            </div>
          </div>
          <div className={cx("box")}>
            <img
              src={require("../../../assets/img/team-3.jpg")}
              className={cx("img")}
              alt="Team Member"
            />
            <div className={cx("content")}>
              <img
                src={require("../../../assets/img/shape-19.png")}
                alt="Shape"
                className={cx("shap")}
              />
              <h2>Tom Knelltonns</h2>
              <p>Coffee Chef</p>
            </div>
          </div>
        </div>
      </div>
      {/* ===================Standers==================== */}
      <div className={cx("standers")}>
        <div className={cx("detail")}>
          <div className={cx("heading")}>
            <h1>Our Standards</h1>
            <img
              src={require("../../../assets/img/separator.png")}
              alt="Separator"
            />
          </div>
          <ol>
            <li>
              <h2>   <FontAwesomeIcon icon={faMedal} className={cx("icon-style")} />Quality Ingredients: </h2>
              <p>
                Ensure the use of premium, fresh ingredients to achieve the rich
                flavor and smooth texture of fresh cream.
              </p>
            </li>
            <li>
              <h2>  <FontAwesomeIcon icon={faMedal} className={cx("icon-style")} />Hygienic Processing: </h2>
              <p>
                Adhere to stringent hygiene standards throughout the production
                process to guarantee a safe and contaminant-free final product.
              </p>
            </li>
            <li>
              <h2>  <FontAwesomeIcon icon={faMedal} className={cx("icon-style")} />Consistent Churning Process: </h2>
              <p>
                Implement a precise churning process to maintain consistent
                creaminess and prevent ice crystal formation in every batch of
                fresh cream.
              </p>
            </li>
            <li>
              <h2>  <FontAwesomeIcon icon={faMedal} className={cx("icon-style")} />Strict Temperature Control: </h2>
              <p>
                Monitor and control temperature conditions meticulously to
                preserve the integrity of the cream and achieve optimal texture
                and taste.
              </p>
            </li>
            <li>
              <h2><FontAwesomeIcon icon={faMedal} className={cx("icon-style")} />Artisanal Craftsmanship: </h2>
              <p>
                Embrace artisanal techniques to create a unique and delightful
                fresh cream experience, meeting the highest standards of taste
                and indulgence.
              </p>
            </li>
          </ol>
        </div>
      </div>

      {/* ===================Testimonial==================== */}
      <div className={cx("testimonial")}>
        <div className={cx("heading")}>
          <h1>Testimonial</h1>
          <img
            src={require("../../../assets/img/separator.png")}
            alt="Separator"
          />
        </div>
        <div className={cx("testimonial-container")}>
          <div className={cx("slide-row")} id="slide">
            <div className={cx("slide-col")}>
              <div className={cx("user-text")}>
                <p>
                  Zen Doan is a business analyst, entrepreneur and media
                  proprietor, and investor. She also known as the best selling
                  book author.
                </p>
                <h2>Zen</h2>
                <p>Author</p>
              </div>
              <div className={cx("user-img")}>
                <img
                  src={require("../../../assets/img/testimonial (1).jpg")}
                  alt="User Image"
                />
              </div>
            </div>
            <div className={cx("slide-col")}>
              <div className={cx("user-text")}>
                <p>
                  Zen Doan is a business analyst, entrepreneur and media
                  proprietor, and investor. She also known as the best selling
                  book author.
                </p>
                <h2>Zen</h2>
                <p>Author</p>
              </div>
              <div className={cx("user-img")}>
                <img
                  src={require("../../../assets/img/testimonial (2).jpg")}
                  alt="User Image"
                />
              </div>
            </div>
            <div className={cx("slide-col")}>
              <div className={cx("user-text")}>
                <p>
                  Zen Doan is a business analyst, entrepreneur and media
                  proprietor, and investor. She also known as the best selling
                  book author.
                </p>
                <h2>Zen</h2>
                <p>Author</p>
              </div>
              <div className={cx("user-img")}>
                <img
                  src={require("../../../assets/img/testimonial (3).jpg")}
                  alt="User Image"
                />
              </div>
            </div>
            <div className={cx("slide-col")}>
              <div className={cx("user-text")}>
                <p>
                  Zen Doan is a business analyst, entrepreneur and media
                  proprietor, and investor. She also known as the best selling
                  book author.
                </p>
                <h2>Zen</h2>
                <p>Author</p>
              </div>
              <div className={cx("user-img")}>
                <img
                  src={require("../../../assets/img/testimonial (4).jpg")}
                  alt="User Image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={cx("indicator")}>
          <span className={cx("btn")} id={cx("now-active")}></span>
          <span className={cx("btn")} id={cx("")}></span>
          <span className={cx("btn")} id={cx("")}></span>
          <span className={cx("btn")} id={cx("")}></span>
        </div>
      </div>
      {/* ===================Mission==================== */}
      <div className={cx("mission")}>
        <div className={cx("box-container")}>
          <div className={cx("box")}>
            <div className={cx("heading")}>
              <h1>Our Mission</h1>
              <img
                src={require("../../../assets/img/separator.png")}
                alt="Separator"
              />
            </div>
            <div className={cx("detail")}>
              <div className={cx("img-box")}>
                <img
                  src={require("../../../assets/img/mission.webp")}
                  alt="Mission Image"
                />
              </div>
              <div>
                <h2>Mexicon Chocolate</h2>
                <p>
                  Layers of shaped marshmallow candies - bunnies, chicks, and
                  simple flowers - make a memorable gift in a beribboned box
                </p>
              </div>
            </div>
            <div className={cx("detail")}>
              <div className={cx("img-box")}>
                <img
                  src={require("../../../assets/img/mission1.webp")}
                  alt="Mission Image"
                />
              </div>
              <div>
                <h2>Vanila With Honey</h2>
                <p>
                  Layers of shaped marshmallow candies - bunnies, chicks, and
                  simple flowers - make a memorable gift in a beribboned box
                </p>
              </div>
            </div>
            <div className={cx("detail")}>
              <div className={cx("img-box")}>
                <img
                  src={require("../../../assets/img/mission0.jpg")}
                  alt="Mission Image"
                />
              </div>
              <div>
                <h2>Pappermint Chip</h2>
                <p>
                  Layers of shaped marshmallow candies - bunnies, chicks, and
                  simple flowers - make a memorable gift in a beribboned box
                </p>
              </div>
            </div>
            <div className={cx("detail")}>
              <div className={cx("img-box")}>
                <img
                  src={require("../../../assets/img/mission2.webp")}
                  alt="Mission Image"
                />
              </div>
              <div>
                <h2>Raspberry Sorbat</h2>
                <p>
                  Layers of shaped marshmallow candies - bunnies, chicks, and
                  simple flowers - make a memorable gift in a beribboned box
                </p>
              </div>
            </div>
          </div>
          <div className={cx("box")}>
            <img
              src={require("../../../assets/img/form.png")}
              alt="temp"
              className={cx("img")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
