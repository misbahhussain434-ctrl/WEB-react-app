import React from "react";
function Experience() {
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "ABC Tech",
      duration: "June 2024 - Aug 2024",
    },
    {
      title: "Web Development Projects",
      company: "Freelance",
      duration: "2023 - Present",
    },
    {
      title: 'Data Analytics Porject',
      company: 'Data Scientist',
      duration: '2025-present',
    },
    { 
      title: 'Business Intelligence project',
      company: 'XYZ company',
      duration: '2023-present'
    }
  ];

  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <div className="timeline">
        {experiences.map((job, index) => (
          <div className="job" key={index}>
            <span className="job-icon"></span>
            <div className="job-details">
              <h3>{job.title}</h3>
              <span>{job.company}, {job.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;

