'use client';

import 'app/index.css';
import LiftsFull from 'public/lifts.png';

import Image from 'components/Image';
import Section from 'components/Section';
import Header from 'components/Header';
import Return from 'components/Return';

const Lifts = () => {
    return (
        <article className="article">
            <Header
                title="Lifts."
                description="UI/UX mockup for a mobile app that lets bodybuilders and powerlifters track their fitness journey. Users can start a workout and log individual lifts, such as bench press or deadlift, to track their numbers and progress over time."
                src={LiftsFull.src}
                alt="Mockup showing three phones side-by-side with three different screens from the Lift app, including the welcome screen, home screen, and lift tracker screen (from left to right)"
                subtitle="Mockup of the Lifts App"
            />

            <Section title="About">
                <p className="subtext">
                    As someone who regularly goes to the gym, I have always wanted an easy solution for tracking my progress over time. Unfortunately, most apps are either difficult to use or are focused on tracking other fitness goals such as cardio, steps taken, or weight loss. I wanted to design an app targeted specifically to powerlifters.
                </p>
            </Section>

            <Section title="Tech Used">
                <ul>
                    <li>Adobe Illustrator</li>
                    <li>Adobe Photoshop</li>
                </ul>
            </Section>

            <Section title="Approach">
                <p className="subtext">
                    I conducted competitor research by looking for other fitness mobile apps. I also looked at other designs using Dribbble and Behance to get inspiration for my mockups.
                </p>
            </Section>

            <Section title="Role">
                <p className="subtext">I was the sole designer for this project. I designed the mockups in Adobe Illustrator. I used an Adobe Photoshop mockup template to generate the image seen at the top. There is not currently a functional app, but I am planning on developing one in the future.</p>
            </Section>

            <Return />
        </article>
    )
}

export default Lifts;