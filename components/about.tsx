import { profile } from '@/lib/profile';
import { SectionHeader } from './selected-work';

export function About() {
  return (
    <section id="about" className="border-t border-hairline bg-paper-pure">
      <div className="container-editorial py-20 md:py-28">
        <SectionHeader
          eyebrow="About"
          title="A senior engineer who can hold the full picture — and ship the detail work."
          lede=""
        />

        <div className="mt-14 grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 md:col-span-7 md:col-start-4">
            <div className="space-y-6 text-[16.5px] leading-[1.8] text-ink-soft max-w-prose">
              <p>
                I&rsquo;m <strong className="font-medium text-ink">Victor Chukwudebelu</strong>,
                a Senior AI/ML Engineer and Computer Scientist with 10+ years
                of experience across the full ML lifecycle — from designing
                custom transformer architectures and RLHF alignment pipelines
                to shipping optimized LLMs on 10,000+ GPU clusters in Fortune
                500 environments.
              </p>
              <p>
                I&rsquo;ve held engineering roles at{' '}
                <strong className="font-medium text-ink">Gannett</strong>,{' '}
                <strong className="font-medium text-ink">Union Pacific</strong>,{' '}
                <strong className="font-medium text-ink">PEMCO Mutual Insurance</strong>,
                and <strong className="font-medium text-ink">Mercer</strong>,
                where I led cross-functional teams, architected distributed
                training infrastructure, and shipped production AI features
                used by millions of daily active users.
              </p>
              <p>
                My work spans the layers that have to be coordinated to make a
                serious system: the math, the model, the runtime, the
                deployment, the protocol, the security boundary, the cost
                model. I&rsquo;m most useful on problems where multiple of
                these are coupled and someone needs to own the whole stack.
              </p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-3 md:col-start-4 md:row-start-1">
            <ProfileCard />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProfileCard() {
  return (
    <aside className="border border-hairline p-6 bg-paper">
      <div className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-muted-2">
        Profile
      </div>

      <div className="mt-5 flex items-center gap-3">
        <span
          aria-hidden
          className="grid place-items-center w-10 h-10 bg-ink text-paper font-mono text-[13px] tracking-wider rounded-[3px]"
        >
          {profile.initials}
        </span>
        <div>
          <div className="text-[14.5px] tracking-tightish text-ink">
            {profile.name}
          </div>
          <div className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-muted-2">
            Senior Engineer · 10+ yrs
          </div>
        </div>
      </div>

      <div className="mt-6 pt-5 border-t border-hairline space-y-3 text-[13px]">
        <div className="flex justify-between gap-3">
          <span className="text-muted">Focus</span>
          <span className="text-ink text-right">AI / ML · Full-Stack · Security</span>
        </div>
        <div className="flex justify-between gap-3">
          <span className="text-muted">Mode</span>
          <span className="text-ink text-right">Remote-friendly</span>
        </div>
        <div className="flex justify-between gap-3">
          <span className="text-muted">Status</span>
          <span className="text-ink text-right inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-accent rounded-full" aria-hidden />
            Open to senior roles
          </span>
        </div>
      </div>
    </aside>
  );
}
