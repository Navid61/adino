// styles/HowItWorksStyled.ts
import styled, { css } from "styled-components";

// Helper for RTL styles
const rtl = css`
  direction: rtl;
  font-family: 'Vazirmatn', 'IRANSans', Tahoma, Arial, sans-serif;
`;

const ltr = css`
  direction: ltr;
  font-family: 'Inter', 'Vazirmatn', sans-serif;
`;

export const HowItWorksWrapper = styled.div<{ dir?: string }>`
  max-width: 950px;
  margin: 0 auto;
  padding: 2.5rem 1rem 4rem 1rem;
  background: linear-gradient(135deg, #fff 60%, #f5f7fa 100%);
  border-radius: 32px;
  box-shadow: 0 6px 32px rgba(50, 50, 100, 0.08);
  color: #21242b;
  ${({ dir }) => (dir === "rtl" ? rtl : ltr)};
  @media (max-width: 700px) {
    padding: 1.2rem 0.2rem 2rem 0.2rem;
    border-radius: 0;
  }
`;

export const SectionTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
  text-align: center;
  margin-bottom: 1.8rem;
  color: #1a237e;
  letter-spacing: -1.2px;
  @media (max-width: 700px) {
    font-size: 1.7rem;
    margin-bottom: 1rem;
  }
`;

export const StepsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
  margin-bottom: 2.7rem;
  @media (max-width: 700px) {
    gap: 1.1rem;
  }
`;

export const StepCard = styled.div`
  background: #fff;
  border-radius: 26px;
  box-shadow: 0 4px 24px rgba(90, 120, 210, 0.10);
  padding: 2rem 1.2rem 1.3rem 1.2rem;
  text-align: center;
  transition: box-shadow 0.22s, transform 0.18s;
  will-change: transform;
  &:hover {
    box-shadow: 0 12px 32px rgba(50, 110, 220, 0.15);
    transform: translateY(-4px) scale(1.033);
  }
  h3 {
    font-size: 1.22rem;
    margin: 0.8rem 0 0.35rem 0;
    font-weight: 700;
    color: #0c133b;
    letter-spacing: -0.3px;
  }
  p {
    font-size: 1.08rem;
    color: #46485a;
    margin: 0.42rem 0 0 0;
    line-height: 1.78;
    @media (max-width: 700px) {
      font-size: 1.1rem;
    }
  }
  .icon {
    color: #355bff;
    margin-bottom: 0.2rem;
    margin-inline-end: 0.35rem;
  }
`;

export const Section = styled.section`
  margin-bottom: 2.2rem;
  @media (max-width: 700px) {
    margin-bottom: 1.1rem;
  }
`;

export const ExtraSection = styled(Section)`
  background: #f1f6ff;
  padding: 1.7rem 1.1rem;
  border-radius: 20px;
  box-shadow: 0 2px 10px rgba(90, 120, 220, 0.08);
  margin-bottom: 2.3rem;
  ul {
    margin: 1.1rem 0 0 1.2rem;
    padding-inline-start: 1.2rem;
    li {
      font-size: 1.13rem;
      margin-bottom: 0.82rem;
      color: #2358b6;
      font-weight: 500;
      line-height: 1.67;
      &::marker {
        color: #00bfae;
      }
    }
  }
  h2 {
    font-size: 1.32rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 800;
    color: #08499b;
    margin-bottom: 0.78rem;
    letter-spacing: -0.3px;
  }
`;

export const RuleList = styled.ul`
  padding-inline-start: 1.4rem;
  li {
    font-size: 1.07rem;
    margin-bottom: 0.68rem;
    color: #3b3d48;
    font-weight: 500;
    b {
      color: #1976d2;
    }
  }
`;

export const BenefitList = styled.ul`
  padding-inline-start: 1.3rem;
  li {
    font-size: 1.09rem;
    margin-bottom: 0.72rem;
    color: #2152a3;
    font-weight: 500;
    b {
      color: #00bfae;
    }
  }
`;

export const Tagline = styled.div`
  text-align: center;
  font-size: 1.25rem;
  font-weight: 900;
  color: #294e8d;
  margin-top: 2.3rem;
  padding: 1.15rem 0.5rem;
  border-radius: 18px;
  background: linear-gradient(90deg, #eaf7ff 0%, #e3f5ed 100%);
  box-shadow: 0 2px 12px rgba(110, 180, 230, 0.10);
  letter-spacing: 0.52px;
  @media (max-width: 700px) {
    font-size: 1.09rem;
    margin-top: 1.3rem;
  }
`;
