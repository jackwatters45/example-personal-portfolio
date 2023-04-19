import './Intro.scss';
import github from '../../assets/icons/github.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import ToggleButton from './ToggleButton/ToggleButton';

type Props = { toggleTheme: () => void };

const Intro = ({ toggleTheme }: Props) => {
  return (
    <div className="header">
      <nav>
        <h1>JACK WATTERS</h1>
        <ToggleButton toggleTheme={toggleTheme} />
      </nav>
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
          <p>
            Explore my portfolio to see my web development skills in action, and
            get in touch to discuss potential collaborations or projects!
          </p>
          <div className="icons">
            <a href="https://github.com/jackwatters45">
              <img className="icon" src={github} alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/john-watters/">
              <img className="icon" src={linkedin} alt="linkedin" />
            </a>
          </div>
        </div>

        <picture>
          <source
            srcSet="https://res.cloudinary.com/drheg5d7j/image/upload/v1681623142/personal%20portfolio/selfImage_a0crd2.webp"
            type="image/webp"
          />
          <source
            srcSet="https://res.cloudinary.com/drheg5d7j/image/upload/v1681623146/personal%20portfolio/selfImage_mdgwe4.jpg"
            type="image/jpeg"
          />
          <img
            src="https://res.cloudinary.com/drheg5d7j/image/upload/v1681623146/personal%20portfolio/selfImage_mdgwe4.jpg"
            alt="Jack Watters"
          />
        </picture>
      </div>
    </div>
  );
};

export default Intro;
