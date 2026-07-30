import Image from "next/image";
import { PageTitle, SectionDivider, Paragraph, InlineLink } from "./components/ui";
import { siteName, canonicalHost, shareImage, event } from "@/site.config";

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: siteName,
  description: event.description,
  startDate: event.startDate,
  endDate: event.endDate,
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: event.venue.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: event.venue.street,
      addressLocality: event.venue.city,
      addressRegion: event.venue.state,
      postalCode: event.venue.zip,
      addressCountry: "US",
    },
  },
  image: [`https://${canonicalHost}${shareImage}`],
  url: `https://${canonicalHost}`,
};

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />

      <div className="text-center mb-8">
        <PageTitle>Star Through Seattle</PageTitle>
        <p className="text-xl font-semibold tracking-widest uppercase text-foreground/70 mt-3">
          Contra Dance Weekend
        </p>
        <p className="text-base text-foreground/60 mt-1">
          Sponsored by{" "}
          <InlineLink href="https://www.seafolklore.org/">Seattle Folklore Society</InlineLink>
        </p>
        <p className="text-lg mt-3">{event.datesDisplay}</p>
        <div className="mt-8">
          <p className="text-base text-foreground/60">Registration opens in 2027</p>
          <p className="text-base mt-2">
            <InlineLink href="/updates" internal>Sign up to stay informed</InlineLink>
          </p>
        </div>
      </div>

      <figure className="relative w-full aspect-3/2 rounded-lg overflow-hidden mb-8">
        <Image
          src="/dancers1.jpg"
          alt="Dancers"
          fill
          sizes="(max-width: 42rem) calc(100vw - 2rem), 40rem"
          className="object-cover"
          priority
        />
        {/* <figcaption className="absolute bottom-0 right-0 px-2 py-1 text-xs text-white/80 bg-black/30 rounded-tl-md">
          <InlineLink href="https://www.facebook.com/JCsDancePhotography">
            Photo: JC&rsquo;s Dance Photography
          </InlineLink>
        </figcaption> */}
      </figure>

      <Paragraph>
        Star Through Seattle is a joyful, inclusive dance weekend where everyone feels at home on
        the dance floor. We&rsquo;re held at the historic{" "}
        <InlineLink href={event.venue.website}>{event.venue.name}</InlineLink>
        {" "}({event.venue.street}, {event.venue.city}, {event.venue.state} {event.venue.zip}) — a venue that has been welcoming music and dancing
        for over a century, in spaces operated by{" "}
        <InlineLink href="https://www.206zulu.org/">206Zulu</InlineLink>.
      </Paragraph>

      <Paragraph>
        Dance in the beautiful second-story ballroom, or head up to the third-floor balcony to grab
        a snack, listen to live music, and watch the wonderful dancing below. And if you need to
        slow down, the quiet room is always available for reading or resting.
      </Paragraph>

      <Paragraph>
        Starting Friday evening, talented callers will bring joy and energy to every dance, guiding
        you through each figure with traditional and contemporary contra music performed by amazing
        live bands. Saturday and Sunday both open with a morning waltz, followed by fantastic
        contras — including skill-focused dances and the always-popular marathon session. Between
        dances, there&rsquo;s even more to enjoy: a community sing and a jam session!
      </Paragraph>

      <SectionDivider />

      <div className="text-center space-y-3 text-lg">
        <p className="text-base text-foreground/60">Gender neutral calling: Larks and Robins</p>
        <p>
          Calling by{" "}
          <InlineLink href="/talent#caller1" internal>Will Mentor</InlineLink>
          {" "}and{" "}
          <InlineLink href="/talent#caller2" internal>Koren Wake</InlineLink>
        </p>
        <p>
          Music by{" "}
          <InlineLink href="/talent#band1" internal>Kingfisher</InlineLink>
          {" "}and{" "}
          <InlineLink href="/talent#band2" internal>Natterjack</InlineLink>
        </p>
      </div>

      <SectionDivider />

      <div className="space-y-3 text-sm text-foreground/70">
        <p>Star Through Seattle is a fragrance free event.</p>
        <p>
          Star Through Seattle follows the mask guidelines of the weekly Seattle contras.
          Currently, masks are not required. This is subject to change.
        </p>
        <p>
          We ask everyone to take a Covid test on Friday, before arriving at the weekend.
          Please do not attend if you are feeling unwell.
        </p>
      </div>

      <SectionDivider />

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-foreground/60">
        <p>
          Photos by{" "}
          <InlineLink href="https://www.facebook.com/JCsDancePhotography">
            JC&rsquo;s Dance Photography
          </InlineLink>
        </p>
        <div className="flex items-center gap-4">
          <InlineLink href="https://www.seafolklore.org/">
            <Image src="/sfs-logo.png"
              alt=""
              width={56}
              height={56}
              className="object-contain"
            />
          </InlineLink>
          <InlineLink href="https://www.206zulu.org/">
            <Image src="/206zulu.png"
              alt=""
              width={80}
              height={56}
              className="object-contain"
            />
          </InlineLink>
        </div>
      </div>

    </div>
  );
}
