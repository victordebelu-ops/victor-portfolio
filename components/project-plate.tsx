import type { Project } from '@/lib/projects';

/**
 * Project Plate — editorial visual identity per project.
 *
 * Restrained, project-specific composition. Built from typography,
 * lines, and a single monogram — no stock imagery, no glow.
 *
 * Three variants that vary by index to give the Selected Work
 * section magazine-style rhythm:
 *   - even: name bottom-left, monogram top-right
 *   - mod 3 = 1: name stacked top-left
 *   - mod 3 = 2: monogram as the visual anchor
 */
export function ProjectPlate({
  project,
  size = 'lg',
  variant = 0,
}: {
  project: Project;
  size?: 'sm' | 'lg';
  variant?: number;
}) {
  const accent = project.visual.tone === 'accent';
  const dim = size === 'lg' ? 'aspect-[16/9]' : 'aspect-[5/3]';
  const v = variant % 3;

  return (
    <div
      className={['relative overflow-hidden border border-hairline bg-paper-elev', dim].join(' ')}
      aria-hidden
    >
      <CornerTicks />
      <div className="absolute inset-0 dot-canvas opacity-40" />

      {v === 0 && <VariantA project={project} accent={accent} />}
      {v === 1 && <VariantB project={project} accent={accent} />}
      {v === 2 && <VariantC project={project} accent={accent} />}
    </div>
  );
}

function CornerTicks() {
  return (
    <>
      <span className="absolute top-2 left-2 w-3 h-3 border-l border-t border-ink/40" />
      <span className="absolute top-2 right-2 w-3 h-3 border-r border-t border-ink/40" />
      <span className="absolute bottom-2 left-2 w-3 h-3 border-l border-b border-ink/40" />
      <span className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-ink/40" />
    </>
  );
}

function Monogram({
  project,
  accent,
  size = 'md',
}: {
  project: Project;
  accent: boolean;
  size?: 'sm' | 'md' | 'lg';
}) {
  const dims =
    size === 'lg'
      ? 'w-32 h-32 sm:w-44 sm:h-44 text-[44px] sm:text-[64px]'
      : size === 'sm'
      ? 'w-7 h-7 text-[10px]'
      : 'w-9 h-9 text-[12px]';
  return (
    <div
      className={[
        'grid place-items-center font-mono tracking-wider rounded-[3px]',
        dims,
        accent ? 'bg-accent text-paper' : 'bg-ink text-paper',
      ].join(' ')}
    >
      {project.visual.glyph}
    </div>
  );
}

function MetaLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-muted">
      {children}
    </div>
  );
}

/* ----- Variants (3) ----- */

/**
 * Variant A — Editorial bottom-anchored title.
 * Project name occupies the lower half; monogram top-right.
 */
function VariantA({ project, accent }: { project: Project; accent: boolean }) {
  return (
    <>
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.18]"
        viewBox="0 0 100 56"
        preserveAspectRatio="none"
        aria-hidden
      >
        <line x1="0" y1="56" x2="100" y2="0" stroke="#111" strokeWidth="0.15" />
        <line x1="0" y1="42" x2="80" y2="0" stroke="#111" strokeWidth="0.15" />
      </svg>

      <div className="absolute top-5 left-6">
        <MetaLabel>{project.category}</MetaLabel>
      </div>
      <div className="absolute top-5 right-6">
        <Monogram project={project} accent={accent} />
      </div>

      <div className="absolute inset-0 flex items-end px-6 sm:px-8 pb-12 pt-16">
        <div className="font-serif font-light tracking-editorial leading-[0.96] text-[clamp(40px,7vw,80px)] max-w-[78%]">
          {project.name}
        </div>
      </div>
    </>
  );
}

/**
 * Variant B — Stacked title, schematic grid above.
 * Title occupies the bottom band; the top half has a faint
 * grid suggesting system topology.
 */
function VariantB({ project, accent }: { project: Project; accent: boolean }) {
  return (
    <>
      <svg
        className="absolute inset-x-0 top-0 w-full h-[44%] opacity-90"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
        aria-hidden
      >
        <g stroke="#111" strokeWidth="0.4" fill="none" opacity="0.45">
          <line x1="10" y1="10" x2="190" y2="10" />
          <line x1="10" y1="30" x2="190" y2="30" />
          <line x1="10" y1="50" x2="190" y2="50" />
          <line x1="40" y1="5" x2="40" y2="55" />
          <line x1="80" y1="5" x2="80" y2="55" />
          <line x1="120" y1="5" x2="120" y2="55" />
          <line x1="160" y1="5" x2="160" y2="55" />
        </g>
        <g fill={accent ? '#2f5d50' : '#111'} opacity="0.65">
          <circle cx="40" cy="10" r="1.6" />
          <circle cx="80" cy="30" r="1.6" />
          <circle cx="120" cy="50" r="1.6" />
          <circle cx="160" cy="10" r="1.6" />
          <circle cx="40" cy="50" r="1.6" />
          <circle cx="80" cy="50" r="1.6" />
        </g>
        <g stroke={accent ? '#2f5d50' : '#111'} strokeWidth="0.35" fill="none" opacity="0.45">
          <line x1="40" y1="10" x2="80" y2="30" />
          <line x1="80" y1="30" x2="120" y2="50" />
          <line x1="120" y1="50" x2="160" y2="10" />
          <line x1="40" y1="50" x2="80" y2="50" />
        </g>
      </svg>

      <div className="absolute top-4 left-6">
        <MetaLabel>{project.category}</MetaLabel>
      </div>
      <div className="absolute top-4 right-6">
        <MetaLabel>{project.year}</MetaLabel>
      </div>

      <div className="absolute bottom-0 inset-x-0 px-6 sm:px-8 pb-6 pt-4 border-t border-hairline bg-paper/85 backdrop-blur-sm">
        <div className="flex items-end justify-between gap-4">
          <div className="font-serif font-light tracking-editorial leading-[0.96] text-[clamp(34px,5.5vw,68px)]">
            {project.name}
          </div>
          <Monogram project={project} accent={accent} />
        </div>
      </div>
    </>
  );
}

/**
 * Variant C — Specification card. Index/slug, monogram,
 * and structured metadata.
 */
function VariantC({ project, accent }: { project: Project; accent: boolean }) {
  return (
    <>
      <div className="absolute top-5 left-6 right-6 flex items-start justify-between gap-4">
        <div>
          <MetaLabel>Specification</MetaLabel>
          <div className="mt-1 font-mono text-[10px] tracking-[0.14em] uppercase text-muted-2">
            /{project.slug}
          </div>
        </div>
        <Monogram project={project} accent={accent} />
      </div>

      <div className="absolute inset-x-6 top-24 bottom-12 grid grid-cols-12 gap-3 content-start">
        <div className="col-span-12">
          <div className="font-serif font-light tracking-editorial leading-[0.98] text-[clamp(34px,5.5vw,72px)]">
            {project.name}
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 mt-2">
          <MetaLabel>Domain</MetaLabel>
          <div className="mt-1 text-[13px] text-ink-soft">
            {project.category.split(' · ')[0]}
          </div>
        </div>
        <div className="col-span-6 sm:col-span-3 mt-2">
          <MetaLabel>Year</MetaLabel>
          <div className="mt-1 text-[13px] text-ink-soft">{project.year}</div>
        </div>
        <div className="col-span-6 sm:col-span-3 mt-2">
          <MetaLabel>Tier</MetaLabel>
          <div className="mt-1 text-[13px] text-ink-soft">Flagship</div>
        </div>
      </div>
    </>
  );
}
