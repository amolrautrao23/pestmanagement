import React from 'react'
import { NavLink } from 'react-router-dom'
import style from '../css/home.module.css'
// import ReactReadMoreReadLess from "react-read-more-read-less";
// import '.../node_modules/bootstrap/dist/css/bootstrap.min.css'
const ServiceCard = ({ name, imgSrc, desc }) => {
    // const [name,imgsrc]=props;
    return (
        <>
            {/* <div className="col-md-4 col-xs-12"> */}
                <div className={`card ${style.card}`} >
                    <div className={style.card_inner}>
                        <div className={style.card_front}>
                           <img alt="Cardimage" src={imgSrc} />
                            <h3 className={style.serviceName}>{name}</h3>
                        </div>
                        <div className={style.card_back}>
                            <h3>
                                <NavLink to="/service" className={style.serviceName}>{name}</NavLink>
                            </h3>
                            <div className={style.para}>
                                <p style={{ textAlign: "left" }}>
                                    {desc}
                                </p>
                            </div>
                            <NavLink to="/contact" className={`btn btn-primary ${style.btnContact}`}>Contact Now</NavLink>
                        </div>

                    </div>
                </div>
            {/* </div> */}
        </>
    )
}

export default ServiceCard
