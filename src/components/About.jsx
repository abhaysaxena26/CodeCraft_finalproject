import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div>
            <p className="text-xl mt-10"> 
                Hello! I'm Abhay Saxena, a passionate and enthusiastic learner in the world of web development. 
                With two months of dedicated learning under my belt, I've dived into the fundamentals of web 
                development and am eager to continue growing my skills.
            </p>
            <br/>
            <p className="text-xl">
                I started my journey by mastering the basics of HTML and CSS, which gave me the foundation 
                to create well-structured and visually appealing web pages. Soon after, I delved into 
                JavaScript, where I learned how to make my websites interactive and dynamic. My curiosity 
                led me to explore the Document Object Model (DOM), enhancing my ability to manipulate web 
                elements with precision.
            </p>
            <div className="pb-8 pt-20">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">What I have learned</p>
            </div>
            <ul className="list-disc list-inside text-xl mt-4 space-y-2">
          <li>HTML & CSS: Crafting semantic, accessible, and responsive layouts.</li>
          <li>JavaScript: Bringing interactivity and dynamic content to web pages.</li>
          <li>DOM Manipulation: Efficiently modifying and interacting with web elements.</li>
          <li>React: Gaining a basic understanding of component-based architecture.</li>
          <li>Tailwind CSS: Implementing utility-first styling for streamlined design.</li>
        </ul>
        </div>
    </div>
  )
}

export default About