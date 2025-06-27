import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ContactForm = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t('nameRequired');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('emailRequired');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('emailInvalid');
    }

    if (!formData.message.trim()) {
      newErrors.message = t('messageRequired');
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t('messageLength');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Create a mailto link to send email directly
      const subject = encodeURIComponent(`Portfolio Contact: Message from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n\n` +
        `Message:\n${formData.message}`
      );
      const mailtoLink = `mailto:erimuludag39@gmail.com?subject=${subject}&body=${body}`;
      
      // Open the email client
      window.location.href = mailtoLink;
      
      // Show success message
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      
    } catch (error) {
      console.error('Error creating email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="contact-form-success">
        <div className="success-icon">✓</div>
        <h3>{t('thankYouMessage')}</h3>
        <p>{t('responsePromise')}</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">{t('name')}</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder={t('namePlaceholder')}
          className={errors.name ? 'error' : ''}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <span id="name-error" className="error-message" role="alert">
            {errors.name}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="email">{t('email')}</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder={t('emailPlaceholder')}
          className={errors.email ? 'error' : ''}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <span id="email-error" className="error-message" role="alert">
            {errors.email}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="message">{t('message')}</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder={t('messagePlaceholder')}
          rows="5"
          className={errors.message ? 'error' : ''}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <span id="message-error" className="error-message" role="alert">
            {errors.message}
          </span>
        )}
      </div>

      <button 
        type="submit" 
        className="submit-button"
        disabled={isSubmitting}
        aria-describedby="submit-status"
      >
        {isSubmitting ? t('sending') : t('sendMessage')}
      </button>
    </form>
  );
};

export default ContactForm;
