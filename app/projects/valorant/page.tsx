'use client';

import 'app/index.css';
import ValorantFull from 'public/Sova.png';

import Image from 'components/Image';
import Section from 'components/Section';
import Header from 'components/Header';
import Return from 'components/Return';

const Valorant = () => {
    return (
        <article className="article">
            <Header
                title="Agent"
                description="UI/UX mockup of an agent (playable character) information page for the game Valorant. Not affiliated with Riot/Valorant - this is my own work based on their design style. The current page displays information about Sova, an agent in the game."
                src={ValorantFull.src}
                alt="Detailed design showing the Valorant Agents website including a hero header with summary information about the Sova agent and several other sections about him."
                subtitle="Design of the Valorant Agents Website"
            />

            <Section title="About">
                <p className="subtext">
                    I fell in love with Valorant's website design style as soon as I saw it - brutalist and utilitarian, yet clean and appealing, their design marked a welcome departure from the typical minimalist website on the internet. I decided to design a webpage in a similar style to practice implementing their aesthetic.
                </p>

            </Section>

            <Section title="Tech Used">
                <ul>
                    <li>Adobe Illustrator</li>
                </ul>
            </Section>

            <Section title="Approach">
                <p className="subtext">
                    I grabbed the official assets including PNGs of the characters, icons, and logos, from various websites. I used the same bold font (Tungsten Bold) but replaced two of their other fonts (DIN Next and FF Mark) with Roboto and Proxima Nova because they were similar, free alternatives provided by Adobe. I also studied the Valorant website to copy their color scheme. I started each section by creating the basic layout with relevant information. I then added visual texture and details to mimic the style of the official Valorant website.
                </p>
            </Section>

            <Section title="Role">
                <p className="subtext">I designed the webpage mockup in Adobe Illustrator.</p>
            </Section>

            <Return />
        </article>
    )
}

export default Valorant;