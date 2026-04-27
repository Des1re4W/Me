import { useState } from "react";
import "../index.css";
import "./header.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">{`< / >`}</h1>

        <nav className={`nav ${open ? "open" : ""}`}>
          <a href="#home" onClick={() => setOpen(false)}>
            Home
          </a>

          <a href="#about" onClick={() => setOpen(false)}>
            About
          </a>

          <a href="#experience" onClick={() => setOpen(false)}>
            Experience
          </a>

          <a href="#education" onClick={() => setOpen(false)}>
            Education
          </a>

          <a
            href="#contact"
            className="btn"
            onClick={() => setOpen(false)}
          >
            Let's Connect!
          </a>
        </nav>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>
    </header>
  );
}