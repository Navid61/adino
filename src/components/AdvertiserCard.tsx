import React from "react";
import { CardWrapper, CardButton } from "../styles/AdvertiserCard.styled";

export const AdvertiserCard: React.FC = () => (
  <CardWrapper>
    <div className="icon">📢</div>
    <h2>For Advertisers</h2>
    <p className="headline">Ready to go viral?</p>
    <p className="desc">
      Create stunning campaigns and reach real people, fast.<br />
      Simple setup, real results. All budgets.
    </p>
    <CardButton>Start Advertising</CardButton>
  </CardWrapper>
);
