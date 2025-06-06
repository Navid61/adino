// components/TariffCalculator.tsx
import React, { useState } from "react";
import {
  FaInstagram, FaYoutube, FaFacebookF,
  FaTelegram, FaXTwitter, FaLinkedin
} from "react-icons/fa6";
import {
  CalculatorWrapper, Tabs, TabButton, RangeWrapper,
  StyledRange, PriceTable, TableRow, Label, Value, Icon
} from "../styles/TariffCalculatorStyled";

// Tariff rules (adjust as needed)
const TARIFFS = {
  Instagram: [
    { min: 0, max: 2000, post: 2, story: 1, reel: 2 },
    { min: 2001, max: 5000, post: 4, story: 2, reel: 3 },
    { min: 5001, max: 10000, post: 8, story: 4, reel: 6 },
    { min: 10001, max: 50000, post: 14, story: 6, reel: 10 },
    { min: 50001, max: 200000, post: 25, story: 10, reel: 16 },
    { min: 200001, max: Infinity, post: 40, story: 20, reel: 24 },
  ],
  YouTube: [
    { min: 0, max: 5000, video: 12, short: 4 },
    { min: 5001, max: 20000, video: 20, short: 8 },
    { min: 20001, max: 100000, video: 40, short: 16 },
    { min: 100001, max: Infinity, video: 80, short: 30 },
  ],
  Facebook: [
    { min: 0, max: 5000, post: 3, story: 2 },
    { min: 5001, max: 20000, post: 7, story: 4 },
    { min: 20001, max: Infinity, post: 15, story: 8 },
  ],
  Telegram: [
    { min: 0, max: 2000, post: 1, story: 1 },
    { min: 2001, max: 10000, post: 3, story: 2 },
    { min: 10001, max: 50000, post: 8, story: 4 },
    { min: 50001, max: Infinity, post: 15, story: 7 },
  ],
  X: [
    { min: 0, max: 2000, post: 2 },
    { min: 2001, max: 8000, post: 6 },
    { min: 8001, max: Infinity, post: 15 },
  ],
  LinkedIn: [
    { min: 0, max: 1000, post: 3 },
    { min: 1001, max: 5000, post: 8 },
    { min: 5001, max: 20000, post: 15 },
    { min: 20001, max: Infinity, post: 25 },
  ],
};

const PLATFORMS = [
  { name: "Instagram", icon: <FaInstagram color="#e1306c" /> },
  { name: "YouTube", icon: <FaYoutube color="#ff0000" /> },
  { name: "Facebook", icon: <FaFacebookF color="#1877f3" /> },
  { name: "Telegram", icon: <FaTelegram color="#229ed9" /> },
  { name: "X", icon: <FaXTwitter color="#222" /> },
  { name: "LinkedIn", icon: <FaLinkedin color="#0077b5" /> },
];

export const TariffCalculator: React.FC = () => {
  const [platform, setPlatform] = useState("Instagram");
  const [followers, setFollowers] = useState(5000);

  // Find current range for selected platform
  const getTariff = () => {
    const tariffs = TARIFFS[platform as keyof typeof TARIFFS];
    return tariffs.find(t => followers >= t.min && followers <= t.max) || tariffs[0];
  };
  const current = getTariff();

  // Range settings
  const minFollowers = 0;
  const maxFollowers =
    platform === "YouTube" ? 200000 :
    platform === "Instagram" ? 500000 :
    platform === "LinkedIn" ? 50000 :
    100000;

  return (
    <CalculatorWrapper>
      <Tabs>
        {PLATFORMS.map(p => (
          <TabButton
            key={p.name}
            $active={platform === p.name}
            onClick={() => setPlatform(p.name)}
            aria-label={p.name}
          >
            <Icon>{p.icon}</Icon>
            {p.name}
          </TabButton>
        ))}
      </Tabs>
      <RangeWrapper>
        <label htmlFor="followers">
          Number of {platform === "LinkedIn" ? "Connections" : "Followers"}
        </label>
        <StyledRange
          id="followers"
          type="range"
          min={minFollowers}
          max={maxFollowers}
          step={100}
          value={followers}
          onChange={e => setFollowers(Number(e.target.value))}
        />
        <span className="range-value">{followers.toLocaleString()}</span>
      </RangeWrapper>
      <PriceTable>
        {Object.entries(current)
          .filter(([k]) => k !== "min" && k !== "max")
          .map(([type, price]) => (
            <TableRow key={type}>
              <Label>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </Label>
              <Value>${price} per {type}</Value>
            </TableRow>
        ))}
      </PriceTable>
    </CalculatorWrapper>
  );
};
