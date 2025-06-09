import React from "react";
import { ContentGrid, ContentCard, StatusBadge } from "../styles/Workspace.styled";
import type { ParticipantContent } from "./types";

type Props = {
  items: ParticipantContent[];
  selected: number[];
  onToggleSelect: (id: number) => void;
  btnStyle: (variant: string) => React.CSSProperties;
};

export const ParticipantContentGrid: React.FC<Props> = ({
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
        <div style={{ fontWeight: 600, fontSize: "1.03em" }}>{item.type}</div>
        <div style={{ color: "#7c87a7", fontSize: "0.98em" }}>
          By <b>{item.creator}</b>
        </div>
        <StatusBadge $status={item.status}>{item.status}</StatusBadge>
        <div style={{ marginTop: 5, display: "flex", gap: 10 }}>
          {item.status === "pending" && (
            <>
              <button style={btnStyle("approve")}>Approve</button>
              <button style={btnStyle("danger")}>Reject</button>
            </>
          )}
        </div>
      </ContentCard>
    ))}
  </ContentGrid>
);
