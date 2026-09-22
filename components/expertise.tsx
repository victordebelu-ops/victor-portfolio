import { skills } from '@/lib/profile';
import { SectionHeader } from './selected-work';

export function Expertise() {
  return (
    <section id="expertise" className="border-t border-hairline">
      <div className="container-editorial py-20 md:py-28">
        <SectionHeader
          eyebrow="Technical Expertise"
          title="Skills, organized by what they actually do."
          lede="A category view of the stack I work in. I'm a generalist by necessity — the production systems I've shipped sit across all of these layers at once."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
          {skills.map((g, i) => (
            <div key={g.title} className="grid grid-cols-12 gap-x-6">
              <div className="col-span-12 sm:col-span-3">
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-muted-2">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-serif text-[18px] tracking-editorial text-ink">
                    {g.title}
                  </h3>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-9 mt-3 sm:mt-0">
                <ul className="flex flex-wrap gap-x-3 gap-y-2 text-[14px] text-ink-soft">
                  {g.items.map((it, j) => (
                    <li key={it} className="flex items-baseline">
                      <span>{it}</span>
                      {j < g.items.length - 1 ? (
                        <span aria-hidden className="text-muted-2 ml-3">·</span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
