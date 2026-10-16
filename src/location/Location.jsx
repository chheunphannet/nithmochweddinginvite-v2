import React from "react";
import "./Location.css";
import Reveal from "../components/Reveal";

const Location = () => {
  return (
    <Reveal className="wedding-application-container">
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
        កម្មវិធីមង្គលអាពាហ៍ពិពាហ៍
      </h2>
      <div className="wedding-application">
        <div className="wedding-application-content">
          <div className="icon-txt">
            <div className="icon-box">
              <span className="material-symbols-outlined">map</span>
            </div>
            <p style={{ margin: 0, lineHeight: "1.6" }}>
              <span
                style={{
                  color: "#30A952",
                  fontWeight: "bold",
                  fontFamily: "Kdam Thmor Pro, Arial",
                  fontSize: "14px",
                  display: "inline-block",
                  marginBottom: "4px",
                }}
              >
                ទីតាំងកម្មវិធី
              </span>
              <br />
              <span
                style={{
                  color: "#555555",
                  fontFamily: "Kdam Thmor Pro, Arial",
                  fontSize: "13px",
                }}
              >
                នៅគេហដ្ឋានខាងស្រី ភូមិតាម៉ូត ឃុំគរ ស្រុកព្រៃឈរ ខេត្តកំពង់ចាម
              </span>
            </p>
          </div>
          <div className="map-frame">
            <iframe
              title="Wedding Location"
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d1950.5170078783317!2d105.22054849685082!3d12.109823892605506!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDA2JzM2LjIiTiAxMDXCsDEzJzE1LjkiRQ!5e0!3m2!1skm!2skh!4v1770801112583!5m2!1skm!2skh"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <a
            href="https://www.google.com/maps/place/12%C2%B006'36.2%22N+105%C2%B013'15.9%22E/@12.110049,105.221083,1715m/data=!3m1!1e3!4m4!3m3!8m2!3d12.110049!4d105.221083?entry=ttu&g_ep=EgoyMDI2MDIwOC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="to-google-map"
          >
            <span className="material-symbols-outlined">map_search</span>
            ចុចទៅកាន់ទីតាំងកម្មវិធី
          </a>
        </div>
      </div>
    </Reveal>
  );
};

export default Location;