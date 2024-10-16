import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      navigate('/success', { state: formData });
    }
  };

  return (
    <div className="mt-5">
      <h1><b>Contact Me</b></h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input 
            type="text" 
            className={`form-control ${errors.name && 'is-invalid'}`} 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input 
            type="email" 
            className={`form-control ${errors.email && 'is-invalid'}`} 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea 
            className={`form-control ${errors.message && 'is-invalid'}`} 
            id="message" 
            name="message" 
            rows="4" 
            value={formData.message} 
            onChange={handleChange} 
          ></textarea>
          {errors.message && <div className="invalid-feedback">{errors.message}</div>}
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Contact;