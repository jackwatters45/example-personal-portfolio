import React from 'react';
import './TechStack.scss';
import TechStackCard from './TechStackCard';

const TechStack = () => {
  return (
    <section className="techStack">
      <h2>TECH STACK</h2>
      <div className="content">
        <TechStackCard
          name="HTML"
          image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        />
        <TechStackCard
          name="CSS"
          image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        />
        <TechStackCard
          name="SASS"
          image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
        />
        <TechStackCard
          name="JavaScript"
          image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        />
        <TechStackCard
          name="TypeScript"
          image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        />
        <TechStackCard
          name="React"
          image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        />
        <TechStackCard
          name="Node.js"
          image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        />
        <TechStackCard
          name="GIT"
          image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
        />
        <TechStackCard
          name="Jest"
          image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
        />
        <TechStackCard
          name="Firebase"
          image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
        />
        <TechStackCard
          name="MySQL"
          image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
        />
        <TechStackCard
          name="Python"
          image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        />
        <TechStackCard
          name="Zsh"
          image="https://res.cloudinary.com/drheg5d7j/image/upload/v1681613427/personal%20portfolio/zsh_icon_b49dja.png"
        />
      </div>
    </section>
  );
};

export default TechStack;
