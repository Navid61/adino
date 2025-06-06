import React from "react";
import { CardWrapper, CardButton } from "../styles/CreatorCard.styled";

export const CreatorCard: React.FC = () => (
  <CardWrapper>
    <div className="icon">🤩</div>
    <h2>For Creators</h2>
    <p className="headline">Got followers?</p>
    <p className="desc">
      Turn your social pages into instant cash!<br />
      Find paid campaigns and start earning today.
    </p>
    <CardButton>Start Earning</CardButton>
  </CardWrapper>
);
