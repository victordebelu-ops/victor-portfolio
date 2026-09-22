import Link from 'next/link';
import type { Project } from '@/lib/projects';
import { ProjectPlate } from './project-plate';
import { flagshipProjects } from '@/lib/projects';

export function CaseStudy({ project }: { project: Project }) {
  // next-up: the next flagship project
  const order = flagshipProjects.findIndex((p) => p.slug === project.slug);
  const next =
    flagshipProjects[(order + 1) % flagshipProjects.length];

  return (
    <article className="container-editorial pt-16 md:pt-24 pb-20 md:pb-28">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-2"
      >
        <Link href="/#work" className="hover:text-ink transition-colors">
          ← Selected Work
        </Link>
      </nav>

      {/* Header */}
      <header className="mt-10 grid grid-cols-12 gap-x-6 gap-y-8">
        <div className="col-span-12 lg:col-span-8">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-muted-2">
              {project.category}
            </span>
            <span className="text-hairline">·</span>
            <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-muted">
              {project.year}
            </span>
          </div>

          <h1 className="mt-5 font-serif font-light tracking-editorial leading-[1.0] text-[clamp(40px,7vw,88px)] text-ink">
            {project.name}
          </h1>

          <p className="mt-6 max-w-2xl text-[17px] leading-[1.7] text-muted">
            {project.tagline}
          </p>
        </div>

        <div className="col-span-12 lg:col-span-4 lg:pl-6">
          <dl className="border border-hairline bg-paper-elev">
            <Fact label="Category" value={project.category} />
            <Fact label="Year" value={project.year} />
            <Fact label="Stack" value={project.tech.slice(0, 4).join(' · ')} />
            {project.links.map((l) => (
              <Fact
                key={l.href}
                label={l.label}
                value={
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-ink hover:text-accent inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Visit</span>
                    <span aria-hidden>↗</span>
                  </a>
                }
              />
            ))}
          </dl>
        </div>
      </header>

      {/* Visual plate */}
      <div className="mt-14">
        <ProjectPlate project={project} size="lg" variant={order} />
      </div>

      {/* Key results strip */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-6 border-y border-hairline py-8">
        {project.results.slice(0, 4).map((r) => (
          <div key={r} className="border-l border-hairline pl-4">
            <div className="text-[14px] text-ink leading-snug">{r}</div>
          </div>
        ))}
      </div>

      {/* Case study body */}
      <div className="mt-20 space-y-2">
        <Section index="01" title="Overview">
          <p>{project.tagline}</p>
        </Section>

        <Section index="02" title="The Problem">
          <p>{project.problem}</p>
        </Section>

        <Section index="03" title="The Solution">
          <p>{project.solution}</p>
        </Section>

        <Section index="04" title="Architecture / Technical Approach">
          <p>{project.architecture}</p>
        </Section>

        <Section index="05" title="Implementation">
          <ul className="space-y-3">
            {project.results.slice(0, 3).map((r) => (
              <li key={r} className="flex gap-3">
                <span aria-hidden className="text-muted-2 mt-2 shrink-0">—</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section index="06" title="Results">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
            {project.results.map((r) => (
              <li
                key={r}
                className="flex gap-3 text-[14.5px] text-ink-soft border-l border-hairline pl-4 py-1"
              >
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section index="07" title="Technology">
          <ul className="flex flex-wrap gap-x-3 gap-y-2 text-[14px] text-ink-soft">
            {project.tech.map((t, i) => (
              <li key={t} className="flex items-baseline">
                <span>{t}</span>
                {i < project.tech.length - 1 ? (
                  <span aria-hidden className="text-muted-2 ml-3">·</span>
                ) : null}
              </li>
            ))}
          </ul>
        </Section>

        <Section index="08" title="Links">
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-[14px]">
            {project.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-ink border-b border-ink/20 hover:border-ink pb-1 transition-colors"
              >
                <span>{l.label}</span>
                <span aria-hidden>↗</span>
              </a>
            ))}
          </div>
        </Section>
      </div>

      {/* Next-up */}
      <div className="mt-24 pt-10 border-t border-hairline grid grid-cols-12 gap-x-6">
        <div className="col-span-12 md:col-span-3 font-mono text-[10.5px] tracking-[0.16em] uppercase text-muted-2">
          Next
        </div>
        <div className="col-span-12 md:col-span-9 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <Link
            href={`/work/${next.slug}`}
            className="group flex items-center gap-6"
          >
            <div>
              <div className="font-serif text-[clamp(24px,3vw,36px)] tracking-editorial text-ink group-hover:text-accent transition-colors">
                {next.name}
              </div>
              <div className="mt-1 text-[13px] text-muted">{next.tagline}</div>
            </div>
            <span
              aria-hidden
              className="text-2xl text-ink-soft transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 text-[14px] text-ink border-b border-ink/20 hover:border-ink pb-1 transition-colors"
          >
            <span
              aria-hidden
              className="transition-transform group-hover:-translate-x-0.5"
            >
              ←
            </span>
            All work
          </Link>
        </div>
      </div>
    </article>
  );
}

function Section({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="grid grid-cols-12 gap-x-6 gap-y-4 border-t border-hairline pt-12 pb-2">
      <div className="col-span-12 md:col-span-3">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-muted-2">
            {index}
          </span>
        </div>
        <h2 className="mt-3 font-serif font-light tracking-editorial text-[clamp(22px,2.4vw,30px)] text-ink">
          {title}
        </h2>
      </div>
      <div className="col-span-12 md:col-span-8 md:col-start-5 max-w-prose text-[15.5px] leading-[1.8] text-ink-soft">
        {children}
      </div>
    </section>
  );
}

function Fact({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-12 gap-2 px-5 py-4 border-b border-hairline last:border-b-0">
      <dt className="col-span-4 font-mono text-[10.5px] tracking-[0.16em] uppercase text-muted-2">
        {label}
      </dt>
      <dd className="col-span-8 text-[14px] text-ink">{value}</dd>
    </div>
  );
}
