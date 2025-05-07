import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BTL Advanced Aesthetic Treatments | Dr. Gail Ann Krishnan",
  description: "Experience cutting-edge aesthetic treatments with BTL technology. Non-invasive facial rejuvenation and skin treatments with Dr. Gail Ann Krishnan.",
};

export default function BTLLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 