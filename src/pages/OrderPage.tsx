import React, { useState } from 'react';
import {
  OrderWrapper,
  OrderTitle,
  PlatformsGrid,
  PlatformCheckbox,
  PlatformLabel,
  PlatformIcon,
  OrderForm,
  FormRow,
  FormLabel,
  FormInput,
  FormTextarea,
  FormButton,
  MorePlatformsSelect,
  SummaryCard,
} from '../styles/OrderPageStyled';

import { FaInstagram, FaTiktok, FaYoutube, FaPinterestP, FaTelegram, FaLinkedin, FaFacebookF, FaXTwitter } from "react-icons/fa6";


const POPULAR_PLATFORMS = [
  { name: "Instagram", icon: <FaInstagram /> },
  { name: "TikTok", icon: <FaTiktok /> },
  { name: "YouTube", icon: <FaYoutube /> },
  { name: "X (Twitter)", icon: <FaXTwitter /> },
  { name: "Pinterest", icon: <FaPinterestP /> },
  { name: "Telegram", icon: <FaTelegram /> },
  { name: "LinkedIn", icon: <FaLinkedin /> },
  { name: "Facebook", icon: <FaFacebookF /> },
];

const OTHER_PLATFORMS = [
  "Reddit", "Dribbble", "Threads", "WhatsApp", "Snapchat", "Medium"
];

export const OrderPage: React.FC = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [other, setOther] = useState('');
  const [campaignName, setCampaignName] = useState('');
  const [frequency, setFrequency] = useState('');
  const [duration, setDuration] = useState('');
  const [budget, setBudget] = useState('');
  const [note, setNote] = useState('');

  const handleCheckbox = (name: string) => {
    setSelected(prev =>
      prev.includes(name)
        ? prev.filter(n => n !== name)
        : [...prev, name]
    );
  };

  return (
    <OrderWrapper>
      <OrderTitle>Place a New Advertisement Order</OrderTitle>
      <OrderForm>
        <FormRow>
          <FormLabel>Choose Social Media Platforms</FormLabel>
          <PlatformsGrid>
            {POPULAR_PLATFORMS.map(({ name, icon }) => (
              <PlatformLabel key={name} className={selected.includes(name) ? 'selected' : ''}>
                <PlatformCheckbox
                  type="checkbox"
                  checked={selected.includes(name)}
                  onChange={() => handleCheckbox(name)}
                />
                <PlatformIcon>{icon}</PlatformIcon>
                <span>{name}</span>
              </PlatformLabel>
            ))}
            <PlatformLabel className={selected.includes('Other') ? 'selected' : ''}>
              <PlatformCheckbox
                type="checkbox"
                checked={selected.includes('Other')}
                onChange={() => handleCheckbox('Other')}
              />
              <PlatformIcon>+</PlatformIcon>
              <span>Other</span>
            </PlatformLabel>
          </PlatformsGrid>
          {selected.includes('Other') && (
            <MorePlatformsSelect
              value={other}
              onChange={e => setOther(e.target.value)}
            >
              <option value="">Select Platform…</option>
              {OTHER_PLATFORMS.map(p => (
                <option key={p}>{p}</option>
              ))}
            </MorePlatformsSelect>
          )}
        </FormRow>
        <FormRow>
          <FormLabel>Campaign Name</FormLabel>
          <FormInput
            value={campaignName}
            onChange={e => setCampaignName(e.target.value)}
            placeholder="e.g. Summer Sale 2025"
            required
          />
        </FormRow>
        <FormRow>
          <FormLabel>Number of Posts / Stories / Reels</FormLabel>
          <FormInput
            type="number"
            min={1}
            value={frequency}
            onChange={e => setFrequency(e.target.value)}
            placeholder="e.g. 5"
            required
          />
        </FormRow>
        <FormRow>
          <FormLabel>Campaign Duration (days)</FormLabel>
          <FormInput
            type="number"
            min={1}
            value={duration}
            onChange={e => setDuration(e.target.value)}
            placeholder="e.g. 14"
            required
          />
        </FormRow>
        <FormRow>
          <FormLabel>Total Budget (USD)</FormLabel>
          <FormInput
            type="number"
            min={1}
            value={budget}
            onChange={e => setBudget(e.target.value)}
            placeholder="e.g. 500"
            required
          />
        </FormRow>
        <FormRow>
          <FormLabel>Extra Notes</FormLabel>
          <FormTextarea
            value={note}
            onChange={e => setNote(e.target.value)}
            placeholder="Describe your campaign, special requests, or targeting..."
            rows={3}
          />
        </FormRow>
        <FormButton type="submit">Submit Order</FormButton>
      </OrderForm>
      <SummaryCard>
        <h5>Order Summary</h5>
        <ul>
          <li>
            <b>Platforms:</b> {selected.map(n => (n === "Other" ? other : n)).filter(Boolean).join(', ') || '—'}
          </li>
          <li>
            <b>Campaign Name:</b> {campaignName || '—'}
          </li>
          <li>
            <b>Posts/Reels:</b> {frequency || '—'}
          </li>
          <li>
            <b>Duration:</b> {duration ? `${duration} days` : '—'}
          </li>
          <li>
            <b>Budget:</b> {budget ? `$${budget}` : '—'}
          </li>
        </ul>
      </SummaryCard>
    </OrderWrapper>
  );
};
