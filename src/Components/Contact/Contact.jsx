import { MainHeading } from "../MainHeading/MainHeading";
import "./Contact.css";

export const Contact = () => {
  return (
    <section className="contact-section">
      <MainHeading className={"heading-text lets-talk"} text={"Let's Talk"} />

      <div className="contact-wrapper">
        <img className="profile-pic" src="/assets/profielNEW.JPG" alt="Profile picture of Inna" />

        <div className="contact-text">
          <p className="talk-text name">Inna Kuljanac</p>

          <a className="phone-number" href="tel:+46700627955">
            +46(0)700-627 955
          </a>

          <a className="email" href="mailto:innkuljanac@gmail.com">
            Innakuljanac@gmail.com
          </a>
        </div>

        <div className="social-icon-wrapper">
          <a
            className="icon-link github-link"
            href="https://github.com/InnaKuljanac"
            target="_blank"
            rel="noopener noreferrer">
            <img src="/assets/githubGrey.svg" alt="github icon" />
          </a>
          <a
            className="icon-link linkedin-link"
            href="www.linkedin.com/in/inna-kuljanac-a579b928a"
            target="_blank"
            rel="noopener noreferrer">
            <img src="/assets/linkedinGrey.svg" alt="github icon" />
          </a>
        </div>
      </div>
    </section>
  );
};
