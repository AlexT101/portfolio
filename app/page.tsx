'use client';

import './index.css';
import Roam from '../public/roam-before.png';
import Immerse from '../public/immerse-before.png';
import GreenJournal from '../public/greenjournal-before.png';
import Lifts from '../public/lifts-before.png';
import Valorant from '../public/valorant-before.png';

import Linkedin from '../public/linkedin.png';
import Github from '../public/github.png';

import Project from '../components/Project';

import React from '../public/Logo1.svg';
import HTML from '../public/Logo2.svg';
import CSS from '../public/Logo3.svg';
import JS from '../public/Logo4.svg';
import TS from '../public/Logo5.svg';
import Git from '../public/Logo6.svg';
import AI from '../public/Logo7.svg';
import Mantine from '../public/Logo8.svg';
import Python from '../public/Logo9.svg';
import MongoDB from '../public/Logo10.svg';
import Figma from '../public/Logo11.svg';
import Java from '../public/Logo12.svg';
import CPlusPlus from '../public/Logo13.svg';

const defaultWidth = 90;
const tech = [
  {
    name: "React",
    src: React.src,
    variance: 1
  },
  {
    name: "HTML",
    src: HTML.src,
    variance: 0.8
  },
  {
    name: "CSS",
    src: CSS.src,
    variance: 0.8
  },
  {
    name: "Javascript",
    src: JS.src,
    variance: 0.9
  },
  {
    name: "Typescript",
    src: TS.src,
    variance: 0.9
  },
  {
    name: "Github",
    src: Git.src,
    variance: 0.95
  },
  {
    name: "Illustrator",
    src: AI.src,
    variance: 0.95
  },
  {
    name: "Figma",
    src: Figma.src,
    variance: 0.65
  },
  {
    name: "Mantine",
    src: Mantine.src,
    variance: 0.95
  },
  {
    name: "Python",
    src: Python.src,
    variance: 0.95
  },
  {
    name: "MongoDB",
    src: MongoDB.src,
    variance: 0.95
  },
  {
    name: "Java",
    src: Java.src,
    variance: 0.8
  },
  {
    name: "C++",
    src: CPlusPlus.src,
    variance: 0.88
  },
];

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
      <h2 className="noMargin">Technology.</h2>
      <p className="subtext">Languages/Frameworks/Libraries I have used for software or web development.</p>
      <div className="logoContainer">
        {tech.map((val, ind) => (
          <div key={ind}>
            <img width={defaultWidth * val.variance} src={val.src} />
            <p className="subtext2">{val.name}</p>
          </div>
        ))}
      </div>
      <h2 id="projects">Projects.</h2>
      <div className="container">
        <Project type="roam" title="Roam" role="Full-Stack" img={Roam.src} href="/projects/roam" />
        <Project type="immerse" title="ImmerseGT" role="Front-End" img={Immerse.src} href="/projects/immersegt" />
        <Project type="greenjournal" title="GreenJournal" role="Front-End" img={GreenJournal.src} href="/projects/greenjournal" />
        <Project type="robolobos" title="Robolobos" role="Graphic Design" img={GreenJournal.src} href="/projects/robolobos" />
      </div>
      <h2 id="concepts">Concepts.</h2>
      <div className="container">
        <Project type="lifts" title="Lifts" role="UI/UX Mockup" img={Lifts.src} href="/projects/lifts" />
        <Project type="valorant" title="Agent" role="UI/UX Mockup" img={Valorant.src} href="/projects/valorant" />
      </div>
    </main >
  );
}
