import React from 'react'
import style from '../css/footer.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { NavLink } from 'react-router-dom'
const Footer = () => {
    return (
        <>
            <footer>
                <div className={`row ${style.footer_section}`}>
                    <div className="footer-child">
                        <h3>About us</h3>
                        <p>S.S.P.M has evolved to become one of Pune‘s most reputed Pest Control service‘ providers. <br /> <NavLink to="/about" className='text-decoration-none' title='Read more about us'>Read more...</NavLink></p>

                    </div>
                    <div className="footer-child">
                        <h3>Contact us</h3>
                        <span className={style.contact}><i className="bi bi-geo-alt-fill"></i></span>Bhekarai nagar, hadapsar, Pune <br />
                        <span className={style.contact}><i className="bi bi-telephone-outbound-fill"></i></span><a href="tel:+919021136040" className='text-decoration-none ms-2' title='Call Us'>+919021136040</a><br />
                        <span className={style.contact}> <i className="bi bi-envelope-fill"></i> </span><a href="mailto:sheelaaiesons@gmail.com" title='Mail Us' className='text-decoration-none '>sheelaaiesons@gmail.com</a><br />
                    </div>
                    <div className="footer-child"><h3>QUICK LINKS</h3>
                        <ul className={style.quick_links}>
                            <li><NavLink to="/about">About us</NavLink></li>
                            <li><NavLink to="/about">About our pest control</NavLink></li>
                            <li><NavLink to="/*">FAQ</NavLink></li>
                            <li><NavLink to="/contact">Contact us</NavLink></li>
                        </ul>
                    </div>
                    <div className="footer-child"><h3>Follow us</h3>
                        <p>We would like to stay connected with each other.</p>
                        <div className={style.icons}>
                            <a href="https://www.facebook.com/profile.php?id=100063527845357&mibextid=LQQJ4d" target="_blank"><i className="bi bi-facebook" title='Connect with facebook'></i></a>
                            <a href="https://instagram.com/sheelaaie_sons_india?igshid=MDM4ZDc5MmU=" target="_blank"><i className="bi bi-instagram" title='Connect with instagram'></i></a>
                            <a href="https://wa.me/+919021136040?text=Hi, Give me further information about pest-control services." target="_blank"><i className="bi bi-whatsapp" title='Connect with whatsapp'></i></a>

                        </div>
                    </div>
                </div>
                <div className={`${style.copy} text-center mt-5`}>
                    <p>&copy; Copyright {new Date().getFullYear()} <NavLink to="/" className={style.brand}>SHEELAAIE SONS PEST CONTROL MANAGEMENT</NavLink> All rights reserved</p>
                </div>

            </footer>
        </>
    )
}

export default Footer
