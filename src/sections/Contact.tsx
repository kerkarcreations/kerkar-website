import React, { useState } from 'react';
import type { ContactForm } from '../types';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    company: '',
    message: '',
    serviceInterest: []
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    'AR/VR Development',
    'Web Development',
    'Mobile App Development',
    'Snap Lens Creation',
    'Instagram Filters',
    'Game Development'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      serviceInterest: prev.serviceInterest.includes(service)
        ? prev.serviceInterest.filter(s => s !== service)
        : [...prev.serviceInterest, service]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
      serviceInterest: []
    });
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact-header">
          <h2 className="contact-title gradient-text">Get In Touch</h2>
          <p className="contact-subtitle">
            Ready to bring your vision to life? Let's discuss your next immersive project.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">📧</div>
              <div className="info-content">
                <h3>Email Us</h3>
                <p>hello@kerkarcreations.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">💬</div>
              <div className="info-content">
                <h3>Let's Chat</h3>
                <p>Schedule a free consultation</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🚀</div>
              <div className="info-content">
                <h3>Start Your Project</h3>
                <p>From concept to reality</p>
              </div>
            </div>

            <div className="social-links">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">Instagram</a>
                <a href="#" className="social-link">GitHub</a>
                <a href="#" className="social-link">Behance</a>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form glass">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label>Services of Interest</label>
                <div className="service-checkboxes">
                  {services.map((service) => (
                    <button
                      key={service}
                      type="button"
                      className={`service-checkbox ${
                        formData.serviceInterest.includes(service) ? 'selected' : ''
                      }`}
                      onClick={() => handleServiceToggle(service)}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="form-textarea"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button 
                type="submit" 
                className="btn btn-primary submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="loading">
                    <span className="loading-spinner"></span>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
