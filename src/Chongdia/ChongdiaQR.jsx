import React from "react";
import "./ChongdiaQR.css";
import Reveal from "../components/Reveal";
import bgImage from "/images/DSC_5224.webp";
import qrSrc from "/images/aba-qr.jpg";

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
        ចងដៃតាមរយៈ QRCODE (ABA Bank)
      </h2>
      <div
        className="chongdia-card"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="chongdia-qr-box">
          <img
            src={qrSrc}
            alt="ABA KHQR - PHAL LOAM"
            className="chongdia-aba-qr"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </Reveal>
  );
};

export default ChongdiaQR;
