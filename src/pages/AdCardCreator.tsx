import React, { useState } from "react";
import {
  CreatorContainer, FormSection, PreviewSection, Field,
  PlatformTabs, TabBtn, Buttons
} from "../styles/AdCardCreator.styled";
import { AdCard } from "../components/AdCard";
import {
  FaInstagram, FaTiktok, FaFacebookF, FaPinterestP, FaYoutube,
} from "react-icons/fa";

const PLATFORMS = [
  { name: "Instagram", icon: <FaInstagram color="#e1306c" /> },
  { name: "TikTok", icon: <FaTiktok color="#000" /> },
  { name: "Facebook", icon: <FaFacebookF color="#1877f3" /> },
  { name: "Pinterest", icon: <FaPinterestP color="#cc002e" /> },
  { name: "YouTube", icon: <FaYoutube color="#ff0000" /> },
];

const CAMPAIGN_TYPES = [
  "Promo", "Challenge", "Product Launch", "Featured", "Premium", "Open"
];
const CONTENT_TYPES = ["Post", "Reel", "Story", "Video"] as const;
const STATUS_OPTIONS = ["Open", "Almost Full", "Closed", "Ended"] as const;
const APPROVAL_TYPES = [
  { value: "manual", label: "Manual by Operator" },
  { value: "smart", label: "Smart (AI)" },
  { value: "auto", label: "Auto by Advertiser" },
];
const FREQ_UNITS = [
  { value: "days", label: "Days" },
  { value: "weeks", label: "Weeks" },
  { value: "months", label: "Months" },
];

const defaultState = {
  title: "",
  platform: "Instagram",
  campaignType: "Promo",
  brandName: "",
  brandLogo: "",
  description: "",
  mediaType: "Post" as "Post" | "Reel" | "Story" | "Video",
  postDuration: "",
  followers: 0,
  price: 0,
  payPerPost: 0,
  bonusInfo: "",
  capacity: 1,
  reserved: 0,
  status: "Open" as "Open" | "Almost Full" | "Closed" | "Ended",
  rating: 0,
  bestTimeStart: "",
  bestTimeEnd: "",
  recommendedFrequencyValue: 1,
  recommendedFrequencyUnit: "weeks" as "days" | "weeks" | "months",
  campaignDeadline: "",
  campaignStartDate: "",
  campaignEndDate: "",
  approvalType: "manual" as "manual" | "smart" | "auto",
  approvalTimeValue: 0,
  approvalTimeUnit: "hours" as "hours" | "days",
  contentRules: "",
  platformTip: "",
  cta: "",
  // Removed socialProof
  language: "en" as "en" | "fa",
};

export const AdCardCreator: React.FC = () => {
  const [form, setForm] = useState(defaultState);

  const handleChange = (key: keyof typeof form, value: any) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;
    const reader = new FileReader();
    reader.onload = ev => handleChange("brandLogo", ev.target?.result);
    reader.readAsDataURL(e.target.files[0]);
  };

  // Compose readable frequency and best time for AdCard
  const previewProps = {
    ...form,
    bestTimeToPost: form.bestTimeStart && form.bestTimeEnd
      ? `${form.bestTimeStart} - ${form.bestTimeEnd}`
      : "",
    recommendedFrequency: `${form.recommendedFrequencyValue}x / ${FREQ_UNITS.find(u => u.value === form.recommendedFrequencyUnit)?.label ?? ""}`,
    approvalTime: form.approvalTimeValue
      ? `${form.approvalTimeValue} ${form.approvalTimeUnit} (${APPROVAL_TYPES.find(a => a.value === form.approvalType)?.label})`
      : APPROVAL_TYPES.find(a => a.value === form.approvalType)?.label,
  };

  return (
    <CreatorContainer>
      <FormSection>
        <h2 style={{ color: "#6048ca", marginBottom: 22 }}>Create New Campaign Card</h2>
        <Field>
          <label>Campaign Title</label>
          <input value={form.title} onChange={e => handleChange("title", e.target.value)} maxLength={60} />
        </Field>
        <Field>
          <label>Platform</label>
          <PlatformTabs>
            {PLATFORMS.map(p => (
              <TabBtn
                key={p.name}
                $active={form.platform === p.name}
                onClick={() => handleChange("platform", p.name)}
                type="button"
                aria-label={p.name}
              >
                {p.icon} {p.name}
              </TabBtn>
            ))}
          </PlatformTabs>
        </Field>
        <Field>
          <label>Campaign Type</label>
          <select value={form.campaignType} onChange={e => handleChange("campaignType", e.target.value)}>
            {CAMPAIGN_TYPES.map(opt => <option key={opt} value={opt}>{opt}</option>)}
          </select>
        </Field>
        <Field>
          <label>Brand Name</label>
          <input value={form.brandName} onChange={e => handleChange("brandName", e.target.value)} />
        </Field>
        <Field>
          <label>Brand Logo</label>
          <input type="file" accept="image/*" onChange={handleLogoUpload} />
          {form.brandLogo && <img src={form.brandLogo as string} alt="Logo" style={{ height: 40, borderRadius: 7, marginTop: 6 }} />}
        </Field>
        <Field>
          <label>Description</label>
          <textarea value={form.description} maxLength={110}
            onChange={e => handleChange("description", e.target.value)} />
        </Field>
        <Field>
          <label>Content Type</label>
          <select value={form.mediaType} onChange={e => handleChange("mediaType", e.target.value)}>
            {CONTENT_TYPES.map(type => <option key={type} value={type}>{type}</option>)}
          </select>
        </Field>
        <Field>
          <label>Post Duration</label>
          <input type="text" value={form.postDuration} placeholder="e.g. 1 minute"
            onChange={e => handleChange("postDuration", e.target.value)} />
        </Field>
        <Field>
          <label>Minimum Followers</label>
          <input type="number" min={0} value={form.followers} onChange={e => handleChange("followers", Number(e.target.value))} />
        </Field>
        <Field>
          <label>Total Value ($)</label>
          <input type="number" min={0} value={form.price} onChange={e => handleChange("price", Number(e.target.value))} />
        </Field>
        <Field>
          <label>Payout per Post ($)</label>
          <input type="number" min={0} value={form.payPerPost} onChange={e => handleChange("payPerPost", Number(e.target.value))} />
        </Field>
        <Field>
          <label>Bonus (optional)</label>
          <input value={form.bonusInfo} onChange={e => handleChange("bonusInfo", e.target.value)} />
        </Field>
        <Field>
          <label>Slots/Capacity</label>
          <input type="number" min={1} value={form.capacity} onChange={e => handleChange("capacity", Number(e.target.value))} />
        </Field>
        <Field>
          <label>Reserved/Joined</label>
          <input type="number" min={0} value={form.reserved} onChange={e => handleChange("reserved", Number(e.target.value))} />
        </Field>
        <Field>
          <label>Status</label>
          <select value={form.status} onChange={e => handleChange("status", e.target.value)}>
            {STATUS_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
          </select>
        </Field>
        <Field>
          <label>Rating</label>
          <input type="number" min={0} max={5} value={form.rating} onChange={e => handleChange("rating", Number(e.target.value))} />
        </Field>
        {/* Acceptable time window for post */}
        <Field>
          <label>Valid Posting Time</label>
          <div style={{ display: "flex", gap: 10 }}>
            <input
              type="time"
              value={form.bestTimeStart}
              onChange={e => handleChange("bestTimeStart", e.target.value)}
            />
            <span style={{ fontWeight: 600, color: "#5e6ba8", alignSelf: "center" }}>to</span>
            <input
              type="time"
              value={form.bestTimeEnd}
              onChange={e => handleChange("bestTimeEnd", e.target.value)}
            />
          </div>
        </Field>
        {/* Frequency as two fields */}
        <Field>
          <label>Frequency</label>
          <div style={{ display: "flex", gap: 12 }}>
            <input
              type="number"
              min={1}
              value={form.recommendedFrequencyValue}
              onChange={e => handleChange("recommendedFrequencyValue", Number(e.target.value))}
              style={{ width: 70 }}
            />
            <select
              value={form.recommendedFrequencyUnit}
              onChange={e => handleChange("recommendedFrequencyUnit", e.target.value)}
            >
              {FREQ_UNITS.map(u => <option key={u.value} value={u.value}>{u.label}</option>)}
            </select>
          </div>
        </Field>
        <Field>
          <label>Join Deadline</label>
          <input type="date" value={form.campaignDeadline} onChange={e => handleChange("campaignDeadline", e.target.value)} />
        </Field>
        <Field>
          <label>Start Date</label>
          <input type="date" value={form.campaignStartDate} onChange={e => handleChange("campaignStartDate", e.target.value)} />
        </Field>
        <Field>
          <label>End Date</label>
          <input type="date" value={form.campaignEndDate} onChange={e => handleChange("campaignEndDate", e.target.value)} />
        </Field>
        {/* Approval process and duration */}
        <Field>
          <label>Approval Process</label>
          <select value={form.approvalType} onChange={e => handleChange("approvalType", e.target.value)}>
            {APPROVAL_TYPES.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </Field>
        <Field>
          <label>Time Needed for Approval</label>
          <div style={{ display: "flex", gap: 10 }}>
            <input
              type="number"
              min={0}
              value={form.approvalTimeValue}
              onChange={e => handleChange("approvalTimeValue", Number(e.target.value))}
              style={{ width: 90 }}
              placeholder="0"
            />
            <div>
              <label style={{ marginRight: 7 }}>
                <input
                  type="radio"
                  checked={form.approvalTimeUnit === "hours"}
                  onChange={() => handleChange("approvalTimeUnit", "hours")}
                /> Hours
              </label>
              <label>
                <input
                  type="radio"
                  checked={form.approvalTimeUnit === "days"}
                  onChange={() => handleChange("approvalTimeUnit", "days")}
                /> Days
              </label>
            </div>
          </div>
        </Field>
        <Field>
          <label>Posting Rules</label>
          <textarea value={form.contentRules}
            onChange={e => handleChange("contentRules", e.target.value)} />
        </Field>
        <Field>
          <label>Platform Tip</label>
          <textarea value={form.platformTip}
            onChange={e => handleChange("platformTip", e.target.value)} />
        </Field>
        <Field>
          <label>Special Tag/CTA (optional)</label>
          <input value={form.cta} onChange={e => handleChange("cta", e.target.value)} />
        </Field>
        <Buttons>
          <button type="button" onClick={() => setForm(defaultState)}>Clear</button>
          <button type="button" style={{ background: "#2ecc71" }}>Save Draft</button>
          <button type="button" style={{ background: "#5567f3" }}>Publish</button>
        </Buttons>
      </FormSection>

      <PreviewSection>
        <h4 style={{ color: "#6048ca", marginBottom: 16 }}>Live Preview</h4>
        <AdCard {...previewProps} />
      </PreviewSection>
    </CreatorContainer>
  );
};
