import React from 'react'
import '../App.css'

function Contact() {
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <address className=''>
                <h6>İletişim</h6>
                E-Mail: <a href="mailto:ahmetk.tanriverdi@gmail.com">
                    ahmetk.tanriverdi@gmail.com
                </a>
                <p>Phone: (XXX) XXX-XX90</p>
            </address>
        </div>
    )
}

export default Contact