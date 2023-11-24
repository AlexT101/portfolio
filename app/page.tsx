'use client';

import './index.css';

import { useState } from 'react';
import { UnstyledButton, Divider } from '@mantine/core';

import Github from '../public/github.png';
import Linkedin from '../public/linkedin.png';
import Contact from '../public/contact.png';

import ImmerseGT from '../public/immerse-gt.png';
import GreenJournal from '../public/green-journal.png';
import Roam from '../public/roam.png';

const projects = [
  {
    name: "immerse-gt",
    description: "Online event platform for the 2024 ImmerseGT Hackathon. Allows participants to register for the hackathon, search for other participants, form teams, and view an up-to-date schedule of the event.",
    src: ImmerseGT.src,
  },
  {
    name: "green-journal",
    description: "Interactive dashboard that lets you monitor your carbon footprint through tracked behavioral data and statistical analysis. Based on data from the Environmental Protection Agency.",
    src: GreenJournal.src,
  },
  {
    name: "roam",
    description: "Log your travel experiences through pins on an interactive globe. Add locations to your travel history with notes to remember your journey, or plan your future adventures with a wishlist feature.",
    src: Roam.src,
  }
]

const info = [
  {
    title: "about me",
    description: "Hi, I’m Alex. I’m majoring in computer science at the Georgia Institute of Technology. I enjoy building websites by combining the intricacies of front-end development with the artistry of UI/UX design."
  },
  {
    title: "skills",
    description: "I am proficient at using React, Next.js, Javascript, Typescript, HTML, and CSS to build websites. I design user interfaces using Adobe Illustrator and Figma. I code data structures and algorithms in Java and C++."
  }
]

export default function HomePage() {

  const [projView, setProjView] = useState(false);
  const [curInfo, setCurInfo] = useState(0);
  const [curProj, setCurProj] = useState(0);

  const toggleProjView = () => {
    setProjView(!projView);
  }
  const incInfo = () => {
    if (curInfo === info.length - 1) {
      setCurInfo(0);
    } else {
      setCurInfo(curInfo + 1);
    }
  }
  const incProj = () => {
    if (curProj === projects.length - 1) {
      setCurProj(0);
    } else {
      setCurProj(curProj + 1);
    }
  }

  return (
    <main className="container">
      <div className="column">
        <h2 className="offset">alex thummalapalli</h2>
        <Divider className="offset"/>
        <div className="row">
          <div className="column">
            {projView ? (
              <div className="box projectView">
                <h2>{projects[curProj].name}</h2>
                <p>{projects[curProj].description}</p>
              </div>
            ) : (
              <div className="row">
                <div className="box info">
                  <h2>{info[curInfo].title}</h2>
                  <p>{info[curInfo].description}</p>
                </div>
                <div className="column">
                  <a href="https://github.com/AlexT101"><UnstyledButton component="img" src={Github.src} className="box image" /></a>
                  <a href="https://www.linkedin.com/in/alext101/"><UnstyledButton component="img" src={Linkedin.src} className="box image" /></a>
                  <a href="https://www.linkedin.com/in/alext101/"><UnstyledButton component="img" src={Contact.src} className="box image" /></a>
                </div>
              </div>
            )
            }
            {projView ? (
              <UnstyledButton className="box skills" onClick={incProj}>
                <h2>next project</h2>
              </UnstyledButton>
            ) : (
              <UnstyledButton className="box skills" onClick={incInfo}>
                <h2>more info</h2>
              </UnstyledButton>
            )}
          </div >
          <div className="column">
            <UnstyledButton className="box run" onClick={toggleProjView}>
              {projView ? (
                <h2>&gt; npm stop</h2>
              ) : (
                <h2>&gt; npm run dev</h2>
              )}
            </UnstyledButton>
            <div className="box projects">

              {projView ? (
                <img className="projImg" src={projects[curProj].src} />
              ) : (
                <>
                  <h2>projects</h2>
                  <p>I build stuff in React. Try running my projects to see what I've been working on.</p>
                </>
              )}

            </div>
          </div>
        </div >
        <Divider className="offset"/>
      </div>
    </main >
  );
}
