import Image from "next/image";
import { PageTitle, SectionDivider, SectionHeader, InlineLink } from "../components/ui";

export default function Talent() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12">

      <PageTitle>Bands &amp; Callers</PageTitle>

      <SectionDivider />

      <section>
        <SectionHeader id="caller1">Calling by <em><InlineLink href="https://camp.cdss.org/staff/will-mentor">Will Mentor</InlineLink></em></SectionHeader>
        <div className="flex flex-col sm:flex-row gap-5 mt-3">
          <div className="shrink-0 mx-auto sm:mx-0">
            <Image
              src="/willmentor.jpg"
              alt="Will Mentor"
              width={220}
              height={200}
              className="rounded-lg object-cover"
            />
          </div>
          <p className="text-base leading-relaxed">
            Will Mentor is a contra and square dance caller from northern Vermont known for his
            clear teaching, upbeat wit, and relaxed stage presence. He loves to choreograph evenings
            with a variety of dances and tempos that at times surprise and always delight. All the
            while, keeping intact his guiding principle as a caller: &ldquo;It&rsquo;s about the
            dancers!&rdquo;
          </p>
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader id="caller2">
          Calling by <em><InlineLink href="https://www.korenwake.com">Koren Wake</InlineLink></em>
        </SectionHeader>
        <div className="flex flex-col sm:flex-row-reverse gap-5 mt-3">
          <div className="shrink-0 mx-auto sm:mx-0">
            <Image
              src="/korenwake.jpg"
              alt="Koren Wake"
              width={180}
              height={260}
              className="rounded-lg object-cover"
            />
          </div>
          <p className="text-base leading-relaxed">
            Koren Wake has been dancing, loving, and obsessing about contra since she was a child.
            Originally from New England, she spent decades analyzing the art and flow of contra and
            developing a deep understanding of the dance before she finally picked up a microphone
            in Seattle, where she is now based. She quickly rose to prominence in the Pacific
            Northwest and beyond, charming bands and dance communities with her reassuring voice and
            clear communication. She loves nothing more than to help dancers discover the patterns
            and connections of well-crafted choreography. Koren&rsquo;s primary goal as a caller is
            to combine exquisite dance selection with clear and accessible teaching in order to bring
            dancers of all skill levels together on the floor.
          </p>
        </div>
      </section>

      <SectionDivider />

      <section>
        <SectionHeader id="band1">
          Music by <em><InlineLink href="https://kingfisherband.com">Kingfisher</InlineLink></em>
        </SectionHeader>
        <div className="flex flex-col sm:flex-row gap-5 mt-3">
          <div className="shrink-0 mx-auto sm:mx-0">
            <Image
              src="/kingfisher.jpg"
              alt="Kingfisher"
              width={300}
              height={250}
              className="rounded-lg object-cover"
            />
          </div>
          <p className="text-base leading-relaxed">
            Kingfisher plays both traditional and modern contra dance music, and has been hailed as
            one of the most versatile bands on the road today. Jeff Kaufman anchors the duo from the
            piano and mandolin, along with a number of instruments he created himself, giving Cecilia
            Vacanti the opportunity to wow you with intense fiddling renditions of tunes across the
            spectrum.
          </p>
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader id="band2">
          Music by <em><InlineLink href="https://natterjacked.bandcamp.com">Natterjack</InlineLink></em>
        </SectionHeader>
        <div className="flex flex-col sm:flex-row-reverse gap-5 mt-3">
          <div className="shrink-0 mx-auto sm:mx-0">
            <Image
              src="/natterjack.jpg"
              alt="Natterjack"
              width={300}
              height={169}
              className="rounded-lg object-cover"
            />
          </div>
          <p className="text-base leading-relaxed">
            Coming soon...
          </p>
        </div>
      </section>

    </div>
  );
}
