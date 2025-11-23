import { Database, Server, LayoutDashboard, Code2 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Digitalisation des flux d’état civil DGCT–CNSS",
      tag: "Projet PFE · CNSS",
      icon: <Server size={24} />,
      description:
        "Mise en place de l’échange automatisé des données de naissance et de décès entre la DGCT et la CNSS : web services sécurisés, traitements batch PL/SQL, tables de logs et gestion des rejets.",
      tech: ["Oracle PL/SQL", "Web Services", "Oracle DB", "Batch"],
    },
    {
      title: "Gestion des RIB & flux bancaires",
      tag: "Projet CNSS",
      icon: <Database size={24} />,
      description:
        "Développement de packages PL/SQL pour l’extraction des RIB, contrôle de fiabilité, gestion des rejets bancaires et optimisation de requêtes volumineuses.",
      tech: ["PL/SQL", "UTL_FILE","Oracle Forms", "Optimisation SQL"],
    },
  {
  title: "Portfolio professionnel – React + Tailwind",
  tag: "Projet personnel",
  icon: <LayoutDashboard size={24} />,
  description:
    "Développement d’un portfolio moderne et responsive avec React, Tailwind CSS et Vite. Le projet inclut une interface élégante, animations, sections dynamiques (Hero, Compétences, Projets, Contact) et intégration d’un système de design sur mesure.",
  tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
},
    {
      title: "Interface de gestion des déclarations",
      tag: "Frontend · Maquette",
      icon: <Code2 size={24} />,
      description:
        "Frontend React pour visualiser les lots de déclarations de naissance et de décès avec filtres, recherche, pagination backend et export CSV, destiné aux agents CNSS.",
      tech: ["React", "TypeScript", "Tailwind CSS", "API REST"],
    },
  ];

  return (
    <section
      id="projects"
      className="py-28 px-4 max-w-6xl mx-auto"
    >
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Projets
          </h2>
          <p className="text-slate-300 mt-2 max-w-xl">
            Une sélection de projets professionnels et personnels qui illustrent
            mon expérience en PL/SQL, Java/Spring Boot et React.
          </p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={index}
            className="group bg-slate-900/40 border border-slate-700 rounded-2xl p-6 shadow-md hover:shadow-cnssTeal/30 hover:border-cnssTeal transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="text-cnssTeal">
                {project.icon}
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  {project.tag}
                </p>
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-300 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full border border-slate-600 bg-slate-900/60 text-slate-200 group-hover:border-cnssTeal/70"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
