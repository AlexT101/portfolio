'use client';

import './index.css';

//Import dependencies
import { useState } from 'react';
import { UnstyledButton, Divider, Modal } from '@mantine/core'; //Mantine components
import { useDisclosure } from '@mantine/hooks'; //Hook for modal

//Import button images
import Github from '../public/github.png';
import Linkedin from '../public/linkedin.png';
import Contact from '../public/contact.png';

//Import project images
import ImmerseGT from '../public/immerse-gt.png';
import GreenJournal from '../public/green-journal.png';
import Roam from '../public/roam.png';
import Portfolio from '../public/portfolio.png';

//Import components
import ImgButton from '../components/ImgButton';


//JSON for storing project data
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
  },
  {
    name: "portfolio",
    description: "The portfolio you are viewing now!",
    src: Portfolio.src,
    href: "https://github.com/AlexT101/portfolio"
  }
]

//JSON for storing info panel data
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

  //State info about current view
  const [projView, setProjView] = useState(false); //True = show projects
  const [curInfo, setCurInfo] = useState(0); //Index of current info panel
  const [curProj, setCurProj] = useState(0); //Index of current project
  const [opened, { open, close }] = useDisclosure(false); //True = open modal

  //Updates animation by removing and re-adding CSS property
  const forceAnimation = (element: HTMLElement) => {
    element.classList.remove("box");
    element.offsetWidth;
    element.classList.add("box");
  }

  //Returns next panel
  const nextVal = (arr: Array<Object>, cur: number) => {
    if (cur + 1 === arr.length) {
      return 0;
    } else {
      return cur + 1;
    }
  }

  //Functions to update states
  const toggleProjView = () => {
    setProjView(!projView); //Toggles project view
    var element = document.getElementById("proj1"); //Gets project panel

    //Updates animation
    if (element !== null) {
      forceAnimation(element);

      //Adds CSS for image
      if (!projView) {
        element.classList.add("img");
      } else {
        element.classList.remove("img");
      }
    }
  }
  const incInfo = () => {
    var element = document.getElementById("info"); //Gets info panel

    //Updates animation
    if (element !== null) {
      forceAnimation(element);
    }

    //Iterates to the next info panel
    setCurInfo(nextVal(info, curInfo));
  }
  const incProj = () => {
    var element = document.getElementById("proj1"); //Gets project panel
    var element2 = document.getElementById("proj2"); //Gets second project panel

    //Updates animation
    if (element !== null && element2 !== null) {
      forceAnimation(element);
      forceAnimation(element2);
    }

    //Iterates to the next project panel
    setCurProj(nextVal(projects, curProj));
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
                <h2>{projects[curProj].name} <span className="visit1 light">: github</span></h2>
                <p>{projects[curProj].description}</p>
              </UnstyledButton>
            ) : (
              <div className="row">
                <div id="info" className="box info">
                  <h2>{info[curInfo].title}</h2>
                  <p>{info[curInfo].description}</p>
                </div>
                <div className="column">
                  <ImgButton src={Github.src} href="https://github.com/AlexT101" />
                  <ImgButton src={Linkedin.src} href="https://www.linkedin.com/in/alext101/" />
                  <ImgButton src={Contact.src} href="https://www.linkedin.com/in/alext101/" />
                </div>
              </div>
            )
            }
            {projView ? (
              <UnstyledButton className="box skills" onClick={incProj}>
                <h2>next project <span className="visit2 light">: {projects[nextVal(projects, curProj)].name}</span></h2>
              </UnstyledButton>
            ) : (
              <UnstyledButton className="box skills" onClick={incInfo}>
                <h2>more info <span className="visit2 light">: {info[nextVal(info, curInfo)].title}</span></h2>
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
                <UnstyledButton component="img" className="projImg" src={projects[curProj].src} onClick={open} loading="eager"/>
              ) : (
                <>
                  <h2>projects</h2>
                  <p>I build stuff in React. Try running my projects (above) to see what I've been working on recently.</p>
                </>
              )}
            </div>
          </div>
        </div >
        <Divider className="offset" />
      </div>
      <Modal opened={opened} onClose={close} title={"Website Image: "+projects[curProj].name} centered size="auto">
        <img src={projects[curProj].src} className="bigImg" />
      </Modal>
    </main >
  );
}
