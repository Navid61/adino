import React from "react";
import { Card, Badge, Button } from "react-bootstrap";
import { AdCardWrapper } from "../styles/AdCard.styled";
import {
  Calendar,
  Clock,
  HandThumbsUp,
  Person,
  CurrencyDollar,
} from "react-bootstrap-icons";
import {
  FaInstagram,
  FaTiktok,
  FaFacebookF,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";

const platformIcons = new Map<string, React.ReactNode>([
  ["Instagram", <FaInstagram key="instagram" />],
  ["TikTok", <FaTiktok key="tiktok" />],
  ["Facebook", <FaFacebookF key="facebook" />],
  ["Pinterest", <FaPinterestP key="pinterest" />],
  ["YouTube", <FaYoutube key="youtube" />],
]);

// Define a new type for better campaign info clarity
export type AdCardProps = {
  title: string;
  platform: string;
  followers: number;
  price: number;
  payPerPost: number;
  actionLabel: string;
  description: string;
  mediaType: "Story" | "Post" | "Reel" | "Video";
  postDuration: string; // e.g., "15 seconds", "1 minute"
  contentRules?: string;
  bestTimeToPost: string;
  recommendedFrequency: string;
  engagementRate: string;
  campaignDeadline: string;
  platformTip?: string;
  cta?: string;
  rating?: number;
  language?: "en" | "fa";
};

export const AdCard: React.FC<AdCardProps> = ({
  title,
  platform,
  followers,
  price,
  payPerPost,
  actionLabel,
  description,
  mediaType,
  postDuration,
  contentRules,
  bestTimeToPost,
  recommendedFrequency,
  engagementRate,
  campaignDeadline,
  platformTip,
  cta,
  rating,
  language = "en",
}) => {
  return (
    <AdCardWrapper>
      <Card dir={language === "fa" ? "rtl" : "ltr"}>
        <Card.Body>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Card.Title>{title}</Card.Title>
            <div className="d-flex align-items-center gap-2">
              <span style={{ fontSize: "1.2rem" }}>
                {platformIcons.get(platform) || null}
              </span>
              <Badge bg="info">{platform}</Badge>
            </div>
          </div>

          <Card.Subtitle className="mb-2 text-muted">
            {description}
          </Card.Subtitle>

          <div className="mb-2">
            <Person /> <strong>Followers:</strong> {followers} {" "}
            <HandThumbsUp /> <strong>Engagement:</strong> {engagementRate}
          </div>

          <div>
            <strong>Total Campaign Value:</strong>{" "}
            <span style={{ color: "#28a745", fontWeight: "bold" }}>
              ${price}
            </span>{" "}
            {cta && <Badge bg="success">{cta}</Badge>}
          </div>

          <div className="earnings">
            <CurrencyDollar /> You earn <strong>${payPerPost}</strong> for each approved {mediaType.toLowerCase()}.
          </div>

          <div>
            <strong>Content Type:</strong> {mediaType} ({postDuration})
          </div>

          <div>
            <Clock /> <strong>Best Time to Post:</strong> {bestTimeToPost}
          </div>

          <div>
            <Calendar /> <strong>Post Frequency:</strong> {recommendedFrequency}
          </div>

          <div>
            <strong>Deadline:</strong>{" "}
            <span className="deadline">{campaignDeadline}</span>
          </div>

          {contentRules && (
            <div style={{ color: "#6c757d", fontSize: "0.9em", marginTop: "0.5em" }}>
              <strong>Posting Rules:</strong> {contentRules}
            </div>
          )}

          {platformTip && <div className="platform-tip">{platformTip}</div>}

          {rating && (
            <div className="rating-stars">
              <strong>Advertiser Rating:</strong>{" "}
              {Array.from({ length: rating }).map((_, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>
          )}

          <Button className="cta-button w-100 mt-3">{actionLabel}</Button>
        </Card.Body>
      </Card>
    </AdCardWrapper>
  );
};
