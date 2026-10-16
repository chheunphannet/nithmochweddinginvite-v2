import React, { useState, useEffect, useRef } from "react";
import "./DropDown.css";
const textDropdown = ["Location", "Date", "Photo", "Program", "Invite"];

const DropDown = ({ onNavigateInvite, onNavigateSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleItemClick = (item) => {
    if (item === "Invite") {
      if (onNavigateInvite) {
        onNavigateInvite();
      }
    } else {
      if (onNavigateSection) {
        onNavigateSection(item);
      } else {
        const element = document.getElementById(item);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
    setIsOpen(false);
  };

  const listItemStyle = {
    padding: "8px 15px",
    cursor: "pointer",
    background: "none",
    color: "#000000",
    backgroundColor: "transparent",
    transition: "background-color 0.2s",
  };

  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
        background: "none",
      }}
      ref={dropdownRef}
    >
      <button
        type="button"
        aria-label="Navigation Menu"
        style={{
          border: "0",
          background: "transparent",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "4px",
        }}
        onClick={toggleDropdown}
      >
        <span className={`icon ${isOpen ? "rotate" : ""}`}>
          {isOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 4h18v2H3V4zm0 7h12v2H3v-2zm0 7h18v2H3v-2z" />
            </svg>
          )}
        </span>
      </button>
      {isOpen && (
        <ul
          style={{
            opacity: 0.95,
            position: "absolute",
            top: "100%",
            left: 0,
            backgroundColor: "white",
            padding: "5px",
            margin: "5px 0 0 0",
            listStyle: "none",
            minWidth: "100px",
            borderRadius: "5px",
            zIndex: 10,
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.15)",
          }}
        >
          {textDropdown.map((item) => (
            <li
              className="dropdown-item"
              key={item}
              style={{
                ...listItemStyle,
                color: item === "Invite" ? "#b8860b" : "#000000",
                fontWeight: item === "Invite" ? "bold" : "normal",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
              onClick={() => handleItemClick(item)}
            >
              {item === "Invite" && <span style={{ fontSize: "14px" }}>✉</span>}
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
