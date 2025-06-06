// pages/HowItWorks.tsx
import React from "react";
import {
  HowItWorksWrapper,
  SectionTitle,
  StepsList,
  StepCard,
  RuleList,
  BenefitList,
  Section,
} from "../styles/HowItWorksStyled";

export const HowItWorks: React.FC = () => (
  <HowItWorksWrapper>
    <SectionTitle>How It Works</SectionTitle>

    <Section>
      <StepsList>
        <StepCard>
          <h3>1. Sign Up & Create Your Profile</h3>
          <p>
            Quickly register with email or your social accounts. Add your social media pages—Instagram, YouTube, Telegram, and more. Your dashboard shows earnings, campaigns, and posts.
          </p>
        </StepCard>
        <StepCard>
          <h3>2. Browse Campaigns & Accept Offers</h3>
          <p>
            See available campaigns from brands, including what content to create and how much you earn. Accept the campaigns you want to join.
          </p>
        </StepCard>
        <StepCard>
          <h3>3. Complete & Upload Your Post</h3>
          <p>
            Create your post, story, or video as described. Upload your post link, screenshot, or video as proof in your dashboard.
          </p>
        </StepCard>
        <StepCard>
          <h3>4. Get Reviewed & Paid</h3>
          <p>
            The brand reviews your post. If approved, your earnings are added to your balance. Withdraw anytime—quickly and securely!
          </p>
        </StepCard>
      </StepsList>
    </Section>

    <Section>
      <h2>Key Rules & Policies</h2>
      <RuleList>
        <li>
          <strong>No fake followers or bots:</strong> Only real, active pages are allowed.
        </li>
        <li>
          <strong>Fair payment:</strong> Your earnings are based on your audience and campaign type.
        </li>
        <li>
          <strong>Honest work:</strong> Follow each brand’s instructions for approval.
        </li>
        <li>
          <strong>Privacy:</strong> Your private info and payments are 100% secure.
        </li>
      </RuleList>
    </Section>

    <Section>
      <h2>Benefits</h2>
      <BenefitList>
        <li>
          <strong>Fast payments:</strong> Get paid for every approved post.
        </li>
        <li>
          <strong>Easy to use:</strong> No tech skills needed.
        </li>
        <li>
          <strong>Full control:</strong> Choose only the campaigns you want.
        </li>
        <li>
          <strong>Support:</strong> Friendly help is always available.
        </li>
      </BenefitList>
    </Section>

    <div className="tagline">Adino: Simple, fair, and rewarding advertising for everyone!</div>
  </HowItWorksWrapper>
);
