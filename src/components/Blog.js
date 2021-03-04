import { Link } from "react-router-dom";

const Writeups = () => {
  return (
    <div id="Writeups">
      2021-03-02 -{" "}
      <Link to="/Blog/Microcorruption-Hanoi" className="highlight">
        Microcorruption: Hanoi
      </Link>
      <br />
      <br />
      2021-03-01 -{" "}
      <Link to="/Blog/Microcorruption-Sydney" className="highlight">
        Microcorruption: Sydney
      </Link>
      <br />
      <br />
      2021-02-28 -{" "}
      <Link to="/Blog/Microcorruption-New-Orleans" className="highlight">
        Microcorruption: New Orleans
      </Link>
    </div>
  );
};

export default Writeups;