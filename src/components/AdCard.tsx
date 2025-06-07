import React from "react";
import { Card, Badge, Button, ProgressBar } from "react-bootstrap";
import { AdCardWrapper } from "../styles/AdCard.styled";
import {
  Calendar, Clock, Person, CurrencyDollar, PeopleFill,
} from "react-bootstrap-icons";
import {
  FaInstagram, FaTiktok, FaFacebookF, FaPinterestP, FaYoutube,
} from "react-icons/fa";

const platformIcons = new Map([
  ["Instagram", <FaInstagram key="instagram" />],
  ["TikTok", <FaTiktok key="tiktok" />],
  ["Facebook", <FaFacebookF key="facebook" />],
  ["Pinterest", <FaPinterestP key="pinterest" />],
  ["YouTube", <FaYoutube key="youtube" />],
]);

const statusColors = {
  Open: "success",
  "Almost Full": "warning",
  Closed: "secondary",
  Ended: "danger",
};

const labelsEn = {
  followers: "Minimum Followers",
  totalValue: "Total Campaign Value",
  earn: "You earn",
  forEach: "for each approved",
  contentType: "Content Type",
  bestTime: "Time to Post",
  frequency: "Post Frequency",
  deadline: "Join Deadline",
  postingRules: "Posting Rules",
  rating: "Advertiser Rating",
  reserved: "Reserved",
  remaining: "Remaining Spots",
  of: "of",
  slotsFilled: "slots filled",
  spotsLeft: "spots left",
  campaignStart: "Campaign Start",
  campaignEnd: "Campaign End",
  approval: "Approval Process",
  bonus: "Bonus",
  socialProof: "Already Joined",
  status: "Status",
};

const labelsFa = {
  followers: "حداقل دنبال‌کننده",
  totalValue: "ارزش کل کمپین",
  earn: "درآمد شما",
  forEach: "برای هر تأیید شده",
  contentType: "نوع محتوا",
  bestTime: "زمان انتشار",
  frequency: "تعداد دفعات انتشار",
  deadline: "مهلت پیوستن",
  postingRules: "قوانین انتشار",
  rating: "امتیاز تبلیغ‌دهنده",
  reserved: "رزرو شده",
  remaining: "ظرفیت باقی‌مانده",
  of: "از",
  slotsFilled: "جایگاه پر شده",
  spotsLeft: "جای خالی",
  campaignStart: "شروع کمپین",
  campaignEnd: "پایان کمپین",
  approval: "فرآیند تأیید",
  bonus: "پاداش",
  socialProof: "تعداد افراد پیوسته",
  status: "وضعیت",
};

// Convert English numbers to Farsi for readability
function faNum(str: string | number) {
  const faDigits = "۰۱۲۳۴۵۶۷۸۹";
  return String(str).replace(/\d/g, (d: string) => faDigits[parseInt(d, 10)]);
}

export type AdCardProps = {
  title: string;
  platform: string;
  campaignType?: string;
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
  campaignStartDate?: string;
  campaignEndDate?: string;
  approvalTime?: string;
  brandName?: string;
  brandLogo?: string;
  platformTip?: string;
  cta?: string;
  rating?: number;
  capacity?: number;
  reserved?: number;
  socialProof?: number;
  bonusInfo?: string;
  status?: "Open" | "Almost Full" | "Closed" | "Ended";
  language?: "en" | "fa";
};

export const AdCard: React.FC<AdCardProps> = ({
  title,
  platform,
  campaignType,
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
  campaignStartDate,
  campaignEndDate,
  approvalTime,
  brandName,
  brandLogo,
  platformTip,
  cta,
  rating,
  capacity,
  reserved,
  socialProof,
  bonusInfo,
  status = "Open",
  language = "en",
}) => {
  // Choose labels and helpers by language
  const labels = language === "fa" ? labelsFa : labelsEn;
  const dir = language === "fa" ? "rtl" : "ltr";
  const toDisplay = language === "fa" ? faNum : (n: string | number) => n;

  const hasCapacity =
    typeof capacity === "number" &&
    typeof reserved === "number" &&
    capacity > 0 &&
    reserved >= 0;
  const remaining = hasCapacity ? capacity - reserved : undefined;
  const progressPercent = hasCapacity ? Math.round((reserved! / capacity!) * 100) : undefined;

  const campaignDateRange =
    campaignStartDate && campaignEndDate
      ? `${toDisplay(campaignStartDate)} – ${toDisplay(campaignEndDate)}`
      : undefined;

  return (
    <AdCardWrapper>
      <Card dir={dir}>
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-2 flex-wrap">
            <div className="d-flex align-items-center flex-wrap gap-2">
              {!!brandLogo && (
                <img
                  src={brandLogo}
                  alt={brandName || ""}
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginRight: dir === "ltr" ? 7 : 0,
                    marginLeft: dir === "rtl" ? 7 : 0,
                  }}
                />
              )}
              <Card.Title className="mb-0">{title}</Card.Title>
              <span className="badge-plain">
                <span style={{ fontSize: "1.25rem", verticalAlign: "middle" }}>{platformIcons.get(platform)}</span> {platform}
              </span>
              {campaignType && (
                <span className="badge-outline">{campaignType}</span>
              )}
              {status && (
                <Badge bg={statusColors[status]} className="status-badge">
                  {labels.status}: {status}
                </Badge>
              )}
            </div>
          </div>
          <Card.Subtitle className="mb-2 text-muted">{description}</Card.Subtitle>

          {/* Dates */}
          {campaignDateRange && (
            <div className="mb-2">
              <Calendar /> <strong>{labels.campaignStart} – {labels.campaignEnd}:</strong> {campaignDateRange}
            </div>
          )}

          {/* Followers */}
          <div className="mb-2 d-flex flex-wrap gap-3 align-items-center">
            <span>
              <Person /> <strong>{labels.followers}:</strong> {toDisplay(followers)}
            </span>
          </div>

          {/* Value & Payouts */}
          <div>
            <strong>{labels.totalValue}:</strong>{" "}
            <span style={{ color: "#28a745", fontWeight: "bold" }}>{toDisplay(price)}$</span>{" "}
            {cta && <span className="badge-outline cta-badge">{cta}</span>}
            {bonusInfo && <span className="badge-outline bonus-badge">{labels.bonus}: {bonusInfo}</span>}
          </div>
          <div className="earnings mb-2">
            <CurrencyDollar /> {labels.earn} <strong>{toDisplay(payPerPost)}$</strong> {labels.forEach} {mediaType}.
          </div>

          {/* Content requirements */}
          <div>
            <strong>{labels.contentType}:</strong> {mediaType} ({toDisplay(postDuration)})
          </div>
          {contentRules && (
            <div style={{
              color: "#6c757d", fontSize: "0.9em", marginTop: "0.3em",
            }}>
              <strong>{labels.postingRules}:</strong> {contentRules}
            </div>
          )}
          <div>
            <Clock /> <strong>{labels.bestTime}:</strong> {toDisplay(bestTimeToPost)}
          </div>
          <div>
            <strong>{labels.frequency}:</strong> {toDisplay(recommendedFrequency)}
          </div>
          <div>
            <strong>{labels.deadline}:</strong>{" "}
            <span className="deadline">{toDisplay(campaignDeadline)}</span>
          </div>
          {approvalTime && (
            <div>
              <strong>{labels.approval}:</strong> {toDisplay(approvalTime)}
            </div>
          )}

          {/* Capacity and Progress */}
          {hasCapacity && (
            <div className="mb-2" style={{ fontSize: "1.05em" }}>
              <ProgressBar
                now={progressPercent}
                label={`${toDisplay(reserved)}/${toDisplay(capacity)} ${labels.slotsFilled}`}
                style={{ height: 20, marginBottom: 6 }}
                variant={remaining === 0 ? "danger" : remaining! < 3 ? "warning" : "success"}
              />
              <span>
                {labels.remaining}:{" "}
                <strong style={{ color: remaining === 0 ? "#dc3545" : "#28a745" }}>
                  {toDisplay(remaining ?? 0)} {labels.spotsLeft}
                </strong>
              </span>
            </div>
          )}

          {/* Social Proof */}
          {!!socialProof && (
            <div style={{ color: "#2a5b99", fontSize: "0.97em", margin: "0.7em 0" }}>
              <PeopleFill /> {toDisplay(socialProof)} {labels.socialProof}!
            </div>
          )}

          {/* Tips & Best Practices */}
          {platformTip && (
            <div className="platform-tip mb-2" style={{ color: "#348e54", fontWeight: 500 }}>
              💡 {platformTip}
            </div>
          )}

          {/* Rating */}
          {typeof rating === "number" && rating > 0 && (
            <div className="rating-stars">
              <strong>{labels.rating}:</strong>{" "}
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
