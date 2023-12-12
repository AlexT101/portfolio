'use client';

import 'app/index.css';

import Image from 'components/Image';

import CardFront from 'public/businesscard.png';
import CardBack from 'public/businesscardback.png';
import Card3 from 'public/CardInvite.png';
import Card4 from 'public/CardPersonalized.png';
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
                <Image src={Flyer3.src} subtitle="Printed handouts at a FIRST Robotics competition" />

                <h2>About</h2>
                <p className="subtext">
                    I was a member of the 14361 Robolobos robotics team in high school. Our team had 15 members, and we competed in the FIRST Tech Challenge,
                    which involved building a robot to complete an objective - for the year I participated, this involved maneuvering a robot throughout a field
                    and stacking cones on various junction elements. Part of the competition involved submission of an engineering portfolio. Additionally,
                    I had to create a variety of print materials such as flyers and business cards, which we used to help with our outreach efforts and handed
                    out at competitions.
                </p>
                <h2>Engineering Portfolio</h2>
                <p className="subtext">
                    16-page report detailing the engineering design process and mechanics of our team's robot. Created according to FIRST Robotics specifications and submitted at competitions as part of the judging process. Our team won several awards
                    based on our robot's design as written up in the engineering portfolio including the Control Award at the FTC State Championship, the Innovate Award at the TX-Central Regional Championship, and the Innovate Award at the TX-Central GEMS League Tournament.
                </p>
                <Image src={Portfolio.src} subtitle="Engineering Portfolio Content and Cover" />
                <br />

                <h2>Flyers</h2>
                <p className="subtext">
                    Our flyers were created to be handed out at outreach events and robotics competitions so that other people could remember our team and robot. Our first flyer design redirected to our team's Instagram, which gained over 900 followers in a few months.
                    Our other flyer design included information about our team and awards as a memento for judges and potential sponsors to remember our team by.
                </p>
                <div className="imageRow">
                    <Image src={Flyer1.src} subtitle="Flyer Design 1 (Front and Back)" />
                    <Image src={Flyer2.src} subtitle="Flyer Design 2 (Front Only)" />
                </div >
                <br />

                <h2>Trifold Brochure</h2>
                <p className="subtext">
                    Our trifold brochure was another printed material designed to be handed out at outreach events and competitions. The brochure contained much more detailed information than the flyers and was designed for people who were interested in learning about
                    how our team functioned and how our robot worked.
                </p>
                <div className="imageRow">
                    <Image src={Trifold1.src} subtitle="Brochure Inside and Folded" />
                    <Image src={Trifold2.src} subtitle="Brochure Outside" />
                </div>
                <br />

                <h2>Business Cards</h2>
                <p className="subtext">
                    At every FIRST Robotics event, each top team must select two other teams to work with as part of an "alliance" in a multiplayer format. In this format, robots from different teams have to work together to accomplish an objective. We handed out gold foil business
                    cards to teams we talked with so that they would have a positive impression on our team and be more likely to join our alliance. Before the competition, we printed out several business cards with the ID numbers of specific teams we wanted to partner with to
                    lend a personal touch. We also designed cards with a message inviting teams to join our alliance.
                </p>
                <div className="imageRow">
                    <Image src={CardFront.src} subtitle="Business Card Front" />
                    <Image src={CardBack.src} subtitle="Business Card Back" />
                </div>
                <br />
                <div className="imageRow">
                    <Image src={Card4.src} subtitle="Personalized Business Card Back" />
                    <Image src={Card3.src} subtitle="Alliance Invite Business Card Back" />
                </div>
                <br />

                <h2>Pins</h2>
                <p className="subtext">
                    We designed and ordered a variety of pins to hand out as fun trinkets at robotics events. These pins ended up not only being worn by our own team members, but also by participants from other teams who had networked with our team.
                </p>
                <div className="imageRow">
                    <Image src={Pins1.src} subtitle="Logo and Robot Pins" />
                    <Image src={Pins2.src} subtitle="Text and Medal Pins" />
                </div>
                <br />

                <h2>Sponsorship Portfolio</h2>
                <p className="subtext">
                    Running a robots team isn't cheap; our team incurred many expenses each year, including the costs for buying materials, registering our team with FIRST Robotics, purchasing promotional materials, paying the printing costs for our handouts, and paying
                    travel expenses for going to each competition. We sent a 10-page sponsorship portfolio to potential sponsors to provide information about our team, need for sponsors, and possible sponsor benefits.
                </p>
                <Image src={Sponsor.src} subtitle="Sponsorship Portfolio Contents" />
                <br />

                <h2>Hoodies</h2>
                <p className="subtext">
                    We ordered hoodies for every team member from CustomInk to wear at the FTC World competition. I designed a wireframe mockup of our robot to use on the back since our Fusion360 rendered mockup was too finely detailed to be printed.
                </p>
                <div className="imageRow">
                    <Image src={Hoodie1.src} subtitle="Hoodie Front" />
                    <Image src={Hoodie2.src} subtitle="Hoodie Back" />
                </div>

                <h2>Shirts</h2>
                <p className="subtext">
                    We designed black shirts (to contrast with the white hoodies) to wear at the FTC World competition. Another team member designed the unique wolf icon used on the front, and I laid out the team and sponsor information on the back.
                </p>
                <div className="imageRow">
                    <Image src={Shirt1.src} subtitle="Shirt Front" />
                    <Image src={Shirt2.src} subtitle="Shirt Back" />
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
            </div >
        </div >
    )
}

export default Robolobos;