'use client';

import 'app/index.css';
import RoamFull from 'public/roam.png';

const Roam = () => {
    return (
        <div className="article">
            <h1>Roam.</h1>
            <p>Log your travel experiences through pins on an interactive globe. Add locations to your travel history with notes to remember your journey, or plan your future adventures with a wishlist feature.
            </p>
            <br />
            <br />
            <img src={RoamFull.src} className="largeImg" />
            <div className="content">
                <h2>About</h2>
                <p className="subtext">
                    Roam was built as part of a semester-long project team as part of the Web Development Club at Georgia Tech. Our goal was to create
                    an app that could be used for logging travel in a more interactive way. Using the React-Globe.gl library let us convert 
                    an array of latitude/longitude vectors into points on an interactive globe rendered in the browser using Three.js/WebGL
                    (automatically done by the library we chose). We built upon this by adding a way to log both cities visited and a wishlist of future
                    cities to visit. We also gave the user more ways to add information (including the date added, any notes about the location, etc) as well
                    as the option to view locations in a list format. 
                </p>
                <br />
                <p className="subtext">Github Link: <a className="link" href="https://github.com/michelle692/roam">https://github.com/michelle692/roam</a></p>
                <p className="subtext">Website Link: <a className="link" href="https://roam-the-world.vercel.app/">https://roam-the-world.vercel.app/</a></p>
                <h2>Tech Used</h2>
                <p>Front-End</p>
                <ul>
                    <li>React</li>
                    <li>Javascript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
                <p>Back-End</p>
                <ul>
                    <li>Python</li>
                    <li>Flask</li>
                    <li>MongoDB</li>
                    <li>Google Maps Geocoding API</li>
                    <li>Vercel</li>
                </ul>
                <h2>Approach</h2>
                <p className="subtext">
                    We were able to add user authentication and persistent data storage by having a backend to interface between the frontend and our MongoDB
                    database. Upon account login, all of the user's locations are loaded into a React hook, and any update to this hook is saved to local storage.
                    We are able to get location data using the Google Maps Geocoding API, which generates possible locations based on user input and finds their
                    latitude/longitude. 
                </p>
                <h2>Role</h2>
                <p className="subtext">I worked as part of a team as a full-stack developer.</p>
                <p className="subtext">Front-End</p>
                <p className="subtext">
                    I implemented most of the frontend components (i.e. buttons, input fields, multiple modal types) and the main layouts (main page, 
                    travel history page, wishlist page) based on a Figma design created by another team member. I also wrote the frontend logic, 
                    including the functionality for toggling between modals, creating an account, logging in, searching for/adding locations, 
                    viewing location information, editing notes, and maintaining persistent data using local storage and calls to the backend.
                </p>
                <p className="subtext">
                    Back-End
                </p>
                <p className="subtext">
                    I wrote the calls for CRUD functionality with the travel history and wishlist documents. This included functions for adding
                    a location, getting all locations for a particular user, editing a location, and deleting a location.
                </p>
            </div>
        </div>
    )
}

export default Roam;