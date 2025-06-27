import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ContactForm from './ContactForm';
import '../styles/ContactForm.css';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  const contactMethods = [
    {
      title: t('email') || 'Email',
      value: 'erimuludag39@gmail.com',
      action: 'mailto:erimuludag39@gmail.com'
    },
    {
      title: t('phone') || 'Phone',
      value: '06 36064366',
      action: 'tel:0636064366'
    },
    {
      title: t('location') || 'Location',
      value: t('locationValue') || 'Netherlands',
      action: null
    },
    {
      title: 'LinkedIn',
      value: 'linkedin.com/in/erim-uludag-273417303',
      action: 'https://www.linkedin.com/in/erim-uludag-273417303'
    }
  ];

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <motion.div
        className="container"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className="contact-header" variants={itemVariants}>
          <h2 className="section-title">
            {t('contactTitle') || 'Get In Touch'}
          </h2>
          <p className="section-subtitle">
            {t('contactSubtitle') || 'Ready to start your next project? Let\'s discuss how I can help bring your ideas to life.'}
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div className="contact-info" variants={itemVariants}>
            <h3 className="info-title">{t('contactInfo') || 'Contact Information'}</h3>
            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  className="contact-method"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="method-content">
                    <h4 className="method-title">{method.title}</h4>
                    {method.action ? (
                      <a 
                        href={method.action} 
                        className="method-value"
                        target={method.action.startsWith('http') ? '_blank' : '_self'}
                        rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
                      >
                        {method.value}
                      </a>
                    ) : (
                      <span className="method-value">{method.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className="contact-form-wrapper" variants={itemVariants}>
            <h3 className="form-title">{t('sendMessage') || 'Send a Message'}</h3>
            <ContactForm />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;