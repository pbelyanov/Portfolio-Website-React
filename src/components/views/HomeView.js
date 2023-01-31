import { Link } from "react-router-dom";

export function HomeView(props) {
  return (
    <section id="homePage">
      <div id="homePageView">
        <h1>Hey! It's Petar Belyanov...</h1>
        <p>
          A beginner web developer with a sales & complaints handling
          background.
        </p>

        <Link to="/prevExp"> &lt;Check out my journey!&gt;</Link>
      </div>
    </section>
  );
}
