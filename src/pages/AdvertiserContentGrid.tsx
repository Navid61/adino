import React from "react";
import { ContentGrid, ContentCard } from "../styles/Workspace.styled";
import type { AdvertiserContent } from "../components/workspace/types";

type Props = {
  items: AdvertiserContent[];
  selected: number[];
  onToggleSelect: (id: number) => void;
  btnStyle: (variant: string) => React.CSSProperties;
};

export const AdvertiserContentGrid: React.FC<Props> = ({
  items, selected, onToggleSelect, btnStyle,
}) => (
  <ContentGrid>
    {items.map(item => (
      <ContentCard key={item.id}>
        <input
          type="checkbox"
          checked={selected.includes(item.id)}
          onChange={() => onToggleSelect(item.id)}
          style={{ position: "absolute", top: 13, right: 13 }}
          title="Select"
        />
        <div style={{ fontWeight: 600, fontSize: "1.03em" }}>{item.title}</div>
        <div style={{ color: "#7c87a7", fontSize: "0.98em" }}>{item.type}</div>
        <div style={{ marginTop: 5, display: "flex", gap: 10 }}>
          <button style={btnStyle("primary")}>Download</button>
          <button style={btnStyle("danger")}>Reject/Cancel</button>
        </div>
      </ContentCard>
    ))}
  </ContentGrid>
);
