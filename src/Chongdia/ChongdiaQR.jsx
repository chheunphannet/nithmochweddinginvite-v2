import React from "react";
import "./ChongdiaQR.css";
import Reveal from "../components/Reveal";
import bgImage from "/images/DSC_5224.webp";
import qrSrc from "/images/qrcode.png";
import abaLogo from "/images/aba-web-top-logo.png";

const ChongdiaQR = () => {
  return (
    <Reveal className="chongdia-qr-container">
      <h2
        style={{
          fontFamily: "Moulpali, Arial",
          fontSize: "18px",
          fontWeight: "bold",
          color: "#555",
          textAlign: "center",
          margin: "0",
        }}
      >
        ចងដៃតាមរយៈ QRCODE
      </h2>
      <div
        className="chongdia-card"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="chongdia-qr-box">
          <img
            src={abaLogo}
            alt="ABA Bank"
            className="chongdia-logo"
            loading="lazy"
            decoding="async"
          />
          <img
            src={qrSrc}
            alt="ABA KHQR - PHAL LOAM"
            className="chongdia-qr-img"
            loading="lazy"
            decoding="async"
          />
          <span className="chongdia-account-name">PHAL LOAM</span>
        </div>
      </div>
    </Reveal>
  );
};

export default ChongdiaQR;
