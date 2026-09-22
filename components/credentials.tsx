import { credentials, education } from '@/lib/profile';
import { SectionHeader } from './selected-work';

export function Credentials() {
  return (
    <section id="credentials" className="border-t border-hairline bg-paper-pure">
      <div className="container-editorial py-20 md:py-28">
        <SectionHeader
          eyebrow="Education & Credentials"
          title="Formal training, professional certifications."
        />

        <div className="mt-14 grid grid-cols-12 gap-x-6 gap-y-12">
          {/* Education */}
          <div className="col-span-12 md:col-span-5">
            <div className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-muted-2">
              Education
            </div>
            <div className="mt-5 border-t border-hairline pt-6">
              <div className="font-serif text-[clamp(22px,2.4vw,28px)] tracking-editorial text-ink">
                {education.school}
              </div>
              <div className="mt-2 text-[15px] text-ink-soft">
                {education.degree}
              </div>
              <div className="mt-1 text-[13px] text-muted">{education.period}</div>
            </div>
          </div>

          {/* Certifications */}
          <div className="col-span-12 md:col-span-7">
            <div className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-muted-2">
              Professional Certifications
            </div>

            <ul className="mt-5 border-t border-hairline">
              {credentials.map((c) => (
                <li
                  key={c.name}
                  className="grid grid-cols-12 gap-x-6 py-4 border-b border-hairline"
                >
                  <div className="col-span-12 sm:col-span-5 font-serif text-[18px] tracking-editorial text-ink">
                    {c.name}
                  </div>
                  <div className="col-span-12 sm:col-span-4 text-[14px] text-ink-soft">
                    {c.issuer}
                  </div>
                  <div className="hidden sm:block col-span-3 sm:text-right text-[12px] text-muted font-mono tracking-[0.12em] uppercase">
                    Verified
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
