
const Experience = () => {
  const work = [
    {
      date: "Novembre 2022 – Présent",
      title: "Développeuse Java · PL/SQL",
      place: "CNSS – Caisse Nationale de Sécurité Sociale",
      description: [
        "Développement et maintenance de l’application de gestion des modes de paiement.",
        "Contribution au projet d’échange avec le Registre Social Unifié (RSU).",
        "Conception et développement du projet DGCT pour la déclaration et la mise à jour des actes de naissance.",
        "Technologies : Spring Boot, PL/SQL, JEE, Oracle."
      ]
    },
    {
      date: "Juillet 2022 – Septembre 2022",
      title: "Développeuse stagiaire",
      place: "Ministère de la Santé et de la Protection Sociale",
      description: [
        "Développement d’une application web pour la gestion des inscriptions au Conseil Régional de l’Ordre des Médecins.",
        "Technologies : Spring Boot, Thymeleaf, MySQL."
      ]
    },
    {
      date: "Mai 2021",
      title: "Développeuse stagiaire",
      place: "Ministère de la Justice",
      description: [
        "Développement d’une application desktop pour la gestion des demandes de clés de certification électronique.",
        "Technologies : C#, ADO.NET, SQL Server."
      ]
    }
  ];



  return (
    <section id="experience" className="py-28 px-4 max-w-5xl mx-auto">

      {/* --- EXPERIENCE --- */}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
        Expérience Professionnelle
      </h2>

      <div className="relative border-l border-slate-700 ml-4 md:ml-8 mb-20">
        {work.map((exp, index) => (
          <div key={index} className="mb-12 ml-4 md:ml-6">
            <div className="w-3 h-3 rounded-full bg-cnssTeal absolute -left-1.5 mt-2" />

            <p className="text-xs uppercase tracking-[0.17em] text-slate-400 mb-1">
              {exp.date}
            </p>

            <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
            <p className="text-xs text-cnssTeal mb-2">{exp.place}</p>

            <ul className="text-sm text-slate-300 space-y-1 list-disc ml-4">
              {exp.description.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>


    </section>
  );
};

export default Experience;
