export function Footer() {
  return (
    <footer>
      <div id="footer-div">
        <div id="top-of-footer">
          <div id="about-me">
            <h3>PETAR BELYANOV</h3>
            <p>
              A Junior Software Engineer with strong interest in web development
              that has a proven ability to learn swiftly and improve his
              skillset on a daily basis
            </p>
          </div>
          <div id="social-media">
            <h3>SOCIAL</h3>
            <div id="icons">
              <a
                href="https://www.linkedin.com/in/petar-belyanov/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/pbelyanov"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>
        <div id="copyrights">
          <p>
            All Rights Reserved &copy;. Made by Petar Belyanov. Design by
            <a
              href="https://www.linkedin.com/in/lora-antonova/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Lora Antonova
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
