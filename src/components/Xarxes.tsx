import React from 'react';
import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';

const Xarxes: React.FC = () => {
    return (
        <div className="flex gap-20 justify-center mb-10">
            <a href="https://instagram.com">
                <FaInstagram size={80} color='#000'/>
            </a>
            <a href="https://www.facebook.com">
                <FaFacebook color='#000' size={80} />
            </a>
            <a href="mailto:gatscat999@gmail.com">
                <FaEnvelope size={80} color='#000' />
            </a>
        </div>
    );
};

export default Xarxes;