/* =============================================
   LUOGHI DELLA MEMORIA — VALLE SCRIVIA
   script.js
   ============================================= */

const PAESI = [
  {
    id: "busalla",
    nome: "Busalla",
    categorie: [
      {
        id: "wwi",
        nome: "Prima Guerra Mondiale",
        classe: "cat-wwi",
        luoghi: [
          {
            id: "busalla-wwi-1",
            nome: "Lapide ai Caduti della Guerra di Liberazione",
            descrizione: "Il monumento commemora specificamente i caduti busallesi nella Guerra tra il 1943 e il 1945. Situato nel centro cittadino, riporta i nomi di coloro che sacrificarono la vita per la libertà.",
            coordinate: [44.570849265622854, 8.945058420363281],
            foto: []
          }
        ]
      },
      {
        id: "wwii",
        nome: "Seconda Guerra Mondiale",
        classe: "cat-wwii",
        luoghi: [
          {
            id: "busalla-wwii-1",
            nome: "Lapide ai Caduti della Seconda Guerra Mondiale",
            descrizione: "Monumento commemorativo che ricorda i caduti busallesi nella Seconda Guerra Mondiale. Eretto nel dopoguerra dalla comunità locale, riporta i nomi di tutti i cittadini che persero la vita nel conflitto.",
            coordinate: [44.5680, 8.9456],
            foto: ["images/caduti_busalla.png"]
          },
          {
            id: "busalla-wwii-2",
            nome: "Viale della Rimembranza",
            descrizione: "Un percorso alberato dedicato ai caduti busallesi della Seconda Guerra Mondiale. Ogni albero del viale è accompagnato da una targa che ricorda un cittadino scomparso, creando un memoriale vivente nel cuore della città.",
            coordinate: [44.5683, 8.9449],
            foto: ["images/sarissola2ù.png"]
          },
          {
            id: "busalla-wwii-3",
            nome: "Lapide ai Caduti di Sarissola",
            descrizione: "Lapide collocata nella frazione di Sarissola per onorare i caduti della comunità locale durante la Seconda Guerra Mondiale. Riporta i nomi degli abitanti di Sarissola che persero la vita nel conflitto.",
            coordinate: [44.5675, 8.9470],
            foto: ["images/sarissola.png", "images/sarissola2ù.png"]
          },
          {
            id: "busalla-wwii-4",
            nome: "Monumento ai Caduti a stele",
            descrizione: "Una stele commemorativa in marmo dedicata ai caduti busallesi della Seconda Guerra Mondiale. La forma slanciata verso l'alto simboleggia il sacrificio e l'elevazione spirituale di chi ha dato la vita per la patria.",
            coordinate: [44.5692, 8.9445],
            foto: ["images/caduti-busalla2.png"]
          },
          {
            id: "busalla-wwii-5",
            nome: "Casa di Enrico Macciò",
            descrizione: "Abitazione storica di Enrico Macciò, figura di spicco della Resistenza e della vita politica busallese. L'edificio, situato nel centro storico, testimonia l'impegno civile e il contributo alla lotta di Liberazione offerti da Macciò e dalla sua famiglia.",
            coordinate: [44.5700, 8.9465],
            foto: []
          }
        ]
      },
      {
        id: "resist",
        nome: "Resistenza Partigiana",
        classe: "cat-resist",
        luoghi: [
          {
            id: "busalla-resist-1",
            nome: "Lastra alla S.M.S. Liberi Operai",
            descrizione: "Una lastra in marmo nero che ricorda i fondatori della società caduti come partigiani durante la lotta di Liberazione.",
            coordinate: [44.5690, 8.9460],
            foto: ["images/SMS-liberi-operai.png"]
          },
          {
            id: "busalla-resist-2",
            nome: "Piazza della Liberazione",
            descrizione: "Area centrale dove durante le celebrazioni ufficiali del Comune di Busalla vengono deposte le corone in onore della Resistenza. La piazza è il fulcro della memoria collettiva della comunità.",
            coordinate: [44.5690, 8.9460],
            foto: []
          }
        ]
      }
    ]
  },
  {
    id: "ronco-scrivia",
    nome: "Ronco Scrivia",
    categorie: [
      {
        id: "wwi",
        nome: "Prima Guerra Mondiale",
        classe: "cat-wwi",
        luoghi: [
          {
            id: "ronco-wwi-1",
            nome: "Monumento ai Caduti della Grande Guerra",
            descrizione: "Il monumento, situato nel centro di Ronco Scrivia, è dedicato ai caduti ronchesi nella Prima Guerra Mondiale (1915–1918). La struttura in pietra riporta i nomi dei soldati del paese che non fecero ritorno dal fronte.",
            coordinate: [44.614045061000105, 8.950102581265275],
            foto: []
          }
        ]
      },
      {
        id: "wwii",
        nome: "Seconda Guerra Mondiale",
        classe: "cat-wwii",
        luoghi: [
          {
            id: "ronco-wwii-1",
            nome: "Monumento ai Caduti della Seconda Guerra Mondiale",
            descrizione: "Una lastra marmorea posta il 25 Aprile 1955 nel Palazzo Comunale, che commemora i sacrifici per la libertà e onora i Morti per la Patria.",
            coordinate: [44.608257, 8.955073],
            foto: ["images/medaglia_bronzo_ronco_resist.png"]
          },
          {
            id: "ronco-wwii-2",
            nome: "Bomba Inesplosa",
            descrizione: "Una bomba inesplosa della Seconda Guerra Mondiale, conservata come simbolo presso il binario 4 della stazione di Ronco Scrivia. Rappresenta il drammatico ricordo dei bombardamenti che colpirono la Valle Scrivia.",
            coordinate: [44.6020, 8.9510],
            foto: ["images/bomba_inseplosa.png"]
          }
        ]
      },
      {
        id: "resist",
        nome: "Resistenza Partigiana",
        classe: "cat-resist",
        luoghi: [
          {
            id: "ronco-resist-1",
            nome: "Lapide a Egidio Dedè (John)",
            descrizione: "Lapide dedicata al giovane partigiano ucciso nel 1943 a Vobbietta mentre soccorreva un prigioniero tedesco ferito. Per questo gesto di umanità durante la guerra ricevette la Medaglia d'Argento al Valore Militare.",
            coordinate: [44.612177, 8.950795],
            foto: []
          },
          {
            id: "ronco-resist-2",
            nome: "Targa dedicata a Renato Quartini",
            descrizione: "La targa dedicata a Renato Quartini commemora il giovane partigiano nato a Ronco Scrivia, caduto nel 1944 durante la lotta di Liberazione. Decorato con la Medaglia d’Oro al Valor Militare, è ricordato per il coraggio e l’impegno nella Resistenza contro il nazifascismo. La lapide, posta sulla sua casa natale, mantiene viva la memoria storica della comunità.",
            coordinate: [44.609663728455175, 8.95573968220906],
            foto: []
          },
          {
            id: "ronco-resist-3",
            nome: "Pietra d'Inciampo a Giovanni Battista Carminati",
            descrizione: "La pietra d’inciampo dedicata a Giovanni Battista Carminati si trova a Ronco Scrivia, davanti alla sua abitazione. È una piccola targa in ottone incastonata nel marciapiede che ricorda il suo arresto durante l’occupazione nazifascista e la successiva deportazione nel campo di Gusen, dove morì nel 1945. Fa parte del progetto delle pietre d’inciampo, creato per mantenere viva la memoria delle vittime della persecuzione nazista nel luogo in cui vissero.",
            coordinate: [44.6140206894928, 8.948123822718356],
            foto: ["images/carminati.png"]
          }
        ]
      },
      {
        id: "mafia",
        nome: "Vittime di Mafia",
        classe: "cat-mafia",
        luoghi: [
          {
            id: "ronco-mafia-1",
            nome: "Targa a Falcone e Borsellino",
            descrizione: "La targa dedicata a Giovanni Falcone e Paolo Borsellino ricorda i due magistrati simbolo della lotta alla mafia, assassinati nel 1992 nelle stragi di Capaci e via D’Amelio. Il memoriale rende omaggio al loro coraggio, all’impegno per la giustizia e al sacrificio compiuto nella difesa dello Stato e della legalità.",
            coordinate: [44.61399311625621, 8.950080345799579],
            foto: []
          }
        ]
      }
    ]
  },
  {
    id: "montoggio",
    nome: "Montoggio",
    categorie: [
      {
        id: "resist",
        nome: "Resistenza Partigiana",
        classe: "cat-resist",
        luoghi: [
          {
            id: "montoggio-resist-1",
            nome: "Monumento ai Caduti della Resistenza",
            descrizione: "Monumento eretto nel centro di Montoggio per onorare i partigiani caduti durante la lotta di Liberazione. Il memoriale, visitato ogni anno durante le celebrazioni ufficiali, è simbolo del contributo della comunità montoggiana alla Resistenza.",
            coordinate: [44.5210, 9.0090],
            foto: []
          },
          {
            id: "montoggio-resist-2",
            nome: "Cippo dell'Eccidio di Cravasco",
            descrizione: "Un cippo commemorativo che segna il luogo dell'eccidio di Cravasco, dove diversi partigiani persero la vita durante un rastrellamento nazifascista. Posto lungo il sentiero, ricorda il sacrificio di questi combattenti per la libertà.",
            coordinate: [44.5210, 9.0090],
            foto: ["images/cravasco.png"]
          },
          {
            id: "montoggio-resist-3",
            nome: "Sacrario e la Cappella Commemorativa",
            descrizione: "Il Sacrario e la Cappella Commemorativa di Montoggio custodiscono le spoglie e la memoria dei partigiani caduti. Il complesso monumentale, immerso nella quiete dell'Appennino, è luogo di raccoglimento e di pellegrinaggio civile.",
            coordinate: [44.5210, 9.0090],
            foto: ["images/cravasco2.png"]
          }
        ]
      }
    ]
  },
  {
    id: "savignone",
    nome: "Savignone",
    categorie: [
      {
        id: "wwi",
        nome: "Prima Guerra Mondiale",
        classe: "cat-wwi",
        luoghi: [
          {
            id: "savignone-wwi-1",
            nome: "Monumento ai Caduti di Savignone",
            descrizione: "Monumento dedicato ai caduti di Savignone nella Prima Guerra Mondiale, situato nella piazza principale del paese. Riporta i nomi dei cittadini che sacrificarono la vita durante il conflitto 1915–1918.",
            coordinate: [44.5590, 8.9910],
            foto: []
          },
          {
            id: "savignone-wwi-2",
            nome: "Ex Colonia Montana di Monte Maggio",
            descrizione: "L'Ex Colonia Montana di Monte Maggio, edificata in epoca fascista, fu utilizzata durante le guerre come struttura di accoglienza e ricovero. Oggi l'edificio, sebbene in stato di abbandono, rappresenta una testimonianza storica del patrimonio architettonico e sociale del territorio savignonese.",
            coordinate: [44.5590, 8.9910],
            foto: ["images/ex_colonia_monte_maggio.png"]
          }
        ]
      }
    ]
  },
  {
    id: "isola-del-cantone",
    nome: "Isola del Cantone",
    categorie: [
      {
        id: "wwi",
        nome: "Prima Guerra Mondiale",
        classe: "cat-wwi",
        luoghi: [
          {
            id: "isola-wwi-1",
            nome: "Monumento ai Caduti di Nino Italia",
            descrizione: "Importante monumento bronzeo realizzato nel 1927 dallo scultore Nino Italia. La scultura commemora i caduti isolani della Prima Guerra Mondiale con una potente figura allegorica.",
            coordinate: [44.6462, 8.8865],
            foto: []
          },
          {
            id: "isola-wwi-2",
            nome: "Memoriale dei Caduti Isolani",
            descrizione: "Grande lapide decorata con il testo del Bollettino della Vittoria del 1918. Il memoriale celebra il sacrificio dei soldati di Isola del Cantone e la vittoria finale nella Grande Guerra.",
            coordinate: [44.6464, 8.8867],
            foto: []
          },
          {
            id: "isola-wwi-3",
            nome: "Lapide del Circolo Silvio Pellico",
            descrizione: "Lapide dedicata ai giovani del circolo cattolico locale caduti nella Grande Guerra. Il Circolo Silvio Pellico mantenne vivo il ricordo dei suoi soci scomparsi al fronte.",
            coordinate: [44.6460, 8.8870],
            foto: []
          }
        ]
      },
      {
        id: "wwii",
        nome: "Seconda Guerra Mondiale",
        classe: "cat-wwii",
        luoghi: [
          {
            id: "isola-wwii-1",
            nome: "Lapide Commemorativa di Frazione Borlasca",
            descrizione: "Lapide rurale dedicata ai caduti delle due guerre mondiali della frazione Borlasca. Posta all'ingresso della frazione, ricorda i giovani del luogo che non fecero ritorno a casa.",
            coordinate: [44.6520, 8.8950],
            foto: []
          }
        ]
      }
    ]
  },
  {
    id: "casella",
    nome: "Casella",
    categorie: [
      {
        id: "wwii",
        nome: "Seconda Guerra Mondiale",
        classe: "cat-wwii",
        luoghi: [
          {
            id: "casella-wwii-1",
            nome: "Monumento ai Caduti delle Guerre Mondiali",
            descrizione: "Principale monumento civico di Casella situato accanto alla Chiesa di Santo Stefano. Il monumento onora i caduti di entrambe le guerre mondiali ed è il fulcro delle commemorazioni ufficiali del paese.",
            coordinate: [44.5359, 8.9976],
            foto: []
          },
          {
            id: "casella-wwii-2",
            nome: "Lapide d'Onore ai Caduti Civili",
            descrizione: "Lapide urbana che ricorda il sacrificio della popolazione civile durante la Seconda Guerra Mondiale. Una testimonianza delle sofferenze patite dalla comunità di Casella a causa dei bombardamenti e dell'occupazione.",
            coordinate: [44.5365, 8.9981],
            foto: []
          }
        ]
      },
      {
        id: "resist",
        nome: "Resistenza Partigiana",
        classe: "cat-resist",
        luoghi: [
          {
            id: "casella-resist-1",
            nome: "Cippo alla Memoria dei Partigiani della 'Pinan Cichero'",
            descrizione: "Cippo dedicato ai sei partigiani fucilati a Casella nel dicembre 1944. Appartenevano alla formazione 'Pinan Cichero' e furono catturati durante un rastrellamento nazifascista.",
            coordinate: [44.5370, 8.9990],
            foto: ["images/pinan-cichero.png"]
          }
        ]
      },
      {
        id: "storico",
        nome: "Memoria Storica",
        classe: "cat-wwi",
        luoghi: [
          {
            id: "casella-storico-1",
            nome: "Memoriale Storico del Trenino di Casella",
            descrizione: "Esposizione monumentale di una storica carrozza della linea Genova-Casella. La ferrovia a scartamento ridotto, attiva dal 1929, è un simbolo del patrimonio storico e culturale della Valle Scrivia.",
            coordinate: [44.5355, 8.9970],
            foto: []
          }
        ]
      }
    ]
  },
  {
    id: "crocefieschi",
    nome: "Crocefieschi",
    categorie: [
      {
        id: "wwi",
        nome: "Prima Guerra Mondiale",
        classe: "cat-wwi",
        luoghi: [
          {
            id: "croce-wwi-1",
            nome: "Lastre Commemorative ai Caduti",
            descrizione: "Quattro grandi lapidi marmoree collocate nella Chiesa di Santa Croce. Sono dedicate ai caduti di Crocefieschi nelle due guerre mondiali e riportano incisi i nomi dei cittadini scomparsi.",
            coordinate: [44.6228, 9.0017],
            foto: []
          }
        ]
      },
      {
        id: "resist",
        nome: "Resistenza Partigiana",
        classe: "cat-resist",
        luoghi: [
          {
            id: "croce-resist-1",
            nome: "Cappella degli Alpini di Crebaia",
            descrizione: "Piccola cappella monumentale curata dal Gruppo Alpini e situata lungo i sentieri del Monte Proventino. Dedicata alla memoria degli alpini e dei partigiani che operarono nella zona.",
            coordinate: [44.6260, 9.0100],
            foto: []
          },
          {
            id: "croce-resist-2",
            nome: "Monumento-Crocifisso alla Resistenza Partigiana",
            descrizione: "Grande croce lignea con lapide dedicata ai partigiani della Valle Scrivia. Il crocifisso, eretto in posizione panoramica, domina la vallata e ricorda il sacrificio per la libertà.",
            coordinate: [44.6200, 9.0050],
            foto: []
          }
        ]
      }
    ]
  },
  {
    id: "torriglia",
    nome: "Torriglia",
    categorie: [
      {
        id: "wwii",
        nome: "Seconda Guerra Mondiale",
        classe: "cat-wwii",
        luoghi: [
          {
            id: "torriglia-wwii-1",
            nome: "Monumento a Cippo ai Caduti",
            descrizione: "Monumento situato nei giardini comunali con cippo, braciere bronzeo e lastre commemorative dedicate ai caduti delle guerre mondiali. È il principale memoriale civico di Torriglia.",
            coordinate: [44.5217, 9.1570],
            foto: []
          }
        ]
      },
      {
        id: "resist",
        nome: "Resistenza Partigiana",
        classe: "cat-resist",
        luoghi: [
          {
            id: "torriglia-resist-1",
            nome: "Lapide ai Caduti Partigiani della Difesa al Ponte",
            descrizione: "Grande lapide commemorativa dedicata ai partigiani caduti il 24 agosto 1944 durante la difesa del ponte cittadino di Torriglia contro le truppe nazifasciste.",
            coordinate: [44.5225, 9.1582],
            foto: []
          },
          {
            id: "torriglia-resist-2",
            nome: "Lastre Monumentali ad Aldo Gastaldi 'Bisagno'",
            descrizione: "Trittico marmoreo commemorativo dedicato ad Aldo Gastaldi 'Bisagno', leggendario comandante partigiano della Divisione Cichero, e alla Resistenza ligure.",
            coordinate: [44.5220, 9.1565],
            foto: []
          },
          {
            id: "torriglia-resist-3",
            nome: "Cippo dei Casoni di Torriglia",
            descrizione: "Cippo immerso nei sentieri del Monte Antola, dedicato a tre partigiani caduti durante i rastrellamenti nazifascisti nella zona dei Casoni di Torriglia.",
            coordinate: [44.5300, 9.1700],
            foto: []
          },
          {
            id: "torriglia-resist-4",
            nome: "Monumento di Pian dell'Orso",
            descrizione: "Memoriale montano restaurato dal Gruppo Alpini di Torriglia. Dedicato ai partigiani e ai caduti dell'entroterra ligure, si trova in una delle aree più suggestive dell'Appennino.",
            coordinate: [44.5450, 9.1820],
            foto: []
          }
        ]
      }
    ]
  },
  {
    id: "valbrevenna",
    nome: "Valbrevenna",
    categorie: [
      {
        id: "wwii",
        nome: "Seconda Guerra Mondiale",
        classe: "cat-wwii",
        luoghi: [
          {
            id: "valbrevenna-wwii-1",
            nome: "Monumento ai Caduti delle Guerre",
            descrizione: "Memoriale ufficiale del comune situato a Molino di Altoggio, dedicato ai caduti della Prima e Seconda Guerra Mondiale. Il monumento è il centro delle celebrazioni istituzionali della Valbrevenna.",
            coordinate: [44.6180, 9.0230],
            foto: []
          },
          {
            id: "valbrevenna-wwii-2",
            nome: "Cippo Commemorativo della Frazione Frassinello",
            descrizione: "Lapide monumentale dedicata ai giovani della frazione di Frassinello e ai tragici rastrellamenti della Seconda Guerra Mondiale che colpirono la comunità locale.",
            coordinate: [44.6230, 9.0400],
            foto: []
          }
        ]
      },
      {
        id: "resist",
        nome: "Resistenza Partigiana",
        classe: "cat-resist",
        luoghi: [
          {
            id: "valbrevenna-resist-1",
            nome: "Sentiero della Memoria e Cippo di Carsi",
            descrizione: "Cippo immerso nei boschi dell'Appennino dedicato ai partigiani della Divisione 'Cichero'. Il sentiero della memoria conduce i visitatori attraverso i luoghi simbolo della Resistenza in Valbrevenna.",
            coordinate: [44.6280, 9.0600],
            foto: []
          },
          {
            id: "valbrevenna-resist-2",
            nome: "Cappella-Memoriale del Monte Antola",
            descrizione: "Piccola cappella montana che ricorda i partigiani della VI Zona Operativa sulle pendici del Monte Antola. Un luogo di pace e memoria raggiungibile attraverso i sentieri escursionistici della zona.",
            coordinate: [44.5770, 9.1420],
            foto: []
          }
        ]
      }
    ]
  },
  {
    id: "vobbia",
    nome: "Vobbia",
    categorie: [
      {
        id: "wwi",
        nome: "Prima Guerra Mondiale",
        classe: "cat-wwi",
        luoghi: [
          {
            id: "vobbia-wwi-1",
            nome: "Lapide ai Caduti di Arezzo-Vobbia",
            descrizione: "Lapide in marmo bianco dedicata ai soldati della frazione caduti durante la Prima Guerra Mondiale. Posta nella chiesa locale, riporta i nomi dei giovani del borgo che non tornarono dal fronte.",
            coordinate: [44.6050, 9.0280],
            foto: []
          }
        ]
      },
      {
        id: "resist",
        nome: "Resistenza Partigiana",
        classe: "cat-resist",
        luoghi: [
          {
            id: "vobbia-resist-1",
            nome: "Lastra e Lapide ai Martiri della Benedicta",
            descrizione: "Situato nel borgo capoluogo, questo commovente complesso monumentale è composto da una lapide e da una lastra affiancate in marmo bianco, separate al centro da una lampada votiva in bronzo. L'opera ricorda i giovani della zona caduti durante la Strage della Benedicta dell'aprile 1944.",
            coordinate: [44.6007, 9.0382],
            foto: []
          },
          {
            id: "vobbia-resist-2",
            nome: "Lastra Commemorativa di Mario Cesura 'Giovanni'",
            descrizione: "Lastra commemorativa dedicata al giovane partigiano Mario Cesura 'Giovanni' della Brigata Garibaldi 'Oreste', ucciso durante il rastrellamento del 18 dicembre 1944.",
            coordinate: [44.6110, 9.0520],
            foto: []
          },
          {
            id: "vobbia-resist-3",
            nome: "Lastra a Franco Eugenio",
            descrizione: "Lapide commemorativa dedicata a Franco Eugenio, ucciso dalle truppe d'occupazione il 18 dicembre 1944 dopo l'incendio della sua abitazione a Vobbia.",
            coordinate: [44.5980, 9.0400],
            foto: []
          }
        ]
      }
    ]
  }
];

const ITINERARI = [
  {
    id: "cammino-ribelli",
    nome: "Il Cammino dei Ribelli",
    sottotitolo: "Resistenza Partigiana",
    descrizione: "Un percorso che ripercorre i sentieri attraversati dai partigiani durante la Seconda Guerra Mondiale. Il Cammino dei Ribelli attraversa sentieri tra la Valle Scrivia e la Val Borbera, con un dislivello che supera i 1000 metri.",
    distanza: "117,2 km",
    durata: "7 giorni (7 tappe)",
    difficolta: "Impegnativa",
    tappe: [
      { nome: "Arquata Scrivia", desc: "Partenza da Arquata Scrivia, salita sui sentieri CAI fino a Castel Ratti e arrivo a Persi passando per Cerreto Ratti.", coord: [44.69142589562896, 8.884018742703637] },
      { nome: "Persi", desc: "Risalita del torrente Borbera tra canyon, guadi e luoghi della Resistenza partigiana", coord: [44.72976870576957, 8.97135741363076] },
      { nome: "Albera", desc: "Salita tra mulattiere, borghi appenninici e sentieri nel bosco fino ai pascoli di Cosola", coord: [44.702584274550986, 9.065506240583092] },
      { nome: "Cosola", desc: "Discesa tra borghi isolati, ponti antichi e sentieri di frana verso l’alta Val Borbera", coord: [44.82150587107709, 9.030418372855785] },
      { nome: "FontanaChiusa", desc: "Cammino tra borghi abbandonati, mulini nascosti e valichi montani dell’Appennino ribelle", coord: [44.610452803010574, 9.17616893579048] },
      { nome: "Dova", desc: "Attraversamento di borghi montani, guadi e sentieri d’altura verso le valli dello Spinti", coord: [44.62859524202806, 9.11529161535405] },
      { nome: "Roccaforte", desc: "Traversata tra borghi appenninici, santuari in pietra e sentieri nel bosco, con saliscendi panoramici fino alla discesa verso Arquata Scrivia", coord: [44.677555127492425, 9.027874699831573] },
      { nome: "Arquata Scrivia ", desc: "Ritorno alla stazione, fine del percorso", coord: [44.692101407603666, 8.884882098771474] }
    ]
  }
];

// -----------------------------------------------
// STATO DELL'APP
// -----------------------------------------------
let leafletMap = null;
let itinerarioLeafletMap = null;
let selectedLuogoId = null;
let selectedItinerarioId = null;

// -----------------------------------------------
// INIZIALIZZAZIONE
// -----------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  renderPaesi();
  renderItinerari();
});

// -----------------------------------------------
// TAB SWITCH
// -----------------------------------------------
function switchTab(tab) {
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  document.querySelectorAll(".tab-content").forEach(t => t.classList.remove("active"));
  document.querySelector(`.tab[data-tab="${tab}"]`).classList.add("active");
  document.getElementById(`tab-${tab}`).classList.add("active");
}

// -----------------------------------------------
// RENDER LISTA PAESI
// -----------------------------------------------
function renderPaesi() {
  const list = document.getElementById("paese-list");
  list.innerHTML = "";

  PAESI.forEach(paese => {
    const li = document.createElement("li");
    li.className = "paese-item";
    li.id = `paese-${paese.id}`;

    const nomeDiv = document.createElement("div");
    nomeDiv.className = "paese-nome";
    nomeDiv.innerHTML = `<span>${paese.nome}</span><span class="paese-arrow">›</span>`;
    nomeDiv.onclick = () => togglePaese(paese.id);

    const catList = document.createElement("ul");
    catList.className = "categorie-list";
    catList.id = `cat-list-${paese.id}`;
    catList.style.display = "none";

    paese.categorie.forEach(cat => {
      const catLi = document.createElement("li");
      catLi.className = "categoria-item";
      catLi.id = `cat-${paese.id}-${cat.id}`;

      const catNome = document.createElement("div");
      catNome.className = "categoria-nome";
      catNome.innerHTML = `
        <span class="cat-dot ${cat.classe}"></span>
        <span>${cat.nome}</span>
        <span class="cat-arrow">›</span>
      `;
      catNome.onclick = () => toggleCategoria(paese.id, cat.id);

      const luoghiList = document.createElement("ul");
      luoghiList.className = "luoghi-list";
      luoghiList.id = `luoghi-${paese.id}-${cat.id}`;
      luoghiList.style.display = "none";

      cat.luoghi.forEach(luogo => {
        const luogoLi = document.createElement("li");
        luogoLi.className = "luogo-item";
        luogoLi.id = `luogo-${luogo.id}`;
        luogoLi.textContent = luogo.nome;
        luogoLi.onclick = () => mostraLuogo(paese, cat, luogo);
        luoghiList.appendChild(luogoLi);
      });

      catLi.appendChild(catNome);
      catLi.appendChild(luoghiList);
      catList.appendChild(catLi);
    });

    li.appendChild(nomeDiv);
    li.appendChild(catList);
    list.appendChild(li);
  });
}

function togglePaese(paeseId) {
  const catList = document.getElementById(`cat-list-${paeseId}`);
  const nomeDiv = document.querySelector(`#paese-${paeseId} .paese-nome`);
  const isOpen = catList.style.display !== "none";

  // Chiudi tutti
  document.querySelectorAll(".categorie-list").forEach(el => el.style.display = "none");
  document.querySelectorAll(".paese-nome").forEach(el => el.classList.remove("open"));

  if (!isOpen) {
    catList.style.display = "flex";
    nomeDiv.classList.add("open");
  }
}

function toggleCategoria(paeseId, catId) {
  const luoghiList = document.getElementById(`luoghi-${paeseId}-${catId}`);
  const catNome = document.querySelector(`#cat-${paeseId}-${catId} .categoria-nome`);
  const isOpen = luoghiList.style.display !== "none";

  // Chiudi tutte le categorie dello stesso paese
  document.querySelectorAll(`#cat-list-${paeseId} .luoghi-list`).forEach(el => el.style.display = "none");
  document.querySelectorAll(`#cat-list-${paeseId} .categoria-nome`).forEach(el => el.classList.remove("open"));

  if (!isOpen) {
    luoghiList.style.display = "flex";
    catNome.classList.add("open");
  }
}

// -----------------------------------------------
// RENDER LISTA ITINERARI
// -----------------------------------------------
function renderItinerari() {
  const list = document.getElementById("itinerario-list");
  list.innerHTML = "";

  ITINERARI.forEach(it => {
    const li = document.createElement("li");
    li.className = "itinerario-item";
    li.id = `it-${it.id}`;
    li.innerHTML = `
      <span>${it.nome}</span>
      <span class="itinerario-item-subtitle">${it.sottotitolo}</span>
    `;
    li.onclick = () => mostraItinerario(it);
    list.appendChild(li);
  });
}

// -----------------------------------------------
// MOSTRA LUOGO
// -----------------------------------------------
function mostraLuogo(paese, cat, luogo) {
  // Deseleziona tutto
  document.querySelectorAll(".luogo-item").forEach(el => el.classList.remove("selected"));
  document.querySelectorAll(".itinerario-item").forEach(el => el.classList.remove("selected"));
  document.getElementById(`luogo-${luogo.id}`).classList.add("selected");

  selectedLuogoId = luogo.id;
  selectedItinerarioId = null;

  // Nascondi stati precedenti
  document.getElementById("empty-state").style.display = "none";
  document.getElementById("itinerario-detail").style.display = "none";
  const detail = document.getElementById("place-detail");
  detail.style.display = "none";

  // Popola i dati
  document.getElementById("detail-breadcrumb").textContent =
    `${paese.nome} › ${cat.nome}`;
  document.getElementById("detail-title").textContent = luogo.nome;
  document.getElementById("detail-description").textContent = luogo.descrizione;

  // Foto
  const photosDiv = document.getElementById("detail-photos");
  photosDiv.innerHTML = "";
  if (luogo.foto && luogo.foto.length > 0) {
    luogo.foto.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      img.className = "detail-photo";
      img.alt = luogo.nome;
      photosDiv.appendChild(img);
    });
  } else {
    // Placeholder finché non ci sono foto reali
    const ph = document.createElement("div");
    ph.className = "photo-placeholder";
    ph.textContent = "Foto in arrivo il prima possibile";
    photosDiv.appendChild(ph);
  }

  // Mostra il pannello
  detail.style.display = "block";

  // Mappa
  setTimeout(() => {
    if (leafletMap) {
      leafletMap.remove();
      leafletMap = null;
    }
    leafletMap = L.map("detail-map").setView(luogo.coordinate, 14);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap"
    }).addTo(leafletMap);
    L.marker(luogo.coordinate)
      .addTo(leafletMap)
      .bindPopup(`<b>${luogo.nome}</b>`)
      .openPopup();
  }, 50);

  // Salva coordinate per "Come arrivarci"
  detail.dataset.lat = luogo.coordinate[0];
  detail.dataset.lng = luogo.coordinate[1];
}

// -----------------------------------------------
// MOSTRA ITINERARIO
// -----------------------------------------------
function mostraItinerario(it) {
  // Deseleziona tutto
  document.querySelectorAll(".luogo-item").forEach(el => el.classList.remove("selected"));
  document.querySelectorAll(".itinerario-item").forEach(el => el.classList.remove("selected"));
  document.getElementById(`it-${it.id}`).classList.add("selected");

  selectedItinerarioId = it.id;
  selectedLuogoId = null;

  // Nascondi stati precedenti
  document.getElementById("empty-state").style.display = "none";
  document.getElementById("place-detail").style.display = "none";
  const detail = document.getElementById("itinerario-detail");
  detail.style.display = "none";

  // Popola dati
  document.getElementById("itinerario-title").textContent = it.nome;
  document.getElementById("itinerario-desc").textContent = it.descrizione;

  document.getElementById("itinerario-meta").innerHTML = `
    <div class="meta-badge">
      <span class="meta-label">Distanza</span>
      <span class="meta-value">${it.distanza}</span>
    </div>
    <div class="meta-badge">
      <span class="meta-label">Durata</span>
      <span class="meta-value">${it.durata}</span>
    </div>
    <div class="meta-badge">
      <span class="meta-label">Difficoltà</span>
      <span class="meta-value">${it.difficolta}</span>
    </div>
  `;

  const tappeDiv = document.getElementById("itinerario-tappe");
  tappeDiv.innerHTML = `<p class="tappe-title">Tappe del percorso</p>`;
  it.tappe.forEach((tappa, i) => {
    tappeDiv.innerHTML += `
      <div class="tappa">
        <div class="tappa-num">${i + 1}</div>
        <div class="tappa-info">
          <div class="tappa-nome">${tappa.nome}</div>
          <div class="tappa-desc">${tappa.desc}</div>
        </div>
      </div>
    `;
  });

  // Mostra pannello
  detail.style.display = "block";

  // Mappa itinerario
  setTimeout(() => {
    if (itinerarioLeafletMap) {
      itinerarioLeafletMap.remove();
      itinerarioLeafletMap = null;
    }
    const centroLat = it.tappe.reduce((s, t) => s + t.coord[0], 0) / it.tappe.length;
    const centroLng = it.tappe.reduce((s, t) => s + t.coord[1], 0) / it.tappe.length;

    itinerarioLeafletMap = L.map("itinerario-map").setView([centroLat, centroLng], 11);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap"
    }).addTo(itinerarioLeafletMap);

    const coords = it.tappe.map(t => t.coord);
    L.polyline(coords, { color: "#8b1a1a", weight: 3, dashArray: "6,8" }).addTo(itinerarioLeafletMap);

    it.tappe.forEach((tappa, i) => {
      const icon = L.divIcon({
        html: `<div style="
          background:#8b1a1a;color:#fff;
          width:24px;height:24px;border-radius:50%;
          display:flex;align-items:center;justify-content:center;
          font-size:12px;font-weight:700;
          border:2px solid #fff;
        ">${i + 1}</div>`,
        className: "",
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      });
      L.marker(tappa.coord, { icon })
        .addTo(itinerarioLeafletMap)
        .bindPopup(`<b>${tappa.nome}</b><br>${tappa.desc}`);
    });
  }, 50);
}

// -----------------------------------------------
// COME ARRIVARCI
// -----------------------------------------------
function apriArrivarci() {
  const detail = document.getElementById("place-detail");
  const lat = detail.dataset.lat;
  const lng = detail.dataset.lng;
  if (lat && lng) {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    window.open(url, "_blank");
  }
}

// -----------------------------------------------
// MULTILINGUA
// -----------------------------------------------
const TRADUZIONI = {
  it: {
    selezionaPaese: "Seleziona un paese",
    selezionaItinerario: "Seleziona un itinerario",
    benvenuto: "Benvenuto",
    benvenutoDesc: "Seleziona un paese o un itinerario\nper scoprire i luoghi della memoria\ndella Val Scrivia.",
    cerca: "Cerca un luogo...",
    arrivarci: "Come arrivarci →",
    tappe: "Tappe del percorso",
    distanza: "Distanza",
    durata: "Durata",
    difficolta: "Difficoltà",
    itinerario: "Itinerario",
    fotoArrivo: "Foto in arrivo",
    paese: "Paese",
  },
  en: {
    selezionaPaese: "Select a town",
    selezionaItinerario: "Select an itinerary",
    benvenuto: "Welcome",
    benvenutoDesc: "Select a town or an itinerary\nto discover the places of memory\nin Val Scrivia.",
    cerca: "Search a place...",
    arrivarci: "Get directions →",
    tappe: "Route stops",
    distanza: "Distance",
    durata: "Duration",
    difficolta: "Difficulty",
    itinerario: "Itinerary",
    fotoArrivo: "Photos coming soon",
    paese: "Town",
  },
  fr: {
    selezionaPaese: "Sélectionnez une ville",
    selezionaItinerario: "Sélectionnez un itinéraire",
    benvenuto: "Bienvenue",
    benvenutoDesc: "Sélectionnez une ville ou un itinéraire\npour découvrir les lieux de mémoire\nde la Val Scrivia.",
    cerca: "Rechercher un lieu...",
    arrivarci: "Comment y aller →",
    tappe: "Étapes du parcours",
    distanza: "Distance",
    durata: "Durée",
    difficolta: "Difficulté",
    itinerario: "Itinéraire",
    fotoArrivo: "Photos à venir",
    paese: "Ville",
  },
  de: {
    selezionaPaese: "Stadt auswählen",
    selezionaItinerario: "Route auswählen",
    benvenuto: "Willkommen",
    benvenutoDesc: "Wählen Sie eine Stadt oder eine Route,\num die Gedenkstätten\nim Val Scrivia zu entdecken.",
    cerca: "Einen Ort suchen...",
    arrivarci: "Route berechnen →",
    tappe: "Routenetappen",
    distanza: "Entfernung",
    durata: "Dauer",
    difficolta: "Schwierigkeit",
    itinerario: "Route",
    fotoArrivo: "Fotos folgen bald",
    paese: "Stadt",
  },
  es: {
    selezionaPaese: "Selecciona una ciudad",
    selezionaItinerario: "Selecciona un itinerario",
    benvenuto: "Bienvenido",
    benvenutoDesc: "Selecciona una ciudad o un itinerario\npara descubrir los lugares de memoria\ndel Val Scrivia.",
    cerca: "Buscar un lugar...",
    arrivarci: "Cómo llegar →",
    tappe: "Etapas del recorrido",
    distanza: "Distancia",
    durata: "Duración",
    difficolta: "Dificultad",
    itinerario: "Itinerario",
    fotoArrivo: "Fotos próximamente",
    paese: "Ciudad",
  }
};

let langAttuale = "it";

function setLang(lang) {
  langAttuale = lang;

  // Aggiorna bottoni
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.textContent.toLowerCase() === lang);
  });

  const t = TRADUZIONI[lang];

  // Aggiorna testi statici
  document.querySelector(".sidebar-label") && (document.querySelector("#tab-paesi .sidebar-label").textContent = t.selezionaPaese);
  document.querySelector("#tab-itinerari .sidebar-label").textContent = t.selezionaItinerario;
  document.querySelector(".empty-state h2").textContent = t.benvenuto;
  document.querySelector(".empty-state p").innerHTML = t.benvenutoDesc.replace(/\n/g, "<br>");
  document.getElementById("search-input").placeholder = t.cerca;

  // Aggiorna bottone arrivarci se visibile
  const btnArrivarci = document.getElementById("btn-arrivarci");
  if (btnArrivarci) btnArrivarci.textContent = t.arrivarci;

  // Tab label
  document.querySelector(".tab[data-tab='paesi']").textContent = t.paese;
  document.querySelector(".tab[data-tab='itinerari']").textContent = t.itinerario;
}

// -----------------------------------------------
// RICERCA
// -----------------------------------------------
function cercaLuogo(query) {
  const resultsDiv = document.getElementById("search-results");
  query = query.trim().toLowerCase();

  if (query.length < 2) {
    resultsDiv.style.display = "none";
    return;
  }

  const risultati = [];

  PAESI.forEach(paese => {
    paese.categorie.forEach(cat => {
      cat.luoghi.forEach(luogo => {
        if (luogo.nome.toLowerCase().includes(query) ||
            paese.nome.toLowerCase().includes(query)) {
          risultati.push({ paese, cat, luogo });
        }
      });
    });
  });

  if (risultati.length === 0) {
    resultsDiv.style.display = "none";
    return;
  }

  resultsDiv.innerHTML = "";
  risultati.forEach(r => {
    const div = document.createElement("div");
    div.className = "search-result-item";
    div.innerHTML = `
      <div>${r.luogo.nome}</div>
      <div class="search-result-sub">${r.paese.nome} › ${r.cat.nome}</div>
    `;
    div.onclick = () => {
      mostraLuogo(r.paese, r.cat, r.luogo);
      resultsDiv.style.display = "none";
      document.getElementById("search-input").value = "";
    };
    resultsDiv.appendChild(div);
  });

  resultsDiv.style.display = "block";
}

// Chiudi risultati cliccando fuori
document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-wrap")) {
    document.getElementById("search-results").style.display = "none";
  }
});