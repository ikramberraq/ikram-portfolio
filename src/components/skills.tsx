import { Code, Database, Laptop, Settings } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      title: "PL/SQL & Oracle",
      icon: <Database size={26} />,
      items: ["PL/SQL avancé", "Performance tuning", "Procedures & Packages", "Triggers", "Batch Processing"],
    },
    {
      title: "Java / Spring Boot",
      icon: <Settings size={26} />,
      items: ["REST API", "Spring Data JPA", "Spring Security", "Microservices", "Validation & Mapping"],
    },
    {
      title: "Frontend",
      icon: <Laptop size={26} />,
      items: ["React", "TypeScript", "Tailwind CSS", "UI/UX", "Responsive Design"],
    },
    {
      title: "Dev Tools",
      icon: <Code size={26} />,
      items: ["Git / GitLab", "Docker", "Postman", "Vite", "VS Code / IntelliJ"],
    },
  ];

  return (
    <section
      id="skills"
      className="py-28 px-4 max-w-6xl mx-auto text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
        Compétences
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-slate-900/40 border border-slate-700 rounded-2xl p-6 shadow-md hover:shadow-cnssTeal/20 hover:border-cnssTeal transition-all duration-300 hover:-translate-y-1"
          >
            <div className="text-cnssTeal mb-4 flex justify-center">
              {skill.icon}
            </div>

            <h3 className="text-xl font-semibold text-white mb-3">
              {skill.title}
            </h3>

            <ul className="text-slate-300 text-sm space-y-1">
              {skill.items.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
