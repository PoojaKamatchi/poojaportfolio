import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [theme, setTheme] = useState('light');

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.includes('@')) newErrors.email = 'Valid email is required';
    if (!message.trim()) newErrors.message = 'Message cannot be empty';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    try {
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      const result = await response.json();
      alert(result.message);
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
    } catch {
      alert('Failed to send message');
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div id="contact" className={`contact-section ${theme}`}>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
      <form className="contact-form animate" onSubmit={handleSubmit}>
        <h2 className="contact-title">Contact Me</h2>

        <input
          type="text"
          className={`contact-input ${errors.name ? 'error' : ''}`}
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <span className="error-msg">{errors.name}</span>}

        <input
          type="email"
          className={`contact-input ${errors.email ? 'error' : ''}`}
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span className="error-msg">{errors.email}</span>}

        <textarea
          className={`contact-textarea ${errors.message ? 'error' : ''}`}
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {errors.message && <span className="error-msg">{errors.message}</span>}

        <button className="contact-button" type="submit">Send</button>
      </form>

      <a href="#contact" className="floating-button">✉️</a>
    </div>
  );
};

export default Contact;
