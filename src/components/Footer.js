import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: linear-gradient(to right, #1a1a1a, #2c2c2c);
  color: #f8f9fa;
  padding: 40px 0 20px;
`;

const FooterContent = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const SocialLinks = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin-bottom: 30px;
`;

const SocialItem = styled.li`
  margin: 0 10px;
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: linear-gradient(to right, #6a11cb, #2575fc);
  color: white;
  border-radius: 50%;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(106, 17, 203, 0.5);
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: #aaa;
  margin-bottom: 20px;
`;

const BackToTop = styled(motion.div)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background: linear-gradient(to right, #6a11cb, #2575fc);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 999;
  box-shadow: 0 5px 15px rgba(106, 17, 203, 0.5);
  
  &:hover {
    transform: translateY(-3px);
  }
`;

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <FooterContainer>
      <FooterContent>
        <SocialLinks>
          <SocialItem>
            <SocialLink 
              href="https://github.com/xChaleur?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-github"></i>
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink 
              href="https://www.linkedin.com/in/john-alingwa/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-linkedin-in"></i>
            </SocialLink>
          </SocialItem>
        </SocialLinks>
        
        <Copyright>
          &copy; {new Date().getFullYear()} John Alingwa. All rights reserved.
        </Copyright>
      </FooterContent>
      
      <BackToTop
        onClick={scrollToTop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <i className="fas fa-arrow-up"></i>
      </BackToTop>
    </FooterContainer>
  );
};

export default Footer;
