export interface AdvertiserAsset {
  id: number;
  type: "Image" | "Video" | "Document";
  name: string;
  file: string; // URL
}

export interface CreatorSubmission {
  id: number;
  creator: string;
  type: "Post" | "Reel" | "Story" | "Video" | "Image";
  file: string;
  status: "pending" | "approved" | "rejected";
}
