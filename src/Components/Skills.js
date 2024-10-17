import React from 'react';
import { FaReact } from 'react-icons/fa';
const Skills = () => {
  return (
    <div className="mt-5">
      <h1><b>My Skills</b></h1>
      <ul>
        <li>Programming</li>
        <li>Dancing</li>
        <li>a little bit of Singing</li>
        <li>Cooking</li>
        <li>Graphic Design</li>
      </ul>

      <div className="made-with-react mt-5">
        <p>Made with<FaReact className="react-logo" /><a href="https://react.dev/"><span><b>React</b></span></a></p>
      </div>
    </div>
  );
};

export default Skills;