import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaDirections } from "react-icons/fa";
import contactHeroImg from "../assets/contact.jpg";
import BackButton from '../components/BackButton';

const ContactContainer = styled.div`
  min-height: 100vh;
  background: var(--bg-primary);
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow-x: hidden;
`;

const ContactHero = styled.section`
  width: 100vw;
  min-height: 180px;
  background: url(${contactHeroImg}) center center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 768px) {
    min-height: 160px;
  }

  @media (max-width: 480px) {
    min-height: 140px;
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.6);
  z-index: 1;
`;

const HeroText = styled(motion.div)`
  color: #ffffff;
  text-align: center;
  padding: 2.5rem 1rem 2rem 1rem;
  max-width: 90%;
  position: relative;
  z-index: 2;

  h1 {
    font-size: clamp(1.8rem, 5vw, 3.2rem);
    font-weight: 700;
    letter-spacing: 0.04em;
    margin-bottom: 0.7rem;
    display: inline-block;
    color: #ffffff;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
  }
  p {
    font-size: clamp(1rem, 2.5vw, 1.4rem);
    font-weight: 400;
    letter-spacing: 0.02em;
    margin: 0;
    color: #ffffff;
    text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.7);
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    padding: 2rem 0.5rem 1.5rem 0.5rem;
  }
`;

const ContactContent = styled.section`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 2.5rem 2rem 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem 1rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem 1rem 1rem;
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  width: 100%;
  padding: 0 1rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const InfoCard = styled(motion.div)`
  background: var(--bg-secondary);
  border-radius: 14px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  padding: 2.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: var(--text-primary);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  min-height: 220px;

  @media (max-width: 768px) {
    padding: 2rem 1.2rem;
    min-height: 200px;
  }

  @media (max-width: 480px) {
    padding: 1.8rem 1rem;
    min-height: 180px;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
  width: 100%;
    height: 4px;
    background: linear-gradient(90deg, var(--primary), var(--accent));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }

  svg {
    font-size: clamp(1.8rem, 3vw, 2.5rem);
    color: var(--primary);
    margin-bottom: 1.2rem;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }

  div {
    font-size: clamp(1rem, 1.5vw, 1.2rem);
    margin-top: 0.7rem;
    font-weight: 600;
  color: var(--text-primary);
  }

  a {
    color: var(--primary);
    font-weight: 600;
    text-decoration: none;
    font-size: clamp(0.9rem, 1.5vw, 1.1rem);
    margin-top: 0.8rem;
    transition: all 0.3s ease;
    position: relative;
    padding: 0.3rem 0;
    word-break: break-all;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: var(--accent);
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.3s ease;
    }

    &:hover {
      color: var(--accent);
      &::after {
        transform: scaleX(1);
        transform-origin: left;
      }
    }
  }
`;

const ContactForm = styled.form`
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.07);
  padding: 2rem 1.5rem;
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    padding: 1.8rem 1.2rem;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
    gap: 0.8rem;
  }

  input, textarea {
  width: 100%;
    padding: 0.8rem;
    border-radius: 6px;
    border: 1px solid #ddd;
    font-size: clamp(0.9rem, 1.5vw, 1rem);
    resize: none;
  }

  button {
  background: var(--primary);
    color: #fff;
  border: none;
    border-radius: 6px;
    padding: 0.9rem 0;
    font-size: clamp(0.9rem, 1.5vw, 1.1rem);
    font-weight: 600;
  cursor: pointer;
    transition: background 0.2s;
  &:hover {
    background: var(--accent);
  }
  }
`;

const ThankYouBox = styled(motion.div)`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.10);
  padding: 2.5rem 2rem;
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    margin-top: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1.8rem 1.2rem;
    margin-top: 1.5rem;
  }

  h2 {
    font-size: clamp(1.5rem, 3vw, 2rem);
    margin-bottom: 1rem;
  }

  p {
    font-size: clamp(0.9rem, 1.5vw, 1rem);
    text-align: center;
    line-height: 1.5;
  }
`;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }
    })
  };

  return (
    <ContactContainer>
      <BackButton />
      <ContactHero>
        <HeroOverlay />
        <HeroText
          initial={{ opacity: 0, y: -40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1.05 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1>
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
            >
              Contact Us
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, type: "spring" }}
          >
            We're here to help! Reach out for transport solutions, quotes, or any questions.
          </motion.p>
        </HeroText>
      </ContactHero>
      <ContactContent>
        <InfoGrid>
          <InfoCard
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <FaPhoneAlt size={32} />
            <div style={{ marginTop: "0.7rem", fontWeight: 600, fontSize: "1.2rem" }}>Call Us</div>
            <a href="tel:+918492872340" style={{ marginBottom: "0.2rem" }}>+91 84928 72340</a>
            <a href="tel:+918825078117" style={{ marginBottom: "0.2rem" }}>+91 88250 78117</a>
            <a href="tel:+919541872340">+91 95418 72340</a>
          </InfoCard>
          <InfoCard
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
        >
            <FaEnvelope size={32} />
            <div style={{ marginTop: "0.7rem", fontWeight: 600, fontSize: "1.2rem" }}>Email</div>
            <a href="mailto:manjeetsharma8397@gmail.com" style={{ wordBreak: "break-all" }}>manjeetsharma8397@gmail.com</a>
          </InfoCard>
          <InfoCard
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <FaMapMarkerAlt size={32} />
            <div style={{ marginTop: "0.7rem", fontWeight: 600, fontSize: "1.2rem" }}>Office</div>
            <div style={{ marginTop: "0.5rem", fontSize: "1.05rem" }}>
              Plot number 45 and 47, Yard Number 6,<br />
              Transport Nagar, Narwal, Jammu 180006
            </div>
          </InfoCard>
          <InfoCard
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <FaDirections size={32} />
            <div style={{ marginTop: "0.7rem", fontWeight: 600, fontSize: "1.2rem" }}>Direction</div>
            <a
              href="https://maps.app.goo.gl/m9orcxKLyEFUqXVFA"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginTop: "0.5rem", fontSize: "1.05rem" }}
            >
              Get Directions
            </a>
          </InfoCard>
        </InfoGrid>
        {!submitted ? (
          <ContactForm
            as={motion.form}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
            onSubmit={e => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows={4} placeholder="Your Message" required />
            <button type="submit">Send Message</button>
          </ContactForm>
        ) : (
          <ThankYouBox
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              initial={{ scale: 0.7 }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: 1, repeatType: "reverse" }}
              style={{ marginBottom: "1.2rem" }}
            >
              <circle cx="40" cy="40" r="38" fill="none" stroke="var(--accent)" strokeWidth="4" />
              <motion.path
                d="M25 42 L37 54 L56 32"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </motion.svg>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              style={{ color: "var(--primary)", marginBottom: "0.5rem" }}
            >
              Thank You!
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              style={{ color: "var(--text-secondary)" }}
            >
              Your message has been received. We will get back to you soon.
            </motion.p>
          </ThankYouBox>
        )}
      </ContactContent>
    </ContactContainer>
  );
}