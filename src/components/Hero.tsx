import ikramImage from "../assets/ikram.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-52 pb-20 px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12"
    >
      {/* TEXTE À GAUCHE */}
      <div className="flex-1 space-y-6">
        <p className="text-cnssTeal text-xs uppercase tracking-[0.25em] font-semibold">
          Portfolio – Développement logiciel & Data
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Ikram Berraq
        </h1>

        <p className="text-lg text-slate-300 max-w-xl">
          Ingénieure d’État en développement logiciel, spécialisée en PL/SQL,
          Java/Spring Boot, traitements batch et interfaces modernes avec React + Tailwind CSS.
        </p>

        {/* Petits badges techno */}
        <div className="flex flex-wrap gap-3 text-xs text-slate-200">
          <span className="px-3 py-1 rounded-full border border-slate-600/70 bg-slate-900/40">
            PL/SQL · Oracle · Performance
          </span>
          <span className="px-3 py-1 rounded-full border border-slate-600/70 bg-slate-900/40">
            Java · Spring Boot · REST API
          </span>
          <span className="px-3 py-1 rounded-full border border-slate-600/70 bg-slate-900/40">
            React · TypeScript · Tailwind
          </span>
        </div>

        {/* Boutons */}
        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href="#contact"
            className="px-6 py-2.5 bg-gradient-to-r from-cnssBlue to-cnssTeal rounded-full text-white font-medium shadow-md shadow-cnssBlue/40 hover:translate-y-0.5 hover:shadow-lg hover:shadow-cnssTeal/40 transition-transform duration-200"
          >
            Me contacter
          </a>

          <a
            href="/BERRAQ_IKRAM.pdf"
            download
            className="px-6 py-2.5 rounded-full border border-slate-600 text-slate-200 hover:border-cnssTeal hover:text-cnssTeal hover:bg-slate-900/40 transition-colors duration-200"
          >
            Télécharger mon CV
          </a>
        </div>
      </div>

      {/* PHOTO À DROITE */}
     <div className="flex-1 flex justify-center">
  <div className="relative">
    
    <div className="absolute -inset-4 bg-gradient-to-tr from-cnssBlue/40 via-cnssTeal/40 to-transparent blur-3xl opacity-50 pointer-events-none" />

    <div className="relative bg-slate-900/60 border border-slate-700 rounded-full p-3 shadow-xl animate-float hover:scale-[1.02] transition-transform duration-300">
      <img
        src={ikramImage}
        alt="Ikram Berraq"
        className="w-64 h-64 md:w-72 md:h-72 rounded-full object-cover"
      />
    </div>
  </div>
</div>
    </section>
  );
};

export default Hero;
