import type { Project } from '@/lib/projects';

/**
 * More Work — compact, dense, editorial. Designed to feel like
 * the back-matter of a portfolio book: a single list with
 * consistent rhythm.
 */
export function MoreWork({ projects }: { projects: Project[] }) {
  return (
    <section id="more-work" className="border-t border-hairline bg-paper-pure">
      <div className="container-editorial py-16 md:py-24">
        <div className="grid grid-cols-12 gap-x-6 mb-10">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow">More Work</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h3 className="font-serif font-light tracking-editorial leading-[1.05] text-[clamp(24px,3vw,36px)] max-w-[20ch]">
              Additional systems, products, and infrastructure work.
            </h3>
          </div>
        </div>

        <div className="border-t border-hairline">
          <ul>
            {projects.map((p) => (
              <li key={p.slug} className="border-b border-hairline">
                <a
                  href={p.links[0]?.href}
                  target={p.links[0]?.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="group grid grid-cols-12 gap-x-6 gap-y-3 py-5 sm:py-6 items-baseline transition-colors"
                >
                  <div className="col-span-12 sm:col-span-5 md:col-span-4 flex items-baseline gap-3">
                    <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-muted-2 w-12 shrink-0">
                      {p.year}
                    </span>
                    <span className="font-serif text-[20px] sm:text-[22px] tracking-editorial text-ink group-hover:text-accent transition-colors">
                      {p.name}
                    </span>
                  </div>
                  <div className="col-span-12 sm:col-span-4 md:col-span-3 text-[13px] text-muted">
                    {p.category}
                  </div>
                  <div className="col-span-12 md:col-span-4 text-[14px] text-ink-soft leading-snug">
                    {p.tagline}
                  </div>
                  <div className="hidden md:flex col-span-1 justify-end items-baseline text-[12.5px] text-muted group-hover:text-ink transition-colors">
                    <span aria-hidden>↗</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
