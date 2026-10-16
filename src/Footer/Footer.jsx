import React from "react";
import Reveal from "../components/Reveal";

export const Footer = () => {
  const logoSize = 30;
  return (
    <Reveal className="footer" style={{ paddingTop: "30px" }}>
      <h2
        style={{
          textAlign: "center",
          fontFamily: "Kdam Thmor Pro, Arial, sans-serif",
          fontSize: "13px",
          fontWeight: "normal",
          lineHeight: "1.8",
          color: "#555555",
          padding: "0 15px",
        }}
      >
        <span
          style={{
            fontFamily: "Moulpali, Arial, sans-serif",
            fontSize: "17px",
            fontWeight: "bold",
            color: "#555",
            display: "inline-block",
            marginBottom: "6px",
          }}
        >
          សូមថ្លែងអំណរអរគុណ
        </span>
        <br />
        វត្តមានឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា
        ជាកិត្តិយសដ៏ឧត្តុង្គឧត្តម ចំពោះគ្រួសាររបស់យើងខ្ញុំ។
      </h2>
      <div
        style={{
          marginTop: "60px",
          width: "100%",
          height: "50px",
          marginBottom: "50px",
        }}
      >
        <p
          style={{
            textAlign: "center",
            fontFamily: "Kdam Thmor Pro, Arial, sans-serif",
            fontSize: "13px",
            lineHeight: "1.8",
            color: "#555555",
            margin: "0 0 12px 0",
          }}
        >
          បង្កើតធៀបការឌីជីថលរបស់អ្នកឥឡូវនេះ
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <img
              src="/images/2021_Facebook_icon.svg.png"
              alt="Facebook"
              width={logoSize}
              height={logoSize}
              loading="lazy"
              decoding="async"
            />
            <a
              href="https://www.facebook.com/share/1GEypBfhGk/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "13px", textDecoration: "underline", color: "#1877F2", fontFamily: "Oswald, Arial" }}
            >
              Facebook
            </a>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <img
              src="/images/Telegram_logo.svg.webp"
              alt="Telegram"
              width={logoSize}
              height={logoSize}
              loading="lazy"
              decoding="async"
            />
            <a
              href="https://t.me/chheunphanet"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "13px", textDecoration: "underline", color: "#229ED9", fontFamily: "Oswald, Arial" }}
            >
              Telegram
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default Footer;
