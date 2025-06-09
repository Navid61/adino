// pages/HowItWorks.tsx
import React from "react";
import * as Icons from "react-icons/fa";
import {
  HowItWorksWrapper,
  SectionTitle,
  StepsList,
  StepCard,
  RuleList,
  BenefitList,
  Section,
  Tagline,
  ExtraSection,
} from "../styles/HowItWorks.styled";
import en from "../content/howItWorks.en";
import fa from "../content/howItWorks.fa";

// If you want to add language switching, you can change this import dynamically
const content = fa;
const isRtl = true;

export const HowItWorks: React.FC = () => (
  <HowItWorksWrapper dir={isRtl ? "rtl" : "ltr"}>
    <SectionTitle>{content.sectionTitle}</SectionTitle>
    <Section>
      <StepsList>
        {content.steps.map((step, idx) => {
          const Icon = Icons[step.icon as keyof typeof Icons];
          return (
            <StepCard key={idx}>
              {Icon && <Icon size={40} className="icon" />}
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </StepCard>
          );
        })}
      </StepsList>
    </Section>

    <ExtraSection>
      <h2>
        <Icons.FaHandHoldingUsd /> {content.uniqueAdvantages.title}
      </h2>
      <ul>
        {content.uniqueAdvantages.items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </ExtraSection>

    <Section>
      <h2>
        <Icons.FaCheckCircle /> {content.rules.title}
      </h2>
      <RuleList>
        {content.rules.items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </RuleList>
    </Section>

    <Section>
      <h2>
        <Icons.FaBolt /> {content.benefits.title}
      </h2>
      <BenefitList>
        {content.benefits.items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </BenefitList>
    </Section>

    <Tagline>
      {content.tagline}
    </Tagline>
  </HowItWorksWrapper>
);
