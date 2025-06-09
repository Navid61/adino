import React from "react";
import { ContentGrid, ContentCard, StatusBadge } from "../styles/Workspace.styled";
import type { CreatorSubmission } from "../components/workspace/advertiser";

type Props = {
  submissions: CreatorSubmission[];
  onApprove?: (id: number) => void;
  onReject?: (id: number) => void;
};

export const CreatorSubmissionList: React.FC<Props> = ({ submissions, onApprove, onReject }) => (
  <section style={{ marginTop: "2.5em" }}>
    <h3>Submissions from Creators</h3>
    <ContentGrid>
      {submissions.map(sub => (
        <ContentCard key={sub.id}>
          <div>{sub.type} by <b>{sub.creator}</b></div>
          <a href={sub.file} download style={{ color: "#246ca3", fontWeight: 600, margin: "0.6em 0", display: "block" }}>Download</a>
          <StatusBadge $status={sub.status}>{sub.status}</StatusBadge>
          {sub.status === "pending" && (
            <div style={{ marginTop: 10, display: "flex", gap: 8 }}>
              <button
                style={{ background: "#e7faef", color: "#169245", border: 0, borderRadius: 6, padding: "0.28em 1.1em", fontWeight: 500 }}
                onClick={() => onApprove?.(sub.id)}
              >Approve</button>
              <button
                style={{ background: "#ffe8ea", color: "#cf2727", border: 0, borderRadius: 6, padding: "0.28em 1.1em", fontWeight: 500 }}
                onClick={() => onReject?.(sub.id)}
              >Reject</button>
            </div>
          )}
        </ContentCard>
      ))}
    </ContentGrid>
  </section>
);
