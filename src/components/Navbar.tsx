
const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-br from-cnssBlue to-cnssTeal text-white font-bold h-9 w-9 flex items-center justify-center rounded-xl">
            I
          </div>
          <div className="text-slate-200">
            <p className="font-semibold">Ikram Berraq</p>
            <p className="text-xs text-slate-400">Ingénieure d’État</p>
          </div>
        </div>

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-6 text-sm text-slate-300">
          <a href="#home" className="hover:text-cnssTeal">Accueil</a>
          <a href="#skills" className="hover:text-cnssTeal">Compétences</a>
          <a href="#projects" className="hover:text-cnssTeal">Projets</a>
          <a href="#education" className="hover:text-cnssTeal">Parcours</a>
          <a href="#experience" className="hover:text-cnssTeal">Expériences</a>
          <a href="#contact" className="hover:text-cnssTeal">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
