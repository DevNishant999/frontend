import React, { useState, useEffect } from 'react';
import or from '../assets/or.png';

const Booknow = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <div id='booknow'
                className={`d-flex justify-content-center align-items-center gap-md-3 bg-white px-3 rounded-pill position-fixed shadow`}
                style={{
                    left: "36%",
                    bottom: isVisible ? "5%" : "0%", // this moves it
                    opacity: isVisible ? 1 : 0,
                    transition: 'all 0.6s ease',
                    zIndex: "9999",
                    height: "70px"
                }}
            >
                <div>
                    <button className='primary-btn'>Book an Appointment</button>
                </div>
                <div>
                    <img src={or} alt="" style={{ width: "40px", height: "40px", objectFit: "contain" }} />
                </div>
                <div>
                    <button className='primary-btn'>Live Chat &nbsp;&nbsp;&nbsp;&nbsp;💬</button>
                </div>
            </div>
        </div>
    )
}

export default Booknow
