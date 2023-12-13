'use client';

import './index.css';

import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

//Project component for the project cards
import Project from '../components/Project';

//Wireframe images for the project cards
import Roam from '../public/roam-before.png';
import Immerse from '../public/immerse-before.png';
import GreenJournal from '../public/greenjournal-before.png';
import Robolobos from '../public/Whiteframe.png';
import Lifts from '../public/lifts-before.png';
import Valorant from '../public/valorant-before.png';

//Social icons for the links
import Linkedin from '../public/linkedin.png';
import Github from '../public/github.png';

//Tech icons
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

//Default size of the tech icons
const defaultWidth = 80;

//Array of tech icon information including name, image, and size
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

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="main">
      <div className="group">
        <div className="info">
          <h2 id="projects">About.</h2>
          <p className="subtext">Information about me and links to my accounts.</p>
        </div>
        <div className="container">
          <div className="box center about" data-aos="fade-up" data-aos-easing="ease-sine" data-aos-anchor-placement="center-bottom" data-aos-once="true">
            <p>Hi, I’m Alex Thummalapalli.</p>
            <p>I’m majoring in computer science at the Georgia Institute of Technology. I enjoy building websites by combining the intricacies of front-end development with the artistry of UI/UX design.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-easing="ease-sine" data-aos-anchor-placement="center-bottom" data-aos-once="true" data-aos-delay={100}>
          <a className="box github mini" href="https://github.com/AlexT101" target="_blank" rel="noopener noreferrer">
            <div className="boxHeader">
              <p>Github</p>
            </div>
            <img src={Github.src} className="logo" />
          </a>
          </div>
          
          <div data-aos="fade-up" data-aos-easing="ease-sine" data-aos-anchor-placement="center-bottom" data-aos-once="true" data-aos-delay={200}>
          <a className="box linkedin mini" href="https://www.linkedin.com/in/alext101/" target="_blank" rel="noopener noreferrer">
            <div className="boxHeader">
              <p>Linkedin</p>
            </div>
            <img src={Linkedin.src} className="logo" />
          </a>
          </div>

        </div>
      </div>


      <div className="group">
        <div className="info">
          <h2>Technology.</h2>
          <p className="subtext">Languages, frameworks, and libraries I use for software or web development.</p>
        </div>
        <div className="logoContainer">
          {tech.map((val, ind) => (
            <div key={ind} data-aos="fade-up" data-aos-easing="ease-sine" data-aos-anchor-placement="center-bottom" data-aos-once="true" data-aos-delay={ind*50}>
              <img width={defaultWidth * val.variance} src={val.src} />
              <p className="subtext2">{val.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="group">
        <div className="info">
          <h2 id="projects">Projects.</h2>
          <p className="subtext">Stuff I've been working on. Mostly in React.</p>
        </div>
        <div className="container">
          <Project type="roam" title="Roam" role="Full-Stack" img={Roam.src} href="/projects/roam" offset={0}/>
          <Project type="immerse" title="ImmerseGT" role="Front-End" img={Immerse.src} href="/projects/immersegt" offset={100} />
          <Project type="greenjournal" title="GreenJournal" role="Front-End" img={GreenJournal.src} href="/projects/greenjournal" offset={200} />
          <Project type="robolobos" title="Robolobos" role="Design" img={Robolobos.src} href="/projects/robolobos" offset={300} />
        </div>
      </div>
      <div className="group">
        <div className="info">
          <h2 id="projects">Concepts.</h2>
          <p className="subtext">UI/UX design concepts made in Adobe Illustrator.</p>
        </div>
        <div className="container">
          <Project type="lifts" title="Lifts" role="UI/UX Mockup" img={Lifts.src} href="/projects/lifts" offset={0}/>
          <Project type="valorant" title="Agent" role="UI/UX Mockup" img={Valorant.src} href="/projects/valorant" offset={100}/>
        </div>
      </div>
    </main >
  );
}
