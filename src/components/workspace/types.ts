// types.ts
export interface AdvertiserContent {
  id: number;
  type: "Image" | "Video";
  title: string;
  file: string;
}

export interface ParticipantContent {
  id: number;
  type: "Post" | "Reel" | "Story";
  creator: string;
  status: "pending" | "approved" | "rejected";
  file: string;
}


export type WorkspaceContent = AdvertiserContent | ParticipantContent;
