'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { profile } from '@/lib/profile';

const items = [
  { href: '/#work', label: 'Work' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={[
        'fixed top-0 inset-x-0 z-50 transition-colors duration-300',
        scrolled
          ? 'bg-paper/85 backdrop-blur-md border-b border-hairline'
          : 'bg-paper/0 border-b border-transparent',
      ].join(' ')}
    >
      <div className="container-editorial">
        <div className="h-16 flex items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-2.5"
            aria-label="Victor Chukwudebelu — Home"
          >
            <span
              aria-hidden
              className="grid place-items-center w-7 h-7 bg-ink text-paper text-[11px] font-mono tracking-wider rounded-[3px]"
            >
              {profile.initials}
            </span>
            <span className="text-[14px] tracking-tightish text-ink">
              <span className="hidden sm:inline">Victor Chukwudebelu</span>
              <span className="sm:hidden">Victor C.</span>
            </span>
          </Link>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {items.map((it) => (
              <a
                key={it.href}
                href={it.href}
                className="text-[13.5px] text-ink/80 hover:text-ink transition-colors"
              >
                {it.label}
              </a>
            ))}
            <a
              href={`mailto:${profile.email}`}
              className="text-[13px] tracking-tightish inline-flex items-center gap-1.5 border border-ink/15 hover:border-ink/40 transition-colors px-3.5 py-1.5 rounded-full"
            >
              <span className="w-1.5 h-1.5 bg-accent rounded-full" aria-hidden />
              Available
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden -mr-2 p-2"
          >
            <span className="sr-only">Menu</span>
            <div className="w-5 h-4 relative">
              <span
                className={[
                  'absolute left-0 right-0 h-px bg-ink transition-all duration-300',
                  open ? 'top-[7px] rotate-45' : 'top-0',
                ].join(' ')}
              />
              <span
                className={[
                  'absolute left-0 right-0 h-px bg-ink transition-all duration-300',
                  open ? 'top-[7px] -rotate-45' : 'top-[10px]',
                ].join(' ')}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        className={[
          'md:hidden fixed inset-x-0 top-16 bottom-0 bg-paper transition-opacity duration-300',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        ].join(' ')}
      >
        <div className="container-editorial py-10">
          <nav className="flex flex-col divide-y divide-hairline">
            {items.map((it) => (
              <a
                key={it.href}
                href={it.href}
                className="py-5 text-2xl font-serif tracking-editorial text-ink"
              >
                {it.label}
              </a>
            ))}
          </nav>
          <div className="mt-10 pt-8 border-t border-hairline">
            <a
              href={`mailto:${profile.email}`}
              className="block text-[14px] text-ink"
            >
              {profile.email}
            </a>
            <div className="mt-2 text-[13px] text-muted">{profile.location}</div>
          </div>
        </div>
      </div>
    </header>
  );
}
