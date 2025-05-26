import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useState } from 'react';
import { FaStar, FaTruck, FaUserTie, FaPhoneAlt, FaComments } from 'react-icons/fa';
import BackButton from '../components/BackButton';
import emailjs from '@emailjs/browser';

const FeedbackContainer = styled.div`
  min-height: 100vh;
  background: var(--bg-primary);
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow-x: hidden;
`;

const FeedbackHero = styled.section`
  width: 100vw;
  min-height: 200px;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80') center center/cover no-repeat;
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
  color: #fff;
  text-align: center;
  padding: 2.5rem 1rem;
  max-width: 90%;

  h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 700;
    letter-spacing: 0.04em;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  p {
    font-size: clamp(1rem, 2.5vw, 1.4rem);
    font-weight: 400;
    letter-spacing: 0.02em;
    margin: 0;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  }
`;

const FeedbackContent = styled.div`
  max-width: 800px;
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

const FeedbackForm = styled(motion.form)`
  background: var(--bg-secondary);
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 2rem;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    gap: 1.2rem;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled.label`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
`;

const CategorySelect = styled.select`
  padding: 0.8rem;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  font-size: 1rem;
  background: var(--bg-primary);
  color: var(--text-primary);
  cursor: pointer;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const RatingContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin: 1rem 0;
`;

const RatingButton = styled(motion.button)`
  font-size: 2.5rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  opacity: ${props => props.selected ? 1 : 0.5};
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: var(--bg-primary);
  color: var(--text-primary);
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 1rem;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--accent);
    transform: translateY(-2px);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`;

const ThankYouMessage = styled(motion.div)`
  text-align: center;
  padding: 3rem 2rem;
  background: var(--bg-secondary);
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  svg {
    font-size: 4rem;
    color: var(--primary);
  }

  h2 {
    font-size: 2rem;
    color: var(--text-primary);
    margin: 0;
  }

  p {
    font-size: 1.1rem;
    color: var(--text-secondary);
    margin: 0;
    max-width: 500px;
  }
`;

const Feedback = () => {
  const [category, setCategory] = useState('');
  const [rating, setRating] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_b2pobgw',
        'template_pv7ivdv',
        {
          from_name: 'Feedback Submission',
          from_email: 'feedback@transport.com',
          message: `
Category: ${category}
Rating: ${rating} ${ratings.find(r => r.value === rating)?.emoji}
Feedback: ${feedback}
          `,
          to_name: 'Admin',
        },
        'fWsCpY_rdwAtBmYZz'
      );
      
      setSubmitted(true);
    } catch (error) {
      console.error('Failed to send feedback:', error);
      alert('Failed to send feedback. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const ratings = [
    { emoji: '😞', value: 1, label: 'Poor' },
    { emoji: '😐', value: 2, label: 'Fair' },
    { emoji: '😊', value: 3, label: 'Good' },
    { emoji: '😄', value: 4, label: 'Very Good' },
    { emoji: '🤩', value: 5, label: 'Excellent' }
  ];

  const categories = [
    { value: 'transport', label: 'Transport Related', icon: <FaTruck /> },
    { value: 'insurance', label: 'Insurance', icon: <FaUserTie /> },
    { value: 'overall', label: 'Overall Experience', icon: <FaComments /> }
  ];

  if (submitted) {
    return (
      <FeedbackContainer>
        <FeedbackContent>
          <ThankYouMessage
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <FaStar />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Thank You for Your Feedback!
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Your valuable feedback helps us improve our services and provide better experiences to our customers.
            </motion.p>
          </ThankYouMessage>
        </FeedbackContent>
      </FeedbackContainer>
    );
  }

  return (
    <FeedbackContainer>
      <BackButton />
      <FeedbackHero>
        <HeroText
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Share Your Experience</h1>
          <p>Your feedback helps us serve you better</p>
        </HeroText>
      </FeedbackHero>

      <FeedbackContent>
        <FeedbackForm
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
        >
          <FormGroup>
            <Label>What would you like to provide feedback about?</Label>
            <CategorySelect
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select a category</option>
              {categories.map(({ value, label }) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </CategorySelect>
          </FormGroup>

          <FormGroup>
            <Label>How would you rate your experience?</Label>
            <RatingContainer>
              {ratings.map(({ emoji, value, label }) => (
                <RatingButton
                  key={value}
                  type="button"
                  selected={rating === value}
                  onClick={() => setRating(value)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  title={label}
                >
                  {emoji}
                </RatingButton>
              ))}
            </RatingContainer>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="feedback">Tell us more about your experience</Label>
            <TextArea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Share your thoughts, suggestions, or concerns..."
              required
            />
          </FormGroup>

          <SubmitButton
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={!rating || !category || isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Submit Feedback'}
          </SubmitButton>
        </FeedbackForm>
      </FeedbackContent>
    </FeedbackContainer>
  );
};

export default Feedback;