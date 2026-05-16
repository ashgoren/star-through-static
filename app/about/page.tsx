import { PageTitle, SectionDivider, SectionHeader, Paragraph, InlineLink } from "../components/ui";

export default function About() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12">

      <PageTitle>About</PageTitle>

      <SectionDivider />

      <SectionHeader>Star Through Dancers</SectionHeader>
      <ul className="list-disc list-inside space-y-1 text-base leading-relaxed text-foreground/80">
        <li>Are aware of the community on the floor: they dance with an awareness of their movements, their frame, the proper giving of weight, and the space within the hall.</li>
        <li>Dance with a variety of partners regardless of age, body type, or gender expression.</li>
        <li>Are role models of consensual behavior on the dance floor.</li>
        <li>Swap roles or engage in other play when done with the utmost regard for the integrity of the dance and the line, and with partner consent.</li>
        <li>Take time and effort to appreciate the talent of the callers and the bands.</li>
        <li>Avoid pre-booking and enjoy the spontaneity of seeking a new partner for each dance.</li>
        <li>Ensure their clothes and selves are 100% fragrance-free when attending Star Through.</li>
      </ul>

      <SectionHeader id="wellness">Wellness</SectionHeader>
      <Paragraph>
        Star Through will follow the mask guidelines of the weekly Seattle contra dances.
        Currently, masks are encouraged but not required. This is subject to change.
        Any updates will be announced by email and on this website.
      </Paragraph>
      <Paragraph>
        Dancers are <strong>strongly encouraged</strong> to take a COVID test on Friday before arriving at the hall.
      </Paragraph>
      <Paragraph>
        If you feel unwell, please do not attend. If you feel unwell during the weekend, please notify the
        organizers immediately and leave the dance as soon as possible. Full refunds will be given minus any
        transaction fees incurred.
      </Paragraph>

      <SectionHeader id="refund">Refund Policy</SectionHeader>
      <Paragraph>
        Registration is not transferable. Please contact{" "}
        <InlineLink href="mailto:[email TBD]">[email TBD]</InlineLink>{" "}
        if you need to cancel. Cancellations will be refunded in full minus any bank or Stripe transaction fees.
        Refunds may take up to 7 days to process.
      </Paragraph>

      <SectionHeader>Food &amp; Water</SectionHeader>
      <Paragraph>
        This is a high-energy weekend with only a few official breaks. Meals are your own responsibility —
        we encourage you to enjoy the many restaurants the neighborhood has to offer. Snacks will be
        provided throughout the weekend. Water will be available, but please bring your own bottle.
      </Paragraph>

      <SectionHeader>Housing</SectionHeader>
      <Paragraph>
        We will do our best to find housing for out-of-town guests. Please remember that we are all
        volunteers, so adjust expectations accordingly. If you have attended other dance weekends in
        Seattle, you are strongly encouraged to make your own arrangements with friends you have stayed
        with before.
      </Paragraph>
      <Paragraph>
        If you need housing or can offer it to visiting dancers, please include this when you register.
        For questions about housing, email{" "}
        <InlineLink href="mailto:[housing email TBD]">[housing email TBD]</InlineLink>.
      </Paragraph>

    </div>
  );
}
