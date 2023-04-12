import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <>
      <h2 className='head-text'>Take a coffee & chat with me</h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card '>
          <img src={images.email} alt='email' />
          <a href='mailto:hello@micael.com' className='p-text'>
            hello@themoose.com
          </a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt='phone' />
          <a href='tel:+1 (123) 456-7890' className='p-text'>
            +1 (123) 456-7890
          </a>
        </div>
      </div>

      {!isFormSubmitted && (
        <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input
              className='p-text'
              type='text'
              placeholder='Your Name'
              name='name'
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <input
              className='p-text'
              type='text'
              placeholder='Your Email'
              name='email'
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className='p-text'
              placeholder='Your Message'
              name='message'
              value={message}
              cols='30'
              rows='10'
              onChange={handleChangeInput}
            ></textarea>
          </div>
          <button className='p-text' type='button' onClick={handleSubmit}>
            {loading ? 'Sending' : 'Send Message'}
          </button>
        </div>
      )}
      {isFormSubmitted && (
        <div>
          <h4 className='head-text'>Thankyou for getting in touch!</h4>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
);
