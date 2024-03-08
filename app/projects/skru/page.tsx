'use client';

import 'app/index.css';
import Canvas from 'public/Canvas.png';
import Login from 'public/Login.png';
import Projects from 'public/Projects.png';

import Image from 'components/Image';
import Section from 'components/Section';
import Header from 'components/Header';
import Return from 'components/Return';

const Skru = () => {
    return (
        <article className="article">
            <Header
                title="Skru."
                progress={true}
                description="Concept design for a web-based pixel art editor. Skru lets users edit paletted bitmaps from their browser, with functionality for arranging layers, choosing color palettes, transforming the canvas, and adding shapes/text to their pixel art."
                src={Canvas.src}
                alt="Mockup showing the Skru pixel editor, with a pixel art canvas in the center and tool panels on the left and right."
                subtitle="UI design of what the Skru app will look like."
            />

            <Section title="About">
                <p className="subtext">
                    Skru is a pixel art editor that is being developed as part of a team project for the GT Web Dev club. The goal of the project is to create a replacement for Usenti, a bitmap editor that is used in CS2261: Media Device Architecture at Georgia Tech. Usenti has not been updated in several years and can be confusing to use,
                    so we wanted to create a modern replacement for CS2261 students to use instead. Skru is currently in development and will be based on the user interface designs I created.
                </p>
            </Section>

            <Section title="Screens">
                <Image src={Login.src} subtitle="Login Page" alt="Mockup of the login page with a pixel art landscape on the left and a login prompt on the right." />
                <Image src={Projects.src} subtitle="Projects Page" alt="Mockup of the projects page with folder navigation on the left and project cards on the right." />
            </Section>

            <Section title="Tech Used">
                <ul>
                    <li>Figma</li>
                </ul>
            </Section>

            <Section title="Approach">
                <p className="subtext">
                    I used Usenti, a desktop application for editing bitmaps, as inspiration for the tools and functionality Skru would need. I also looked at Figma and Adobe Illustrator as inspiration for how the UI should be laid out because they are two of the most popular design tools, and I wanted Skru's interface to feel intuitive for designers who have used these programs before.
                    I chose to use a dark color scheme for the application to make the colors of the pixel art itself stand out. I also wanted the UI to feel modern and sleek, so I used a lot of rounded corners and aimed to make the projects and and login page utilize a lot of white space with a minimalist design.
                </p>
            </Section>

            <Section title="Role">
                <p className="subtext">I was the sole designer for this project, and I designed the three main screens in Figma, including the editor page, projects page, and login page. The plan is for our team to develop Skru into a functioning web app, and right now it is in the early stages of development.</p>
            </Section>

            <Return />
        </article>
    )
}

export default Skru;