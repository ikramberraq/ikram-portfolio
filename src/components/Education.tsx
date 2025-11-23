
const Education = () => {
  
  const education = [
    {
      date: "2023 – 2025",
      title: "Diplôme d’Ingénieure d’État – Sciences des Données & Développement Informatique",
      place: "ESTEM, Casablanca",
    },
    {
      date: "2021 – 2022",
      title: "Licence Professionnelle – Administrateur Base de Données",
      place: "Université Chouaib Doukkali, El Jadida",
    },
    {
      date: "2019 – 2021",
      title: "Diplôme de Technicien Spécialisé – Développement Informatique",
      place: "ISTA Hay Riad, Rabat",
    },
     {
      date: "2017 – 2018",
      title: "Baccalauréat – Science mathématique A BIOF",
      place: "Lycée Ibn El Khatib, Salé",
    },
  ];

  return (
    <section id="education" className="py-28 px-4 max-w-5xl mx-auto">

      {/* --- EDUCATION --- */}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
        Éducation
      </h2>

      <div className="relative border-l border-slate-700 ml-4 md:ml-8">
        {education.map((edu, index) => (
          <div key={index} className="mb-12 ml-4 md:ml-6">
            <div className="w-3 h-3 rounded-full bg-cnssTeal absolute -left-1.5 mt-2" />

            <p className="text-xs uppercase tracking-[0.17em] text-slate-400 mb-1">
              {edu.date}
            </p>

            <h3 className="text-lg font-semibold text-white">{edu.title}</h3>
            <p className="text-xs text-cnssTeal">{edu.place}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
