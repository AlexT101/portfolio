'use client';

import 'app/index.css';
import ImmerseGTFull from 'public/immersegt.png';
import Image from 'components/Image';

const Immerse = () => {
    return (
        <div className="article">
            <div className="content">
                <div className="header">
                    <h1>ImmerseGT Event Platform.</h1>
                    <p>Online event platform for the 2024 ImmerseGT Hackathon. Allows participants to register for the hackathon, search for other participants, form teams, and view an up-to-date schedule of the event.
                    </p>
                </div>
                <Image src={ImmerseGTFull.src} />
                <h2>About</h2>
                <p className="subtext">
                    ImmerseGT is a hackathon hosted by the GTXR club and Startup Exchange at Georgia Tech. Participants can enter into various
                    XR / virtual reality-based categories for a chance to win up to $20,000 in prizes. The hackathon was first held in 2023,
                    and the organizers were looking to have a virtual platform developed to better run the hackathon in 2024. The goal was for
                    the new platform to help participants register for the hackathon, form teams, see the event schedule, submit projects, and
                    more as a one stop shop for the hackathon.
                </p>
                <br />
                <p className="subtext">Github Link: <a className="link" href="https://github.com/AlexT101/ImmerseGT-Event-Platform">https://github.com/AlexT101/ImmerseGT-Event-Platform</a></p>
                <p className="subtext">Website Link: <a className="link" href="">Link here</a></p>
                <h2>Tech Used</h2>
                <ul>
                    <li>Mantine</li>
                    <li>React Redux</li>
                    <li>Redux Toolkit</li>
                    <li>Next.js</li>
                    <li>React</li>
                    <li>Typescript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
                <h2>Approach</h2>
                <p className="subtext">
                    The core of the platform is the team formation tool. Accepted participants are able to create teams by filling in a variety
                    of pertinent information including a description, preferred coding languages, etc. Team leaders are then able to either invite
                    members or allow their team to be found through our platform. Users who are looking for a team can filter/search through available
                    teams based on many parameters to find the perfect fit.
                </p>
                <h2>Role</h2>
                <p className="subtext">I was the sole designer and frontend developer for this project. I worked with members of GTXR to ensure
                    the website met their requirements.</p>
                <p className="subtext">UI/UX Design</p>
                <p className="subtext">
                    I started this process by creating mockups using Adobe Illustrator. I designed full mockup screens for the landing, team overview,
                    team formation, schedule, and account creation pages. I also designed wireframes for the hackathon registration page and the
                    redirect page. I used these designs as references when coding the frontend, though I made significant changes to several pages to
                    improve upon the design.
                </p>
                <p className="subtext">Front-End</p>
                <p className="subtext">
                    I chose to use Next.js due to its capability with routing
                    and rendering web-based apps. I also used the React library Mantine extensively because of their customizable UI components,
                    functionality for managing form submissions, and easy-to-use notification system to ensure the website could be built within
                    the time frame needed.I used React Redux and Redux Toolkit for state management due to the variety of pages/data the app
                    would have to work with.
                </p>
                <a href="/#projects" className="link return">Back To Projects</a>
            </div>
        </div>
    )
}

export default Immerse;