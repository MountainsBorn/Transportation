import styled from "styled-components";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const FooterContainer = styled.footer`
  background: rgba(26, 26, 46, 0.95);
  backdrop-filter: blur(10px);
  color: #e0e0e0;
  padding: 3rem 2rem 1.5rem 2rem;
  text-align: center;
  margin-top: 4rem;
  position: relative;
  z-index: 10;
  box-shadow: 0 -4px 30px rgba(0, 0, 0, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #00ff88, #00a1ff);
  }
`;

const FooterGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    text-align: left;
  }
`;

const FooterBrand = styled.div`
  font-size: 1.8rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: #fff;
  background: linear-gradient(90deg, #00ff88, #00a1ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 10px rgba(0, 255, 136, 0.3);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 600px) {
    justify-content: flex-start;
  }

  a {
    color: #e0e0e0;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    position: relative;
    padding: 0.5rem 0;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.1);

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, #00ff88, #00a1ff);
      transition: width 0.3s ease;
    }

    &:hover {
      color: #00ff88;
      &::after {
        width: 100%;
      }
    }
  }
`;

const FooterSocial = styled.div`
  display: flex;
  gap: 1.5rem;
  font-size: 1.5rem;

  a {
    color: #e0e0e0;
    transition: all 0.3s ease;
    padding: 0.5rem;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.1);

    &:hover {
      color: #00ff88;
      background: rgba(0, 255, 136, 0.1);
      transform: translateY(-3px);
    }
  }
`;

const FooterCopyright = styled.div`
  margin-top: 2.5rem;
  font-size: 0.95rem;
  color: rgba(224, 224, 224, 0.7);
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.05);
`;

const Footer = () => (
  <FooterContainer>
    <FooterGrid>
      <FooterBrand>NATIONAL INDIA ROADWAYS</FooterBrand>
      <FooterLinks>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </FooterLinks>
      <FooterSocial>
        <a href="https://www.facebook.com/manjeet.sharma.841349" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://www.instagram.com/vasist_manjeet/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://m.youtube.com/@national_india_roadways" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        <a href="https://www.linkedin.com/in/manjeet-sharma-21527617b/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </FooterSocial>
    </FooterGrid>
    <FooterCopyright>
      &copy; {new Date().getFullYear()} National India Roadways. All rights reserved.
    </FooterCopyright>
  </FooterContainer>
);

export default Footer;