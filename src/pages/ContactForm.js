import React from 'react';
import { useForm } from 'react-hook-form';
import './styles/ContactForm.css';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Function to handle form submission
  const onSubmit = (data) => {
    console.log(data);
    alert('Form submitted successfully!');
  };

  return (
    <div className="contact-us">
      <h2 className="contact-title">Contact Us</h2>
      <div className="contact-form-container">
        <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && <p className="error-message">{errors.name.message}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="text"
                {...register('phone', { required: 'Phone number is required' })}
              />
              {errors.phone && <p className="error-message">{errors.phone.message}</p>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                })}
              />
              {errors.email && <p className="error-message">{errors.email.message}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                {...register('subject', { required: 'Subject is required' })}
              />
              {errors.subject && <p className="error-message">{errors.subject.message}</p>}
            </div>
          </div>

          <div className="form-group full-width">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              {...register('message', { required: 'Message is required' })}
            ></textarea>
            {errors.message && <p className="error-message">{errors.message.message}</p>}
          </div>

          <div className="form-group checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="declaration"
                {...register('declaration', { required: 'You must declare' })}
              />
              I hereby authorize Defence Habitat Housing Co-operative society Ltd, to contact
              me via phone and email regarding my enquiry. I understand that this communication
              may include follow-up calls, emails, and other messages to assist with my enquiry
              and provide further information about your services. This will override the
              registry on DND/NDNC.
            </label>
            {errors.declaration && <p className="error-message">{errors.declaration.message}</p>}
          </div>

          <button type="submit" className="submit-button">Send</button>
        </form>
      </div>
    </div>

  );
};

export default ContactForm;
