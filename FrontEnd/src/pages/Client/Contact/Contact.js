import className from "classnames/bind";
import { Btn } from "../../../components";
import style from "./Contact.module.scss"
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faMapLocationDot,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";
const cx = className.bind(style);

function Contact(){
    return(
        <div className={cx("main-container")}>
            <div className={cx("banner")}>
                <div className={cx("detail")}>
                    <h1>Contact Us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing<br />
                    elit, sed do eiusmod tempor incididunt ut labore et <br />
                    dolore magna aliqua.</p>
                </div>
            </div>
            <div className={cx("services")}>
                <div className={cx("heading")}>
                    <h1>Our Services</h1>
                    <p>Just A Few Click To Make The Reservation Online For Saving Your Time And Money</p>
                    <img src={require("../../../assets/img/separator.png")}
                        alt="separator"
                    />
                </div>
                <div className={cx("box-container")}>
                    <div className={cx("box")}>
                        <img src={require("../../../assets/img/0.png")}></img>
                        <div>
                            <h1>Free Shipping Fast</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className={cx("box")}>
                        <img src={require("../../../assets/img/1.png")}></img>
                        <div>
                            <h1>Money Back & Guanrantee</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className={cx("box")}>
                        <img src={require("../../../assets/img/2.png")}></img>
                        <div>
                            <h1>Online Support 24/7</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx("form-container")}>
                <div className={cx("heading")}>
                    <h1>drop us a line</h1>
                    <p>Just A Few Click To Make The Reservation Online For Saving Your Time And Money</p>
                    <img src={require("../../../assets/img/separator.png")}
                        alt="separator"
                    />
                </div>
                <form action="" method="post" className={cx("register")}>
                    <div className={cx("input-field")}>
                        <label>name <sup>*</sup></label>
                        <input type="text" name="name" required placeholder="enter your name" className={cx("box")}></input>
                    </div>
                    <div className={cx("input-field")}>
                        <label>email <sup>*</sup></label>
                        <input type="text" name="email" required placeholder="enter your email" className={cx("box")}></input>
                    </div>
                    <div className={cx("input-field")}>
                        <label>subject <sup>*</sup></label>
                        <input type="text" name="subject" required placeholder="reason..." className={cx("box")}></input>
                    </div>
                    <div className={cx("input-field")}>
                        <label>comment <sup>*</sup></label>
                        <textarea name="message" cols="30" rows="10" required placeholder="" className={cx("box")}></textarea>
                    </div>
                    <Btn 
                        type="submit"
                        value="send message"
                    />
                </form>
            </div>

            <div className={cx("address")}>
                <div className={cx("heading")}>
                    <h1>our contact details</h1>
                    <p>Just A Few Click To Make The Reservation Online For Saving Your Time And Money</p>
                    <img src={require("../../../assets/img/separator.png")}
                        alt="separator"
                    />
                </div>
                <div className={cx("box-container")}>
                    <div className={cx("box")}>
                        <FontAwesomeIcon
                            icon={faMapLocationDot} 
                            className= {cx("icon-style")}
                        />
                        <div>
                            <h4>address</h4>
                            <p>1093 Marigold, Coral Way <br /> Miami, Florida, 33169</p>
                        </div>
                    </div>
                    <div className={cx("box")}>
                        <FontAwesomeIcon 
                            icon={faPhone} 
                            className= {cx("icon-style")}
                        />
                        <div>
                            <h4>phone number</h4>
                            <p>0358000001</p>
                            <p>0358000001</p>
                        </div>
                    </div>
                    <div className={cx("box")}>
                        <FontAwesomeIcon 
                            icon={faEnvelope} 
                            className= {cx("icon-style")}
                        />
                        <div>
                            <h4>email</h4>
                            <p>icreamshop@gmail.com</p>
                            <p>icreamshop@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;