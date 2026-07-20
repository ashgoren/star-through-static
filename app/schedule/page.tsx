import type { Metadata } from "next";
import { PageTitle, SectionDivider, SectionHeader, Paragraph } from "../components/ui";
import { siteName, event } from "@/site.config";

export const metadata: Metadata = {
  title: "Schedule",
  description: `Schedule for the ${siteName} contra dance weekend, ${event.datesDisplay} in Seattle.`,
};

export default function Schedule() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12">

      <PageTitle>Schedule</PageTitle>

      <SectionDivider />

      <Paragraph>Schedule coming soon.</Paragraph>

      <SectionHeader>Past Flights</SectionHeader>
      <ul className="list-disc list-inside space-y-1 text-base text-foreground/80">
        <li>2025 &mdash; [Placeholder]</li>
      </ul>

    </div>
  );
}
