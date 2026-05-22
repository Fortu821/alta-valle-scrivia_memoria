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
// INVIO FORM TRAMITE FORMSPREE (AJAX)
// -----------------------------------------------
async function inviaMessaggio(event) {
  event.preventDefault();

  const form = event.target;
  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      form.style.display = "none";
      document.getElementById("conferma-invio").style.display = "block";
    } else {
      alert("Si è verificato un errore. Per favore riprova o scrivici direttamente via email.");
    }
  } catch (error) {
    alert("Errore di rete. Controlla la connessione e riprova.");
  }
}

// Aggiunge l'event listener al form
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("form-contatto");
  if (form) {
    form.addEventListener("submit", inviaMessaggio);
  }
});

// -----------------------------------------------
// MULTILINGUA (predisposta)
// -----------------------------------------------
const TRADUZIONI_COLLABORA = {
  it: {
    contribuisci: "Come contribuire",
    contattaci: "Contattaci",
  },
  en: {
    contribuisci: "How to contribute",
    contattaci: "Contact us",
  },
  fr: {
    contribuisci: "Comment contribuer",
    contattaci: "Contactez-nous",
  },
  de: {
    contribuisci: "Wie beitragen",
    contattaci: "Kontaktiere uns",
  },
  es: {
    contribuisci: "Cómo contribuir",
    contattaci: "Contáctanos",
  }
};

let langAttuale = "it";

function setLang(lang) {
  langAttuale = lang;

  // Aggiorna bottoni lingua
  document.querySelectorAll(".lang-btn-h").forEach(btn => {
    btn.classList.toggle("active", btn.textContent.toLowerCase() === lang);
  });

  if (TRADUZIONI_COLLABORA[lang]) {
    document.getElementById("tab-contribuisci").textContent = TRADUZIONI_COLLABORA[lang].contribuisci;
    document.getElementById("tab-contattaci").textContent = TRADUZIONI_COLLABORA[lang].contattaci;
  }
}