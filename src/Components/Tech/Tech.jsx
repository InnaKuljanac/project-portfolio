import { MainHeading } from "../MainHeading/MainHeading";
import "./Tech.css";

export const Tech = () => {
  const skills =
    "HTML, CSS, Flexbox, Web Accessibility, JavaScript, ES6, React, JSX, React Hooks, Node.js, Express,  Java, Spring Boot, APIs, MySQL, MongoDB, Git, GitHub, pair-programming, mob-programming. ";

  return (
    <section className="tech-section">
      <div className="tech-wrapper">
        <div>
          <MainHeading className={"heading-text tech"} text={"Tech"} />
        </div>

        <div className="skills-text-box">
          <p className="skills-text">{skills}</p>
        </div>
      </div>
    </section>
  );
};
