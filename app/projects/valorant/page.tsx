'use client';

import 'app/index.css';
import ValorantFull from 'public/Sova.png';

const Valorant = () => {
    return (
        <div className="article">
            <h1>Agent.</h1>
            <p>Currently a UI/UX mockup. Not affiliated with Riot/Valorant - this is my own work based on their design style. The current page displays information about Sova, an agent (playable character) in the game.
            </p>
            <br />
            <br />
            <img src={ValorantFull.src} className="largeImg" />
            <div className="content">
                <h2>About</h2>
                <p className="subtext">
                    I fell in love with Valorant's website design style as soon as I saw it - brutalist and utilitarian, yet clean and appealing, their design marked a welcome departure from the typical minimalist website on the internet. I decided to design a webpage in a similar style to practice their aesthetic.
                </p>
                <h2>Tech Used</h2>
                <ul>
                    <li>Adobe Illustrator</li>
                </ul>
                <h2>Approach</h2>
                <p className="subtext">
                    I grabbed the official assets including PNGs of the characters, icons, and the logos from various websites. I used the same bold font (Tungsten Bold) but replaced two of their other fonts (DIN Next and FF Mark) with Roboto and Proxima Nova because they were similar, free alternatives provided by Adobe. I also studied the Valorant website to copy their color scheme. I started each section by creating the basic layout with relevant information. I then added visual texture and details to mimic the style of the official Valorant website.
                </p>
                <h2>Role</h2>
                <p className="subtext">I designed the webpage mockup in Adobe Illustrator.</p>
                <a href="/#concepts" className="link return">Back To Concepts</a>
            </div>
        </div>
    )
}

export default Valorant;