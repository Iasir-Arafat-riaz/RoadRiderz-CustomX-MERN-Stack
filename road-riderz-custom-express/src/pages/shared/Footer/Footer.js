import React from 'react';
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyringe, faMotorcycle} from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    return (
        <div className="footer">
            <h4 className="text-center"><FontAwesomeIcon icon={faMotorcycle} /> All right reserved by iasir arafat riaz @2021 </h4>
        </div>
    );
};

export default Footer;