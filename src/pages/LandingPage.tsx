import React from "react";
import { PageWrapper, CardsRow } from "../styles/LandingPage.styled";
import { AdvertiserCard } from "../components/AdvertiserCard";
import { CreatorCard } from "../components/CreatorCard";

export const LandingPage: React.FC = () => (
  <PageWrapper>
    <h1>🚀 Welcome to Adino!</h1>
    <p className="subtitle">
      Where brands meet social stars.<br />
      Boost or earn today!
    </p>
    <CardsRow>
      <AdvertiserCard />
      <CreatorCard />
    </CardsRow>
  </PageWrapper>
);
