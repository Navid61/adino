import React, { useRef } from "react";
import { ContentGrid, ContentCard } from "../styles/Workspace.styled";
import type { AdvertiserAsset } from "../components/workspace/advertiser";

type Props = {
  assets: AdvertiserAsset[];
  onUpload: (files: FileList) => void;
  onDelete: (id: number) => void;
};

export const AdvertiserContentUpload: React.FC<Props> = ({ assets, onUpload, onDelete }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  return (
    <section>
      <h3>Your Campaign Content</h3>
      <button
        style={{ margin: "1em 0", borderRadius: 6, background: "#2b72ec", color: "#fff", fontWeight: 500, padding: "0.6em 1.5em" }}
        onClick={() => fileInputRef.current?.click()}
        type="button"
      >
        Upload Files
      </button>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        multiple
        accept="image/*,video/*,.pdf,.doc,.docx"
        onChange={e => e.target.files && onUpload(e.target.files)}
      />
      <ContentGrid>
        {assets.map(asset => (
          <ContentCard key={asset.id}>
            <div>{asset.name}</div>
            <div style={{ fontSize: 13, color: "#777" }}>{asset.type}</div>
            <a href={asset.file} download style={{ color: "#2b72ec", fontWeight: 600 }}>Download</a>
            <button onClick={() => onDelete(asset.id)} style={{ marginTop: 8, color: "#cf2727", background: "none", border: "none", cursor: "pointer" }}>
              Delete
            </button>
          </ContentCard>
        ))}
      </ContentGrid>
    </section>
  );
};
