import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import profilePic from '../assets/images/Profile.jpg';

const AboutSection = styled.section`
  background-color: #1e1e1e;
  padding: 100px 0;
`;

const AboutContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const AboutCard = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: #2a2a2a;
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background: linear-gradient(to bottom, #6a11cb, #2575fc);
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 30px;
  }
`;

const ImageColumn = styled(motion.div)`
  flex: 0 0 30%;
  max-width: 30%;
  padding: 0 15px;
  
  @media (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-bottom: 40px;
  }
`;

const ContentColumn = styled(motion.div)`
  flex: 0 0 70%;
  max-width: 70%;
  padding: 0 15px;
  
  @media (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const ProfileImage = styled(motion.img)`
  width: 100%;
  max-width: 300px;
  border-radius: 50%;
  margin: 0 auto;
  display: block;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 40px rgba(106, 17, 203, 0.3);
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 50px;
  text-align: center;
  position: relative;
  color: #e0e0e0;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(to right, #6a11cb, #2575fc);
  }
`;

const AboutText = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #b0b0b0;
  margin-bottom: 30px;
  position: relative;
  padding-left: 10px;
  border-left: 2px solid rgba(106, 17, 203, 0.3);
`;

const AboutHeading = styled(motion.h3)`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: #e0e0e0;
  position: relative;
  display: inline-block;
  padding-bottom: 10px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background: linear-gradient(to right, #6a11cb, #2575fc);
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`;

const ContactInfo = styled(motion.div)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #b0b0b0;
  margin-bottom: 25px;
  
  span {
    display: block;
    margin-bottom: 8px;
    padding: 8px 12px;
    background-color: rgba(106, 17, 203, 0.1);
    border-radius: 6px;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: rgba(106, 17, 203, 0.2);
      transform: translateX(5px);
    }
    
    strong {
      color: #9a65f0;
      margin-right: 5px;
    }
  }
`;

const ResumeButton = styled(motion.a)`
  display: inline-block;
  background: linear-gradient(to right, #6a11cb, #2575fc);
  color: white;
  padding: 12px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(106, 17, 203, 0.3);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: all 0.5s ease;
  }
  
  &:hover:before {
    left: 100%;
  }
`;

const About = () => {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };
  
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    },
    hover: {
      scale: 1.05,
      rotate: 5,
      transition: { duration: 0.3 }
    }
  };
  
  return (
    <AboutSection id="about">
      <AboutContainer>
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </SectionTitle>
        
        <AboutCard
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ boxShadow: "0 15px 40px rgba(106, 17, 203, 0.3)" }}
        >
          <ImageColumn variants={itemVariants}>
            <ProfileImage 
              src={profilePic} 
              alt="Profile Picture"
              variants={imageVariants}
              whileHover="hover"
            />
          </ImageColumn>
          <ContentColumn variants={itemVariants}>
            <AboutHeading variants={itemVariants}></AboutHeading>
            <AboutText variants={itemVariants}>
              A self-motivated person who has 5 years in system administration. 
              I have worked in an on-prem environment and an AWS environment. 
              I enjoy learning new technologies and enjoy challenges. 
              I see myself working in this field in the next 10+ years. 
              There is always something new to learn and I enjoy that.
            </AboutText>
            <ContactInfo variants={itemVariants}>
              <span><strong>Full Name:</strong> John Alingwa</span>
              <span><strong>Email:</strong> xChaleur@gmail.com</span>
              <span><strong>Location:</strong> Germantown, MD</span>
            </ContactInfo>
            <ResumeButton 
              href="/Download/Resume2024.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.05, backgroundColor: "#6a11cb" }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </ResumeButton>
          </ContentColumn>
        </AboutCard>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
