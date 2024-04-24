/*
    File: Home.jsx
    Author: Baron Gobi
    Copyright: 2024 - Baron Gobi
    Version: 1.0
*/

import { useOutletContext } from "react-router-dom";
import Socials from "../components/Socials";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import SplashSection from "../components/SplashSection";
import ContactForm from "../components/ContactForm";

export default function Home() {
    const [isDarkMode] = useOutletContext();

    return (
        <>
            <SplashSection splashMessage={'Rons Web Developer'} isDarkMode={isDarkMode} isErrorMode={false} />
            <section className="w-[100%] flex flex-col flex-nowrap items-center justify-center gap-7 px-mobileBound sm:px-8 sm:gap-8 md:gap-9 lg:gap-10">
                <h1 className="text-center max-w-[18em]">Turn Imagination Into Reality on Your Website</h1>
                <p className="text-justify">
                    Heyyo! Call me Baron or Rons, a certified Professional Magento 2 Developer with huge amount of experience in developing both Backend and Frontend using PHP and JS (React).
                    Creating PHP-based websites and interfaces using React are my main weapon. Understanding user desires through requirements elicitation, documenting their needs, planning, 
                    designing system software requirements, and meeting their expectations are common things to do.
                </p>
            </section>
            <section className="w-[100%] flex flex-col flex-nowrap items-center justify-center gap-7 px-mobileBound sm:px-8 sm:gap-8 md:gap-9 lg:gap-10">
                <h2>My Arts</h2>
                <Projects />
            </section>
            <section className="w-[100%] flex flex-col flex-nowrap items-center justify-center gap-7 px-mobileBound sm:px-8 sm:gap-8 md:gap-9 lg:gap-10">
                <h2>Testimonials</h2>
                <Testimonials />
            </section>
            <section className="w-[100%] flex flex-col flex-nowrap items-center justify-center gap-7 px-mobileBound sm:px-8 sm:gap-8 md:gap-9 lg:gap-10">
                <h2>Contact</h2>
                <Socials />
                <p className="text-center">Are you ready to unlock your dream website? Let&apos;s chat!</p>
                {/* <ContactForm /> */}
            </section>
        </>
    );
}