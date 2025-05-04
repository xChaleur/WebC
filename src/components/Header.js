import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import headerBg from '../assets/images/header-background.jpg';

const HeaderContainer = styled.header`
  height: 75vh; /* Reduced from 100vh to 75vh */
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${headerBg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
  overflow: hidden;
`;

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 20px 0;
  transition: all 0.3s ease;
  background: ${props => props.scrolled ? 'rgba(0, 0, 0, 0.9)' : 'transparent'};
  box-shadow: ${props => props.scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(motion.div)`
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  position: relative;
  overflow: hidden;
  
  span {
    display: inline-block;
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, #6a11cb, #2575fc, #6a11cb);
    background-size: 200% auto;
    animation: gradientMove 3s linear infinite;
  }
  
  @keyframes gradientMove {
    0% { background-position: 0% center; }
    100% { background-position: 200% center; }
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;

  @media (max-width: 768px) {
    display: ${props => props.mobileMenuOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.9);
    padding: 20px 0;
  }
`;

const NavItem = styled.li`
  margin: 0 15px;

  @media (max-width: 768px) {
    margin: 10px 0;
    text-align: center;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background: linear-gradient(to right, #6a11cb, #2575fc);
    transition: width 0.3s ease;
  }

  &:hover:after, &.active:after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.div`
  display: none;
  cursor: pointer;
  color: white;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 90%;
  max-width: 800px;
  z-index: 2;
`;

const TypewriterText = styled(motion.div)`
  display: block;
  overflow: hidden;
  white-space: nowrap;
  margin: 15px auto 0;
  letter-spacing: 0.15em;
  color: #f8f9fa;
  position: relative;
  font-size: 1.5rem;
  font-weight: 400;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 700;
  color: white;
  margin-bottom: 20px;
  position: relative;
  display: inline-block;
  
  &:hover {
    color: transparent;
    background: linear-gradient(to right, #6a11cb, #2575fc, #6a11cb);
    background-size: 200% auto;
    background-clip: text;
    -webkit-background-clip: text;
    animation: gradientText 2s linear infinite;
  }
  
  @keyframes gradientText {
    0% { background-position: 0% center; }
    100% { background-position: 200% center; }
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 576px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.h3)`
  font-size: 1.5rem;
  font-weight: 400;
  color: #f8f9fa;
  margin-bottom: 30px;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  
  &:hover {
    transform: translateY(-5px);
    text-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    color: #9a65f0;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const SocialLinks = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin-top: 30px;
`;

const SocialItem = styled.li`
  margin: 0 10px;
`;

const SocialLink = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: #6a11cb;
    transform: translateY(-3px);
  }
`;

const ScrollDown = styled(motion.div)`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 2rem;
  cursor: pointer;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0) translateX(-50%);
    }
    40% {
      transform: translateY(-20px) translateX(-50%);
    }
    60% {
      transform: translateY(-10px) translateX(-50%);
    }
  }
`;

// Star animations
const Stars = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const StarLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: transparent;
  animation: animateStars ${props => props.duration} linear infinite;

  &:after {
    content: '';
    position: absolute;
    top: -10px;
    left: 0;
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: ${props => props.boxShadow};
  }
`;

const Header = ({ scrollY }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [stars1, setStars1] = useState('');
  const [stars2, setStars2] = useState('');
  const [stars3, setStars3] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Generate random stars for the background
    let boxShadow1 = '';
    let boxShadow2 = '';
    let boxShadow3 = '';

    for (let i = 0; i < 200; i++) {
      const x = Math.floor(Math.random() * window.innerWidth);
      const y = Math.floor(Math.random() * window.innerHeight);
      boxShadow1 += `${x}px ${y}px #FFF, `;
    }

    for (let i = 0; i < 200; i++) {
      const x = Math.floor(Math.random() * window.innerWidth);
      const y = Math.floor(Math.random() * window.innerHeight);
      boxShadow2 += `${x}px ${y}px #FFF, `;
    }

    for (let i = 0; i < 100; i++) {
      const x = Math.floor(Math.random() * window.innerWidth);
      const y = Math.floor(Math.random() * window.innerHeight);
      boxShadow3 += `${x}px ${y}px #FFF, `;
    }

    setStars1(boxShadow1.slice(0, -2));
    setStars2(boxShadow2.slice(0, -2));
    setStars3(boxShadow3.slice(0, -2));
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <HeaderContainer id="home">
      <NavContainer scrolled={scrollY > 100}>
        <NavContent>
          <Logo
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {"John Alingwa".split('').map((letter, index) => (
              <motion.span
                key={index}
                initial={{ y: -20, opacity: 0 }}
                animate={{ 
                  y: 0, 
                  opacity: 1,
                  color: index % 2 === 0 ? ['#ffffff', '#9a65f0', '#ffffff'] : ['#ffffff', '#2575fc', '#ffffff']
                }}
                transition={{ 
                  delay: index * 0.05, 
                  duration: 0.5,
                  color: { 
                    repeat: Infinity, 
                    repeatType: "reverse", 
                    duration: 4 + (index * 0.2),
                    ease: "easeInOut" 
                  }
                }}
              >
                {letter}
              </motion.span>
            ))}
          </Logo>
          <MobileMenuButton onClick={toggleMobileMenu}>
            <i className={mobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </MobileMenuButton>
          <NavLinks mobileMenuOpen={mobileMenuOpen}>
            <NavItem>
              <NavLink to="home" smooth={true} duration={500} spy={true} activeClass="active">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="about" smooth={true} duration={500} spy={true} activeClass="active">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="resume" smooth={true} duration={500} spy={true} activeClass="active">Resume</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="contact" smooth={true} duration={500} spy={true} activeClass="active">Contact</NavLink>
            </NavItem>
          </NavLinks>
        </NavContent>
      </NavContainer>

      <Stars>
        <StarLayer boxShadow={stars1} duration="50s" />
        <StarLayer boxShadow={stars2} duration="100s" />
        <StarLayer boxShadow={stars3} duration="150s" />
      </Stars>

      <HeroContent>
        <HeroTitle
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          John Alingwa
        </HeroTitle>
        <HeroSubtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          whileHover={{ scale: 1.05, color: "#9a65f0" }}
        >
          System Administrator / Cloud Engineer
        </HeroSubtitle>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <HeroSubtitle 
            whileHover={{ 
              scale: 1.05, 
              color: "#9a65f0",
              textShadow: "0 0 8px rgba(154, 101, 240, 0.5)" 
            }}
          >
            Welcome to my Resume Page
          </HeroSubtitle>
          
          <motion.div style={{ marginTop: "20px" }}>
            <TypewriterText
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ 
                delay: 1.5, 
                duration: 2.5,
                ease: "easeInOut",
                onComplete: () => setShowCursor(false)
              }}
            >
              Made using React, Styled Components & Framer Motion
              {showCursor && (
                <motion.span
                  initial={{ opacity: 1 }}
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 0.8,
                    repeatType: "loop" 
                  }}
                  style={{ 
                    position: "absolute", 
                    right: 0,
                    marginLeft: "4px"
                  }}
                >
                  |
                </motion.span>
              )}
            </TypewriterText>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <SocialLinks>
            <SocialItem>
              <SocialLink href="https://github.com/xChaleur?tab=repositories" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink href="https://www.linkedin.com/in/john-alingwa/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </SocialLink>
            </SocialItem>
          </SocialLinks>
        </motion.div>
      </HeroContent>

      <ScrollDown
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <Link to="about" smooth={true} duration={500}>
          <i className="fas fa-chevron-down"></i>
        </Link>
      </ScrollDown>
    </HeaderContainer>
  );
};

export default Header;
