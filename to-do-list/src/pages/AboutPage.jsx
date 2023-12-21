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
        <Link to="https://www.linkedin.com/in/vasco-godinho-2719ba168/">
          LinkedIn
        </Link>
      </p>

      <h4>Nadjim Karimi</h4>
      <p>
        <Link to="https://github.com/Nadjim12">Github Page</Link>
      </p>
    </div>
  );
}

export default AboutPage;
