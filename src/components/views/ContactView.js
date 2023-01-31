import backgroundImage from "../../images/background-aboutMe.png";
import("../../styles/styleContacts.css");

export function ContactView(props) {
  return (
    <section id="contactSection" style={{ backgroundImage: backgroundImage }}>
      <h1>Contacts</h1>
      <div id="contactContainer">
        <ul>
          <li>Phone : +359 884868950</li>
          <li>Email : p.belyanov@yahoo.com</li>
          <li>
            LinkedIn :{" "}
            <a
              href="https://www.linkedin.com/in/petar-belyanov/"
              target="_blank"
              rel="noreferrer noopener"
            >
              &lt;https://www.linkedin.com/in/petar-belyanov&gt;
            </a>
          </li>
          <li>
            GitHub :{" "}
            <a
              href="https://github.com/pbelyanov"
              target="_blank"
              rel="noreferrer noopener"
            >
              &lt;https://github.com/pbelyanov&gt;
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
