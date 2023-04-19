import './Contact.scss';
import home from '../../assets/icons/home.svg';
import phone from '../../assets/icons/phone.svg';
import email from '../../assets/icons/email.svg';
import github from '../../assets/icons/github.svg';
import linkedin from '../../assets/icons/linkedin.svg';

const Contact = () => {
  return (
    <section className="contactSection">
      <h2>GET IN TOUCH</h2>
      <div className="content">
        <p>
          Please get in touch if you think our work could be mutually
          beneficial!
        </p>
        <div className="secondRow">
          <div className="address">
            <img src={home} alt="address" />
            <p>17 Plymouth Ave Mill Valley, CA 94941</p>
          </div>
          <div className="phone">
            <img src={phone} alt="phone" />
            <p>(954) 494-9167</p>
          </div>
          <div className="email">
            <img src={email} alt="email" />
            <p>jack.watters@me.com</p>
          </div>
          <a href="https://github.com/jackwatters45">
            <img src={github} alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/john-watters/">
            <img src={linkedin} alt="github" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
