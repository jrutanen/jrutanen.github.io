/**
 * Lundasoft – Simple i18n language switcher
 *
 * Usage in HTML:
 *   <span data-i18n="hero.title">Fallback text</span>
 *
 * Call switchLang('fi') to change language.
 * Detected automatically from browser or localStorage on load.
 */

const translations = {
  en: {
    nav: {
      products: "Products",
      about:    "About",
    },
    hero: {
      eyebrow:   "Nordic Technology · Software Solutions",
      title:     "Software built for <span>real life</span>",
      subtitle:  "We craft thoughtful, elegant apps that genuinely make everyday tasks easier.",
      cta:       "Explore our apps",
    },
    products: {
      eyebrow:   "Our Products",
      title:     "Apps we're building",
      lead:      "Simple, focused tools designed to fit naturally into your day.",
    },
    clevrcart: {
      tag:       "Shopping",
      desc:      "A clever shopping cart that remembers what you often forget. Smart reminders make sure nothing gets left behind.",
      cta:       "Learn more",
    },
    about: {
      eyebrow:   "About Lundasoft",
      title:     "Who we are",
      lead:      "Lundasoft is a Nordic software company focused on building beautiful, practical apps for everyday life.",
    },
    clevrcart_page: {
      back:             "Back to Lundasoft",
      tagline:          "The shopping cart that thinks ahead.",
      store_cta:        "Coming soon",
      features_eyebrow: "Features",
      features_title:   "Everything you need, nothing you don't",
      feat1_title:      "Smart reminders",
      feat1_desc:       "Get reminded of items you regularly buy but easily forget before you reach the store.",
      feat2_title:      "Learns your habits",
      feat2_desc:       "ClevrCart picks up on your shopping patterns and suggests items at the right moment.",
      feat3_title:      "Fast & simple",
      feat3_desc:       "Add items in seconds. No clutter, no accounts needed to get started.",
      feat4_title:      "Works offline",
      feat4_desc:       "Your list is always with you, even without an internet connection.",
      media_eyebrow:    "See it in action",
      media_title:      "Screenshots & demo",
      img_placeholder:  "Screenshot coming soon",
      video_placeholder:"Video coming soon",
    },
    footer: {
      copy:      "© 2026 Lundasoft. All rights reserved.",
    },
  },

  fi: {
    nav: {
      products: "Tuotteet",
      about:    "Tietoa meistä",
    },
    hero: {
      eyebrow:   "Pohjoismainen teknologia · Ohjelmistoratkaisut",
      title:     "Ohjelmistot, jotka sopivat <span>oikeaan elämään</span>",
      subtitle:  "Kehitämme harkittuja ja tyylikkäitä sovelluksia, jotka tekevät arjesta helpompaa.",
      cta:       "Tutustu sovelluksiimme",
    },
    products: {
      eyebrow:   "Tuotteemme",
      title:     "Sovelluksia, joita rakennamme",
      lead:      "Yksinkertaisia, kohdennettuja työkaluja, jotka sopivat luontevasti päivääsi.",
    },
    clevrcart: {
      tag:       "Ostoslista",
      desc:      "Älykäs ostoskori, joka muistaa sen, minkä sinä unohdat. Älykkäät muistutukset huolehtivat, ettei mitään jää puuttumaan.",
      cta:       "Lue lisää",
    },
    about: {
      eyebrow:   "Tietoa Lundasoftista",
      title:     "Keitä olemme",
      lead:      "Lundasoft on pohjoismainen ohjelmistoyritys, joka rakentaa kauniita ja käytännöllisiä sovelluksia arkielämään.",
    },
    clevrcart_page: {
      back:             "Takaisin Lundasoftiin",
      tagline:          "Ostoskori, joka ajattelee edellä.",
      store_cta:        "Tulossa pian",
      features_eyebrow: "Ominaisuudet",
      features_title:   "Kaikki tarvittava, ei mitään turhaa",
      feat1_title:      "Älykäs muistutus",
      feat1_desc:       "Saat muistutuksen tuotteista, joita ostat säännöllisesti mutta helposti unohdat ennen kauppaa.",
      feat2_title:      "Oppii tottumuksesi",
      feat2_desc:       "ClevrCart seuraa ostoskaavioitasi ja ehdottaa tuotteita oikeaan aikaan.",
      feat3_title:      "Nopea ja yksinkertainen",
      feat3_desc:       "Lisää tuotteita sekunneissa. Ei turhaa, ei vaadi tiliä aloittaaksesi.",
      feat4_title:      "Toimii offline",
      feat4_desc:       "Listasi on aina mukanasi, myös ilman internetyhteyttä.",
      media_eyebrow:    "Katso toiminnassa",
      media_title:      "Kuvakaappaukset ja demo",
      img_placeholder:  "Kuvakaappaus tulossa pian",
      video_placeholder:"Video tulossa pian",
    },
    footer: {
      copy:      "© 2026 Lundasoft. Kaikki oikeudet pidätetään.",
    },
  },

  sv: {
    nav: {
      products: "Produkter",
      about:    "Om oss",
    },
    hero: {
      eyebrow:   "Nordisk teknologi · Programvarulösningar",
      title:     "Programvara byggd för <span>det verkliga livet</span>",
      subtitle:  "Vi skapar genomtänkta, eleganta appar som verkligen gör vardagen enklare.",
      cta:       "Utforska våra appar",
    },
    products: {
      eyebrow:   "Våra produkter",
      title:     "Appar vi bygger",
      lead:      "Enkla, fokuserade verktyg designade för att passa naturligt in i din vardag.",
    },
    clevrcart: {
      tag:       "Inköpslista",
      desc:      "En smart kundvagn som minns det du lätt glömmer. Smarta påminnelser ser till att ingenting missas.",
      cta:       "Läs mer",
    },
    about: {
      eyebrow:   "Om Lundasoft",
      title:     "Vilka vi är",
      lead:      "Lundasoft är ett nordiskt programvaruföretag som fokuserar på att bygga vackra, praktiska appar för vardagslivet.",
    },
    clevrcart_page: {
      back:             "Tillbaka till Lundasoft",
      tagline:          "Kundvagnen som tänker framåt.",
      store_cta:        "Kommer snart",
      features_eyebrow: "Funktioner",
      features_title:   "Allt du behöver, inget du inte behöver",
      feat1_title:      "Smarta påminnelser",
      feat1_desc:       "Få påminnelser om varor du köper regelbundet men lätt glömmer innan du når butiken.",
      feat2_title:      "Lär sig dina vanor",
      feat2_desc:       "ClevrCart lär sig dina shoppingmönster och föreslår varor vid rätt tidpunkt.",
      feat3_title:      "Snabb och enkel",
      feat3_desc:       "Lägg till varor på sekunder. Inga krångel, inget konto behövs för att komma igång.",
      feat4_title:      "Fungerar offline",
      feat4_desc:       "Din lista är alltid med dig, även utan internetanslutning.",
      media_eyebrow:    "Se det i aktion",
      media_title:      "Skärmdumpar och demo",
      img_placeholder:  "Skärmdump kommer snart",
      video_placeholder:"Video kommer snart",
    },
    footer: {
      copy:      "© 2026 Lundasoft. Alla rättigheter förbehållna.",
    },
  },

  da: {
    nav: {
      products: "Produkter",
      about:    "Om os",
    },
    hero: {
      eyebrow:   "Nordisk teknologi · Softwareløsninger",
      title:     "Software bygget til <span>det virkelige liv</span>",
      subtitle:  "Vi laver gennemtænkte, elegante apps, der gør hverdagen lettere.",
      cta:       "Udforsk vores apps",
    },
    products: {
      eyebrow:   "Vores produkter",
      title:     "Apps vi bygger",
      lead:      "Enkle, fokuserede værktøjer designet til at passe naturligt ind i din dag.",
    },
    clevrcart: {
      tag:       "Indkøbsliste",
      desc:      "En smart indkøbsvogn, der husker det, du glemmer. Smarte påmindelser sikrer, at intet bliver glemt.",
      cta:       "Læs mere",
    },
    about: {
      eyebrow:   "Om Lundasoft",
      title:     "Hvem vi er",
      lead:      "Lundasoft er et nordisk softwareselskab, der fokuserer på at bygge smukke, praktiske apps til hverdagslivet.",
    },
    clevrcart_page: {
      back:             "Tilbage til Lundasoft",
      tagline:          "Indkøbsvognen der tænker fremad.",
      store_cta:        "Kommer snart",
      features_eyebrow: "Funktioner",
      features_title:   "Alt hvad du har brug for, intet du ikke har",
      feat1_title:      "Smarte påmindelser",
      feat1_desc:       "Få påmindelser om varer du køber regelmæssigt, men let glemmer inden du når butikken.",
      feat2_title:      "Lærer dine vaner",
      feat2_desc:       "ClevrCart lærer dine indkøbsmønstre og foreslår varer på det rigtige tidspunkt.",
      feat3_title:      "Hurtig og enkel",
      feat3_desc:       "Tilføj varer på sekunder. Ingen rod, ingen konto nødvendig for at komme i gang.",
      feat4_title:      "Virker offline",
      feat4_desc:       "Din liste er altid med dig, selv uden internetforbindelse.",
      media_eyebrow:    "Se det i brug",
      media_title:      "Skærmbilleder og demo",
      img_placeholder:  "Skærmbillede kommer snart",
      video_placeholder:"Video kommer snart",
    },
    footer: {
      copy:      "© 2026 Lundasoft. Alle rettigheder forbeholdes.",
    },
  },

  de: {
    nav: {
      products: "Produkte",
      about:    "Über uns",
    },
    hero: {
      eyebrow:   "Nordische Technologie · Softwarelösungen",
      title:     "Software fürs <span>echte Leben</span>",
      subtitle:  "Wir entwickeln durchdachte, elegante Apps, die den Alltag wirklich einfacher machen.",
      cta:       "Unsere Apps entdecken",
    },
    products: {
      eyebrow:   "Unsere Produkte",
      title:     "Apps, die wir bauen",
      lead:      "Einfache, fokussierte Werkzeuge, die sich natürlich in deinen Alltag einfügen.",
    },
    clevrcart: {
      tag:       "Einkaufsliste",
      desc:      "Ein cleverer Einkaufswagen, der sich merkt, was du oft vergisst. Smarte Erinnerungen sorgen dafür, dass nichts fehlt.",
      cta:       "Mehr erfahren",
    },
    about: {
      eyebrow:   "Über Lundasoft",
      title:     "Wer wir sind",
      lead:      "Lundasoft ist ein nordisches Softwareunternehmen, das sich auf schöne, praktische Apps für den Alltag spezialisiert hat.",
    },
    clevrcart_page: {
      back:             "Zurück zu Lundasoft",
      tagline:          "Der Einkaufswagen, der vorausdenkt.",
      store_cta:        "Demnächst verfügbar",
      features_eyebrow: "Funktionen",
      features_title:   "Alles was du brauchst, nichts was du nicht brauchst",
      feat1_title:      "Smarte Erinnerungen",
      feat1_desc:       "Erhalte Erinnerungen für Artikel, die du regelmäßig kaufst, aber leicht vergisst.",
      feat2_title:      "Lernt deine Gewohnheiten",
      feat2_desc:       "ClevrCart erkennt deine Einkaufsmuster und schlägt Artikel zum richtigen Moment vor.",
      feat3_title:      "Schnell und einfach",
      feat3_desc:       "Artikel in Sekunden hinzufügen. Kein Konto erforderlich zum Starten.",
      feat4_title:      "Funktioniert offline",
      feat4_desc:       "Deine Liste ist immer dabei, auch ohne Internetverbindung.",
      media_eyebrow:    "In Aktion sehen",
      media_title:      "Screenshots und Demo",
      img_placeholder:  "Screenshot folgt in Kürze",
      video_placeholder:"Video folgt in Kürze",
    },
    footer: {
      copy:      "© 2026 Lundasoft. Alle Rechte vorbehalten.",
    },
  },

  fr: {
    nav: {
      products: "Produits",
      about:    "À propos",
    },
    hero: {
      eyebrow:   "Technologie nordique · Solutions logicielles",
      title:     "Des logiciels conçus pour <span>la vraie vie</span>",
      subtitle:  "Nous créons des applications élégantes et réfléchies qui simplifient vraiment le quotidien.",
      cta:       "Découvrir nos apps",
    },
    products: {
      eyebrow:   "Nos produits",
      title:     "Les apps que nous développons",
      lead:      "Des outils simples et ciblés, conçus pour s'intégrer naturellement dans votre quotidien.",
    },
    clevrcart: {
      tag:       "Liste de courses",
      desc:      "Un caddie intelligent qui se souvient de ce que vous oubliez souvent. Des rappels malins pour ne rien laisser de côté.",
      cta:       "En savoir plus",
    },
    about: {
      eyebrow:   "À propos de Lundasoft",
      title:     "Qui nous sommes",
      lead:      "Lundasoft est une entreprise logicielle nordique spécialisée dans la création d'applications belles et pratiques pour la vie quotidienne.",
    },
    clevrcart_page: {
      back:             "Retour à Lundasoft",
      tagline:          "Le caddie qui pense à l'avance.",
      store_cta:        "Bientôt disponible",
      features_eyebrow: "Fonctionnalités",
      features_title:   "Tout ce qu'il vous faut, rien de superflu",
      feat1_title:      "Rappels intelligents",
      feat1_desc:       "Recevez des rappels pour les articles que vous achetez régulièrement mais oubliez facilement.",
      feat2_title:      "Apprend vos habitudes",
      feat2_desc:       "ClevrCart apprend vos habitudes d'achat et suggère des articles au bon moment.",
      feat3_title:      "Rapide et simple",
      feat3_desc:       "Ajoutez des articles en quelques secondes. Sans complications, sans compte requis.",
      feat4_title:      "Fonctionne hors ligne",
      feat4_desc:       "Votre liste est toujours disponible, même sans connexion internet.",
      media_eyebrow:    "Voir en action",
      media_title:      "Captures d'écran et démo",
      img_placeholder:  "Capture d'écran bientôt disponible",
      video_placeholder:"Vidéo bientôt disponible",
    },
    footer: {
      copy:      "© 2026 Lundasoft. Tous droits réservés.",
    },
  },
};

const SUPPORTED = Object.keys(translations);
const DEFAULT_LANG = 'en';

function detectLang() {
  const stored = localStorage.getItem('ls_lang');
  if (stored && SUPPORTED.includes(stored)) return stored;
  const browser = navigator.language.slice(0, 2).toLowerCase();
  return SUPPORTED.includes(browser) ? browser : DEFAULT_LANG;
}

function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, key) => acc && acc[key], obj);
}

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = getNestedValue(t, key);
    if (value !== undefined) el.innerHTML = value;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const value = getNestedValue(t, key);
    if (value !== undefined) el.placeholder = value;
  });

  // Mark active button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('lang-btn--active', btn.dataset.lang === lang);
  });

  document.documentElement.lang = lang;
}

function switchLang(lang) {
  if (!SUPPORTED.includes(lang)) return;
  localStorage.setItem('ls_lang', lang);
  applyTranslations(lang);
}

// Auto-init on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const lang = detectLang();
  applyTranslations(lang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => switchLang(btn.dataset.lang));
  });
});
