

import React, { useState } from 'react';

const EmailForm = () => {
  const [emailData, setEmailData] = useState({
    subject: '',
    text: '',
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: emailData.subject,
          text: emailData.text,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setResponseMessage(result.message);
      } else {
        setResponseMessage(result.error || 'An error occurred while sending the email');
      }
    } catch (error) {
      setResponseMessage('An error occurred while sending the email');
    }
  };

  return (
    <div className='h-[300px] w-[20%]'>
      <h2>Formulaire de Contact</h2>
      <form className='h-[200px]   flex flex-col justify-between' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="subject">Sujet:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={emailData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="text">Message:</label>
          <textarea
            id="text"
            name="text"
            value={emailData.text}
            onChange={handleChange}
            required
          />
        </div>
        <button className='inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-8 rounded-md px-3 text-xs' type="submit">Send Email</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default EmailForm;
