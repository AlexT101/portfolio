'use client';

import './index.css';

import { useState } from 'react';
import { UnstyledButton, Divider, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

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
    href: "https://github.com/AlexT101/ImmerseGT-Event-Platform"
  },
  {
    name: "green-journal",
    description: "Interactive dashboard that lets you monitor your carbon footprint through tracked behavioral data and statistical analysis. Based on data from the Environmental Protection Agency.",
    src: GreenJournal.src,
    href: "https://github.com/barrosodavid/greenjournal"
  },
  {
    name: "roam",
    description: "Log your travel experiences through pins on an interactive globe. Add locations to your travel history with notes to remember your journey, or plan your future adventures with a wishlist feature.",
    src: Roam.src,
    href: "https://github.com/michelle692/roam"
  }
]

const info = [
  {
    title: "about me",
    description: "Hi, I’m Alex. I’m majoring in computer science at the Georgia Institute of Technology. I enjoy building websites by combining the intricacies of front-end development with the artistry of UI/UX design."
  },
  {
    title: "skills",
    description: "front-end development\nui/ux design\ndata structures and algorithms\nobject-oriented programming"
  },
  {
    title: "tools",
    description: "I am proficient at using React, Next.js, Javascript, Typescript, HTML, and CSS to build websites. I design user interfaces using Adobe Illustrator and Figma. I code data structures and algorithms in Java and C++."
  }
]

export default function HomePage() {

  const [projView, setProjView] = useState(false);
  const [curInfo, setCurInfo] = useState(0);
  const [curProj, setCurProj] = useState(0);
  const [opened, { open, close }] = useDisclosure(false);

  const toggleProjView = () => {
    setProjView(!projView);
    var element = document.getElementById("proj1");
    if (element !== null) {
      element.classList.remove("box");
      element.offsetWidth;
      element.classList.add("box");
      if (!projView) {
        element.classList.add("img");
      } else {
        element.classList.remove("img");
      }
    }
  }
  const incInfo = () => {
    var element = document.getElementById("info");
    if (element !== null) {
      element.classList.remove("box");
      element.offsetWidth;
      element.classList.add("box");
    }
    if (curInfo === info.length - 1) {
      setCurInfo(0);
    } else {
      setCurInfo(curInfo + 1);
    }
  }
  const incProj = () => {
    var element = document.getElementById("proj1");
    if (element !== null) {
      element.classList.remove("box");
      element.offsetWidth;
      element.classList.add("box");
    }
    var element2 = document.getElementById("proj2");
    if (element2 !== null) {
      element2.classList.remove("box");
      element2.offsetWidth;
      element2.classList.add("box");
    }
    if (curProj === projects.length - 1) {
      setCurProj(0);
    } else {
      setCurProj(curProj + 1);
    }
  }

  const nextVal = (arr: Array<Object>, cur: number) => {
    if (cur + 1 === arr.length) {
      return 0;
    } else {
      return cur + 1;
    }
  }

  return (
    <main className="container">
      <div className="column">
        <h2 className="offset">alex thummalapalli</h2>
        <Divider className="offset" />
        <div className="row">
          <div className="column">
            {projView ? (
              <UnstyledButton id="proj2" className="box projectView" component="a" href={projects[curProj].href} target="_blank" rel="noopener noreferrer">
                <h2>{projects[curProj].name} <span className="visit1">: github</span></h2>
                <p>{projects[curProj].description}</p>
              </UnstyledButton>
            ) : (
              <div className="row">
                <div id="info" className="box info">
                  <h2>{info[curInfo].title}</h2>
                  <p>{info[curInfo].description}</p>
                </div>
                <div className="column">
                  <a href="https://github.com/AlexT101" target="_blank" rel="noopener noreferrer">
                    <UnstyledButton component="img" src={Github.src} className="box image" />
                  </a>
                  <a href="https://www.linkedin.com/in/alext101/" target="_blank" rel="noopener noreferrer">
                    <UnstyledButton component="img" src={Linkedin.src} className="box image" />
                  </a>
                  <a href="https://www.linkedin.com/in/alext101/" target="_blank" rel="noopener noreferrer">
                    <UnstyledButton component="img" src={Contact.src} className="box image" />
                  </a>
                </div>
              </div>
            )
            }
            {projView ? (
              <UnstyledButton className="box skills" onClick={incProj}>
                <h2>next project <span className="visit2">: {projects[nextVal(projects, curProj)].name}</span></h2>
              </UnstyledButton>
            ) : (
              <UnstyledButton className="box skills" onClick={incInfo}>
                <h2>more info <span className="visit2">: {info[nextVal(info, curInfo)].title}</span></h2>
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
            <div id="proj1" className="box projects">

              {projView ? (
                <UnstyledButton component="img" className="projImg" src={projects[curProj].src} onClick={open} />
              ) : (
                <>
                  <h2>projects</h2>
                  <p>I build stuff in React. Try running my projects to see what I've been working on.</p>
                </>
              )}

            </div>
          </div>
        </div >
        <Divider className="offset" />
      </div>
      <Modal opened={opened} onClose={close} title="Website Image" centered size="auto">
        <img src={projects[curProj].src} className="bigImg" />
      </Modal>
    </main >
  );
}
