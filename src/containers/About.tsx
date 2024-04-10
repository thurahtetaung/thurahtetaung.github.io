'use client';
import { aboutSection } from '@/lib/content/about';
import { author } from '@/lib/content/portfolio';
import { getId } from '@/lib/utils/helper';

import { AuthorImage, Link, ListItem, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

import { useEffect, useState } from 'react';

const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <p>
            Hi, my name is Thura Htet Aung, a Site Reliability Engineer, Cloud
            Solution Architect as well as DevOps Engineer, and Backend Developer
            who wants to explore new technologies and solve real-world problems.
          </p>
          <p>
            Fast-forward to today, and I’ve had the privilege of working at a
            software house -{' '}
            <Link
              href="https://www.onenex.co/"
              target="_blank"
              className="text-accent"
            >
              Onenex
            </Link>
            .
          </p>
          <p>
            In addition to my professional roles, I actively contribute through
            articles on DevOps and AWS-related topics at{' '}
            <Link
              href="https://www.kalaung.org/"
              target="_blank"
              className="text-accent"
            >
              Kalaung Tech
            </Link>
            . This initiative not only highlights my expertise but also
            contributes to creating a culture of continuous learning within the
            tech community.
          </p>
          <p>
            My main focus these days is learning new technologies and
            architecting to grow my career.
          </p>

          {list && (
            <>
              <p>{list.title}</p>
              <ul className="grid w-3/3 grid-cols-3 gap-1 text-sm">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
          )}
        </div>
        <AuthorImage src={img} alt={author.name} />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
