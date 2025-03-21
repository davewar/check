import "./about.css";
import Link from "next/link";

const About = () => {
  return (
    <section className="about-page">
      <div className="main-container">
        <div className="about-me-container">
          <div className="about-me-box">
            <h4 className="text-xxl text-bolder ">About Me</h4>
            <p className="text-md text-bold">
              I’m Susan Warwicker, a Life Coach and certified Advanced NLP
              Practitioner with over 25 years experience working on film and tv
              productions
            </p>

            <p className="text-md">
              As a Production Executive, I spearheaded management training to
              ensure HODs were equipped to run departments and their crews
              effectively. I created and ran DEI programs to ensure diverse
              stories and talents were reflected both behind and on screen
            </p>
            <p className="text-md">
              Having climbed the ladder from Runner to Production Executive,
              I've witnessed many talented crew members suffer from bad
              management and burnout due to toxic work environments and
              gruelling shooting schedules
            </p>

            <p className="text-md">
              I decided to leave the industry to address these issues head on.
              By understanding the pace and challenges crew members face, I have
              the insight to help move our industry forward to a happier,
              healthier environment and mindset
            </p>
            <p className="text-md">
              Our industry is losing gifted and experienced people daily but
              through coaching, we can change this
            </p>
            <div className="about-me-buttons-container">
              <div id="about-btn-div">
                <Link
                  id="imdb-btn"
                  target="_blank"
                  href="https://www.imdb.com/name/nm1710959/"
                >
                  My IMDB
                </Link>
              </div>
              <div id="about-btn-div">
                <Link id="about-btn" className="" href="/contact">
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
