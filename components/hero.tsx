import { profile } from '@/lib/profile';

/**
 * Hero — editorial composition with a restrained visual.
 * The visual on the right is a typographic / line-based
 * schematic, not a stock illustration or AI cliché.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-editorial pt-20 md:pt-28 pb-16 md:pb-24">
        <div className="grid grid-cols-12 gap-x-6 gap-y-12 items-end">
          {/* Left column — intro */}
          <div className="col-span-12 lg:col-span-8">
            <div className="eyebrow">
              AI / ML Engineer · Software Engineer · Computer Scientist
            </div>

            <h1 className="mt-6 font-serif font-light tracking-editorial leading-[1.02] text-ink text-[clamp(40px,7.4vw,96px)]">
              Building intelligent systems,{' '}
              <span className="italic text-accent">production software</span>,{' '}
              and technical infrastructure.
            </h1>

            <p className="mt-8 max-w-2xl text-[16.5px] leading-[1.7] text-muted">
              {profile.elevator} From custom transformer architectures and
              RLHF alignment pipelines to DeFi protocols and zero-trust supply
              chain infrastructure — I design and ship systems that have to
              perform in production.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 bg-ink text-paper px-5 py-3 rounded-full text-[14px] hover:bg-ink-soft transition-colors"
              >
                View Selected Work
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-[14px] border border-ink/15 hover:border-ink/40 transition-colors"
              >
                Let&rsquo;s Work Together
              </a>
            </div>

            <div className="mt-6 font-mono text-[11.5px] tracking-[0.14em] uppercase text-muted-2">
              Senior AI / ML Engineer · Full-Stack · Cybersecurity · Web3
            </div>
          </div>

          {/* Right column — visual */}
          <div className="col-span-12 lg:col-span-4 lg:pl-6">
            <Schematic />
          </div>
        </div>

        {/* Scroll cue */}
        <div className="mt-12 flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.16em] text-muted-2">
          <span className="block w-8 h-px bg-ink/30" aria-hidden />
          <span>Scroll · Selected Work</span>
        </div>
      </div>
    </section>
  );
}

/**
 * Restrained typographic schematic — looks like a plate from
 * a technical journal. Lines + labels only.
 */
function Schematic() {
  return (
    <div className="relative">
      <div className="aspect-[4/5] border border-hairline bg-paper-elev overflow-hidden">
        <div className="absolute inset-0 dot-canvas opacity-40" />

        <svg
          viewBox="0 0 400 500"
          className="absolute inset-0 w-full h-full"
          aria-hidden
        >
          {/* Frame */}
          <rect
            x="24"
            y="24"
            width="352"
            height="452"
            fill="none"
            stroke="#111"
            strokeWidth="0.6"
            opacity="0.18"
          />

          {/* Header */}
          <g fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#111">
            <text x="40" y="56" letterSpacing="1.4">
              REFERENCE STACK
            </text>
            <text x="40" y="72" fill="#6b6b66">
              ─────────────────
            </text>
          </g>

          {/* Section labels */}
          <g
            fontFamily="JetBrains Mono, monospace"
            fontSize="8"
            fill="#6b6b66"
            letterSpacing="1.2"
          >
            <text x="40" y="110">01 · APPLY</text>
            <text x="40" y="220">02 · TRAIN</text>
            <text x="40" y="330">03 · SHIP</text>
            <text x="40" y="440">04 · MEASURE</text>
          </g>

          {/* Nodes */}
          <g fontFamily="Inter, sans-serif">
            {/* APPLY */}
            <rect x="60" y="125" width="280" height="38" fill="#fff" stroke="#111" strokeWidth="0.6" />
            <text x="76" y="143" fontSize="12" fill="#111" fontWeight="500">
              LLM · RLHF · Inference
            </text>
            <text x="76" y="156" fontSize="9" fontFamily="JetBrains Mono, monospace" fill="#6b6b66" letterSpacing="0.6">
              TRANSFORMERS · PYTORCH · HF
            </text>

            <rect x="60" y="170" width="280" height="38" fill="#fff" stroke="#111" strokeWidth="0.6" />
            <text x="76" y="188" fontSize="12" fill="#111" fontWeight="500">
              Full-Stack Applications
            </text>
            <text x="76" y="201" fontSize="9" fontFamily="JetBrains Mono, monospace" fill="#6b6b66" letterSpacing="0.6">
              NEXT.JS · REACT · GO · FASTAPI
            </text>

            {/* TRAIN */}
            <rect x="60" y="235" width="280" height="38" fill="#fff" stroke="#111" strokeWidth="0.6" />
            <text x="76" y="253" fontSize="12" fill="#111" fontWeight="500">
              Distributed Training
            </text>
            <text x="76" y="266" fontSize="9" fontFamily="JetBrains Mono, monospace" fill="#6b6b66" letterSpacing="0.6">
              10K+ GPU · KUBERNETES · HELM
            </text>

            <rect x="60" y="280" width="280" height="38" fill="#fff" stroke="#111" strokeWidth="0.6" />
            <text x="76" y="298" fontSize="12" fill="#111" fontWeight="500">
              Protocol Engineering
            </text>
            <text x="76" y="311" fontSize="9" fontFamily="JetBrains Mono, monospace" fill="#6b6b66" letterSpacing="0.6">
              SOLIDITY · RUST · ANCHOR · FOUNDRY
            </text>

            {/* SHIP */}
            <rect x="60" y="345" width="280" height="38" fill="#fff" stroke="#111" strokeWidth="0.6" />
            <text x="76" y="363" fontSize="12" fill="#111" fontWeight="500">
              Security &amp; Supply Chain
            </text>
            <text x="76" y="376" fontSize="9" fontFamily="JetBrains Mono, monospace" fill="#6b6b66" letterSpacing="0.6">
              SIGSTORE · FALCO · OPA · OWASP
            </text>

            <rect x="60" y="390" width="280" height="38" fill="#fff" stroke="#111" strokeWidth="0.6" />
            <text x="76" y="408" fontSize="12" fill="#111" fontWeight="500">
              Cloud &amp; MLOps
            </text>
            <text x="76" y="421" fontSize="9" fontFamily="JetBrains Mono, monospace" fill="#6b6b66" letterSpacing="0.6">
              AWS · GCP · TERRAFORM · PROMETHEUS
            </text>
          </g>

          {/* Connecting lines */}
          <g stroke="#111" strokeWidth="0.5" fill="none" opacity="0.35">
            <line x1="76" y1="163" x2="76" y2="170" />
            <line x1="76" y1="208" x2="76" y2="235" />
            <line x1="76" y1="273" x2="76" y2="280" />
            <line x1="76" y1="318" x2="76" y2="345" />
            <line x1="76" y1="383" x2="76" y2="390" />
          </g>

          {/* Status row */}
          <g fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#6b6b66" letterSpacing="1.2">
            <line x1="40" y1="450" x2="360" y2="450" stroke="#111" strokeOpacity="0.18" strokeWidth="0.5" />
            <text x="40" y="465">SCALE · 10K+ GPU</text>
            <text x="170" y="465">UPTIME · 99.9%</text>
            <text x="300" y="465">LATENCY · −35%</text>
          </g>
        </svg>

        {/* corner ticks */}
        <Tick className="top-3 left-3" />
        <Tick className="top-3 right-3" />
        <Tick className="bottom-3 left-3" />
        <Tick className="bottom-3 right-3" />
      </div>

      <div className="mt-3 font-mono text-[10.5px] tracking-[0.16em] uppercase text-muted-2">
        Plate 01 · Reference Stack
      </div>
    </div>
  );
}

function Tick({ className }: { className: string }) {
  return (
    <span
      aria-hidden
      className={`absolute w-2.5 h-2.5 border-ink/30 ${className} ${
        className.includes('top-3 left-3')
          ? 'border-l border-t'
          : className.includes('top-3 right-3')
          ? 'border-r border-t'
          : className.includes('bottom-3 left-3')
          ? 'border-l border-b'
          : 'border-r border-b'
      }`}
    />
  );
}
