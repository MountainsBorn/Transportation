import { motion } from 'framer-motion';
import styled from 'styled-components';
import serviceHeroImg from '../assets/service.webp';
import BackButton from '../components/BackButton';

const ServicesContainer = styled.div`
  min-height: 100vh;
  background: var(--bg-primary);
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow-x: hidden;
`;

const ServicesHero = styled.section`
  width: 100vw;
  min-height: 200px;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${serviceHeroImg}) center center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    min-height: 180px;
  }

  @media (max-width: 480px) {
    min-height: 160px;
  }
`;

const HeroText = styled(motion.div)`
  color: #ffffff;
  text-align: center;
  padding: 2.5rem 1rem;
  max-width: 90%;
  position: relative;
  z-index: 2;

  h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 700;
    letter-spacing: 0.04em;
    margin-bottom: 1rem;
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
  }
`;

const ServicesContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 4rem 2rem;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0 1.5rem 3rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem 2rem 1rem;
  }
`;

const ServicesHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 1rem;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
`;

const Slogan = styled(motion.div)`
  font-size: 1.4rem;
  color: var(--primary);
  font-weight: 600;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const SloganWord = styled(motion.span)`
  display: inline-block;
  color: var(--accent);
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const ServiceCard = styled(motion.div)`
  background: var(--bg-secondary);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px var(--shadow);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: var(--primary);
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const Services = () => {
  const sloganWords = ["Reliable", "Efficient", "Nationwide", "Transport"];

  return (
    <ServicesContainer>
      <BackButton />
      <ServicesHero>
        <HeroText
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Our Services</h1>
          <p>Comprehensive Transport Solutions Across India</p>
        </HeroText>
      </ServicesHero>

      <ServicesContent>
        <ServicesHeader
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            All-India Transport and Insurance Solutions
          </Subtitle>
          <Slogan>
            {sloganWords.map((word, index) => (
              <SloganWord
                key={word}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3 + index * 0.1,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100
                }}
              >
                {word}
              </SloganWord>
            ))}
          </Slogan>
        </ServicesHeader>

        <Title style={{ marginBottom: '2rem' }}>Transport Services</Title>
        <ServicesGrid>
          <ServiceCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ServiceIcon>🚛</ServiceIcon>
            <ServiceTitle>All-India Transport</ServiceTitle>
            <ServiceDescription>
              Reliable transport services across all states of India. We ensure safe and timely delivery of your goods to any location in the country.
            </ServiceDescription>
          </ServiceCard>

          <ServiceCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ServiceIcon>🚚</ServiceIcon>
            <ServiceTitle>State-to-State Transport</ServiceTitle>
            <ServiceDescription>
              Dedicated transport services between any states in India. We handle your cargo with care and ensure proper delivery across state borders.
            </ServiceDescription>
          </ServiceCard>

          <ServiceCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ServiceIcon>📦</ServiceIcon>
            <ServiceTitle>Pan-India Goods Transport</ServiceTitle>
            <ServiceDescription>
              Comprehensive goods transport services covering the entire country. We provide appropriate vehicles for different types of cargo across India.
            </ServiceDescription>
          </ServiceCard>
        </ServicesGrid>

        <Title style={{ marginBottom: '2rem' }}>Insurance Services</Title>
        <ServicesGrid>
          <ServiceCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ServiceIcon>🛡️</ServiceIcon>
            <ServiceTitle>Vehicle Insurance</ServiceTitle>
            <ServiceDescription>
              Basic vehicle insurance coverage for your transport vehicles. We offer standard protection plans for your vehicles across India.
            </ServiceDescription>
          </ServiceCard>

          <ServiceCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ServiceIcon>📄</ServiceIcon>
            <ServiceTitle>All-India Documentation</ServiceTitle>
            <ServiceDescription>
              Assistance with transport documentation and permits across all states. We help you with essential paperwork and registrations for pan-India transport.
            </ServiceDescription>
          </ServiceCard>

          <ServiceCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ServiceIcon>💰</ServiceIcon>
            <ServiceTitle>Vehicle Payment Services</ServiceTitle>
            <ServiceDescription>
              Handle all types of vehicle-related payments including road tax, permit fees, toll charges, and other transport-related payments across India.
            </ServiceDescription>
          </ServiceCard>
        </ServicesGrid>
      </ServicesContent>
    </ServicesContainer>
  );
};

export default Services;