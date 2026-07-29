export interface TrustPulseItem {
  id: number;
  text: string;
  time: string;
  iconType: 'check' | 'users' | 'star' | 'globe' | 'rocket' | 'shield';
  color: string;
}

export const trustPulses: TrustPulseItem[] = [
  {
    id: 1,
    text: "BlackArt Tattoo now #1 on Google in Udaipur",
    time: "Just now",
    iconType: "check",
    color: "#6300e2"
  },
  {
    id: 2,
    text: "Dear Valentine crossed 1,000+ active users",
    time: "This week",
    iconType: "users",
    color: "#10b981"
  },
  {
    id: 3,
    text: "Biryani Babu — 40% conversion lift post-launch",
    time: "Apr 2025",
    iconType: "star",
    color: "#f59e0b"
  },
  {
    id: 4,
    text: "Available for Q3 full-stack projects · Kanpur → Worldwide",
    time: "Active",
    iconType: "globe",
    color: "#8b5cf6"
  },
  {
    id: 5,
    text: "Wavo.digital WhatsApp AI dashboard shipped to production",
    time: "Recent",
    iconType: "rocket",
    color: "#2dd4bf"
  }
];
