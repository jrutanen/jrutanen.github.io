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
      desc:      "ClevrCart turns your receipts and handwritten notes into smart, history-aware shopping lists — so you spend less time writing lists and more time finding deals.",
      cta:       "Learn more",
    },
    about: {
      eyebrow:   "About Lundasoft",
      title:     "Who we are",
      lead:      "Lundasoft is a Nordic software company focused on building beautiful, practical apps for everyday life.",
    },
    clevrcart_page: {
      back:             "Back to Lundasoft",
      tagline:          "Your shopping list that actually learns.",
      subtitle:         "ClevrCart turns your receipts and handwritten notes into smart, history-aware shopping lists — so you spend less time writing lists and more time finding deals.",
      store_cta:        "Coming soon",
      features_eyebrow: "Features",
      features_title:   "Everything you need, nothing you don’t",
      feat1_title:      "Scan once, shop smarter forever",
      feat1_desc:       "Photograph your receipts after every trip. ClevrCart reads the items, prices, and stores — building a purchase history that works for you.",
      feat2_title:      "Auto-fill your list",
      feat2_desc:       "Open ClevrCart before your next shop and it suggests what to buy based on what you bought in the last 30 days. Review, adjust, and go.",
      feat3_title:      "Compare prices across shops",
      feat3_desc:       "Tap any item in your list to see what you’ve paid for it at different stores. No subscriptions, no price databases — just your own receipt history.",
      feat4_title:      "Your handwriting, digitized",
      feat4_desc:       "Snap a photo of your handwritten grocery note and ClevrCart converts it to an editable list in seconds, powered by Google Gemini AI.",
      feat5_title:      "Smart aisle ordering",
      feat5_desc:       "ClevrCart learns the layout of your regular stores and sorts your list in the order you actually walk the aisles — no more backtracking.",
      feat6_title:      "Your data stays yours",
      feat6_desc:       "Everything is stored locally on your device. No account required. No data sold or shared with advertisers.",
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
      tagline:          "Ostoslistasi, joka oikeasti oppii.",
      subtitle:         "ClevrCart muuttaa kuittisi ja käsinkirjoitetut muistiinpanosi älykkäiksi, historiatietoisiksi ostoslistoiksi — jotta käytät vähemmän aikaa listojen kirjoittamiseen ja enemmän tarjousten löytämiseen.",
      store_cta:        "Tulossa pian",
      features_eyebrow: "Ominaisuudet",
      features_title:   "Kaikki tarvittava, ei mitään turhaa",
      feat1_title:      "Skannaa kerran, osta älykkäämmin aina",
      feat1_desc:       "Ota kuva kuitista jokaisen ostosreissun jälkeen. ClevrCart lukee tuotteet, hinnat ja kaupat — rakentaen ostohistorian, joka toimii puolestasi.",
      feat2_title:      "Täytä lista automaattisesti",
      feat2_desc:       "Avaa ClevrCart ennen seuraavaa kauppareissua ja se ehdottaa ostoksia viimeisen 30 päivän historian perusteella. Tarkista, muokkaa ja lähde.",
      feat3_title:      "Vertaile hintoja eri kaupoissa",
      feat3_desc:       "Napauta mitä tahansa listalla olevaa tuotetta nähdäksesi, mitä olet maksanut siitä eri kaupoissa. Ei tilauksia, ei hintakantoja — vain oma kuittihistoriasi.",
      feat4_title:      "Käsikirjoituksesi digitalisoituna",
      feat4_desc:       "Ota kuva käsinkirjoitetusta ostoslistastasi ja ClevrCart muuntaa sen muokattavaksi listaksi sekunneissa, Google Gemini AI:n avulla.",
      feat5_title:      "Älykäs käytäväjärjestys",
      feat5_desc:       "ClevrCart oppii vakiokauppojesi pohjapiirustuksen ja järjestää listasi siitä järjestyksessä, jossa oikeasti kävelet käytäviä — ei enää edestakaisin kulkemista.",
      feat6_title:      "Tietosi pysyvät sinulla",
      feat6_desc:       "Kaikki tallennetaan paikallisesti laitteellesi. Ei tiliä tarvita. Tietojasi ei myydä eikä jaeta mainostajille.",
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
      tagline:          "Din inköpslista som faktiskt lär sig.",
      subtitle:         "ClevrCart omvandlar dina kvitton och handskrivna anteckningar till smarta, historiemedvetna inköpslistor — så att du spenderar mindre tid på att skriva listor och mer tid på att hitta fynd.",
      store_cta:        "Kommer snart",
      features_eyebrow: "Funktioner",
      features_title:   "Allt du behöver, inget du inte behöver",
      feat1_title:      "Skanna en gång, handla smartare alltid",
      feat1_desc:       "Fotografera dina kvitton efter varje tur. ClevrCart läser artiklarna, priserna och butikerna — och bygger en inköpshistorik som arbetar för dig.",
      feat2_title:      "Fyll listan automatiskt",
      feat2_desc:       "Öppna ClevrCart före nästa shopping och den föreslår vad du ska köpa baserat på vad du köpt de senaste 30 dagarna. Granska, justera och gå.",
      feat3_title:      "Jämför priser mellan butiker",
      feat3_desc:       "Tryck på valfri artikel i din lista för att se vad du betalat för den i olika butiker. Inga prenumerationer, inga prisdatabaser — bara din egen kvittohistorik.",
      feat4_title:      "Din handstil, digitaliserad",
      feat4_desc:       "Knäpp en bild av din handskrivna matlista och ClevrCart omvandlar den till en redigerbar lista på sekunder, drivet av Google Gemini AI.",
      feat5_title:      "Smart gångordning",
      feat5_desc:       "ClevrCart lär sig layouten på dina vanliga butiker och sorterar din lista i den ordning du faktiskt går genom gångarna — ingen mer spring fram och tillbaka.",
      feat6_title:      "Din data förblir din",
      feat6_desc:       "Allt lagras lokalt på din enhet. Inget konto krävs. Ingen data säljs eller delas med annonsörer.",
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
      tagline:          "Din indkøbsliste, der faktisk lærer.",
      subtitle:         "ClevrCart omdanner dine kvitteringer og håndskrevne noter til smarte, historiebevidste indkøbslister — så du bruger mindre tid på at skrive lister og mere tid på at finde tilbud.",
      store_cta:        "Kommer snart",
      features_eyebrow: "Funktioner",
      features_title:   "Alt hvad du har brug for, intet du ikke har",
      feat1_title:      "Scan én gang, shop smartere for altid",
      feat1_desc:       "Fotografer dine kvitteringer efter hver tur. ClevrCart læser varerne, priserne og butikkerne — og bygger en indkøbshistorik, der arbejder for dig.",
      feat2_title:      "Udfyld listen automatisk",
      feat2_desc:       "Åbn ClevrCart før næste shopping, og den foreslår, hvad du skal købe baseret på, hvad du har købt de seneste 30 dage. Gennemse, juster og afsted.",
      feat3_title:      "Sammenlign priser på tværs af butikker",
      feat3_desc:       "Tryk på en hvilken som helst vare på din liste for at se, hvad du har betalt for den i forskellige butikker. Ingen abonnementer, ingen prisdatabaser — kun din egen kvitteringshistorik.",
      feat4_title:      "Din håndskrift, digitaliseret",
      feat4_desc:       "Tag et billede af din håndskrevne indkøbsseddel, og ClevrCart konverterer den til en redigerbar liste på sekunder, drevet af Google Gemini AI.",
      feat5_title:      "Smart gangordning",
      feat5_desc:       "ClevrCart lærer layoutet i dine faste butikker og sorterer din liste i den rækkefølge, du faktisk går i gangene — ikke mere frem og tilbage.",
      feat6_title:      "Dine data forbliver dine",
      feat6_desc:       "Alt lagres lokalt på din enhed. Ingen konto påkrævet. Ingen data sælges eller deles med annon cører.",
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
      tagline:          "Deine Einkaufsliste, die wirklich lernt.",
      subtitle:         "ClevrCart verwandelt deine Kassenbons und handgeschriebene Notizen in smarte, verlaufsbasierte Einkaufslisten — damit du weniger Zeit mit Listenerstellen und mehr Zeit mit Schnäppchenjagen verbringst.",
      store_cta:        "Demnächst verfügbar",
      features_eyebrow: "Funktionen",
      features_title:   "Alles was du brauchst, nichts was du nicht brauchst",
      feat1_title:      "Einmal scannen, klüger einkaufen",
      feat1_desc:       "Fotografiere deine Kassenbons nach jedem Einkauf. ClevrCart erkennt Artikel, Preise und Geschäfte — und baut eine Kaufhistorie, die für dich arbeitet.",
      feat2_title:      "Liste automatisch befüllen",
      feat2_desc:       "Öffne ClevrCart vor dem nächsten Einkauf und es schlägt Artikel vor, die du in den letzten 30 Tagen gekauft hast. Prüfe, passe an und los.",
      feat3_title:      "Preise zwischen Läden vergleichen",
      feat3_desc:       "Tippe auf einen Artikel in deiner Liste, um zu sehen, was du dafür in verschiedenen Läden bezahlt hast. Kein Abo, keine Preisdatenbank — nur deine eigene Kassenbon-Historie.",
      feat4_title:      "Deine Handschrift, digitalisiert",
      feat4_desc:       "Mach ein Foto von deiner handgeschriebenen Einkaufsliste und ClevrCart macht daraus in Sekunden eine bearbeitbare Liste — unterstützt von Google Gemini AI.",
      feat5_title:      "Smarte Gangreihenfolge",
      feat5_desc:       "ClevrCart merkt sich den Aufbau deiner Stamm­geschäfte und sortiert deine Liste so, wie du tatsächlich durch die Gänge läufst — kein Hin- und Herlaufen mehr.",
      feat6_title:      "Deine Daten bleiben deine",
      feat6_desc:       "Alles wird lokal auf deinem Gerät gespeichert. Kein Konto erforderlich. Keine Daten werden an Werbetreibende verkauft oder weitergegeben.",
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
      tagline:          "Votre liste de courses qui apprend vraiment.",
      subtitle:         "ClevrCart transforme vos tickets de caisse et notes manuscrites en listes de courses intelligentes et enrichies par l’historique — pour moins écrire et plus économiser.",
      store_cta:        "Bientôt disponible",
      features_eyebrow: "Fonctionnalités",
      features_title:   "Tout ce qu’il vous faut, rien de superflu",
      feat1_title:      "Scannez une fois, achetez plus malin",
      feat1_desc:       "Photographiez vos tickets de caisse après chaque course. ClevrCart lit les articles, les prix et les magasins — pour construire un historique d’achats qui travaille pour vous.",
      feat2_title:      "Remplissage automatique de la liste",
      feat2_desc:       "Ouvrez ClevrCart avant votre prochaine course et il suggère quoi acheter d’après vos achats des 30 derniers jours. Vérifiez, ajustez et partez.",
      feat3_title:      "Comparez les prix entre magasins",
      feat3_desc:       "Appuyez sur n’importe quel article de votre liste pour voir ce que vous avez payé dans différents magasins. Aucun abonnement, aucune base de données — juste votre historique de tickets.",
      feat4_title:      "Votre écriture, numérisée",
      feat4_desc:       "Prenez une photo de votre liste manuscrite et ClevrCart la convertit en liste modifiable en quelques secondes, grâce à Google Gemini AI.",
      feat5_title:      "Ordre intelligent dans les rayons",
      feat5_desc:       "ClevrCart apprend la disposition de vos magasins habituels et trie votre liste dans l’ordre où vous parcourez vraiment les rayons — fini les allers-retours.",
      feat6_title:      "Vos données restent les vôtres",
      feat6_desc:       "Tout est stocké localement sur votre appareil. Aucun compte requis. Aucune donnée vendue ou partagée avec des annonceurs.",
      media_eyebrow:    "Voir en action",
      media_title:      "Captures d’écran et démo",
      img_placeholder:  "Capture d’écran bientôt disponible",
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
