import React from "react";
import "./ChongdiaQR.css";
import Reveal from "../components/Reveal";
import bgImage from "/images/DSC_5224.webp";
import qrSrc from "/images/qrcode.png";
import acledaLogo from "/images/logo1.png";

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
            src={acledaLogo}
            alt="ACLEDA Bank"
            className="chongdia-logo"
            loading="lazy"
            decoding="async"
          />
          <img
            src={qrSrc}
            alt="QR Code"
            className="chongdia-qr-img"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </Reveal>
  );
};

export default ChongdiaQR;
