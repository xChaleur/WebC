import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

const ContactSection = styled.section`
  background-color: #1e1e1e;
  padding: 100px 0;
`;

const ContactContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  position: relative;
  display: inline-block;
  padding-bottom: 15px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 70px;
    height: 3px;
    background: linear-gradient(to right, #6a11cb, #2575fc);
  }
`;

const ContactRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContactInfoColumn = styled.div`
  flex: 0 0 40%;
  max-width: 40%;
  padding: 0 15px;
  
  @media (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-bottom: 50px;
  }
`;

const ContactFormColumn = styled.div`
  flex: 0 0 60%;
  max-width: 60%;
  padding: 0 15px;
  
  @media (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const InfoItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
`;

const InfoIcon = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(to right, #6a11cb, #2575fc);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  color: white;
  font-size: 1.2rem;
  box-shadow: 0 5px 15px rgba(106, 17, 203, 0.3);
`;

const InfoContent = styled.div`
  h3 {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 10px;
    color: #e0e0e0;
  }
  
  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #b0b0b0;
  }
`;

const ContactForm = styled(motion.form)`
  background-color: #2a2a2a;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`;

const FormGroup = styled.div`
  margin-bottom: 25px;
`;

const FormLabel = styled.label`
  display: block;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 10px;
  color: #d0d0d0;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 15px;
  border: 1px solid #444;
  border-radius: 5px;
  font-size: 1rem;
  background-color: #333;
  color: #e0e0e0;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: #9a65f0;
    box-shadow: 0 0 0 2px rgba(154, 101, 240, 0.3);
    outline: none;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 15px;
  border: 1px solid #444;
  border-radius: 5px;
  font-size: 1rem;
  background-color: #333;
  color: #e0e0e0;
  transition: all 0.3s ease;
  resize: vertical;
  min-height: 150px;
  
  &:focus {
    border-color: #9a65f0;
    box-shadow: 0 0 0 2px rgba(154, 101, 240, 0.3);
    outline: none;
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 15px 40px;
  background: linear-gradient(to right, #6a11cb, #2575fc);
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(106, 17, 203, 0.3);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(106, 17, 203, 0.5);
  }
`;

const MessageSuccess = styled(motion.div)`
  padding: 15px;
  background-color: #d4edda;
  color: #155724;
  border-radius: 5px;
  margin-top: 20px;
`;

const MessageError = styled(motion.div)`
  padding: 15px;
  background-color: #f8d7da;
  color: #721c24;
  border-radius: 5px;
  margin-top: 20px;
`;

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
    loading: false
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    setFormStatus({
      ...formStatus,
      loading: true
    });
    
    // EmailJS credentials - verified and working correctly
    const serviceId = 'service_ivdqbwq';
    const templateId = 'template_t3tvidv';
    const publicKey = 'HvVpzZSkmCNu9pEsC';
    
    // Create a simple test template params object
    const templateParams = {
      user_name: formData.user_name,
      user_email: formData.user_email,
      subject: formData.subject,
      message: formData.message,
      date: new Date().toLocaleString()
    };
    
    // Send email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((result) => {
        setFormStatus({
          submitted: true,
          success: true,
          message: 'Your message has been sent successfully!',
          loading: false
        });
        
        // Reset form after submission
        setFormData({
          user_name: '',
          user_email: '',
          subject: '',
          message: ''
        });
        
        // Reset form status after 5 seconds
        setTimeout(() => {
          setFormStatus({
            submitted: false,
            success: false,
            message: '',
            loading: false
          });
        }, 5000);
      })
      .catch((error) => {
        setFormStatus({
          submitted: true,
          success: false,
          message: `Failed to send message. Please try again later.`,
          loading: false
        });
      });
  };
  
  return (
    <ContactSection id="contact">
      <ContactContainer>
        <SectionTitle>
          <Title>Contact Me</Title>
        </SectionTitle>
        
        <ContactRow>
          <ContactInfoColumn>
            <InfoItem
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <InfoIcon>
                <i className="fas fa-map-marker-alt"></i>
              </InfoIcon>
              <InfoContent>
                <h3>Location</h3>
                <p>Germantown, MD</p>
              </InfoContent>
            </InfoItem>
            
            <InfoItem
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <InfoIcon>
                <i className="fas fa-envelope"></i>
              </InfoIcon>
              <InfoContent>
                <h3>Email</h3>
                <p>xChaleur@gmail.com</p>
              </InfoContent>
            </InfoItem>
            
            <InfoItem
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <InfoIcon>
                <i className="fas fa-globe"></i>
              </InfoIcon>
              <InfoContent>
                <h3>Social Profiles</h3>
                <p>
                  <a href="https://github.com/xChaleur?tab=repositories" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px', color: '#333' }}>
                    <i className="fab fa-github fa-lg"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/john-alingwa/" target="_blank" rel="noopener noreferrer" style={{ color: '#333' }}>
                    <i className="fab fa-linkedin fa-lg"></i>
                  </a>
                </p>
              </InfoContent>
            </InfoItem>
          </ContactInfoColumn>
          
          <ContactFormColumn>
            <ContactForm
              ref={form}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
            >
              <FormGroup>
                <FormLabel>Your Name</FormLabel>
                <FormInput 
                  type="text" 
                  name="user_name" 
                  value={formData.user_name} 
                  onChange={handleChange} 
                  required 
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel>Your Email</FormLabel>
                <FormInput 
                  type="email" 
                  name="user_email" 
                  value={formData.user_email} 
                  onChange={handleChange} 
                  required 
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel>Subject</FormLabel>
                <FormInput 
                  type="text" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  required 
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel>Your Message</FormLabel>
                <FormTextarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                />
              </FormGroup>
              
              <SubmitButton 
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={formStatus.loading}
              >
                {formStatus.loading ? 'Sending...' : 'Send Message'}
              </SubmitButton>
              
              {formStatus.submitted && formStatus.success && (
                <MessageSuccess
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {formStatus.message}
                </MessageSuccess>
              )}
              
              {formStatus.submitted && !formStatus.success && (
                <MessageError
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {formStatus.message}
                </MessageError>
              )}
            </ContactForm>
          </ContactFormColumn>
        </ContactRow>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
