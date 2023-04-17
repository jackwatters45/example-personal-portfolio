import React from 'react';
import './Contact.scss';
import Icon from '@mdi/react';
import { mdiHome, mdiPhone, mdiEmail, mdiGithub, mdiLinkedin } from '@mdi/js';

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
            <Icon path={mdiHome} size={1} />
            <p>17 Plymouth Ave Mill Valley, CA 94941</p>
          </div>
          <div className="phone">
            <Icon path={mdiPhone} size={1} />
            <p>(954) 494-9167</p>
          </div>
          <div className="email">
            <Icon path={mdiEmail} size={1} />
            <p>jack.watters@me.com</p>
          </div>
          <a href="https://github.com/jackwatters45">
            <Icon path={mdiGithub} size={1} />
          </a>
          <a href="https://www.linkedin.com/in/john-watters/">
            <Icon path={mdiLinkedin} size={1} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
