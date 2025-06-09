import React, { useState } from "react";
import {
  WorkspaceWrapper, WorkspaceHeader, Tabs, Tab,
  FilterBar, BatchActionBar
} from "../styles/Workspace.styled";
import { AdvertiserContentGrid } from "./AdvertiserContentGrid";
import { ParticipantContentGrid } from "./ParticipantContentGrid";
import type { AdvertiserContent, ParticipantContent } from "../components/workspace/types";

const demoAdvertiserContent: AdvertiserContent[] = [
  { id: 1, type: "Image", title: "Advertiser Logo",  file: "/ads/brand-banner.jpg" },
  { id: 2, type: "Video", title: "Product Teaser",  file: "/ads/teaser.mp4" },
];

const demoParticipantContent: ParticipantContent[] = [
  { id: 3, type: "Reel", creator: "@jessica", status: "pending", file: "/ugc/reel-jessica.mp4" },
  { id: 4, type: "Post", creator: "@maxpower", status: "approved", file: "/ugc/post-max.png" },
  { id: 5, type: "Story", creator: "@nina", status: "rejected", file: "/ugc/story-nina.mp4" },
];

export const Workspace: React.FC = () => {
  const [tab, setTab] = useState<"advertiser" | "participant">("advertiser");
  const [selected, setSelected] = useState<number[]>([]);

  const btnStyle = (variant: string): React.CSSProperties => ({
    background:
      variant === "primary" ? "#ebf3ff"
      : variant === "danger" ? "#ffe8ea"
      : variant === "approve" ? "#e7faef"
      : "#f0f0f0",
    color:
      variant === "primary" ? "#246ca3"
      : variant === "danger" ? "#cf2727"
      : variant === "approve" ? "#169245"
      : "#888",
    border: 0,
    borderRadius: 6,
    padding: "0.32em 1.1em",
    fontWeight: 500,
    cursor: "pointer",
  });

  const onToggleSelect = (id: number) => {
    setSelected(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <WorkspaceWrapper>
      <WorkspaceHeader>
        <h2>Campaign Workspace</h2>
        <div style={{ color: "#6499fa", fontWeight: 500, fontSize: "1.12em" }}>
          Manage campaign assets — Switch tab to manage content by Advertiser or Participants.
        </div>
      </WorkspaceHeader>
      <Tabs>
        <Tab $active={tab === "advertiser"} onClick={() => { setTab("advertiser"); setSelected([]); }}>
          Content by Advertiser
        </Tab>
        <Tab $active={tab === "participant"} onClick={() => { setTab("participant"); setSelected([]); }}>
          Content by Participants
        </Tab>
      </Tabs>
      <FilterBar>
        {/* ...filters as before... */}
      </FilterBar>
      {tab === "advertiser" ? (
        <AdvertiserContentGrid
          items={demoAdvertiserContent}
          selected={selected}
          onToggleSelect={onToggleSelect}
          btnStyle={btnStyle}
        />
      ) : (
        <ParticipantContentGrid
          items={demoParticipantContent}
          selected={selected}
          onToggleSelect={onToggleSelect}
          btnStyle={btnStyle}
        />
      )}
      {selected.length > 0 && (
        <BatchActionBar>
          <span>{selected.length} selected</span>
          {tab === "advertiser" && (
            <button style={{ background: "#c2ebff", border: 0, borderRadius: 8, padding: "0.5em 1.6em", fontWeight: 600, color: "#246ca3" }}>
              Download Selected
            </button>
          )}
          {tab === "participant" && (
            <>
              <button style={{ background: "#e5ffe1", border: 0, borderRadius: 8, padding: "0.5em 1.6em", fontWeight: 600, color: "#169245" }}>
                Approve Selected
              </button>
              <button style={{ background: "#ffe8ea", border: 0, borderRadius: 8, padding: "0.5em 1.6em", fontWeight: 600, color: "#cf2727" }}>
                Reject Selected
              </button>
            </>
          )}
        </BatchActionBar>
      )}
    </WorkspaceWrapper>
  );
};
