import React from "react";
import {
  PageWrapper,
  ProfileBanner,
  Avatar,
  Name,
  EditButton,
  Verified,
  Section,
  SocialCard,
  SocialRow,
  SocialIcon,
  SocialName,
  SocialStatus,
  ConnectBtn,
  DisconnectBtn,
  AddSocial,
  DetailsGrid,
  DetailItem,
  PrefsRow,
  CheckboxLabel
} from "../styles/ProfileStyled";
import {
  FaInstagram, FaTiktok, FaYoutube, FaPinterestP, FaFacebookF, FaLinkedin
} from "react-icons/fa";
import { HiCheckBadge } from "react-icons/hi2";

const socialPlatforms = [
  {
    name: "Instagram",
    icon: <FaInstagram color="#e1306c" />,
    connected: true,
    handle: "@your_ig"
  },
  {
    name: "TikTok",
    icon: <FaTiktok color="#111" />,
    connected: false,
    handle: null
  },
  {
    name: "YouTube",
    icon: <FaYoutube color="#f00" />,
    connected: true,
    handle: "@your_youtube"
  },
  {
    name: "Pinterest",
    icon: <FaPinterestP color="#e60023" />,
    connected: false,
    handle: null
  },
  {
    name: "Facebook",
    icon: <FaFacebookF color="#1877f3" />,
    connected: false,
    handle: null
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin color="#0077b5" />,
    connected: false,
    handle: null
  }
];

export const ProfilePage: React.FC = () => {
  return (
    <PageWrapper>
      <ProfileBanner>
        <Avatar src="https://randomuser.me/api/portraits/men/15.jpg" alt="User Avatar" />
        <div className="profile-info">
          <Name>
            Navid Taheri <Verified title="Verified"><HiCheckBadge /></Verified>
          </Name>
          <div className="meta">
            <span>Full Stack GIS Developer</span> · <span>Budapest</span>
          </div>
        </div>
        <EditButton>Edit Profile</EditButton>
      </ProfileBanner>

      {/* Social Connections */}
      <Section>
        <h3>Social Media Connections</h3>
        <SocialCard>
          {socialPlatforms.map((p) => (
            <SocialRow key={p.name}>
              <SocialIcon>{p.icon}</SocialIcon>
              <SocialName>{p.name} {p.handle && <span>{p.handle}</span>}</SocialName>
              <SocialStatus connected={p.connected}>
                {p.connected ? "Connected" : "Not Connected"}
              </SocialStatus>
              {p.connected ? (
                <DisconnectBtn>Disconnect</DisconnectBtn>
              ) : (
                <ConnectBtn>Connect</ConnectBtn>
              )}
            </SocialRow>
          ))}
          <AddSocial>
            + Add New Social Account
          </AddSocial>
        </SocialCard>
      </Section>

      {/* Profile Details */}
      <Section>
        <h3>Profile Details</h3>
        <DetailsGrid>
          <DetailItem>
            <label>Name</label>
            <span>Navid Taheri</span>
          </DetailItem>
          <DetailItem>
            <label>Email</label>
            <span>navid@email.com</span>
          </DetailItem>
          <DetailItem>
            <label>Phone</label>
            <span>+36 30 123 4567</span>
          </DetailItem>
          <DetailItem>
            <label>Location</label>
            <span>Budapest, Hungary</span>
          </DetailItem>
          <DetailItem style={{ gridColumn: "1 / -1" }}>
            <label>Bio</label>
            <span>Full Stack GIS Developer | Love maps & code | Let’s collaborate!</span>
          </DetailItem>
        </DetailsGrid>
      </Section>

      {/* Preferences */}
      <Section>
        <h3>Notifications & Preferences</h3>
        <PrefsRow>
          <CheckboxLabel>
            <input type="checkbox" defaultChecked title="Email Alerts" /> Email Alerts
          </CheckboxLabel>
          <CheckboxLabel>
            <input type="checkbox" title="WhatsApp Alerts" /> WhatsApp Alerts
          </CheckboxLabel>
          <CheckboxLabel>
            <input type="checkbox" title="SMS Alerts" /> SMS Alerts
          </CheckboxLabel>
        </PrefsRow>
      </Section>
    </PageWrapper>
  );
};
