// styles/HowItWorksStyled.ts
import styled from "styled-components";

export const HowItWorksWrapper = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2.5rem 1.5rem;
  background: #fff8f0;
  border-radius: 1.2rem;
  box-shadow: 0 4px 32px rgba(80, 43, 113, 0.08);
  font-family: 'Inter', 'Vazirmatn', 'Segoe UI', Arial, sans-serif;
  color: #372350;
`;

export const SectionTitle = styled.h1`
  font-size: 2.4rem;
  font-weight: 800;
  text-align: center;
  color: #5f0a87;
  margin-bottom: 2.5rem;
  letter-spacing: 0.02em;
`;

export const Section = styled.section`
  margin-bottom: 2.5rem;
`;

export const StepsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const StepCard = styled.div`
  background: linear-gradient(110deg, #ffe6fa 0%, #e0e9ff 100%);
  border-radius: 1rem;
  padding: 1.5rem 1.2rem;
  box-shadow: 0 2px 12px rgba(95, 10, 135, 0.05);
  transition: transform 0.2s;
  border-left: 6px solid #d176f8;

  h3 {
    font-size: 1.2rem;
    color: #502b71;
    font-weight: 700;
    margin-bottom: 0.7rem;
  }
  p {
    font-size: 1rem;
    color: #46364a;
    margin-bottom: 0;
  }
  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 6px 20px rgba(95, 10, 135, 0.13);
  }
`;

export const RuleList = styled.ul`
  list-style: disc;
  padding-left: 1.5rem;
  font-size: 1.04rem;

  li {
    margin-bottom: 0.7rem;
    color: #533b68;
    strong {
      color: #7b1fa2;
    }
  }
`;

export const BenefitList = styled.ul`
  list-style: square;
  padding-left: 1.3rem;
  font-size: 1.04rem;

  li {
    margin-bottom: 0.7rem;
    color: #2a595e;
    strong {
      color: #f08d49;
    }
  }
`;

