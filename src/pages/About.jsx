import { motion } from 'framer-motion';
import styled from 'styled-components';
import homeHeroImg from "../assets/About.jpg";
import aboutCustomer from "../aboutImage/aboutcoustomer.webp";
import aboutFleet from "../aboutImage/aboutfleet.webp";
import aboutInsurance from "../aboutImage/aboutinsurance.webp";
import aboutOnTime from "../aboutImage/aboutOnTIME.jpg";
import ownerImage from "../assets/owner.jpg";
import BackButton from '../components/BackButton';

const AboutContainer = styled.div`
  min-height: 100vh;
  background: var(--bg-primary);
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AboutHero = styled.section`
  width: 100vw;
  height: 40vh;
  min-height: 220px;
  max-height: 350px;
  background: url(${homeHeroImg}) center center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.45);
  z-index: 1;
`;

const HeroText = styled(motion.div)`
  position: relative;
  z-index: 2;
  color: #fff;
  text-align: center;
  h1 {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 700;
    letter-spacing: 0.04em;
    margin-bottom: 0.7rem;
  }
  p {
    font-size: clamp(1.1rem, 2.5vw, 1.4rem);
    font-weight: 400;
    letter-spacing: 0.02em;
    margin: 0;
  }
`;

const AboutContent = styled.section`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 2.5rem 2rem 1.5rem 2rem;
  text-align: center;
`;

const FeaturesGrid = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-top: 2.5rem;
  padding: 0 1rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled(motion.div)`
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.07);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  }

  .image-container {
    width: 100%;
    height: 180px;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 1.2rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  h4 {
    color: var(--primary);
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
  }

  p {
    color: #555;
    line-height: 1.5;
  }
`;

const OwnerSection = styled(motion.section)`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: flex;
  align-items: center;
  gap: 4rem;

  @media (max-width: 1024px) {
    padding: 3rem 1.5rem;
    gap: 3rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 2.5rem 1.2rem;
    gap: 2rem;
  }
`;

const OwnerImage = styled(motion.div)`
  flex: 0 0 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  border: 4px solid var(--primary);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    flex: 0 0 250px;
    height: 250px;
  }

  @media (max-width: 480px) {
    flex: 0 0 200px;
    height: 200px;
  }
`;

const OwnerContent = styled(motion.div)`
  flex: 1;

  h2 {
    font-size: 2.2rem;
    color: var(--primary);
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.4rem;
    color: var(--accent);
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.1rem;
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1.3rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

const features = [
  {
    image: aboutFleet,
    title: "Modern Fleet",
    desc: "Our vehicles are equipped with the latest technology for safe and efficient transportation."
  },
  {
    image: aboutInsurance,
    title: "Full Insurance",
    desc: "We provide comprehensive insurance for your peace of mind and security."
  },
  {
    image: aboutOnTime,
    title: "On-Time Delivery",
    desc: "Punctuality is our promise. We deliver your goods on schedule, every time."
  },
  {
    image: aboutCustomer,
    title: "Customer Focused",
    desc: "We build long-term relationships with our clients through trust and service."
  }
];

export default function About() {
  return (
    <AboutContainer>
      <BackButton />
      <AboutHero>
        <HeroOverlay />
        <HeroText
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1>About National India Roadways</h1>
          <p>
            National India Roadways is a leading transportation and fleet management company, dedicated to providing reliable, efficient, and safe transport solutions across India.
          </p>
        </HeroText>
      </AboutHero>

      <OwnerSection
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <OwnerImage
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src={ownerImage} alt="Business Owner" />
        </OwnerImage>
        <OwnerContent
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2>Meet Our Owner</h2>
          <h3>Manjeet Sharma</h3>
          <p>
            With +5 years of experience in the transportation industry, Manjeet Sharma established National India Roadways to provide reliable transport and insurance services. His vision focuses on delivering safe and efficient transportation solutions along with comprehensive insurance coverage for vehicles across India.
          </p>
          <p>
            Under his leadership, National India Roadways has established itself as a trusted provider of transportation and insurance services, ensuring peace of mind for our customers through reliable service and proper coverage.
          </p>
        </OwnerContent>
      </OwnerSection>

      <AboutContent>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          style={{ color: "var(--text-secondary)", fontSize: "1.15rem", lineHeight: 1.7, marginBottom: "1.2rem" }}
        >
          With +5 years of experience in transportation and insurance services, we provide reliable and efficient solutions for all your transport needs. Our mission is to offer comprehensive transport and insurance services, ensuring your vehicles and goods are protected while reaching their destination safely. We believe in building trust through transparent service and dedicated support for both businesses and individuals.
        </motion.p>
        <FeaturesGrid>
          {features.map((feature, i) => (
            <FeatureCard
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2 * i, duration: 0.7, ease: "easeOut" }}
            >
              <div className="image-container">
                <img src={feature.image} alt={feature.title} />
              </div>
              <h4>{feature.title}</h4>
              <p>{feature.desc}</p>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </AboutContent>
    </AboutContainer>
  );
}