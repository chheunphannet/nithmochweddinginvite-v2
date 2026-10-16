import { Suspense, lazy, useEffect, useState } from "react";
import "./App.css";
import bgImage from "/images/DSC_6784.webp";
import bgName from "/images/nithmochname.webp";
import DropDown from "./dropdown/DropDown";
import insideLetter from "/images/insideletter.webp";
import coverImage from "/images/DSC_6757.webp";
import backCover from "/images/DSC_5318.webp";
import Reveal from "./components/Reveal";

const WeddingInvitation = lazy(
  () => import("./invitationcard/WeddingInvitation.jsx")
);
const Letter = lazy(() => import("./letter/Letter.jsx"));
const TrandingSlider = lazy(() => import("./gallery/TrandingSlider.jsx"));
const Location = lazy(() => import("./location/Location.jsx"));
const ChongdiaQR = lazy(() => import("./Chongdia/ChongdiaQR.jsx"));
const Footer = lazy(() =>
  import("./Footer/Footer.jsx").then((mod) => ({
    default: mod.Footer,
  }))
);
import InviteGenerator from "./invite/InviteGenerator.jsx";

function App() {
  const [guestName, setGuestName] = useState("");
  const [fontSize, setFontSize] = useState(13);
  const [currentView, setCurrentView] = useState(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      const search = window.location.search.toLowerCase();
      if (
        path.includes("invite") ||
        hash.includes("invite") ||
        search.includes("view=invite")
      ) {
        return "invite";
      }
    }
    return "home";
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      const search = window.location.search.toLowerCase();
      if (
        path.includes("invite") ||
        hash.includes("invite") ||
        search.includes("view=invite")
      ) {
        setCurrentView("invite");
      } else {
        setCurrentView("home");
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleNavigateInvite = () => {
    setCurrentView("invite");
    try {
      window.history.pushState({}, "", "/invite");
    } catch {
      window.location.hash = "invite";
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToHome = (sectionId) => {
    setCurrentView("home");
    try {
      window.history.pushState({}, "", window.location.search || "/");
    } catch {
      window.location.hash = "";
    }
    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    try {
      const search =
        window.location.search ||
        (window.location.hash.includes("?")
          ? window.location.hash.substring(window.location.hash.indexOf("?"))
          : "");
      const params = new URLSearchParams(search);
      let name = params.get("name");
      const size = params.get("size");

      if (name) {
        try {
          name = decodeURIComponent(name);
        } catch {
          // already decoded
        }
        name = name.replace(/\+/g, " ");
        setGuestName(name.trim());
      }
      if (size && !isNaN(Number(size))) {
        setFontSize(Number(size));
      }
    } catch {
      // fallback
    }
  }, []);

  useEffect(() => {
    const preload = () => {
      import("./invitationcard/WeddingInvitation.jsx");
      import("./letter/Letter.jsx");
      import("./gallery/TrandingSlider.jsx");
      import("./location/Location.jsx");
      import("./Chongdia/ChongdiaQR.jsx");
      import("./Footer/Footer.jsx");
    };

    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(preload, { timeout: 1500 });
      return () => window.cancelIdleCallback(id);
    }

    const timeoutId = window.setTimeout(preload, 800);
    return () => window.clearTimeout(timeoutId);
  }, []);

  if (currentView === "invite") {
    return (
      <div className="mobile-app">
        <InviteGenerator onBack={() => handleBackToHome()} />
      </div>
    );
  }

  return (
    <div className="mobile-app">
      <header>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 20px",
            background: "transparent",
            borderRadius: "10px",
          }}
        >
          <DropDown
            onNavigateInvite={handleNavigateInvite}
            onNavigateSection={(id) => handleBackToHome(id)}
          />
          <h3
            style={{
              background: "none",
              color: "#000000ff",
              fontFamily: "Moulpali, Arial",
              lineHeight: "0",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
            }}
          >
            សិរីមង្គលអាពាហ៏ពិពាហ៏
          </h3>
          <div className="spacer"></div>
        </div>
      </header>
      <main>
        <div
          className="start-image"
          style={{
            backgroundImage: `linear-gradient(to bottom, #ffffffff 1%, transparent 20.0%), url(${bgImage})`,
          }}
        >
          <img
            src={bgName}
            alt="Nithmoch Name"
            fetchpriority="high"
            decoding="sync"
            style={{
              width: "80%",
              maxWidth: "340px",
              height: "auto",
              background: "none",
            }}
          />
          <Reveal
            style={{
              position: "absolute",
              top: "420px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              backgroundColor: "transparent",
            }}
          >
            <h1
              style={{
                lineHeight: "0",
                background: "none",
                fontSize: "18px",
                color: "#ffffffff",
                fontFamily: "Moulpali, Arial",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              សូមគោរពអញ្ចើញ
            </h1>
            <div
              style={{
                backgroundImage: `url('/images/guest-name-gold-shadow.webp')`,
                backgroundColor: "transparent",
                width: "200px",
                height: "100px",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                marginTop: "0px",
                backgroundPosition: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="guest-name"
            >
              <h3
                style={{
                  fontFamily: "Kdam Thmor Pro, Arial",
                  fontSize: `${fontSize + "px"}`,
                  color: "#d4af37",
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)",
                  background: "transparent",
                }}
              >
                {guestName}
              </h3>
            </div>
          </Reveal>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "60px",
          }}
          id="Date"
        >
          <Suspense fallback={null}>
            <WeddingInvitation />
          </Suspense>
        </div>
        <Reveal
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            padding: "40px 0",
            gap: "20px",
            backgroundColor: "#ffffffff",
          }}
        >
          <h2
            style={{
              fontFamily: "Oswald, Arial",
              background: "none",
              color: "#555",
              margin: "0",
            }}
          >
            Wedding Ceremony Program
          </h2>
          <h3
            style={{ margin: "0", color: "#555", fontFamily: "Kdam Thmor Pro" }}
          >
            កម្មវិធីសិរីមង្គលអាពាហ៏ពិពាហ៏
          </h3>

          <div id="Program">
            <Suspense fallback={null}>
              <Letter
                insideLetter={insideLetter}
                cover={coverImage}
                backCover={backCover}
              />
            </Suspense>
          </div>

          <p
            style={{
              fontFamily: "Oswald, Arial",
              background: "none",
              color: "#555",
              fontSize: "12px",
              margin: "0",
            }}
          >
            Click to see Wedding Ceremony Program
          </p>
          <p
            style={{
              margin: "0",
              lineHeight: "0.5",
              color: "#555",
              fontFamily: "Kdam Thmor Pro",
              fontSize: "12px",
            }}
          >
            ចុចលើរូបដើម្បីមើលកម្មវិធីសិរីមង្គលអាពាហ៏ពិពាហ៏
          </p>
        </Reveal>
        <div id="Photo">
          <Suspense fallback={null}>
            <TrandingSlider />
          </Suspense>
        </div>
        <div style={{ paddingBottom: "40px" }} id="Location">
          <Suspense fallback={null}>
            <Location />
          </Suspense>
        </div>
        <div style={{ paddingBottom: "40px" }} id="Chongdia">
          <Suspense fallback={null}>
            <ChongdiaQR />
          </Suspense>
        </div>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
