import React, { useState, useMemo } from "react";
import "./InviteGenerator.css";

const InviteGenerator = ({ onBack }) => {
  const [name, setName] = useState("");
  const [size, setSize] = useState(13);
  const [hasGenerated, setHasGenerated] = useState(false);
  const [copied, setCopied] = useState(false);

  // Helper to format clean, readable Khmer param without breaking in Telegram/chat apps
  const formatCleanName = (str) => {
    return str
      .trim()
      .replace(/[&?#=]/g, (char) => encodeURIComponent(char)) // escape query delimiters
      .replace(/\s+/g, "%20"); // use %20 for spaces so Telegram/chat apps don't cut off after space
  };

  // Generate clean, readable URL
  const generatedUrl = useMemo(() => {
    const origin = window.location.origin;
    const cleanName = formatCleanName(name);
    if (!cleanName) return `${origin}/`;

    const sizeQuery = size && size !== 13 ? `&size=${size}` : "";
    return `${origin}/?name=${cleanName}${sizeQuery}`;
  }, [name, size]);

  const handleGenerate = (e) => {
    e?.preventDefault();
    setHasGenerated(true);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback copy
      const textArea = document.createElement("textarea");
      textArea.value = generatedUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const displayName = name.trim() || "ឈ្មោះភ្ញៀវកិត្តិយស";

  return (
    <div className="invite-page">
      {/* Top Navigation Bar */}
      <header className="invite-header">
        <button type="button" onClick={onBack} className="invite-back-btn">
          <span className="material-symbols-outlined">arrow_back</span>
          <span>ត្រឡប់ក្រោយ</span>
        </button>
        <h1 className="invite-title">បង្កើតតំណភ្ជាប់ធៀប</h1>
        <div style={{ width: "80px" }}></div>
      </header>

      <main className="invite-content">
        {/* Form Settings Card */}
        <section className="invite-card">
          <h2 className="invite-card-title">
            <span className="material-symbols-outlined">edit_note</span>
            <span>ព័ត៌មានភ្ញៀវកិត្តិយស (Guest Info)</span>
          </h2>

          <div className="invite-form-group">
            <label className="invite-label" htmlFor="guest-name-input">
              ឈ្មោះភ្ញៀវកិត្តិយស
            </label>
            <input
              id="guest-name-input"
              type="text"
              className="invite-input-text"
              placeholder="ឧ. ឯកឧត្តម លោកជំទាវ / លោក..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="invite-form-group">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <label className="invite-label">ទំហំអក្សរ (Font Size)</label>
              <span className="size-display-badge">{size}px</span>
            </div>

            <div className="size-control-row">
              <button
                type="button"
                className="size-btn"
                onClick={() => setSize((s) => Math.max(8, s - 1))}
                aria-label="Decrease font size"
              >
                -
              </button>
              <input
                type="range"
                className="size-slider"
                min="9"
                max="24"
                step="1"
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
              />
              <button
                type="button"
                className="size-btn"
                onClick={() => setSize((s) => Math.min(26, s + 1))}
                aria-label="Increase font size"
              >
                +
              </button>
            </div>

            {/* Quick Presets */}
            <div className="size-presets">
              {[11, 13, 15, 17].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  className={`preset-chip ${size === preset ? "selected" : ""}`}
                  onClick={() => setSize(preset)}
                >
                  {preset === 11 && "តូច (11px)"}
                  {preset === 13 && "មធ្យម (13px)"}
                  {preset === 15 && "ធំ (15px)"}
                  {preset === 17 && "ធំខ្លាំង (17px)"}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="generate-action-btn"
            onClick={handleGenerate}
          >
            <span className="material-symbols-outlined">auto_fix_high</span>
            <span>បង្កើត link</span>
          </button>
        </section>

        {/* Live Card Preview */}
        <section className="invite-card">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2 className="invite-card-title">
              <span className="material-symbols-outlined">visibility</span>
              <span>ទិដ្ឋភាពជាក់ស្តែង (Live Preview)</span>
            </h2>
            <span
              style={{
                fontSize: "11px",
                color: name.trim() ? "#10b981" : "#888888",
                fontWeight: "bold",
              }}
            >
              {name.trim() ? "✓ ទំហំជាក់ស្ដែង" : "ទម្រង់គំរូ"}
            </span>
          </div>

          <div className="preview-stage">
            <div className="preview-inner">
              <p className="preview-invite-text">សូមគោរពអញ្ចើញ</p>
              <div className="preview-gold-box">
                <p
                  className="preview-guest-text"
                  style={{
                    fontSize: `${size}px`,
                  }}
                >
                  {displayName}
                </p>
              </div>
            </div>
          </div>

          <p className="preview-tip">
            💡 ពិនិត្យមើលអក្សរក្នុងប្រអប់ខាងលើ ប្រសិនបើវែងពេកអាចបន្ថយទំហំអក្សរ (Font Size) ឱ្យសមល្មម។
          </p>
        </section>

        {/* Share & Copy Section */}
        {hasGenerated && (
          <section className="invite-card" style={{ border: "1.5px solid #d4af37" }}>
            <h2 className="invite-card-title" style={{ color: "#10b981" }}>
              <span className="material-symbols-outlined">link</span>
              <span>តំណភ្ជាប់សម្រាប់ផ្ញើជូនភ្ញៀវ (Share Link)</span>
            </h2>

            <div
              className="url-display-box"
              onClick={handleCopy}
              title="ចុចដើម្បីចម្លង"
              style={{ cursor: "pointer" }}
            >
              {generatedUrl}
            </div>

            <div className="action-buttons-grid">
              <button
                type="button"
                className={`copy-link-btn ${copied ? "copied" : ""}`}
                onClick={handleCopy}
              >
                <span className="material-symbols-outlined">
                  {copied ? "check_circle" : "content_copy"}
                </span>
                <span>
                  {copied ? "បានចម្លងរួចរាល់!" : "ចម្លងតំណភ្ជាប់"}
                </span>
              </button>

              <a
                href={generatedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="open-invite-btn"
              >
                <span className="material-symbols-outlined">mail</span>
                <span>បើកធៀប</span>
              </a>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default InviteGenerator;
