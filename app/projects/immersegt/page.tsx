'use client';

import 'app/index.css';
import ImmerseGTFull from 'public/immersegt.png';

import Image from 'components/Image';
import Section from 'components/Section';
import Header from 'components/Header';
import Return from 'components/Return';

const Immerse = () => {
    return (
        <article className="article">
            <Header
                title="ImmerseGT Event Platform."
                progress={true}
                description="Online event platform for the 2024 ImmerseGT Hackathon. Allows participants to register for the hackathon, search for other participants, form teams, and view an up-to-date schedule of the event."
                src={ImmerseGTFull.src}
                alt="Screenshot of the ImmerseGT website with the message 'Hack with us at ImmerseGT', a description, registration buttons, and a picture of a VR headset"
                subtitle="Screenshot of the ImmerseGT Website"
            />

            <Section title="About">
                <p><i>This project is currently in progress with an estimated completion date of March 1st. The 2024 ImmerseGT hackathon will be held in April.</i></p>
                <p>
                    ImmerseGT is a hackathon hosted by the GTXR club and Startup Exchange at Georgia Tech. Participants can enter into various
                    XR / virtual reality-based categories for a chance to win up to $20,000 in prizes. The hackathon was first held in 2023,
                    and the organizers were looking to have a virtual platform developed to better run the hackathon in 2024. The goal was for
                    the new platform to help participants register for the hackathon, form teams, see the event schedule, submit projects, and
                    more as a one stop shop for the hackathon.
                </p>
                <br />
                <p className="subtext">Website Link: <a className="link" href="https://www.immersegt.io/">https://www.immersegt.io/</a></p>
            </Section>

            <Section title="Tech Used">
                <ul>
                    <li>Mantine</li>
                    <li>React Redux</li>
                    <li>Redux Toolkit</li>
                    <li>Next.js</li>
                    <li>Supabase</li>
                    <li>React</li>
                    <li>Typescript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
            </Section>

            <Section title="Approach">
                <p>
                    The core of the platform is the team formation tool. Accepted participants are able to create teams by filling in a variety
                    of pertinent information including a description, preferred coding languages, etc. Team leaders are then able to either invite
                    members or allow their team to be found through our platform. Users who are looking for a team can filter/search through available
                    teams based on many parameters to find the perfect fit.
                </p>
            </Section>

            <Section title="Role">
                <p>I was the sole designer and main frontend developer for this project. I worked with members of GTXR to ensure
                    the website met their requirements.</p>
                <p>UI/UX Design</p>
                <p>
                    I started this process by creating mockups using Adobe Illustrator. I designed full mockup screens for the landing, team overview,
                    team formation, schedule, and account creation pages. I also designed wireframes for the hackathon registration page and the
                    redirect page. I used these designs as references when coding the frontend, though I made significant changes to several pages to
                    improve upon the design.
                </p>
                <p>Front-End</p>
                <p>
                    I chose to use Next.js due to its capability with routing
                    and rendering web-based apps. I also used the React library Mantine extensively because of their customizable UI components,
                    functionality for managing form submissions, and easy-to-use notification system to ensure the website could be built within
                    the time frame needed.I used React Redux and Redux Toolkit for state management due to the variety of pages/data the app
                    would have to work with.
                </p>
            </Section>

            <Return />
        </article>
    )
}

export default Immerse;