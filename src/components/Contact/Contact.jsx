import React from 'react'
import './Contact.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
import { AiFillMail } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';
import {ImLocation2} from 'react-icons/im'
const Contact = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            {/* left side*/}
        <div className="flexColStart c-left">
            <span className="orangeText">Our Contact</span>
            <span className="primaryText">Easy to Contact Us</span>
            <span className="secondaryText">We always ready to help by providing the best services for you.
            We believe a Good Place to live can make your life better</span>

            <div className="flexColStart contactModes">
                {/* first row*/}
                <div className="flexStart row">
                <div className="flexColCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <MdCall size={25}/>
                        </div>
                        <div className="flexColStart detail">
                            <span className="primaryText">Call</span>
                            <span className="secondaryText">+92 300 9507036</span>
                        </div>
                    </div>
                    <div className="flexCenter button">Call Now</div>
                    </div>

                {/* Second Mode*/}
                <div className="flexColCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <BsFillChatDotsFill size={25}/>
                        </div>
                        <div className="flexColStart detail">
                            <span className="primaryText">Chat</span>
                            <span className="secondaryText">+92 300 9507036</span>
                        </div>
                    </div>
                    <div className="flexCenter button"><a href="https://wa.me/+923009507036"> Chat Now</a></div>
                    </div>

                </div>

                 {/* Second row*/}
                 <div className="flexStart row">
                <div className="flexColCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <ImLocation2 size={25}/>
                        </div>
                        <div className="flexColStart detail">
                            <span className="primaryText">Location</span>
                            <span className="secondaryText">Office No. 19, First Floor, Al-Rehmat Mall, G-11 Markaz, Islamabad</span>
                        </div>
                    </div>
                    <div className="flexCenter button">
                        <a href="https://goo.gl/maps/uvz7Dc7BtcFZrr5K9">Find Us</a></div>
                    </div>

                {/* Fourth Mode*/}
                <div className="flexColCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <AiFillMail size={25}/>
                        </div>
                        <div className="flexColStart detail">
                            <span className="primaryText">Mail Us</span>
                            <span className="secondaryText ">ashraf.ch@gmail.com</span>
                        </div>
                    </div>
                    <div className="flexCenter button"><a href="mailto:ashraf.ch650@gmail.com">Contact</a></div>
                    </div>

                </div>



            </div>

        </div>
        {/* right side*/}
        <div className="c-right">
            <div className="image-container">
                <img src="./contactpic.jpeg" alt="" />
            </div>
        </div>
        </div>
    </section>
  )
}

export default Contact