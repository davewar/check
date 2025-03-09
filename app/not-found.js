import Link from "next/link";
import "./not-found.css";

export default function NotFound() {
  return (
    <main id="lost-page">
      <div id="not-found-image">
        <div id="content-flex">
          <h2 className="">Page Not Found</h2>
          <p>Sorry, the page you are looking for does not exist.</p>
          <p>
            Go back to the{" "}
            <Link className="white underline text-bolder" href="/">
              Home
            </Link>{" "}
            page.
          </p>
        </div>
      </div>
    </main>
  );
}
