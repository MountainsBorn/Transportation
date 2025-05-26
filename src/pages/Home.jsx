import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import styled, { createGlobalStyle } from "styled-components";
import NeonButton from "../components/AnimatedButton";
import AnimatedCard, { cardVariants } from "../components/AnimatedCard";
import GradientHeading from "../components/AnimatedHeading";
import transportationImg from "../assets/transportation.jpg";
import fleetImg from "../assets/fleet.jpg";
import insuranceImg from "../assets/insurance.jpg";
import homeHeroImg from "../assets/homeimage.jpg";
import Confetti from "react-confetti";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    width: 100%;
  }
`;

// Styled components
const Hero = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background: url(${homeHeroImg}) center center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;

  @media (max-width: 1024px) {
    height: 95vh;
  }

  @media (max-width: 768px) {
    height: 90vh;
  }

  @media (max-width: 480px) {
    height: 85vh;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.45);
  z-index: 1;
`;

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 2;
  text-align: center;
  color: #fff;
  padding: 0 2rem;
  max-width: 90%;
  width: 100%;

  @media (max-width: 1024px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 0 1.2rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

const DownArrow = styled(motion.div)`
  position: absolute;
  left: 50%;
  bottom: 40px;
  transform: translateX(-50%);
  z-index: 2;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  color: #fff;
  opacity: 0.7;
  cursor: pointer;

  @media (max-width: 768px) {
    bottom: 30px;
  }

  @media (max-width: 480px) {
    bottom: 20px;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  margin: 5rem auto 3rem auto;
  max-width: 1400px;
  padding: 0 2.5rem;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1400px) {
    max-width: 1200px;
  gap: 2rem;
    padding: 0 2rem;
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.8rem;
    padding: 0 1.8rem;
    margin-top: 4rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  margin-top: 3rem;
    padding: 0 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
    margin-top: 2.5rem;
    padding: 0 1.2rem;
  }
`;

const ServiceCard = styled(motion.div)`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 32px rgba(0,0,0,0.08);
  overflow: hidden;
  text-align: center;
  padding-bottom: 2rem;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;

  &:hover {
    box-shadow: 0 8px 32px 0 var(--primary), 0 2px 16px rgba(0,0,0,0.12);
    transform: translateY(-5px);
  }

  @media (max-width: 1024px) {
    padding-bottom: 1.8rem;
  }

  @media (max-width: 768px) {
    padding-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    padding-bottom: 1.2rem;
  }

  img {
    width: 100%;
    height: clamp(180px, 30vw, 220px);
    object-fit: cover;
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
    margin-bottom: 1.2rem;
    loading: "lazy";
    decoding: "async";

    @media (max-width: 768px) {
      height: clamp(160px, 25vw, 200px);
    }

    @media (max-width: 480px) {
      height: clamp(140px, 40vw, 180px);
    }
  }

  h3 {
    color: #222;
    margin: 1.2rem 0 0.8rem 0;
    font-size: clamp(1.3rem, 2.5vw, 1.6rem);
    padding: 0 1.5rem;
    font-weight: 600;
    line-height: 1.3;

    @media (max-width: 768px) {
      font-size: clamp(1.2rem, 2vw, 1.4rem);
      padding: 0 1.2rem;
    }

    @media (max-width: 480px) {
      font-size: clamp(1.1rem, 1.8vw, 1.3rem);
      padding: 0 1rem;
    }
  }

  p {
    color: #555;
    padding: 0 1.5rem;
    font-size: clamp(0.95rem, 1.5vw, 1.05rem);
    line-height: 1.6;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      padding: 0 1.2rem;
      font-size: clamp(0.9rem, 1.4vw, 1rem);
    }

    @media (max-width: 480px) {
      padding: 0 1rem;
      font-size: clamp(0.85rem, 1.3vw, 0.95rem);
    }
  }

  .icon {
    font-size: clamp(2.2rem, 4vw, 2.8rem);
    margin: 0.5rem 0 1rem 0;
    display: inline-block;

    @media (max-width: 768px) {
      font-size: clamp(2rem, 3.5vw, 2.5rem);
    }

    @media (max-width: 480px) {
      font-size: clamp(1.8rem, 3vw, 2.2rem);
    }
  }
`;

const sloganText = 'SIMPLIFYING YOUR TRANSPORT NEEDS';

const services = [
  {
    title: "Transportation",
    description: "Efficient and reliable transportation services across India with our modern fleet.",
    icon: "🚚",
    image: transportationImg
  },
  {
    title: "Fleet",
    description: "Comprehensive fleet management solutions for businesses of all sizes.",
    icon: "🚛",
    image: fleetImg
  },
  {
    title: "Insurance",
    description: "Complete insurance coverage and easy bill pay options.",
    icon: "🛡️",
    image: insuranceImg
  }
];

const Home = () => {
  // Typewriter effect for slogan
  const sloganRef = useRef();
  const [showConfetti, setShowConfetti] = useState(false);
  const [showCheck, setShowCheck] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (sloganRef.current && i <= sloganText.length) {
        sloganRef.current.textContent = sloganText.slice(0, i);
        i++;
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handleGetStarted = () => {
    setShowCheck(true);
    setTimeout(() => setShowCheck(false), 1800); // Show for 1.8 seconds
  };

  return (
    <>
      <GlobalStyle />
      <Hero>
        <Overlay />
        <HeroContent>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              fontSize: "clamp(1.8rem, 6vw, 4.5rem)",
              fontWeight: 700,
              letterSpacing: "0.08em",
              marginBottom: "1.5rem",
              lineHeight: 1.2,
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
            }}
        >
          NATIONAL INDIA ROADWAYS
          </motion.h1>
        <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
          style={{
              fontSize: "clamp(0.9rem, 2.5vw, 1.8rem)",
              fontWeight: 400,
              letterSpacing: "0.04em",
              marginBottom: "3rem",
              lineHeight: 1.4,
              textShadow: "1px 1px 3px rgba(0,0,0,0.3)"
            }}
        >
            SIMPLIFYING YOUR TRANSPORT NEEDS
          </motion.h2>
        </HeroContent>
        <DownArrow
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          ↓
        </DownArrow>
      </Hero>
        <CardsGrid>
        {services.map((service, i) => (
          <ServiceCard
              key={i}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 * i, duration: 0.7, ease: "easeOut" }}
            >
            <motion.img
              src={service.image}
              alt={service.title}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
            />
            <motion.div
              className="icon"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              {service.icon}
            </motion.div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </ServiceCard>
          ))}
        </CardsGrid>
    </>
  );
};

export default Home;