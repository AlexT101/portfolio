import 'app/index.css';
import Render from 'public/Render.png';
import Section from 'components/Section';
import Header from 'components/Header';
import Return from 'components/Return';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'College Scheduler',
    description: 'Android application to help college students manage their schedules, including their classes, assignments, exams, and tasks.',
}

export default function Scheduler() {
    return (
        <article className="article">
            <Header
                title="College Scheduler."
                progress={false}
                description="Android application to help college students manage their schedules, including their classes, assignments, exams, and tasks."
                src={Render.src}
                alt="Screenshots of the College Scheduler app. Splash screen on the left, class list in the center, task list on the right."
                subtitle="Screenshots of the College Scheduler app"
            />

            <Section title="About">
                <p className="subtext">
                    College Scheduler was built for CS2340: Objects and Design at Georgia Tech. Our class project was to build a mobile application on a team
                    of three to help college students manage their schedules. We used Java and Android Studio to build the app. Each item (a class, assignment, etc) is
                    represented as a card for a user to interact with. The app lets users choose between several different views, with additional functionality for
                    sorting and filtering items.
                </p>
                <br />
                <p className="subtext">Github Link: <a className="link" href="https://github.com/AlexT101/college-scheduler">github.com/AlexT101/college-scheduler</a></p>            </Section>

            <Section title="Tech Used">
                <ul>
                    <li>Java</li>
                    <li>Android Studio</li>
                </ul>
            </Section>

            <Section title="Approach">
                <p className="subtext">
                    Our team's main focus was on keeping the app visually appealing and easy to use so that students wouldn't see scheduling as a
                    complicated chore. We used a card-based design so that each item could be easily interacted with and so that students wouldn't have to
                    search through a long text-based list to find what they were looking for. We kept separate screens for classes, assignments, and exams
                    so that students could choose which view they wanted to see. However, we compiled all assignments, exams, and upcoming tasks onto a single to-do
                    list view so that students could prioritize upcoming work, with functionality for marking these items as complete and filtering them out of view.
                </p>
            </Section>

            <Section title="Role">
                <p className="subtext">I worked as part of a team as a developer.</p>
                <p className="subtext">
                    All three members of our team worked on making the Android app using Java and Android Studio. We split the work by screen; I was in charge of the classes
                    view as well as the splash screen. I designed the splash screen art in Adobe Illustrator. I made the classes view using a RecyclerView that would display
                    all of the classes that were in an ArrayList. I added popup dialogs for adding new classes and editing existing classes, which were repurposed for the other screens too.
                    I also wrote the logic for sorting and filtering cards on all screens, as well as marking tasks as complete. Finally, I updated the card views to only
                    display information that had been filled out so users could choose how much information to input and see.
                </p>
            </Section>

            <Return />
        </article>
    )
}