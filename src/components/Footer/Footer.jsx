import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            {/* left side*/}
            <div className="flexColStart f-left">
                <img src="./group2.png" alt="" width={120}/>

                <span className="secondaryText">
                    Our vision is to make all people <br />
                    the best place to live for them
                </span>
            </div>
            <div className="flexColStart f-right">
                <span  className="primaryText orangeText">Reach <span style={{color:"blue"}}>Out</span></span>
                <span className="secondaryText" style={{fontWeight:"bold"}}>Office No. 19, First Floor, Al-Rehmat Mall, G-11 Markaz, Islamabad
 </span>
            
                <div className="flexCenter f-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>About Us</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer