import React, { useState } from "react";
import "./Letter.css";

const Letter = ({ cover, backCover }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="card"
      onClick={handleOpen}
      style={{
        transform: isOpen
          ? "perspective(2000px) rotateZ(-6deg) translateX(35px)"
          : undefined,
      }}
    >
      <div
        className="cover"
        style={{
          transform: isOpen ? "rotateY(-130deg)" : undefined,
        }}
      >
        <img
          src={backCover}
          alt="cover book image"
          loading="lazy"
          decoding="async"
          className="cover-img back-cover"
        />
        <img
          src={cover}
          alt="backface book image"
          loading="lazy"
          decoding="async"
          className="cover-img front-cover"
        />
      </div>

      <div className="content">
        <div className="program-page">
          {/* Decorative Corner Flourishes */}
          <svg className="corner-decor tl" viewBox="0 0 40 40" aria-hidden="true">
            <path d="M4 36 C4 16, 16 4, 36 4 M4 4 L14 4 M4 4 L4 14" stroke="#c59b27" strokeWidth="1.5" fill="none" />
            <circle cx="8" cy="8" r="2" fill="#c59b27" />
          </svg>
          <svg className="corner-decor tr" viewBox="0 0 40 40" aria-hidden="true">
            <path d="M36 36 C36 16, 24 4, 4 4 M36 4 L26 4 M36 4 L36 14" stroke="#c59b27" strokeWidth="1.5" fill="none" />
            <circle cx="32" cy="8" r="2" fill="#c59b27" />
          </svg>
          <svg className="corner-decor bl" viewBox="0 0 40 40" aria-hidden="true">
            <path d="M4 4 C4 24, 16 36, 36 36 M4 36 L14 36 M4 36 L4 26" stroke="#c59b27" strokeWidth="1.5" fill="none" />
            <circle cx="8" cy="32" r="2" fill="#c59b27" />
          </svg>
          <svg className="corner-decor br" viewBox="0 0 40 40" aria-hidden="true">
            <path d="M36 4 C36 24, 24 36, 4 36 M36 36 L26 36 M36 36 L36 26" stroke="#c59b27" strokeWidth="1.5" fill="none" />
            <circle cx="32" cy="32" r="2" fill="#c59b27" />
          </svg>

          <div className="program-body">
            {/* Header */}
            <div className="program-header">
              <h2 className="program-title-top">កម្មវិធី</h2>
              <h3 className="program-title-main">សិរីមង្គលអាពាហ៍ពិពាហ៍</h3>
              <div className="program-divider">
                <span className="divider-line"></span>
                <span className="divider-icon">✤</span>
                <span className="divider-line"></span>
              </div>
            </div>

            {/* Day 1 */}
            <div className="program-day-group">
              <div className="program-day-badge">
                កម្មវិធីថ្ងៃទី១ ៖ ថ្ងៃសៅរ៍ ទី០២ ខែមករា ឆ្នាំ២០២៧
              </div>
              <div className="program-schedule-list">
                <div className="schedule-row">
                  <span className="schedule-time">ម៉ោង ០២:០០ រសៀល</span>
                  <span className="schedule-dot">•</span>
                  <span className="schedule-text">ពិធីសែនក្រុងពាលី</span>
                </div>
                <div className="schedule-row">
                  <span className="schedule-time">ម៉ោង ០៣:០០ រសៀល</span>
                  <span className="schedule-dot">•</span>
                  <span className="schedule-text">ពិធីសូត្រមន្តចម្រើនព្រះបរិត្ត</span>
                </div>
                <div className="schedule-row">
                  <span className="schedule-time">ម៉ោង ០៤:០០ រសៀល</span>
                  <span className="schedule-dot">•</span>
                  <span className="schedule-text">ពិធីជុំពលា និងដាក់ខាន់ស្លា</span>
                </div>
                <div className="schedule-row">
                  <span className="schedule-time">ម៉ោង ០៥:០០ ល្ងាច</span>
                  <span className="schedule-dot">•</span>
                  <span className="schedule-text">អញ្ជើញភ្ញៀវពិសារអាហារពេលល្ងាច</span>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="program-day-group">
              <div className="program-day-badge">
                កម្មវិធីថ្ងៃទី២ ៖ ថ្ងៃអាទិត្យ ទី០៣ ខែមករា ឆ្នាំ២០២៧
              </div>
              <div className="program-schedule-list">
                <div className="schedule-row">
                  <span className="schedule-time">ម៉ោង ០៦:៣០ ព្រឹក</span>
                  <span className="schedule-dot">•</span>
                  <span className="schedule-text">ជួបជុំភ្ញៀវកិត្តិយសរៀបចំហែរជំនូន</span>
                </div>
                <div className="schedule-row">
                  <span className="schedule-time">ម៉ោង ០៧:០០ ព្រឹក</span>
                  <span className="schedule-dot">•</span>
                  <span className="schedule-text">ពិធីហែរជំនូនកំណត់ចូលរោងជ័យ</span>
                </div>
                <div className="schedule-row">
                  <span className="schedule-time">ម៉ោង ០៧:៣០ ព្រឹក</span>
                  <span className="schedule-dot">•</span>
                  <span className="schedule-text">ពិសារអាហារពេលព្រឹក</span>
                </div>
                <div className="schedule-row">
                  <span className="schedule-time">ម៉ោង ០៨:០០ ព្រឹក</span>
                  <span className="schedule-dot">•</span>
                  <span className="schedule-text">ពិធីបំពាក់ចិញ្ចៀន និងរៀបរាប់ផ្លែឈើ</span>
                </div>
                <div className="schedule-row">
                  <span className="schedule-time">ម៉ោង ០៩:០០ ព្រឹក</span>
                  <span className="schedule-dot">•</span>
                  <span className="schedule-text">ពិធីកាត់សក់បង្កក់សិរី កូនប្រុស-កូនស្រី</span>
                </div>
                <div className="schedule-row">
                  <span className="schedule-time">ម៉ោង ១០:៣០ ព្រឹក</span>
                  <span className="schedule-dot">•</span>
                  <span className="schedule-text">ពិធីបង្វិលពពិល សំពះផ្ទឹម សែនចងដៃ</span>
                </div>
                <div className="schedule-row">
                  <span className="schedule-time">ម៉ោង ១២:០០ ថ្ងៃត្រង់</span>
                  <span className="schedule-dot">•</span>
                  <span className="schedule-text">អញ្ជើញភ្ញៀវកិត្តិយសពិសារអាហារថ្ងៃត្រង់</span>
                </div>
                <div className="schedule-row">
                  <span className="schedule-time">ម៉ោង ០៥:០០ ល្ងាច</span>
                  <span className="schedule-dot">•</span>
                  <span className="schedule-text">អញ្ជើញភ្ញៀវកិត្តិយសពិសារភោជនាហារ</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="program-footer">
              <p className="program-venue">
                នៅគេហដ្ឋានខាងប្រុស ភូមិដូនឡី ឃុំគរ ស្រុកព្រៃឈរ ខេត្តកំពង់ចាម ដោយមេត្រីភាព ។
              </p>
              <p className="program-thanks">សូមអរគុណ !</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Letter;
