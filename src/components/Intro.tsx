import React from 'react';
import '../styles/Intro.scss';
import Icon from '@mdi/react';
import { mdiGithub, mdiLinkedin } from '@mdi/js';
import selfImg from '../assets/selfImage.jpg';
import selfImgWebp from '../assets/selfImage.webp';

type Props = {};

const AlbumCover = (props: Props) => {
  return (
    <div className="header">
      <nav>
        <h1>JACK WATTERS</h1>
        <div>theme switch</div>
      </nav>

      {/* Animation here */}
      {/* Need to make more interesting */}
      <div className="about">
        <div className="textContainer">
          <h3>WEB DEVELOPER & CREATOR</h3>
          <p>
            I am Jack Watters (he/him). I enjoy listening to country western
            music while browsing the web for new hi-fi equipment, following my
            dogs while we discover new smells and mark our territory, and
            sleeping in my car at rest stops and walmart parking lots. To keep
            up appearances I also spend my time working on my web development
            skills.
          </p>
          <p>
            When not on the road my home base is San Francisco. Post university,
            I decided I wanted to build things, namely software, but also
            clothing and furniture and shoes and cars - I'm keeping my options
            open. I am currently working my way through the Odin Project
            Javascript curriculum with my eyes set on landing my first job as a
            full-stack SWE.
          </p>
          {/* could be more my voice - got from chatGpt */}
          <p>
            Explore my portfolio to see my web development skills in action, and
            get in touch to discuss potential collaborations or projects!
          </p>
          <div className="icons">
            <a href="https://github.com/jackwatters45">
              <Icon path={mdiGithub} size={1} />
            </a>
            <a href="https://www.linkedin.com/in/john-watters/">
              <Icon path={mdiLinkedin} size={1} />
            </a>
          </div>
        </div>

        <picture>
          <source srcSet={selfImgWebp} type="image/webp" />
          <source srcSet={selfImg} type="image/jpeg" />
          <img className="selfImage" src={selfImg} alt="Jack Watters" />
        </picture>
      </div>
    </div>
  );
};

export default AlbumCover;
