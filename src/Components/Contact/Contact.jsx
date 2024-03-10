import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e995dd74-df25-4339-8b65-08782349bf4f"
    );

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a messege <img src={msg_icon} alt="" /></h3>
            <p>Fill free to reach out through contact form or fint 
                our contact information below.Your feedback,questions and suggestions are important to us. </p>
                <ul>
                    <li><img src={mail_icon} alt="" />contact@pygenius.com</li>
                    <li><img src={phone_icon} alt="" />+1 123-456-789</li>
                    <li><img src={location_icon} alt="" />56 sector Gurugram<br/>5647,Delhi</li>
                </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label>Contact Number</label>
                <input type="tel" name='contactno' placeholder='Enter your contactno'  required/>
                <label>Country</label>
                <input type="text" name='country' placeholder='Enter country name' required/>
                <label>Write your message here</label>
                <textarea name="msg"  rows="16" placeholder='Enter your message...' required></textarea>
                <button type="submit" className='btn dark-btn'>Submit now 
                <img src={white_arrow} alt="" />
                </button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact