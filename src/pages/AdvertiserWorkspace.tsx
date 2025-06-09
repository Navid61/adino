import React, { useState } from "react";
import { WorkspaceWrapper, WorkspaceHeader } from "../styles/Workspace.styled";
import { AdvertiserContentUpload } from "./AdvertiserContentUpload";
import { CreatorSubmissionList } from "./CreatorSubmissionList";
import type { AdvertiserAsset, CreatorSubmission } from "../components/workspace/advertiser";

// Demo/mock data
const initialAssets: AdvertiserAsset[] = [
  { id: 1, type: "Image", name: "Brand Banner", file: "/ads/brand-banner.jpg" },
  { id: 2, type: "Video", name: "Promo Teaser", file: "/ads/teaser.mp4" },
];
const initialSubmissions: CreatorSubmission[] = [
  { id: 11, creator: "@jessica", type: "Reel", file: "/ugc/reel-jessica.mp4", status: "pending" },
  { id: 12, creator: "@nina", type: "Post", file: "/ugc/post-nina.png", status: "approved" },
];

export const AdvertiserWorkspace: React.FC = () => {
  const [assets, setAssets] = useState<AdvertiserAsset[]>(initialAssets);
  const [submissions, setSubmissions] = useState<CreatorSubmission[]>(initialSubmissions);

  const handleUpload = (files: FileList) => {
 const uploaded = Array.from(files).map((file, idx) => ({
  id: Date.now() + idx,
  type: (
    file.type.startsWith("image") ? "Image"
    : file.type.startsWith("video") ? "Video"
    : "Document"
  ) as "Image" | "Video" | "Document",
  name: file.name,
  file: URL.createObjectURL(file),
}));


    setAssets(a => [...a, ...uploaded]);
  };

  const handleDelete = (id: number) => setAssets(a => a.filter(item => item.id !== id));

  const handleApprove = (id: number) =>
    setSubmissions(subs => subs.map(s => s.id === id ? { ...s, status: "approved" } : s));
  const handleReject = (id: number) =>
    setSubmissions(subs => subs.map(s => s.id === id ? { ...s, status: "rejected" } : s));

  return (
    <WorkspaceWrapper>
      <WorkspaceHeader>
        <h2>Advertiser Campaign Workspace</h2>
        <div style={{ color: "#6499fa", fontWeight: 500, fontSize: "1.12em" }}>
          Manage your campaign content and submissions from creators.
        </div>
      </WorkspaceHeader>
      <AdvertiserContentUpload assets={assets} onUpload={handleUpload} onDelete={handleDelete} />
      <CreatorSubmissionList submissions={submissions} onApprove={handleApprove} onReject={handleReject} />
    </WorkspaceWrapper>
  );
};
