import "./globals.css";
import "./index.css";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import ContactProvider from "../app/contexts/Contact";

import "./index.css";
import ContactFooter from "../components/contactFooter/ContactFooter";
import Consent from "../components/cookieConsent/Consent";

import Toast from "../components/Toast";
import localFont from "next/font/local";

import { Poppins, Special_Elite } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const special = Special_Elite({
  subsets: ["latin"],
  weight: ["400"],
});

// const courier = Courier_Prime({
//   subsets: ["latin"],
//   weight: ["400", "700"],
// });

// https://www.onlinewebfonts.com/search?q=tenorite
const myFont = localFont({
  src: [
    {
      path: "../public/fonts/tenorite/fonnts.com-Tenorite_Regular.ttf",
      weight: "normal",
      style: "normal",
      fallback: ["poppins", "system-ui"],
    },
    {
      path: "../public/fonts/tenorite/fonnts.com-Tenorite_Bold.ttf",
      weight: "bold",
      style: "normal",
      fallback: ["poppins", "system-ui"],
    },
  ],
});

const myLunaFont = localFont({
  src: [
    {
      path: "../public/fonts/luna/Luna-2geX.ttf",
      weight: "normal",
      style: "normal",
    },
  ],
});

export { myFont, myLunaFont, special, poppins };

// myfont = nav menu, mylunafont = quotelessJson, special = main font, poppins = backup

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${special.className} `}>
        <Toast />
        <ContactProvider>
          <div className="App">
            <Navbar />
            {children}
            <Footer />
            <ContactFooter />
            <Consent />
          </div>
        </ContactProvider>
      </body>
    </html>
  );
}
