import React, { useRef, useState } from 'react';
import './Reviews.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user_1.png';
import user_2 from '../../assets/user_2.png';
import user_3 from '../../assets/user_3.png';
import user_4 from '../../assets/user_4.png';

const Reviews = () => {
    const slider = useRef(null);
    const [tx, setTx] = useState(0);

    const slideForward = () => {
        if (tx > -75) {
            setTx(tx - 25);
        }
    };

    const slideBackward = () => {
        if (tx < 0) {
            setTx(tx + 25);
        }
    };

    return (
        <div className='coding'>
            <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
            <div className="slider">
                <ul style={{ transform: `translateX(${tx}%)` }} ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Jenifer S</h3>
                                    <span>INDIA</span>
                                </div>
                            </div>
                            <p>This Python development institution truly stands out in its approach to teaching. The instructors are knowledgeable, 
                                supportive, and passionate about Python.</p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>Kelly D</h3>
                                    <span>USA</span>
                                </div>
                            </div>
                            <p>From beginners to seasoned developers, this institution offers a dynamic and enriching learning experience, 
                                paving the way for mastery in Python programming.</p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Jems K</h3>
                                    <span>Kochi</span>
                                </div>
                            </div>
                            <p>They're not just platforms; they're launchpads for aspiring developers to soar into the world of programming with confidence and competence.</p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>Soumya</h3>
                                    <span>INDIA</span>
                                </div>
                            </div>
                            <p>This learning platform offers an unparalleled journey into the heart of programming excellence. With its comprehensive resources, interactive tutorials, and vibrant community support, it's not just a learning platform; it's a gateway to unlocking boundless creativity and innovation in the world of coding.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Reviews;
