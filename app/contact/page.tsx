import type { Metadata } from "next";
import { PageTitle, SectionDivider, Paragraph, InlineLink } from "../components/ui";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact the organizers of Star Through Seattle, a new Fall contra dance weekend in Seattle.",
};

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12">

      <PageTitle>Contact</PageTitle>

      <SectionDivider />

      <Paragraph>
        Send us an email at{" "}
        <InlineLink href="mailto:[email TBD]">[email TBD]</InlineLink>.
      </Paragraph>

    </div>
  );
}
