import { profile } from '@/lib/profile';

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-paper">
      <div className="container-editorial py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-x-8">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden
                className="grid place-items-center w-7 h-7 bg-ink text-paper text-[11px] font-mono tracking-wider rounded-[3px]"
              >
                {profile.initials}
              </span>
              <span className="text-[15px] tracking-tightish text-ink">
                {profile.name}
              </span>
            </div>
            <p className="mt-4 max-w-md text-[14px] leading-relaxed text-muted">
              AI / ML Engineer · Software Engineer · Computer Scientist.
              Production systems across ML, cybersecurity, and Web3.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow">Connect</div>
            <ul className="mt-4 space-y-2 text-[14px]">
              <li>
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink hover:text-accent transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink hover:text-accent transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-ink hover:text-accent transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 md:text-right">
            <div className="eyebrow">Currently</div>
            <p className="mt-4 text-[14px] text-muted leading-relaxed">
              Open to senior AI / ML engineering roles and select consulting
              engagements.
            </p>
          </div>
        </div>

        <div className="rule mt-12" />
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[12px] text-muted">
          <span>© 2026 {profile.name}</span>
          <span className="font-mono">
            Built with Next.js · TypeScript · Tailwind
          </span>
        </div>
      </div>
    </footer>
  );
}
