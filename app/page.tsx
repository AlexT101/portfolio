'use client';

import './index.css';
import Roam from '../public/roam-before.png';
import Immerse from '../public/immerse-before.png';
import GreenJournal from '../public/greenjournal-before.png';
import Lifts from '../public/lifts-before.png';

import Linkedin from '../public/linkedin.png';
import Github from '../public/github.png';

import Project from '../components/Project';

export default function HomePage() {
  return (
    <main className="main">
      <h2>About.</h2>
      <div className="container">
        <a className="box github" href="https://github.com/AlexT101" target="_blank" rel="noopener noreferrer">
          <div className="boxHeader">
            <p>Github</p>
            <p>@alext101</p>
          </div>
          <img src={Github.src} className="logo" />
        </a>
        <div className="box center about">
          <p>Hi, I’m Alex Thummalapalli.</p>
          <p>I’m majoring in computer science at the Georgia Institute of Technology. I enjoy building websites by combining the intricacies of front-end development with the artistry of UI/UX design.
          </p>
        </div>
        <a className="box linkedin" href="https://www.linkedin.com/in/alext101/" target="_blank" rel="noopener noreferrer">
          <div className="boxHeader">
            <p>Linkedin</p>
            <p>@alext101</p>
          </div>
          <img src={Linkedin.src} className="logo" />
        </a>
      </div>
      <h2>Projects.</h2>
      <div className="container">
        <Project type="roam" title="Roam" role="Full-Stack" img={Roam.src} href="/projects/roam" />
        <Project type="immerse" title="ImmerseGT" role="Front-End" img={Immerse.src} href="/projects/immersegt" />
        <Project type="greenjournal" title="GreenJournal" role="Front-End" img={GreenJournal.src} href="/projects/greenjournal" />
      </div>
      <h2>Doodles.</h2>
      <div className="container">
        <Project type="lifts" title="Lifts" role="UI/UX Mockup" img={Lifts.src} href="/projects/lifts" />
      </div>
    </main >
  );
}
