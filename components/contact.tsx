import { profile } from '@/lib/profile';

export function Contact() {
  return (
    <section id="contact" className="border-t border-hairline">
      <div className="container-editorial py-24 md:py-36">
        <div className="grid grid-cols-12 gap-x-6 gap-y-14 items-end">
          {/* Statement */}
          <div className="col-span-12 lg:col-span-8">
            <div className="eyebrow">Get in Touch</div>

            <h2 className="mt-6 font-serif font-light tracking-editorial leading-[1.02] text-[clamp(36px,6vw,72px)] text-ink">
              Have a difficult technical problem?
              <br />
              Let&rsquo;s build the{' '}
              <span className="italic text-accent">right system</span> for it.
            </h2>

            <p className="mt-8 max-w-prose text-[16px] leading-[1.7] text-muted">
              Open to senior AI / ML engineering roles, technical consulting,
              and selective collaboration on AI infrastructure, security, and
              Web3 systems. I respond personally.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 bg-ink text-paper px-5 py-3 rounded-full text-[14px] hover:bg-ink-soft transition-colors"
              >
                Email — {profile.email}
              </a>
              <a
                href={profile.social.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-[14px] border border-ink/15 hover:border-ink/40 transition-colors"
              >
                GitHub
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-[14px] border border-ink/15 hover:border-ink/40 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Side info */}
          <div className="col-span-12 lg:col-span-4 lg:pl-6">
            <div className="border border-hairline p-6 bg-paper-elev">
              <div className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-muted-2">
                Direct
              </div>
              <ul className="mt-5 space-y-4 text-[14px]">
                <li>
                  <div className="text-muted text-[12px]">Email</div>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-ink hover:text-accent transition-colors"
                  >
                    {profile.email}
                  </a>
                </li>
                <li>
                  <div className="text-muted text-[12px]">Phone</div>
                  <a
                    href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}
                    className="text-ink hover:text-accent transition-colors"
                  >
                    {profile.phone}
                  </a>
                </li>
                <li>
                  <div className="text-muted text-[12px]">Location</div>
                  <div className="text-ink">Remote-friendly</div>
                </li>
                <li>
                  <div className="text-muted text-[12px]">Availability</div>
                  <div className="text-ink inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" aria-hidden />
                    Open to senior roles
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
