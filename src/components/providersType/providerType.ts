// 1. Define the union type (type-safe values)
export type ContentProvider = "company" | "participant";

// 2. Enum-like object for use in code
export const ContentProvider = {
  Company: "company" as ContentProvider,
  Participant: "participant" as ContentProvider,
};

// 3. Type-safe labels (all keys are forced)
export const PROVIDER_LABELS: Record<"en" | "fa", Record<ContentProvider, string>> = {
  en: {
    company: "Advertiser/Company",
    participant: "Participant/Creator",
  },
  fa: {
    company: "شرکت تبلیغ‌دهنده",
    participant: "شرکت‌کننده",
  },
};
