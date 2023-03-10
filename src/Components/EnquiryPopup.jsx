import React from 'react'
import '../css/enquiry.css'

const Enquiry = ({ title, modal, buttonType, buttonTitle, closeBtn }) => {
    const submitForm = (e) => {
        alert(`Some Technical problem we are working on it Please contact through email or whatsapp`)
    }
    return (
        <>


            <form onSubmit={submitForm}>


                <div className="row">
                    <div className="col mb-4">
                        <input type="text" className="form-control" placeholder="First name" required />
                    </div>
                    <div className="col mb-4">
                        <input type="text" className="form-control" placeholder="Last name" />
                    </div>

                    <div className="form-group mb-4">
                        <input type="email" className="form-control"  placeholder='Your Email' required />
                    </div>
                    <div className="form-group mb-4">

                        <input type="number" className="form-control" placeholder='Your Mobile'  required />
                    </div>
                    <div className="form-group mb-4">
                        <textarea className="form-control" placeholder='Your Message' >
                        </textarea>
                    </div>

                </div>
                <div className="btnBottom p-3">
                    <button type="submit" className="btn btn-success btn-block">Submit</button>
                </div>
            </form>
        </>
    )
}

export default Enquiry
