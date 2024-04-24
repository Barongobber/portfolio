/*
    File: About.jsx
    Author: Baron Gobi
    Copyright: 2024 - Baron Gobi
    Version: 1.0
*/

export default function About() {
    return (
        <section className="w-[100%] mt-9 sm:mt-10 md:mt-11 flex flex-col flex-nowrap items-center justify-center gap-7 px-mobileBound sm:px-8 sm:gap-8 md:gap-9 lg:gap-10">
            <h1 className="text-center max-w-[18em]">About Rons</h1>
            <img className="w-[300px] profile-border" src="./assets/images/Rons.webp" alt="Profile of Baron" />
            <p className="text-justify">I am currently working in Shibuya Tokyo Japan which is called as the silicon valley of Japan.</p>
            <p className="text-justify">I hold a B.Cs. in Software Engineering from the University Technology of Malaysia. I previously worked in Latvia remotely from Indonesia as an e-commerce web developer. My task were most likely linked with integrating the 3rd party-app, slicing the interface, and improving website performance. Thus, dealing with API for integration, FE tasks, and pay attention to the details are my daily activities</p>
            <p className="text-justify">Outside of coding matters, I also actively involved in the community during my undergraduate study that makes me realize having such abroad and diverse connections are important for the future assets. Aside from that, I also frequently play badminton 2-3 times per week to preserve healthiness and surprisingly got managed to secure a runner-up position on one of the competition in my university.</p>
            <p className="text-justify">Crave for something new and achieve more than should be are my big punches. That is what I am always trying to be. As an evidence, though maintaing GPA above 3.5 was hard, I still managed to get a dean's list on every semester and involved in non profit organization alongside. Moreover, secured an award from the faculty as the best international student they have during 2022. That was a remarkable journey for me</p>
        </section>
    );
}