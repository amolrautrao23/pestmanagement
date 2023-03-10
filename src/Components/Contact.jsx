import React from 'react'
import style from '../css/home.module.css'
import style2 from '../css/contact.module.css'
import Enquiry from './Enquiry'
const Contact = () => {
  return (
    <>
      <h2 className={`text-center py-5 text-secondary font-weight-bold ${style.heading}`} >Get In Touch</h2>
      <div className="container">
        <div className={`row ${style2.contact} `}>
          <div className={`col-md-6 ${style2.contactIcons}`}>
          <h4 className='ps-4'>Our Address</h4>
            <div>
              <i className="bi bi-geo-alt-fill ms-4 me-2"></i>
               Location: Bhekarai nagar, hadapsar, Pune
                </div>
            <div> 
              <i className="bi bi-telephone-outbound-fill ms-4 me-2 "></i>
              Phone:<a href="tel:+919021136040 " className='text-decoration-none ms-2' title='Call Us'>+919021136040</a>
              </div>
            <div> 
              <i className="bi bi-envelope-fill ms-4 me-2 "></i>
               Email:<a href="mailto:sheelaaiesons@gmail.com" className='text-decoration-none ms-2' title='Mail Us'>sheelaaiesons@gmail.com</a>
               </div>
            <h4 className='ps-4 pt-5'>Our Location</h4>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7568.007465436455!2d73.94896381964354!3d18.483490120439214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e9e42e461051%3A0xae5557c2264c1fd5!2sBhekrai%20Nagar%20PMP%20Depot!5e0!3m2!1sen!2sin!4v1667835236585!5m2!1sen!2sin"></iframe>
          </div>
          <div className="col-md-6 text-center">
        <div className={style2.contactForm}>
          
        {<Enquiry />}
        </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
