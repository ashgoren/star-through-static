import { PageTitle, SectionDivider, Paragraph } from "../components/ui";
import InterestForm from "./InterestForm";

export default function Updates() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12">
      <PageTitle>Stay Informed</PageTitle>
      <SectionDivider />
      <Paragraph>
        Registration will open in 2027. Sign up below and we&rsquo;ll keep you informed.
      </Paragraph>
      <div className="mt-6">
        <InterestForm />
      </div>
    </div>
  );
}
