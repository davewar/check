import Link from "next/link";
import "./footer.css";

// import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <>
      <footer id="footer">
        <div className="main-container">
          <div className="footer-private text-sm ">
            <p id="">
              Susan Warwicker |{" "}
              <Link
                href="/policy"
                className="private"
                aria-label="link to the policy page"
              >
                Privacy-Policy |
              </Link>{" "}
              &copy;Checking The Gate {year} |{" "}
              <a className="gold private" href="tel:+447979470966">
                07979 470 966
              </a>{" "}
              |{" "}
              <a
                className="gold private"
                href="mailto: checkingthegateltd@gmail.com"
              >
                checkingthegateltd@gmail.com{" "}
              </a>{" "}
            </p>
          </div>

          {/* <div className="david2">
            <Link
              target="_blank"
              rel="me"
              aria-label="link to our Instagram home page"
              href="https://www.instagram.com/"
            >
              {" "}
              <FaInstagramSquare className="social-media-icons-white" />
            </Link>
          </div> */}

          <div className="david text-sm">
            <p id="">
              Susan Warwicker |{" "}
              <Link
                href="/policy"
                className="private"
                aria-label="link to the policy page"
              >
                Privacy-Policy |
              </Link>{" "}
              &copy;Checking The Gate {year} |{" "}
              <a className="gold private" href="tel:+447979470966">
                07979 470 966
              </a>{" "}
              |{" "}
              <a
                className="gold private"
                href="mailto: info@checkin-the-gate.com"
              >
                checkingthegateltd@gmail.com{" "}
              </a>
              {/* {" |"}{" "} */}
            </p>{" "}
            {/* <Link
              target="_blank"
              rel="me"
              aria-label="link to our Instagram home page"
              href="https://www.instagram.com/"
            >
              {" "}
              <FaInstagramSquare className="social-media-icons-white" />
            </Link> */}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
