import React, { useState } from "react";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent("Contact via portfolio");
    const body = encodeURIComponent(
      `Bonjour Ikram,\n\nNom : ${name}\nEmail : ${fromEmail}\n\nMessage :\n${message}\n\n`
    );

    // 👉 Ouvre Gmail avec un nouveau message
    const gmailUrl = `https://mail.google.com/mail/?view=cm&to=ikramberraq1@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank");
  };

  return (
    <section
      id="contact"
      className="py-28 px-4 max-w-6xl mx-auto"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Me contacter
        </h2>
        <p className="text-slate-300 mt-3 max-w-2xl mx-auto">
          Disponible pour des opportunités en développement logiciel, PL/SQL,
          Java/Spring Boot et projets full-stack. N’hésitez pas à m’écrire.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        {/* COLONNE GAUCHE : INFOS DE CONTACT */}
        <div className="space-y-5">
          {/* EMAIL */}
          <button
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/?view=cm&to=ikramberraq1@gmail.com",
                "_blank"
              )
            }
            className="w-full text-left bg-slate-900/50 border border-slate-700 rounded-2xl p-5 flex gap-4 items-center hover:border-cnssTeal hover:bg-slate-900/70 transition"
          >
            <div className="p-3 rounded-xl bg-cnssTeal/15 text-cnssTeal">
              <Mail size={22} />
            </div>
            <div className="text-left">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                Email
              </p>
              <p className="text-slate-100 font-medium">
                ikramberraq1@gmail.com
              </p>
            </div>
          </button>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/ikram-berraq-67415a212/"
            target="_blank"
            className="block bg-slate-900/50 border border-slate-700 rounded-2xl p-5 flex gap-4 items-center hover:border-cnssTeal hover:bg-slate-900/70 transition"
          >
            <div className="p-3 rounded-xl bg-cnssTeal/15 text-cnssTeal">
              <Linkedin size={22} />
            </div>
            <div className="text-left">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                LinkedIn
              </p>
              <p className="text-slate-100 font-medium">
                linkedin.com/in/ikram-berraq-67415a212
              </p>
            </div>
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/ikramberraq"
            target="_blank"
            className="block bg-slate-900/50 border border-slate-700 rounded-2xl p-5 flex gap-4 items-center hover:border-cnssTeal hover:bg-slate-900/70 transition"
          >
            <div className="p-3 rounded-xl bg-cnssTeal/15 text-cnssTeal">
              <Github size={22} />
            </div>
            <div className="text-left">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                GitHub
              </p>
              <p className="text-slate-100 font-medium">
                github.com/ikramberraq
              </p>
            </div>
          </a>

          {/* LOCALISATION */}
          <div className="bg-slate-900/50 border border-slate-700 rounded-2xl p-5 flex gap-4 items-center">
            <div className="p-3 rounded-xl bg-cnssTeal/15 text-cnssTeal">
              <MapPin size={22} />
            </div>
            <div className="text-left">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                Localisation
              </p>
              <p className="text-slate-100 font-medium">
                Maroc · Rabat / Casablanca
              </p>
            </div>
          </div>
        </div>

        {/* COLONNE DROITE : FORMULAIRE */}
        <div className="bg-slate-900/50 border border-slate-700 rounded-2xl p-6 md:p-7 shadow-lg">
          <h3 className="text-lg font-semibold text-white mb-4 text-left">
            Envoyer un message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div>
              <label className="block text-sm text-slate-300 mb-1">
                Nom et prénom
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg bg-slate-950/60 border border-slate-700 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-cnssTeal"
              />
            </div>

            <div>
              <label className="block text-sm text-slate-300 mb-1">
                Email
              </label>
              <input
                type="email"
                required
                value={fromEmail}
                onChange={(e) => setFromEmail(e.target.value)}
                className="w-full rounded-lg bg-slate-950/60 border border-slate-700 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-cnssTeal"
              />
            </div>

            <div>
              <label className="block text-sm text-slate-300 mb-1">
                Message
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-lg bg-slate-950/60 border border-slate-700 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-cnssTeal resize-none"
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full md:w-auto px-6 py-2.5 bg-gradient-to-r from-cnssBlue to-cnssTeal rounded-full text-white font-medium shadow-md hover:opacity-90 transition"
            >
              Envoyer via email
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
