import React, { useEffect, useState } from "react";

function Hero() {
  const roles = [
    "Web Developer",
    "React.js Enthusiast",
    "Frontend Developer",
    "JavaScript Lover",
  ];

  const [currentRole, setCurrentRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // Typing effect
  useEffect(() => {
    if (charIndex < roles[roleIndex].length) {
      const timeout = setTimeout(() => {
        setCurrentRole((prev) => prev + roles[roleIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      // Pause before deleting
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setCurrentRole("");
        setRoleIndex((roleIndex + 1) % roles.length);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, roleIndex, roles]);

  // Smooth scroll for button
  const handleClick = (e) => {
    e.preventDefault();
    const contactSection = document.querySelector("#contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero">
      <div className="intro animate">
        <h1>
          <span className="highlight">Misbah Hussain</span>
        </h1>
        <h2 className="role">{currentRole}</h2>
        <p>
          A passionate Web Developer who loves crafting modern, interactive,
          and fully responsive web applications. I focus on writing clean,
          efficient, and maintainable code using React.js, Node.js, and the
          latest web technologies. I have hands-on experience in React.js,
          HTML, CSS, and JavaScript.
        </p>
        <a href="#contact" onClick={handleClick} className="btn-get-in-touch">
          Get in Touch
        </a>
      </div>
    </section>
  );
}

export default Hero;




