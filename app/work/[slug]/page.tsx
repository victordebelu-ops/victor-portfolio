import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { CaseStudy } from '@/components/case-study';
import { getProject, projects } from '@/lib/projects';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const p = getProject(params.slug);
  if (!p) return { title: 'Project' };
  return {
    title: `${p.name} — Case Study`,
    description: p.tagline,
    openGraph: {
      title: `${p.name} — Case Study`,
      description: p.tagline,
      type: 'article',
    },
  };
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProject(params.slug);
  if (!project) notFound();
  return <CaseStudy project={project} />;
}
