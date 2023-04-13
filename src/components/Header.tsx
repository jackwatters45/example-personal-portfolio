import React from 'react';

type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <img src="https://via.placeholder.com/150" alt="placeholder" />
      <h1>Jack Watters</h1>
      <h3>Full Stack Developer</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        corrupti autem tenetur voluptates quasi perspiciatis, voluptatibus, ea,
        architecto similique debitis molestias quo vitae! Voluptatum sapiente,
        maiores fuga optio numquam aliquam?
      </p>
      <div>
        <a href="#">
          <img
            width={'24px'}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          />
        </a>
        <a href="#">
          <img
            width="24px"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
