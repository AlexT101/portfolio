'use client';

import 'app/index.css';
import Page2 from 'public/page2.png';

import Image from 'components/Image';
import Section from 'components/Section';
import Header from 'components/Header';
import Return from 'components/Return';

const MarketMatch = () => {
    return (
        <article className="article">
            <Header
                title="MarketMatch."
                progress={false}
                description="A gamified stock portfolio app based on Tinder. Input your preferences, see our stock recommendations, and swipe right on your favorites."
                src={Page2.src}
                alt="Screenshot of the MarketMatch website with a stock profile in the center and arrows on either side to let the user swipe left or right."
                subtitle="Screenshot of the MarketMatch website"
            />

            <Section title="About">
                <p className="subtext">
                    MarketMatch was built in 36 hours as part of Hacklytics 2024, a hackathon hosted by the Data Science club at Georgia Tech.
                    Our goal was to build a beginner-friendly website to introduce people without trading experience to the stock market.
                    Our website lets users input preferences about the types of stocks they would like to see. We then provide them one recommendation
                    at a time (similar to a Tinder profile) with detailed information about the stock including a description, graphs, detailed data,
                    sentiment analysis based on the news, and a chatbot integration if users have any questions. Users can then swipe left (to reject) or
                    right (to accept) the stock, adding it to their tailored portfolio. We send their swipe choice to the backend to tailor future recommendations
                    to their preferences using machine learning.
                </p>
                <br />
                <p className="subtext">Github Link: <a className="link" href="https://github.com/AlexT101/market-match">github.com/AlexT101/market-match</a></p>
                <p className="subtext">Website Link: <a className="link" href="https://marketmatch.tech">marketmatch.tech</a></p>
            </Section>
            <div className="largeImgRow">
            <video className="video" controls muted>
                <source src="/Overview.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <p>Walkthrough of the MarketMatch App</p>
            </div>

            <Section title="Tech Used">
                <p>Front-End</p>
                <ul>
                    <li>Next.js</li>
                    <li>React</li>
                    <li>Mantine</li>
                    <li>Zustand</li>
                    <li>Typescript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Vercel</li>
                </ul>
                <p>Back-End</p>
                <ul>
                    <li>Python</li>
                    <li>Pandas</li>
                    <li>Scikit Learn</li>
                    <li>SciPy</li>
                    <li>NumPy</li>
                    <li>FastAPI</li>
                    <li>IEX Cloud</li>
                    <li>MongoDB</li>
                    <li>OpenAI API</li>
                    <li>AWS Hosting</li>
                </ul>
            </Section>


            <Section title="Approach">
                <p className="subtext">
                    One key feature I wanted to implement was a satisfying user swiping experience. I implemented
                    this by using a card component to display the stock data that then visually moves left or right based on the user's input using CSS transitions.
                    I also implemented a loading overlay while the API is getting the next stock so the user doesn't think the app is frozen.
                    I also added functionality for the user to choose between clicking the arrow buttons or using the keys on the
                    keyboard to swipe left or right for a more intuitive experience. Since our app is based on Tinder, I also wanted to make sure it
                    was mobile friendly. I did this by making sure each UI component looked good with a limited width and then adding media breakpoints to arrange
                    the elements correctly on smaller screens.
                </p>
                <p className="subtext">
                    My teammates built the backend using Python and FastAPI. They used the IEX Cloud API to get recent stock data and then used machine learning to
                    tailor the stock recommendations to the user's preferences. They also used MongoDB to store stock data to reduce the number of external API
                    calls we had to make to IEX Cloud. For more information on how our backend works, please see our <a className="link" href="https://github.com/AlexT101/market-match">Github.</a>
                </p>
            </Section>

            <Section title="Role">
                <p className="subtext">I fully built the frontend. My teammates built the backend.</p>
                <p className="subtext">
                    I built the frontend using Next.js and React. I also used the Mantine UI library to help me quickly build components such as the custom
                    stock portfolio card. The frontend was hosted on Vercel, and I wrote API calls to the backend so that we could separate our stock recommendation
                    algorithm from the frontend. These calls are made after the user initially chooses their preferences, as well as after every single stock swipe
                    to allow our algorithm to update based on the previous swipe choice. Finally, I used Zustand for state management between the various pages,
                    which along with the Next.js routing functionality, allowed for a seamless user experience when transitioning between each step of the stock
                    selection process.
                </p>
            </Section>

            <Return />
        </article>
    )
}

export default MarketMatch;