import React from 'react'
import { Timeline } from './timeline'
import SectionHeader from './SectionHeader'

const TimelineComponent = () => {

    const data = [
        {title: "Dec 2006", 
        paragraphs: "⛄ I was born in Sumgait, Azerbaijan in a chilly winter day. I had an engineering soul from the very beginning. I was always curious about how things work and how they are made. My parents were always frustrated because of my questions about everything."},
        {title: "Mar 2018",
        paragraphs: "👨‍💻 My first acquaintance with the world of programming was in 2018, when I was 12 years old. I was very excited when I saw what can I do using just HTML itself. With a great excitement I've started to learn HTML, CSS then Javascript. Since that unforgettable day I'm eagerly following the trends and learning new things in web-development while improving myself as much as possible."},
        {title: "2018 - 2023", 
        paragraphs: "🤯 Throughout these years I've learned a lot of things about web-development. I really loved it and already decided that this will be my future job. I was really enjoying creating different projects using HTML, CSS and Javascript. But I knew that I had to go beyond Vanilla JS. I knew that I'll be faced with an endless horizon. \n 😌 I've tried several new web-technologies and each time amazed by the things that lie beyond the horizon and things I can achieve using these vast amount of tools including Electron.js, Node.js, Express, MongoDB etc. which I've tried at that time."},
        {title: "2023",
        paragraphs: "⚛️ After trying out different technologies I've started to learn React.js in February 2023. I was amazed by the simplicity and the power of React. I've started to create different projects using React.js and I was really enjoying it. In order to understand React better I've built some projects which include Recipe App, Weather App, Movie App etc. You can see all of them on my GitHub profile. \n 🌊 It's worth mentioning that I've met with a beautiful tool - TailwindCSS in this period and started to build my apps using Tailwind. \n 🟢 Also, It was the first time that I've created a REST API for my website using Express.js which provides data about planet facts."},
        {title: "Summer 2024",
        paragraphs: "😎 This period is probably one of the most productive periods of my life. I've created several MERN Stack Projects using React.js, Express, Node.js and MongoDB including 'CinexploreAI', 'Advanced Noteapp', 'Techquiz' etc. During this summer I dive deep in advanced concepts of Javascript and React.js and tried to learn best practices which is used in real-life projects. All these projects can be found on my GitHub page. You can also check out my YouTube channel to learn more about these projects."},
        {title: "Sep 2024",
        paragraphs: "🎓 I've successfully started to study for my bachelor's degree on Computer Engineering at the Azerbaijan State University of Economy (UNEC). I'm sure that I'll learn a lot of new things and meet with new people during my university years. I'm really excited about it and can't wait to see what the future holds for me."},
        {title: "Oct 2024",
        paragraphs: "👨‍💻 In october, I've won a 4-months-long full-scholarship program for Frontend Course at the 'Matrix Academy' as a part of the project called 'Codecamp'. While participating at the project I've worked on real-life projects and improved my technical skills on Javascript & React as well as my soft-skills such as collaboration. It was a very valuable experience which contributed a lot to my self-improvement."},
        {title: "∞",
        paragraphs: "🚀 That's it for now! I'm really looking forward to realize my plans and enter more breakpoints to this timeline. Stay tuned!"}
    ]

  return (
    <section className='pt-44'>
        <SectionHeader text={"My Journey"} />
        <Timeline data={data} />
    </section>
  )
}

export default TimelineComponent
