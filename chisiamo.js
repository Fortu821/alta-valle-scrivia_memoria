// -----------------------------------------------
// TAB SWITCH
// -----------------------------------------------
function switchCS(sezione) {
  document.querySelectorAll(".cs-section").forEach(s => s.classList.remove("active"));
  document.querySelectorAll(".cs-tab").forEach(t => t.classList.remove("active"));
  document.getElementById(`cs-${sezione}`).classList.add("active");
  document.getElementById(`tab-${sezione}`).classList.add("active");
}

// -----------------------------------------------
// MULTILINGUA
// -----------------------------------------------
const TRADUZIONI_CS = {
  it: {
    chisiamo: "Chi Siamo",
    progetto: "Il Progetto",
    chisiamo_testo: [
      "Siamo la classe 3B della Scuola Media Giovanni Pascoli di Ronco Scrivia e abbiamo realizzato questo sito per raccontare i luoghi della memoria dell’Alta Valle Scrivia.",
      "Attraverso ricerche, fotografie e testimonianze, abbiamo scoperto posti importanti legati alla storia del nostro territorio e alle vicende del passato.",
      "Il nostro obiettivo è far conoscere e ricordare questi luoghi, per mantenere viva la memoria storica e trasmetterla anche alle nuove generazioni.",
      " ",
      "Email di riferimento: fortu.andre2012@gmail.com "
    ],
    progetto_testo: 
    [
      "Il progetto è stato realizzato grazie al lavoro di tutta la classe 3B. Uno di noi si è occupato della programmazione dell’applicazione utilizzando HTML5, JavaScript e CSS, creando il sito e le sue funzionalità, mentre, per la mappa, abbiamo utilizzato strumenti liberi come Leaflet e OpenStreetMap",
      "Altri compagni, invece, hanno svolto ricerche storiche, raccolto informazioni, scattato fotografie ed effettuato sopralluoghi nei luoghi della memoria dell’Alta Valle Scrivia, contribuendo alla realizzazione dei contenuti del progetto.",
      " ",
      "Email di riferimento: fortu.andre2012@gmail.com"
    ]
  },
  en: {
    chisiamo: "About Us",
    progetto: "The Project",
    chisiamo_testo: [
      "EN — Chi siamo paragrafo 1.",
      "EN — Chi siamo paragrafo 2.",
      "EN — Chi siamo paragrafo 3."
    ],
    progetto_testo: [
      "EN — Progetto paragrafo 1.",
      "EN — Progetto paragrafo 2.",
      "EN — Progetto paragrafo 3."
    ]
  },
  fr: {
    chisiamo: "Qui Sommes-Nous",
    progetto: "Le Projet",
    chisiamo_testo: [
      "FR — Chi siamo paragrafo 1.",
      "FR — Chi siamo paragrafo 2.",
      "FR — Chi siamo paragrafo 3."
    ],
    progetto_testo: [
      "FR — Progetto paragrafo 1.",
      "FR — Progetto paragrafo 2.",
      "FR — Progetto paragrafo 3."
    ]
  },
  de: {
    chisiamo: "Über Uns",
    progetto: "Das Projekt",
    chisiamo_testo: [
      "DE — Chi siamo paragrafo 1.",
      "DE — Chi siamo paragrafo 2.",
      "DE — Chi siamo paragrafo 3."
    ],
    progetto_testo: [
      "DE — Progetto paragrafo 1.",
      "DE — Progetto paragrafo 2.",
      "DE — Progetto paragrafo 3."
    ]
  },
  es: {
    chisiamo: "Quiénes Somos",
    progetto: "El Proyecto",
    chisiamo_testo: [
      "ES — Chi siamo paragrafo 1.",
      "ES — Chi siamo paragrafo 2.",
      "ES — Chi siamo paragrafo 3."
    ],
    progetto_testo: [
      "ES — Progetto paragrafo 1.",
      "ES — Progetto paragrafo 2.",
      "ES — Progetto paragrafo 3."
    ]
  }
};

let langAttuale = "it";

function setLang(lang) {
  langAttuale = lang;

  // Aggiorna bottoni
  document.querySelectorAll(".lang-btn-h").forEach(btn => {
    btn.classList.toggle("active", btn.textContent.toLowerCase() === lang);
  });

  const t = TRADUZIONI_CS[lang];

  // Aggiorna tab labels
  document.getElementById("tab-chisiamo").textContent = t.chisiamo;
  document.getElementById("tab-progetto").textContent = t.progetto;

  // Aggiorna titoli sezioni
  document.getElementById("cs-title-chisiamo").textContent = t.chisiamo;
  document.getElementById("cs-title-progetto").textContent = t.progetto;

  // Aggiorna testi
  document.getElementById("cs-content-chisiamo").innerHTML =
    t.chisiamo_testo.map(p => `<p>${p}</p>`).join("");
  document.getElementById("cs-content-progetto").innerHTML =
    t.progetto_testo.map(p => `<p>${p}</p>`).join("");
}