import Link from 'next/link';
import type { Project } from '@/lib/projects';
import { ProjectPlate } from './project-plate';

/**
 * Selected Work — flagship projects get large editorial layouts,
 * alternating side, with strong typography and clear hierarchy.
 */
export function SelectedWork({
  projects,
}: {
  projects: Project[];
}) {
  return (
    <section id="work" className="relative">
      <div className="container-editorial pt-20 md:pt-28 pb-12">
        <SectionHeader
          eyebrow="Selected Work · 2024 — 2026"
          title="Work that ships, performs, and endures scrutiny."
          lede="Eight flagship projects across the domains I work in most. Each is a real production system — built, deployed, and used — not a tutorial exercise."
        />
      </div>

      <div className="container-editorial">
        <div className="border-t border-hairline" />
      </div>

      <ol className="container-editorial">
        {projects.map((p, i) => (
          <li
            key={p.slug}
            className={i > 0 ? 'border-t border-hairline' : ''}
          >
            <FeaturedProjectRow project={p} index={i + 1} variant={i} />
          </li>
        ))}
      </ol>
    </section>
  );
}

function FeaturedProjectRow({
  project,
  index,
  variant,
}: {
  project: Project;
  index: number;
  variant: number;
}) {
  const reverse = index % 2 === 0; // alternate side for visual rhythm
  return (
    <article className="py-14 md:py-20">
      <div className="grid grid-cols-12 gap-x-6 gap-y-8 items-start">
        {/* Index + meta */}
        <div
          className={[
            'col-span-12 md:col-span-3',
            reverse ? 'md:order-2 md:col-start-8' : '',
          ].join(' ')}
        >
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-muted-2">
              {String(index).padStart(2, '0')}
            </span>
            <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-muted">
              · {project.category}
            </span>
          </div>

          <h2 className="mt-5 font-serif font-light tracking-editorial leading-[1.02] text-[clamp(32px,4.5vw,56px)]">
            {project.name}
          </h2>

          <p className="mt-4 text-[15px] leading-relaxed text-muted max-w-md">
            {project.tagline}
          </p>

          <Link
            href={`/work/${project.slug}`}
            className="mt-6 inline-flex items-center gap-2 text-[13.5px] text-ink border-b border-ink/20 hover:border-ink pb-1 transition-colors"
          >
            Read case study
            <span aria-hidden>↗</span>
          </Link>

          {project.links.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[12.5px]">
              {project.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted hover:text-ink transition-colors inline-flex items-center gap-1"
                >
                  <span>{l.label}</span>
                  <span aria-hidden className="text-muted-2">↗</span>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Visual */}
        <div
          className={[
            'col-span-12 md:col-span-9',
            reverse ? 'md:order-1' : '',
          ].join(' ')}
        >
          <Link href={`/work/${project.slug}`} className="block group">
            <div className="transition-transform duration-500 group-hover:-translate-y-0.5">
              <ProjectPlate project={project} size="lg" variant={variant} />
            </div>
          </Link>

          {/* Tech list — editorial, not pill-heavy */}
          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[12px] text-muted">
            <span className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-muted-2">
              Stack
            </span>
            <span className="text-hairline">·</span>
            {project.tech.slice(0, 6).map((t, i) => (
              <span key={t} className="text-ink-soft">
                {t}
                {i < Math.min(project.tech.length, 6) - 1 ? (
                  <span className="text-muted-2">,</span>
                ) : null}
              </span>
            ))}
          </div>

          {/* Results — restrained */}
          <ul className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-y-3 gap-x-6">
            {project.results.slice(0, 4).map((r) => (
              <li
                key={r}
                className="text-[12.5px] leading-snug text-ink-soft border-l border-hairline pl-3"
              >
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

/* -------- Section header helper -------- */
export function SectionHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <div className="grid grid-cols-12 gap-x-6">
      <div className="col-span-12 md:col-span-3">
        <div className="eyebrow">{eyebrow}</div>
      </div>
      <div className="col-span-12 md:col-span-9">
        <h2 className="font-serif font-light tracking-editorial leading-[1.04] text-[clamp(30px,4.2vw,52px)] max-w-[18ch]">
          {title}
        </h2>
        {lede ? (
          <p className="mt-5 max-w-prose text-[16px] leading-[1.7] text-muted">
            {lede}
          </p>
        ) : null}
      </div>
    </div>
  );
}
