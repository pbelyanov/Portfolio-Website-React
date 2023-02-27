import("../../styles/styleAboutMe.css");

export function AboutMeView(props) {
  const skills = ["JavaScript", "React", "CSS", "HTML", "JIRA", "REST"];

  return (
    <section id="aboutMeSection">
      <h1>About Me</h1>
      <div id="mainContainer">
        <div id="info">
          <p>
            I am a Junior Software Engineer with strong interest in web
            development that has a proven ability to learn swiftly and improve
            his skillset on a daily basis.
          </p>
          <p>
            This quality has allowed me to succeed in different environments and
            achieve excellent results within set deadlines and most importantly
            become a vital asset of the teams that I participated in.
          </p>
        </div>
        <div id="skills">
          {skills.map((x) => (
            <div key={skills.indexOf(x)}>{x}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
