import React from 'react'
import './Programs.css'
import pic_1 from '../../assets/pics_1.png'
import pic_2 from '../../assets/pics_2.png'
import pic_3 from '../../assets/pics_3.png'
import pic_4 from '../../assets/pics_4.png'
import white_arrow from '../../assets/white-arrow.png'

const Programs = () => {
  return (
    <div className='Int_question'>
        <div className="Int_pics">
            <img src={pic_1} alt="" />
           
            <img src={pic_2} alt="" />
        
            <img src={pic_3} alt="" />
            <img src={pic_4} alt="" />
            </div> 
        
        <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button>
     
    </div>
  )
}

export default Programs