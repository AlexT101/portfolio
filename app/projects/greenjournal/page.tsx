'use client';

import 'app/index.css';
import GreenJournalFull from 'public/greenjournal.png';
import Image from 'components/Image';

const GreenJournal = () => {
    return (
        <div className="article">
            <div className="content">
                <div className="header">
                    <h1>GreenJournal.</h1>
                    <p>Interactive dashboard that lets you monitor your carbon footprint through tracked behavioral data and statistical analysis. Based on data from the Environmental Protection Agency.
                    </p>
                </div>
                <Image src={GreenJournalFull.src} />
                <h2>About</h2>
                <p className="subtext">
                    GreenJournal was built in 36 hours as part of HackGT X, a hackathon hosted by Georgia Tech.
                    Our goal was to devise an easy, visual, and interactive way for people to track their impact on the environment through
                    their carbon footprint. Many carbon footprint calculators online require you to answer dozens of questions to calculate
                    a seemingly arbitrary number that doesn't help you change your habits. GreenJournal's website aims to be easy to navigate
                    with fewer questions to reduce the time investment needed to complete your calculations. We also include a visually-updating
                    earth, along with footprint comparison indicators, to help people better understand their footprint in context.
                </p>
                <br />
                <p className="subtext">Github Link: <a className="link" href="https://github.com/barrosodavid/greenjournal">https://github.com/barrosodavid/greenjournal</a></p>
                <p className="subtext">Website Link: <a className="link" href="https://www.greenjournal.tech">https://www.greenjournal.tech</a></p>
                <h2>Tech Used</h2>
                <ul>
                    <li>NextUI</li>
                    <li>Next.js</li>
                    <li>Tailwind CSS</li>
                    <li>Framer Motion</li>
                    <li>React</li>
                    <li>Typescript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
                <h2>Approach</h2>
                <p className="subtext">
                    We used data collected by the Environmental Protection Agency to identify the top factors affecting one's carbon footprint
                    along with the numerical data needed and calculations used to find it. Due to the time limitations of the competition, we
                    did not incorporate a backend and did all of our calculations in the frontend using React Hooks for storing data and
                    javascript functions for calculating the footprint.
                </p>
                <p className="subtext">One of our team members designed the globe in Blender and used Three.js to make it interactive; when the carbon
                    footprint rises, the colors on the globe darken to represent a worsening footprint. We also have a graph to show a
                    user's changing footprint over time and a notebook feature where users can log the changes they have made to reduce
                    their carbon footprint.</p>
                <h2>Role</h2>
                <p className="subtext">I worked as part of a team as a designer and frontend developer.</p>
                <p className="subtext">I designed the initial wireframe layout for our website. For front-end development, I used the Next UI component library
                    to design all of the input fields for user data. I also researched carbon footprint data, used the EPA data to find the top
                    factors and formulas needed, and implemented the calculations using javascript functions. I designed the notes feature and
                    the breakdown section that puts your data in context with that of other people. I also worked on the overall user interface /
                    look of GreenJournal including working on the grid layout, designing the about page, and designing the logo.
                </p>
                <a href="/#projects" className="link return">Back To Projects</a>
            </div>
        </div>
    )
}

export default GreenJournal;