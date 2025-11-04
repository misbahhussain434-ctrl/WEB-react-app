import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Misbah Hussain</div>
      <div className="nav-links">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href='#Experience'>Experience</a>
        <a href='#Skills'>Skills</a>
        <a href='#Projects'>Projects</a>
        <a href="#contact" className="btn-get-in-touch">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
