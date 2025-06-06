import React, { useRef, useState } from "react";
import {
  PageWrapper, UploadCard, Tabs, Tab, Title, DropZone, FilePreview,
  Field, Guidelines, Tip, Status, Actions
} from "../styles/AdvertiserUploadPage.styled";
import { FaInstagram, FaTiktok, FaYoutube, FaXTwitter, FaFacebookF, FaLinkedin, FaPinterestP, FaLightbulb } from "react-icons/fa6";


const PLATFORMS = [
  {
    name: "Instagram",
    icon: <FaInstagram color="#e1306c" />,
    guidelines: "JPG/PNG up to 10MB. 1:1 or 4:5 ratio, 1080x1350px recommended. Reels: MP4, up to 60s, 9:16, max 100MB.",
    tip: "Bright backgrounds and bold text boost engagement.",
  },
  {
    name: "TikTok",
    icon: <FaTiktok color="#111" />,
    guidelines: "MP4/MOV, vertical (9:16), up to 100MB, 60s max.",
    tip: "Use trending music & clear, vertical videos.",
  },
  {
    name: "YouTube",
    icon: <FaYoutube color="#f00" />,
    guidelines: "MP4, 16:9, up to 2GB. Shorts: 9:16, max 60s.",
    tip: "High-contrast thumbnails increase clicks.",
  },
  {
    name: "X",
    icon: <FaXTwitter color="#111" />,
    guidelines: "JPG/PNG 5MB max, 1:1 or 16:9, 1200x1200px.",
    tip: "Use bold visuals and trending hashtags.",
  },
  {
    name: "Facebook",
    icon: <FaFacebookF color="#1877f3" />,
    guidelines: "JPG/PNG/MP4, max 30MB, 1200x628px, up to 15 min video.",
    tip: "Simple, relatable visuals work best.",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin color="#0077b5" />,
    guidelines: "JPG/PNG, up to 8MB, 1200x627px, professional tone.",
    tip: "Show industry relevance for more clicks.",
  },
  {
    name: "Pinterest",
    icon: <FaPinterestP color="#e60023" />,
    guidelines: "JPG/PNG up to 10MB. 2:3 ratio recommended, 1000x1500px. Max width 2360px.",
    tip: "Tall, colorful pins with text overlay get more saves.",
  },
];

const ACCEPTED = {
  Instagram: { types: ["image/jpeg", "image/png", "video/mp4"], max: 10 * 1024 * 1024, dims: [[1080, 1350], [1080, 1080]], maxDur: 60 },
  TikTok:    { types: ["video/mp4", "video/quicktime"], max: 100 * 1024 * 1024, dims: [[1080, 1920]], maxDur: 60 },
  YouTube:   { types: ["video/mp4"], max: 2 * 1024 * 1024 * 1024, dims: [[1920, 1080]], maxDur: 600 },
  X:         { types: ["image/jpeg", "image/png"], max: 5 * 1024 * 1024, dims: [[1200, 1200], [1280, 720]], maxDur: 0 },
  Facebook:  { types: ["image/jpeg", "image/png", "video/mp4"], max: 30 * 1024 * 1024, dims: [[1200, 628]], maxDur: 900 },
  LinkedIn:  { types: ["image/jpeg", "image/png"], max: 8 * 1024 * 1024, dims: [[1200, 627]], maxDur: 0 },
  Pinterest: { types: ["image/jpeg", "image/png"], max: 10 * 1024 * 1024, dims: [[1000, 1500], [2360, 3540]], maxDur: 0 },
};

function formatBytes(bytes: number) {
  if (!bytes) return "";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

export const AdvertiserUploadPage: React.FC = () => {
  const [platform, setPlatform] = useState(PLATFORMS[0].name);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [fileInfo, setFileInfo] = useState<any>({});
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const fileInput = useRef<HTMLInputElement>(null);

  // Inputs
  const [campaign, setCampaign] = useState("");
  const [caption, setCaption] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [cta, setCta] = useState("");

  // Handle platform tab
  const handleTab = (name: string) => {
    setPlatform(name);
    setFile(null);
    setPreview(null);
    setFileInfo({});
    setError(null);
    setStatus(null);
  };

  // Validate file and show preview
  const handleFile = (f: File | null) => {
    if (!f) return;
    setError(null);
    const accepted = ACCEPTED[platform as keyof typeof ACCEPTED];
    if (!accepted.types.includes(f.type)) {
      setError("Unsupported file type.");
      return;
    }
    if (f.size > accepted.max) {
      setError(`File too large! Max ${formatBytes(accepted.max)} allowed.`);
      return;
    }

    // For images: check dimensions
    if (f.type.startsWith("image/")) {
      const img = new window.Image();
      img.onload = () => {
        const valid = accepted.dims.some(([w, h]) => img.width === w && img.height === h);
        setFileInfo({
          type: f.type,
          size: f.size,
          width: img.width,
          height: img.height,
        });
        setPreview(URL.createObjectURL(f));
        if (!valid) {
          setError(`Wrong dimensions! Expected: ${accepted.dims.map(d => `${d[0]}x${d[1]}`).join(" or ")}`);
        }
      };
      img.src = URL.createObjectURL(f);
    } else if (f.type.startsWith("video/")) {
      const video = document.createElement("video");
      video.preload = "metadata";
      video.onloadedmetadata = () => {
        setFileInfo({
          type: f.type,
          size: f.size,
          width: video.videoWidth,
          height: video.videoHeight,
          duration: Math.round(video.duration),
        });
        setPreview(URL.createObjectURL(f));
        if (accepted.maxDur && video.duration > accepted.maxDur) {
          setError(`Video too long! Max duration: ${accepted.maxDur} sec.`);
        }
        const valid = accepted.dims.some(([w, h]) => video.videoWidth === w && video.videoHeight === h);
        if (!valid) {
          setError(`Wrong dimensions! Expected: ${accepted.dims.map(d => `${d[0]}x${d[1]}`).join(" or ")}`);
        }
      };
      video.src = URL.createObjectURL(f);
    }
    setFile(f);
  };

  // Handle file input
  const onDrop = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) handleFile(f);
  };

  // Upload button handler
  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!campaign) return setError("Please enter campaign name.");
    if (!file) return setError("Please upload your content.");
    if (error) return;
    setStatus("Uploading...");
    setTimeout(() => {
      setStatus("✅ Uploaded successfully!");
      setTimeout(() => setStatus(null), 1800);
    }, 1400);
  };

  const platformData = PLATFORMS.find(p => p.name === platform)!;

  return (
    <PageWrapper>
      <UploadCard>
        <Tabs>
          {PLATFORMS.map(p => (
            <Tab key={p.name} $active={platform === p.name} onClick={() => handleTab(p.name)}>
              {p.icon} {p.name}
            </Tab>
          ))}
        </Tabs>
        <Title>Upload Your Campaign Content</Title>
        <form onSubmit={handleUpload} autoComplete="off">
          <Field>
            <label>Campaign Name</label>
            <input
              type="text"
              value={campaign}
              onChange={e => setCampaign(e.target.value)}
              required
              placeholder="e.g. Summer Sale Launch"
            />
          </Field>

          <DropZone
            htmlFor="file-upload"
            $error={!!error}
            style={{ borderColor: error ? "#e53e3e" : undefined }}
          >
            <input
              id="file-upload"
              type="file"
              style={{ display: "none" }}
              accept={ACCEPTED[platform as keyof typeof ACCEPTED].types.join(",")}
              ref={fileInput}
              onChange={onDrop}
            />
            {preview ? (
              file?.type.startsWith("video/") ? (
                <FilePreview>
                  <video src={preview} controls width={170} height={110} />
                </FilePreview>
              ) : (
                <FilePreview>
                  <img src={preview} alt="Preview" />
                </FilePreview>
              )
            ) : (
              <span>Drag & drop or click to upload image/video</span>
            )}
          </DropZone>

          {file && (
            <div style={{ fontSize: "0.95em", color: "#293859" }}>
              File: <strong>{file.name}</strong><br />
              Size: <strong>{formatBytes(file.size)}</strong>{" "}
              {fileInfo.width && <>| <strong>{fileInfo.width}x{fileInfo.height}px</strong></>}
              {fileInfo.duration !== undefined && <> | Duration: <strong>{fileInfo.duration}s</strong></>}
            </div>
          )}

          {error && <Status $error>{error}</Status>}
          {status && <Status $success={status.includes("success")}>{status}</Status>}

          <Guidelines>
            <strong>Guidelines for {platform}</strong>:<br />
            {platformData.guidelines}
          </Guidelines>

          <Field>
            <label>Caption</label>
            <input
              type="text"
              value={caption}
              onChange={e => setCaption(e.target.value)}
              placeholder="Add a caption (optional)"
              maxLength={130}
            />
          </Field>
          <Field>
            <label>Hashtags</label>
            <input
              type="text"
              value={hashtags}
              onChange={e => setHashtags(e.target.value)}
              placeholder="#sale #giveaway"
              maxLength={60}
            />
          </Field>
          <Field>
            <label>Call-to-Action</label>
            <input
              type="text"
              value={cta}
              onChange={e => setCta(e.target.value)}
              placeholder="e.g. Click the link in bio!"
              maxLength={80}
            />
          </Field>

          <Tip>
            <FaLightbulb style={{ color: "#2ec47d" }} /> {platformData.tip}
          </Tip>

          <Actions>
            <button type="submit" className="upload">Upload</button>
            <button type="button" className="cancel" onClick={() => window.location.reload()}>Cancel</button>
          </Actions>
        </form>
      </UploadCard>
    </PageWrapper>
  );
};
