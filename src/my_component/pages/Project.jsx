import React from "react";

function Projects() {
  const projectList = [
    {
      title: "Public Transport Route Optimization",
      description:
        "Designed a route optimization model using K-Means and Regression to improve public transport efficiency with over 70% accuracy.",
      tech: ["Python", "Pandas", "Matplotlib", "Machine Learning"],
    },
    {
      title: "Limelight Clothing Website",
      description:
        "Developed a responsive and elegant e-commerce website for my clothing brand using React and modern UI techniques.",
      tech: ["React", "CSS", "JavaScript", "Vite"],
    },
    {
      title: "Student Performance Prediction",
      description:
        "Implemented Logistic Regression to predict student pass/fail outcomes and visualize the data through charts.",
      tech: ["Python", "Scikit-learn", "Matplotlib"],
    },
    {
      title: "AI Diagnostic System",
      description:
        "Built a prototype system for early disease prediction using Naive Bayes and data preprocessing pipelines.",
      tech: ["Machine Learning", "Python", "Numpy"],
    },
  ];

  return (
    <section id="projects" className="projects-section bg-gray-50 py-16 px-6">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
        My Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-lg rounded-2xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
          >
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-200 text-gray-700 px-3 py-1 text-sm rounded-full"  >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;
