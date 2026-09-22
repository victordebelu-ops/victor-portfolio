import { Hero } from '@/components/hero';
import { SelectedWork } from '@/components/selected-work';
import { MoreWork } from '@/components/more-work';
import { Experience } from '@/components/experience';
import { About } from '@/components/about';
import { Expertise } from '@/components/expertise';
import { Credentials } from '@/components/credentials';
import { Contact } from '@/components/contact';
import { Reveal } from '@/components/reveal';
import { flagshipProjects, secondaryProjects } from '@/lib/projects';

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork projects={flagshipProjects} />
      <Reveal>
        <MoreWork projects={secondaryProjects} />
      </Reveal>
      <Reveal>
        <Experience />
      </Reveal>
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Expertise />
      </Reveal>
      <Reveal>
        <Credentials />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
    </>
  );
}
