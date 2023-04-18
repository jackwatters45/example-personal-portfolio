import React from 'react';
import './TechStack.scss';
import TechStackCard from './TechStackCard';

const TechStack = () => {
  console.log(techStackElements.length);
  return (
    <section className="techStack">
      <h2>TECH STACK</h2>
      <div className="content">
        <div className="contentSlider">
          {techStackElements.map(({ name, image }) => (
            <TechStackCard name={name} image={image} />
          ))}
          {techStackElements.map(({ name, image }) => (
            <TechStackCard name={name} image={image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

const techStackElements = [
  {
    name: 'HTML',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    name: 'SASS',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
  },
  {
    name: 'JavaScript',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'TypeScript',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    name: 'React',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'Node.js',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'GIT',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
  {
    name: 'Jest',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
  },
  {
    name: 'Firebase',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  },
  {
    name: 'MySQL',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
  {
    name: 'MongoDB',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
  {
    name: 'Python',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    name: 'Zsh',
    image:
      'https://res.cloudinary.com/drheg5d7j/image/upload/v1681613427/personal%20portfolio/zsh_icon_b49dja.png',
  },
];
