'use client';

import 'app/index.css';
import LiftsFull from 'public/lifts.png';
import Image from 'components/Image';

const Lifts = () => {
    return (
        <div className="article">
            <div className="content">
                <div className="header">
                    <h1>Lifts.</h1>
                    <p>UI/UX mockup for a mobile app that lets bodybuilders and powerlifters track their fitness journey. Users can start a workout and log individual lifts, such as bench press or deadlift, to track their numbers and progress over time.
                    </p>
                </div>
                <Image src={LiftsFull.src} />
                <h2>About</h2>
                <p className="subtext">
                    As someone who regularly goes to the gym, I have always wanted an easy solution for tracking my progress over time. Unfortunately, most apps are either difficult to use or are focused on tracking other fitness goals such as cardio, steps taken, or weight loss. I wanted to design an app targeted specifically to powerlifters.
                </p>
                <h2>Tech Used</h2>
                <ul>
                    <li>Adobe Illustrator</li>
                    <li>Adobe Photoshop</li>
                </ul>
                <h2>Approach</h2>
                <p className="subtext">
                    I conducted competitor research by looking for other fitness mobile apps. I also looked at other designs using Dribbble and Behance to get inspiration for my mockups.
                </p>
                <h2>Role</h2>
                <p className="subtext">I was the sole designer for this project. I designed the mockups in Adobe Illustrator. I used an Adobe Photoshop mockup template to generate the image seen at the top. There is not currently a functional app, but I am planning on developing one in the future.</p>
                <a href="/#concepts" className="link return">Back To Concepts</a>
            </div>
        </div>
    )
}

export default Lifts;