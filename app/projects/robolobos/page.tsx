'use client';

import 'app/index.css';
import Placeholder from 'public/placeholder.webp';

const Robolobos = () => {
    return (
        <div className="article">
            <h1>Robolobos.</h1>
            <div className="content">
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
                <img src={Placeholder.src} className="largeImg" />
                <br/>

                <h2>Flyers</h2>
                <p className="subtext">
                    Description goes here
                </p>
                <div className="imageRow">
                    <img src={Placeholder.src} className="largeImgRow" />
                    <img src={Placeholder.src} className="largeImgRow" />
                </div>
                <br/>
                <img src={Placeholder.src} className="largeImg" />
                <br/>

                <h2>Trifold Brochure</h2>
                <p className="subtext">
                    Description goes here
                </p>
                <img src={Placeholder.src} className="largeImg" />
                <br/>

                <h2>Business Cards</h2>
                <p className="subtext">
                    Description goes here
                </p>
                <div className="imageRow">
                    <img src={Placeholder.src} className="largeImgRow" />
                    <img src={Placeholder.src} className="largeImgRow" />
                </div>
                <br/>

                <h2>Sponsorship Portfolio</h2>
                <p className="subtext">
                    Description goes here
                </p>
                <img src={Placeholder.src} className="largeImg" />
                <br/>

                <h2>Hoodies</h2>
                <p className="subtext">
                    Description goes here
                </p>
                <div className="imageRow">
                    <img src={Placeholder.src} className="largeImgRow" />
                    <img src={Placeholder.src} className="largeImgRow" />
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