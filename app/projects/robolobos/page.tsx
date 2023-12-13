'use client';

import 'app/index.css';

import Image from 'components/Image';
import Section from 'components/Section';
import Header from 'components/Header';
import Return from 'components/Return';

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
        <article className="article">
            <Header
                title="Robolobos"
                description="Branding and graphic design for a high school robotics team, the 14361 Robolobos, including a variety of print materials such as portfolios, flyers, brochures, business cards, etc."
                src={Flyer3.src}
                alt="A picture of printed handouts, including flyers and brochures, on a table at a FIRST Robotisc competition"
                subtitle="Printed handouts at a FIRST Robotics competition"
            />

            <Section title="About">
                <p>
                    I was a member of the 14361 Robolobos robotics team in high school. Our team had 15 members, and we competed in the FIRST Tech Challenge,
                    which involved building a robot to complete an objective - for the year I participated, this involved maneuvering a robot throughout a field
                    and stacking cones on various junction elements. Part of the competition involved submission of an engineering portfolio. Additionally,
                    I had to create a variety of print materials such as flyers and business cards, which we used to help with our outreach efforts and handed
                    out at competitions.
                </p>
            </Section>

            <Section title="Engineering Portfolio">
                <p>
                    16-page report detailing the engineering design process and mechanics of our team's robot. Created according to FIRST Robotics specifications and submitted at competitions as part of the judging process. Our team won several awards
                    based on our robot's design as written up in the engineering portfolio including the Control Award at the FTC State Championship, the Innovate Award at the TX-Central Regional Championship, and the Innovate Award at the TX-Central GEMS League Tournament.
                </p>
                <Image src={Portfolio.src} subtitle="Engineering Portfolio Content and Cover" alt="Mockup of the engineering portfolio as a printed booklet, showing a 2-page spread and the cover"/>
            </Section>

            <Section title="Flyers">
                <p>
                    Our flyers were created to be handed out at outreach events and robotics competitions so that other people could remember our team and robot. Our first flyer design redirected to our team's Instagram, which gained over 900 followers in a few months.
                    Our other flyer design included information about our team and awards as a memento for judges and potential sponsors to remember our team by.
                </p>
                <div className="imageRow">
                    <Image src={Flyer1.src} subtitle="Flyer Design 1 (Front and Back)" alt="Mockup of the front and back of a printed flyer design"/>
                    <Image src={Flyer2.src} subtitle="Flyer Design 2 (Front Only)" alt="Mockup of the front of a second printed flyer design"/>
                </div >
            </Section>

            <Section title="Trifold Brochure">
                <p>
                    Our trifold brochure was another printed material designed to be handed out at outreach events and competitions. The brochure contained much more detailed information than the flyers and was designed for people who were interested in learning about
                    how our team functioned and how our robot worked.
                </p>
                <div className="imageRow">
                    <Image src={Trifold1.src} subtitle="Brochure Inside and Folded" alt="Mockup of the inside of a trifold brochure and the cover when folded"/>
                    <Image src={Trifold2.src} subtitle="Brochure Outside" alt="Mockup of the outside of a trifold brochure"/>
                </div>
            </Section>

            <Section title="Business Cards">
                <p>
                    At every FIRST Robotics event, each top team must select two other teams to work with as part of an "alliance" in a multiplayer format. In this format, robots from different teams have to work together to accomplish an objective. We handed out gold foil business
                    cards to teams we talked with so that they would have a positive impression on our team and be more likely to join our alliance. Before the competition, we printed out several business cards with the ID numbers of specific teams we wanted to partner with to
                    lend a personal touch. We also designed cards with a message inviting teams to join our alliance.
                </p>
                <div className="imageRow">
                    <Image src={CardFront.src} subtitle="Business Card Front" alt="Mockup of the front of a black business card with gold foil"/>
                    <Image src={CardBack.src} subtitle="Business Card Back" alt="Mockup of the back of a black business card with gold foil"/>
                </div>
                <br />
                <div className="imageRow">
                    <Image src={Card4.src} subtitle="Personalized Business Card Back" alt="Mockup of a personalized back of a black business card with gold foil"/>
                    <Image src={Card3.src} subtitle="Alliance Invite Business Card Back" alt="Mockup of an alliance invite message on the back of a black business card with gold foil"/>
                </div>
            </Section>

            <Section title="Pins">
                <p>
                    We designed and ordered a variety of pins to hand out as fun trinkets at robotics events. These pins ended up not only being worn by our own team members, but also by participants from other teams who had networked with our team.
                </p>
                <div className="imageRow">
                    <Image src={Pins1.src} subtitle="Logo and Robot Pins" alt="Mockup of a pin design of the Robolobos logo and a pin design of the robot"/>
                    <Image src={Pins2.src} subtitle="Text and Medal Pins" alt="Mockup of of a pin design with the text '14361 Robolobos' and a pin design of a FIRST competition medal"/>
                </div>
            </Section>

            <Section title="Sponsorship Proposal">
                <p>
                    Running a robotics team isn't cheap; our team incurred many expenses each year, including the costs for buying materials, registering our team with FIRST Robotics, purchasing promotional materials, paying the printing costs for our handouts, and paying
                    travel expenses for going to each competition. We sent a 10-page sponsorship proposal to potential sponsors to provide information about our team, need for sponsors, and possible sponsor benefits.
                </p>
                <Image src={Sponsor.src} subtitle="Sponsorship Proposal Contents" alt="Mockup of a two-page spread of the sponsorship proposal"/>
            </Section>

            <Section title="Hoodies">
                <p>
                    We ordered hoodies for every team member from CustomInk to wear at the FTC World competition. I designed a wireframe mockup of our robot to use on the back since our Fusion360 rendered mockup was too finely detailed to be printed.
                </p>
                <div className="imageRow">
                    <Image src={Hoodie1.src} subtitle="Hoodie Front" alt="Mockup of a white hoodie with black text saying 'ROBOLOBOS 14361'"/>
                    <Image src={Hoodie2.src} subtitle="Hoodie Back" alt="Mockup of a white hoodie with black design elements including a wireframe of the robot and team information"/>
                </div>
            </Section>

            <Section title="Shirts">
                <p>
                    We designed black shirts (to contrast with the white hoodies) to wear at the FTC World competition. Another team member designed the unique wolf icon used on the front, and I laid out the team and sponsor information on the back.
                </p>
                <div className="imageRow">
                    <Image src={Shirt1.src} subtitle="Shirt Front" alt="Mockup of a black shirt with a small white robotic wolf emblem"/>
                    <Image src={Shirt2.src} subtitle="Shirt Back" alt="Mockup of a black shirt with white text including a list of Robolobos team members and a list of Robolobos sponsors"/>
                </div>
            </Section>

            <Section title="Tech Used">
                <ul>
                    <li>Adobe InDesign</li>
                    <li>Adobe Illustrator</li>
                    <li>Adobe Photoshop</li>
                </ul>
            </Section>

            <Section title="Approach">
                <p>
                    I designed the logos and graphics in Adobe Illustrator. I used Adobe InDesign for laying out all of our printed materials. I also
                    used Adobe Photoshop to create mockups of each design before the printing process.
                </p>
            </Section>

            <Section title="Role">
                <p>
                    I was the head of the business subteam. I coordinated our business efforts including outreach and volunteer work. I
                    interfaced with the technical leads to obtain the necessary information for the engineering portfolio. I also designed
                    the printed materials as seen in the previous photos.
                </p>
            </Section>

            <Return />
        </article>
    )
}

export default Robolobos;