import React from "react";
import { Card, Badge, Button } from "react-bootstrap";
import { AdCardWrapper } from "../styles/AdCard.styled";
import { Calendar, Clock, Person, CurrencyDollar } from "react-bootstrap-icons";
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

const translations = {
  en: {
    labels: {
      followers: "Minimum number of followers your social page must have.",
      totalValue: "Total Campaign Value",
      earn: "You earn",
      forEach: "for each approved",
      contentType: "Content Type",
      bestTime: "Time to Post",
      frequency: "Post Frequency",
      deadline: "Deadline",
      postingRules: "Posting Rules",
      rating: "Advertiser Rating",
      reserved: "Reserved",
      remaining: "Remaining Spots",
      of: "of",
      slotsFilled: "slots filled",
      spotsLeft: "spots left",
    },
    mediaType: {
      Video: "Video",
      Post: "Post",
      Reel: "Reel",
      Story: "Story",
    },
  },
  fa: {
    labels: {
      followers: "تعداد دنبال کننده‌های که باید صفحه شما داشته باشد",
      totalValue: "ارزش کل کمپین",
      earn: "درآمد شما",
      forEach: "برای هر",
      contentType: "نوع محتوا",
      bestTime: "زمان انتشار",
      frequency: "تعداد دفعات پست",
      deadline: "مهلت انتشار",
      postingRules: "قوانین انتشار",
      rating: "امتیاز آگهی‌دهنده",
      reserved: "رزرو شده",
      remaining: "ظرفیت باقی مانده",
      of: "از",
      slotsFilled: "ظرفیت پر شده",
      spotsLeft: "جای خالی",
    },
    mediaType: {
      Video: "ویدیو",
      Post: "پست",
      Reel: "ریل",
      Story: "استوری",
    },
  },
};

export type AdCardProps = {
  title: string;
  platform: string;
  followers: number;
  price: number;
  payPerPost: number;
  actionLabel: string;
  description: string;
  mediaType: "Story" | "Post" | "Reel" | "Video";
  postDuration: string;
  contentRules?: string;
  bestTimeToPost: string;
  recommendedFrequency: string;
  campaignDeadline: string;
  platformTip?: string;
  cta?: string;
  rating?: number;
  capacity?: number; // Total number of slots available
  reserved?: number; // Number of slots already filled/reserved
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
  campaignDeadline,
  platformTip,
  cta,
  rating,
  capacity,
  reserved,
  language = "en",
}) => {
  const { labels, mediaType: mediaTranslations } = translations[language];
  const translatedMediaType = mediaTranslations[mediaType];

   const hasCapacity =
    typeof capacity === "number" &&
    typeof reserved === "number" &&
    capacity > 0 &&
    reserved >= 0;
  const remaining = hasCapacity ? capacity - reserved : undefined;

  return (
    <AdCardWrapper>
      <Card dir={language === "fa" ? "rtl" : "ltr"}>
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center">
            <Card.Title>{title}</Card.Title>
            <div className="d-flex align-items-center gap-2">
              <span style={{ fontSize: "1.2rem" }}>
                {platformIcons.get(platform)}
              </span>
              <Badge bg="info">{platform}</Badge>
            </div>
          </div>

          <Card.Subtitle className="mb-2 text-muted">
            {description}
          </Card.Subtitle>

          <div className="mb-2">
            <Person /> <strong>{labels.followers}:</strong> {followers}{" "}
          </div>

          <div>
            <strong>{labels.totalValue}:</strong>{" "}
            <span style={{ color: "#28a745", fontWeight: "bold" }}>
              ${price}
            </span>{" "}
            {cta && <Badge bg="success">{cta}</Badge>}
          </div>

          <div className="earnings">
            <CurrencyDollar /> {labels.earn} <strong>${payPerPost}</strong>{" "}
            {labels.forEach} {translatedMediaType}.
          </div>

          <div>
            <strong>{labels.contentType}:</strong> {translatedMediaType} (
            {postDuration})
          </div>

          <div>
            <Clock /> <strong>{labels.bestTime}:</strong> {bestTimeToPost}
          </div>

          <div>
            <Calendar /> <strong>{labels.frequency}:</strong>{" "}
            {recommendedFrequency}
          </div>

          <div>
            <strong>{labels.deadline}:</strong>{" "}
            <span className="deadline">{campaignDeadline}</span>
          </div>

          {contentRules && (
            <div
              style={{
                color: "#6c757d",
                fontSize: "0.9em",
                marginTop: "0.5em",
              }}
            >
              <strong>{labels.postingRules}:</strong> {contentRules}
            </div>
          )}

          {platformTip && <div className="platform-tip">{platformTip}</div>}

          {rating && (
            <div className="rating-stars">
              <strong>{labels.rating}:</strong>{" "}
              {Array.from({ length: rating }).map((_, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>
          )}

          {hasCapacity && (
            <div className="mb-2" style={{ fontSize: "1.05em" }}>
              <Badge
                bg={
                  remaining === 0
                    ? "danger"
                      : typeof remaining === "number" && remaining < 3
                    ? "warning"
                    : "secondary"
                }
                className="me-1"
              >
                {reserved} {labels.of} {capacity} {labels.slotsFilled}
              </Badge>
              <span style={{ marginLeft: 8 }}>
                {labels.remaining}:{" "}
                <strong
                  style={{ color: remaining === 0 ? "#dc3545" : "#28a745" }}
                >
                  {remaining} {labels.spotsLeft}
                </strong>
              </span>
            </div>
          )}

          <Button className="cta-button w-100 mt-3">{actionLabel}</Button>
        </Card.Body>
      </Card>
    </AdCardWrapper>
  );
};
