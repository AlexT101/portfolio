'use client';

import 'app/index.css';
import Placeholder from 'public/placeholder.webp';

import CardFront from 'public/businesscard.png';
import CardBack from 'public/businesscardback.png';
import Flyer1 from 'public/flyer.png';
import Flyer2 from 'public/flyer2.png';
import Flyer3 from 'public/IMG_5797.png';
import Pins1 from 'public/pins1.png';
import Pins2 from 'public/pins2.png';
import Portfolio from 'public/portfolio.png';
import Trifold1 from 'public/trifold-inside.png';
import Trifold2 from 'public/trifold-outside.png';
import Sponsor from 'public/sponsor-portfolio.png';
import Hoodie1 from 'public/Front.png';
import Hoodie2 from 'public/Back.png';
import Shirt1 from 'public/ShirtFront.png';
import Shirt2 from 'public/ShirtBack.png';

const Robolobos = () => {
    return (
        <div className="article">
            <div className="content">
                <div className="header">
                    <h1>Robolobos.</h1>
                    <p>
                        Branding and graphic design for a high school robotics team, the 14361 Robolobos, including a variety of print materials such as portfolios, flyers, brochures, business cards, etc.
                    </p>
                </div>
                <img src={Flyer3.src} className="largeImg" />
                <h2>About</h2>
                <p className="subtext">
                    I was a member of the 14361 Robolobos robotics team in high school. Our team had 15 members, and we competed in the FIRST Tech Challenge,
                    which involved building a robot to complete an objective - for the year I participated, this involved maneuvering a robot throughout a field
                    and stacking cones on various junction elements. Part of the competition involved submission of a 16-page engineering portfolio. Additionally,
                    I had to create a variety of print materials such as flyers and business cards, which we used to help with our outreach efforts and handed
                    out at competitions.
                </p>
                <h2>Engineering Portfolio</h2>
                <p className="subtext">
                    Description goes here
                </p>
                <img src={Portfolio.src} className="largeImg" />
                <br />

                <h2>Flyers</h2>
                <p className="subtext">
                    Description goes here
                </p>
                <div className="imageRow">
                    <img src={Flyer1.src} className="largeImgRow" />
                    <img src={Flyer2.src} className="largeImgRow" />
                </div>
                <br />

                <h2>Trifold Brochure</h2>
                <p className="subtext">
                    Description goes here
                </p>
                <div className="imageRow">
                    <img src={Trifold1.src} className="largeImgRow" />
                    <img src={Trifold2.src} className="largeImgRow" />
                </div>
                <br />

                <h2>Business Cards</h2>
                <p className="subtext">
                    Description goes here
                </p>
                <div className="imageRow">
                    <img src={CardFront.src} className="largeImgRow" />
                    <img src={CardBack.src} className="largeImgRow" />
                </div>
                <br />

                <h2>Pins</h2>
                <p className="subtext">
                    Description goes here
                </p>
                <div className="imageRow">
                    <img src={Pins1.src} className="largeImgRow" />
                    <img src={Pins2.src} className="largeImgRow" />
                </div>
                <br />

                <h2>Sponsorship Portfolio</h2>
                <p className="subtext">
                    Description goes here
                </p>
                <img src={Sponsor.src} className="largeImg" />
                <br />

                <h2>Hoodies</h2>
                <p className="subtext">
                    Description goes here
                </p>
                <div className="imageRow">
                    <img src={Hoodie1.src} className="largeImgRow" />
                    <img src={Hoodie2.src} className="largeImgRow" />
                </div>

                <h2>Shirts</h2>
                <p className="subtext">
                    Description goes here
                </p>
                <div className="imageRow">
                    <img src={Shirt1.src} className="largeImgRow" />
                    <img src={Shirt2.src} className="largeImgRow" />
                </div>

                <br />
                <h2>Tech Used</h2>
                <ul>
                    <li>Adobe InDesign</li>
                    <li>Adobe Illustrator</li>
                    <li>Adobe Photoshop</li>
                </ul>
                <h2>Approach</h2>
                <p className="subtext">
                    I designed the logos and graphics in Adobe Illustrator. I used Adobe InDesign for laying out all of our printed materials. I also
                    used Adobe Photoshop to create mockups of each design before the printing process.
                </p>
                <h2>Role</h2>
                <p className="subtext">
                    I was the head of the business subteam. I coordinated our business efforts including outreach and volunteer work. I
                    interfaced with the technical leads to obtain the necessary information for the engineering portfolio. I also designed
                    the printed materials as seen in the previous photos.
                </p>
                <a href="/#projects" className="link return">Back To Projects</a>
            </div>
        </div>
    )
}

export default Robolobos;