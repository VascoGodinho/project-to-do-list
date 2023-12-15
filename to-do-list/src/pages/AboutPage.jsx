import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <div>
      <h1>About Us</h1>
      <h4>Vasco Godinho</h4>
      <p>
        <Link to="https://github.com/VascoGodinho">Github Page</Link>
      </p>
      <p>
        <Link to="">LinkedIn</Link>
      </p>

      <h4>Nadjim Karimi</h4>
      <p>
        <Link to="">Github Page</Link>
      </p>
      <p>
        <Link to="">LinkedIn</Link>
      </p>
    </div>
  );
}

export default AboutPage;
