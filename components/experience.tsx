import type { Experience as Exp } from '@/lib/profile';
import { experience, metrics } from '@/lib/profile';
import { SectionHeader } from './selected-work';

export function Experience() {
  return (
    <section id="experience" className="border-t border-hairline">
      <div className="container-editorial py-20 md:py-28">
        <SectionHeader
          eyebrow="Experience · 2016 — 2026"
          title="A decade of production engineering at scale."
          lede="From Fortune 500 platforms to independent protocol work — the throughline is shipping systems that have to perform in production, with measured outcomes."
        />

        {/* Achievement strip — editorial "by the numbers" */}
        <div className="mt-14 border-t border-hairline">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {metrics.map((m, i) => (
              <div
                key={m.label}
                className={[
                  'py-8 md:py-10 pr-6',
                  i > 0 ? 'md:border-l md:border-hairline md:pl-8' : '',
                  i === 1 || i === 3 ? 'border-l border-hairline pl-6 md:pl-8' : '',
                  i === 0 ? 'pl-0' : '',
                ].join(' ')}
              >
                <div className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-muted-2">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="mt-3 font-serif font-light tracking-editorial text-[clamp(34px,4vw,52px)] leading-none text-ink">
                  {m.value}
                </div>
                <div className="mt-3 text-[13px] text-muted leading-snug max-w-[24ch]">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-12 border-t border-hairline">
          <ol>
            {experience.map((e, i) => (
              <ExperienceRow
                key={e.org}
                exp={e}
                index={i}
                last={i === experience.length - 1}
              />
            ))}
          </ol>
        </div>

        <div className="mt-12 border-t border-hairline pt-10">
          <p className="max-w-prose text-[16px] leading-[1.7] text-muted">
            Outside of staff roles, I&rsquo;ve independently designed, built,
            and deployed 30+ production-grade projects spanning full-stack web
            platforms, DeFi / Web3 protocols, supply-chain security
            infrastructure, and advanced cybersecurity engines.
          </p>
        </div>
      </div>
    </section>
  );
}

function ExperienceRow({
  exp,
  index,
  last,
}: {
  exp: Exp;
  index: number;
  last: boolean;
}) {
  return (
    <li className={last ? '' : 'border-b border-hairline'}>
      <div className="grid grid-cols-12 gap-x-6 gap-y-4 py-10 md:py-12">
        <div className="col-span-12 md:col-span-3">
          <div className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-muted-2">
            {String(index + 1).padStart(2, '0')}
          </div>
          <div className="mt-3 font-mono text-[12px] tracking-[0.1em] uppercase text-muted">
            {exp.period}
          </div>
        </div>

        <div className="col-span-12 md:col-span-9">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h3 className="font-serif text-[clamp(22px,2.4vw,30px)] tracking-editorial text-ink">
              {exp.role}
            </h3>
            <span className="text-[14px] text-muted">— {exp.org}</span>
          </div>

          <ul className="mt-5 space-y-2 text-[15px] leading-[1.7] text-ink-soft max-w-prose">
            {exp.points.map((p) => (
              <li key={p} className="flex gap-3">
                <span aria-hidden className="text-muted-2 mt-2 shrink-0">
                  —
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ul>

          {exp.highlight && (
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4">
              {exp.highlight.map((h) => (
                <div key={h.label} className="flex items-baseline gap-3">
                  <span className="font-serif text-[22px] text-ink leading-none">
                    {h.value}
                  </span>
                  <span className="text-[12px] text-muted">{h.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </li>
  );
}
