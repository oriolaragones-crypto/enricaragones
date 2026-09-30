export const languages = { ca: 'Català', es: 'Español', en: 'English', fr: 'Français' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'ca';

export const sections = ['biografia', 'publicacions', 'divulgacio', 'premsa', 'contacte'] as const;
export type Section = (typeof sections)[number];

// Els textos marcats com a proveïdor són provisionals: cal substituir-los pels reals.
export const ui = {
  ca: {
    siteTitle: 'Enric Aragonès i Valls',
    role: 'Geòleg investigador',
    tagline: 'Recerca i obra geològica de tota una vida',
    nav: { biografia: 'Biografia', publicacions: 'Publicacions', divulgacio: 'Divulgació', premsa: 'Premsa', contacte: 'Contacte' },
    home: {
      intro: 'Geòleg i hidrogeòleg, exfuncionari de la Generalitat de Catalunya i estudiós de la història de la geologia a Catalunya.',
      areas: 'Àrees d’especialitat',
      featured: 'Publicacions destacades',
      all: 'Veure totes les publicacions',
      readBio: 'Llegir la biografia',
    },
    pubs: { search: 'Cerca per títol, autor o paraula clau…', year: 'Any', type: 'Tipus', topic: 'Tema', all: 'Tots', results: 'resultats', none: 'Cap resultat.', pdf: 'Descarregar PDF', source: 'Veure la font', abstract: 'Resum', cite: 'Cita' },
    types: { article: 'Article', book: 'Llibre', chapter: 'Capítol', report: 'Informe', map: 'Mapa', conference: 'Comunicació', review: 'Ressenya' },
    topics: { ambient: 'Medi ambient', historia: 'Història de la geologia', estratigrafia: 'Estratigrafia', hidrogeologia: 'Hidrogeologia', cartografia: 'Cartografia', regional: 'Geologia regional' },
    bio: { p1: "Enric Aragonès i Valls (Tarragona, 1948) és geòleg (1972) i hidrogeòleg (1973), i té un màster en enginyeria i gestió ambiental (1993-1994). Va ser funcionari de la Generalitat de Catalunya de 1981 a 2012, entre altres destinacions a la Direcció d’Energia i Mines, i avui està jubilat.", p2: "Va començar com a geòleg de camp: entre 1980 i 1983 va signar sis fulls del Mapa Geológico de España a escala 1:50 000. Amb els anys s’ha especialitzat en la història de la geologia a Catalunya. El seu mètode és recuperar, a partir d’arxius i correspondència, les persones i els mapes que la història havia deixat de banda. Ha reconstruït els primers intents de cartografia geològica del país, del mapa que la Diputació va encarregar a Moulin (1869-1870) al Mapa Geològic de Catalunya de la Mancomunitat, dirigit per Marià Faura (1919-1924). Ha estudiat el viatge de Charles Lyell per Catalunya el 1830 i n’ha publicat els resultats en una revista internacional (2008) i en els textos complementaris de l’edició catalana dels Principis de geologia (IEC, 2020). També ha donat a conèixer figures com Lluís Marià Vidal, Marià Faura, Carles de Gimbernat, Llorenç Tomàs i Pere Alsius.", p3: "A banda de la geologia, ha estudiat fenòmens que van fascinar els contemporanis: els meteorits i les aurores boreals observats a la península al segle XVIII, i la història minera de Subirats i de la sal de Cardona. És l’autor de les Notícies de Natura, una publicació singular sobre la història de les ciències naturals a Catalunya, editada en autoedició i de distribució restringida entre amics i algunes institucions. Ha coordinat les Actes del Simposi Mediterrani d’Espais Marins i Costaners Protegits de la Mediterrània (2002) i l’Epistolari de Pere Alsius i Torrent (2024).", p4: "Col·laborador científic del Museu Geològic del Seminari de Barcelona des de 2005, hi té cura de l’Arxiu Històric i Biogràfic, del qual fa l’endreç i l’inventari. A partir d’aquest fons ha documentat la història de la cartografia geològica de Catalunya anterior a la guerra civil i ha catalogat els llegats fotogràfics de Vidal i de Faura.", title: 'Biografia', timeline: 'Trajectòria', links: 'Enllaços i perfils', research: "Línies de recerca", researchItems: ["Història de la cartografia geològica de Catalunya", "Història de la geologia: Lyell, Vidal, Faura, Font i Sagué, Gimbernat, Alsius", "Arxius i patrimoni: epistolaris, fotografia i mines", "Meteorits i aurores boreals a la península (segle XVIII)"], allPubs: "Veure totes les publicacions" },
    contact: { title: 'Contacte', write: 'Podeu escriure a',  name: 'Nom', email: 'Correu electrònic', message: 'Missatge', send: 'Enviar' },
    outreach: { intro: "Textos de divulgació que no són publicacions científiques: entrades de blog, xerrades i altres escrits d’Enric Aragonès.", blog: "Entrada de blog", read: "Llegir l’entrada", talk: "Xerrada", page: "Veure la pàgina", pdf: "Descarregar la presentació (PDF)", video: "Veure el vídeo" },
    press: { interview: 'Entrevista', mention: 'Menció', news: 'Notícia', read: 'Llegir l’entrevista', readNews: 'Veure la notícia', open: 'Veure l’article', article: 'Article' },
    footer: 'Tots els drets reservats.',
    langLabel: 'Idioma',
  },
  es: {
    siteTitle: 'Enric Aragonès i Valls',
    role: 'Geólogo investigador',
    tagline: 'Investigación y obra geológica de toda una vida',
    nav: { biografia: 'Biografía', publicacions: 'Publicaciones', divulgacio: 'Divulgación', premsa: 'Prensa', contacte: 'Contacto' },
    home: {
      intro: 'Geólogo e hidrogeólogo, exfuncionario de la Generalitat de Catalunya y estudioso de la historia de la geología en Cataluña.',
      areas: 'Áreas de especialidad',
      featured: 'Publicaciones destacadas',
      all: 'Ver todas las publicaciones',
      readBio: 'Leer la biografía',
    },
    pubs: { search: 'Buscar por título, autor o palabra clave…', year: 'Año', type: 'Tipo', topic: 'Tema', all: 'Todos', results: 'resultados', none: 'Sin resultados.', pdf: 'Descargar PDF', source: 'Ver la fuente', abstract: 'Resumen', cite: 'Cita' },
    types: { article: 'Artículo', book: 'Libro', chapter: 'Capítulo', report: 'Informe', map: 'Mapa', conference: 'Comunicación', review: 'Reseña' },
    topics: { ambient: 'Medio ambiente', historia: 'Historia de la geología', estratigrafia: 'Estratigrafía', hidrogeologia: 'Hidrogeología', cartografia: 'Cartografía', regional: 'Geología regional' },
    bio: { p1: "Enric Aragonès i Valls (Tarragona, 1948) es geólogo (1972) e hidrogeólogo (1973), y tiene un máster en ingeniería y gestión ambiental (1993-1994). Fue funcionario de la Generalitat de Catalunya de 1981 a 2012, entre otros destinos en la Dirección de Energía y Minas, y hoy está jubilado.", p2: "Empezó como geólogo de campo: entre 1980 y 1983 firmó seis hojas del Mapa Geológico de España a escala 1:50 000. Con los años se ha especializado en la historia de la geología en Cataluña. Su método consiste en recuperar, a partir de archivos y correspondencia, a las personas y los mapas que la historia había dejado de lado. Ha reconstruido los primeros intentos de cartografía geológica del país, desde el mapa que la Diputación encargó a Moulin (1869-1870) hasta el Mapa Geológico de Cataluña de la Mancomunitat, dirigido por Marià Faura (1919-1924). Ha estudiado el viaje de Charles Lyell por Cataluña en 1830 y ha publicado los resultados en una revista internacional (2008) y en los textos complementarios de la edición catalana de los Principios de geología (IEC, 2020). También ha dado a conocer figuras como Lluís Marià Vidal, Marià Faura, Carles de Gimbernat, Llorenç Tomàs y Pere Alsius.", p3: "Además de la geología, ha estudiado fenómenos que fascinaron a los contemporáneos: los meteoritos y las auroras boreales observados en la península en el siglo XVIII, y la historia minera de Subirats y de la sal de Cardona. Es el autor de las Notícies de Natura, una publicación singular sobre la historia de las ciencias naturales en Cataluña, editada en autoedición y de distribución restringida entre amigos y algunas instituciones. Ha coordinado las Actas del Simposio Mediterráneo de Espacios Marinos y Costeros Protegidos del Mediterráneo (2002) y el Epistolari de Pere Alsius i Torrent (2024).", p4: "Colaborador científico del Museo Geológico del Seminario de Barcelona desde 2005, se ocupa de su Archivo Histórico y Biográfico, cuyo orden e inventario realiza. A partir de este fondo ha documentado la historia de la cartografía geológica de Cataluña anterior a la guerra civil y ha catalogado los legados fotográficos de Vidal y de Faura.", title: 'Biografía', timeline: 'Trayectoria', links: 'Enlaces y perfiles', research: "Líneas de investigación", researchItems: ["Historia de la cartografía geológica de Cataluña", "Historia de la geología: Lyell, Vidal, Faura, Font i Sagué, Gimbernat, Alsius", "Archivos y patrimonio: epistolarios, fotografía y minas", "Meteoritos y auroras boreales en la península (siglo XVIII)"], allPubs: "Ver todas las publicaciones" },
    contact: { title: 'Contacto', write: 'Puede escribir a',  name: 'Nombre', email: 'Correo electrónico', message: 'Mensaje', send: 'Enviar' },
    outreach: { intro: "Textos de divulgación que no son publicaciones científicas: entradas de blog, charlas y otros escritos de Enric Aragonès.", blog: "Entrada de blog", read: "Leer la entrada", talk: "Charla", page: "Ver la página", pdf: "Descargar la presentación (PDF)", video: "Ver el vídeo" },
    press: { interview: 'Entrevista', mention: 'Mención', news: 'Noticia', read: 'Leer la entrevista', readNews: 'Ver la noticia', open: 'Ver el artículo', article: 'Artículo' },
    footer: 'Todos los derechos reservados.',
    langLabel: 'Idioma',
  },
  en: {
    siteTitle: 'Enric Aragonès i Valls',
    role: 'Research geologist',
    tagline: 'A lifetime of geological research',
    nav: { biografia: 'Biography', publicacions: 'Publications', divulgacio: 'Outreach', premsa: 'Press', contacte: 'Contact' },
    home: {
      intro: 'Geologist and hydrogeologist, retired civil servant of the Generalitat de Catalunya and scholar of the history of geology in Catalonia.',
      areas: 'Areas of expertise',
      featured: 'Featured publications',
      all: 'See all publications',
      readBio: 'Read the biography',
    },
    pubs: { search: 'Search by title, author or keyword…', year: 'Year', type: 'Type', topic: 'Topic', all: 'All', results: 'results', none: 'No results.', pdf: 'Download PDF', source: 'View source', abstract: 'Abstract', cite: 'Cite' },
    types: { article: 'Article', book: 'Book', chapter: 'Chapter', report: 'Report', map: 'Map', conference: 'Conference paper', review: 'Review' },
    topics: { ambient: 'Environment', historia: 'History of geology', estratigrafia: 'Stratigraphy', hidrogeologia: 'Hydrogeology', cartografia: 'Cartography', regional: 'Regional geology' },
    bio: { p1: "Enric Aragonès i Valls (born in Tarragona, 1948) is a geologist (1972) and hydrogeologist (1973), and holds a master’s degree in environmental engineering and management (1993-1994). He was a civil servant of the Generalitat de Catalunya from 1981 to 2012, with postings that included the Directorate of Energy and Mines, and is now retired.", p2: "He began as a field geologist: between 1980 and 1983 he signed six sheets of the Mapa Geológico de España at 1:50,000. Over the years he has specialised in the history of geology in Catalonia. His method is to recover, from archives and correspondence, the people and maps that history had left aside. He has reconstructed the country’s first attempts at geological mapping, from the map the Diputació commissioned from Moulin (1869-1870) to the Mancomunitat’s Geological Map of Catalonia, directed by Marià Faura (1919-1924). He has studied Charles Lyell’s 1830 journey through Catalonia and published the results in an international journal (2008) and in the complementary texts of the Catalan edition of the Principles of Geology (IEC, 2020). He has also brought to light figures such as Lluís Marià Vidal, Marià Faura, Carles de Gimbernat, Llorenç Tomàs and Pere Alsius.", p3: "Beyond geology, he has studied phenomena that fascinated people of their time: the meteorites and auroras observed on the peninsula in the 18th century, and the mining history of Subirats and the Cardona salt. He is the author of the Notícies de Natura, a singular publication on the history of the natural sciences in Catalonia, self-published and distributed on a restricted basis among friends and a few institutions. He has coordinated the Proceedings of the Mediterranean Symposium on Protected Marine and Coastal Areas of the Mediterranean (2002) and the Epistolari de Pere Alsius i Torrent (2024).", p4: "A scientific collaborator of the Museu Geològic del Seminari de Barcelona since 2005, he looks after its Historical and Biographical Archive, which he is tidying and cataloguing. From this collection he has documented the history of geological mapping in Catalonia before the Civil War and has catalogued the photographic legacies of Vidal and Faura.", title: 'Biography', timeline: 'Career', links: 'Links and profiles', research: "Research areas", researchItems: ["History of the geological mapping of Catalonia", "History of geology: Lyell, Vidal, Faura, Font i Sagué, Gimbernat, Alsius", "Archives and heritage: correspondence, photography and mines", "Meteorites and auroras on the peninsula (18th century)"], allPubs: "See all publications" },
    contact: { title: 'Contact', write: 'You can write to',  name: 'Name', email: 'Email', message: 'Message', send: 'Send' },
    outreach: { intro: "Popular writing that is not scientific publication: blog posts, talks and other pieces by Enric Aragonès.", blog: "Blog post", read: "Read the post", talk: "Talk", page: "View the page", pdf: "Download the presentation (PDF)", video: "Watch the video" },
    press: { interview: 'Interview', mention: 'Mention', news: 'News', read: 'Read the interview', readNews: 'View the news item', open: 'View the article', article: 'Article' },
    footer: 'All rights reserved.',
    langLabel: 'Language',
  },
  fr: {
    siteTitle: 'Enric Aragonès i Valls',
    role: 'Géologue chercheur',
    tagline: 'Une vie de recherche géologique',
    nav: { biografia: 'Biographie', publicacions: 'Publications', divulgacio: 'Vulgarisation', premsa: 'Presse', contacte: 'Contact' },
    home: {
      intro: 'Géologue et hydrogéologue, ancien fonctionnaire de la Generalitat de Catalogne et spécialiste de l’histoire de la géologie en Catalogne.',
      areas: 'Domaines de spécialité',
      featured: 'Publications mises en avant',
      all: 'Voir toutes les publications',
      readBio: 'Lire la biographie',
    },
    pubs: { search: 'Rechercher par titre, auteur ou mot-clé…', year: 'Année', type: 'Type', topic: 'Thème', all: 'Tous', results: 'résultats', none: 'Aucun résultat.', pdf: 'Télécharger le PDF', source: 'Voir la source', abstract: 'Résumé', cite: 'Citer' },
    types: { article: 'Article', book: 'Livre', chapter: 'Chapitre', report: 'Rapport', map: 'Carte', conference: 'Communication', review: 'Compte rendu' },
    topics: { ambient: 'Environnement', historia: 'Histoire de la géologie', estratigrafia: 'Stratigraphie', hidrogeologia: 'Hydrogéologie', cartografia: 'Cartographie', regional: 'Géologie régionale' },
    bio: { p1: "Enric Aragonès i Valls (né à Tarragone en 1948) est géologue (1972) et hydrogéologue (1973), et titulaire d’un master en ingénierie et gestion de l’environnement (1993-1994). Il a été fonctionnaire de la Generalitat de Catalogne de 1981 à 2012, avec notamment un poste à la Direction de l’énergie et des mines, et il est aujourd’hui retraité.", p2: "Il a débuté comme géologue de terrain : entre 1980 et 1983, il a signé six feuilles de la Carte géologique d’Espagne (Mapa Geológico de España) au 1/50 000. Au fil des ans, il s’est spécialisé dans l’histoire de la géologie en Catalogne. Sa méthode consiste à retrouver, à partir d’archives et de correspondances, les personnes et les cartes que l’histoire avait laissées de côté. Il a reconstitué les premières tentatives de cartographie géologique du pays, de la carte commandée par la Diputació à Moulin (1869-1870) à la Carte géologique de la Catalogne de la Mancomunitat, dirigée par Marià Faura (1919-1924). Il a étudié le voyage de Charles Lyell en Catalogne en 1830 et en a publié les résultats dans une revue internationale (2008) et dans les textes complémentaires de l’édition catalane des Principes de géologie (IEC, 2020). Il a aussi fait connaître des figures comme Lluís Marià Vidal, Marià Faura, Carles de Gimbernat, Llorenç Tomàs et Pere Alsius.", p3: "Au-delà de la géologie, il a étudié des phénomènes qui fascinaient les contemporains : les météorites et les aurores boréales observées dans la péninsule au XVIIIe siècle, ainsi que l’histoire minière de Subirats et du sel de Cardona. Il est l’auteur des Notícies de Natura, une publication singulière sur l’histoire des sciences naturelles en Catalogne, en autoédition et de diffusion restreinte parmi des amis et quelques institutions. Il a coordonné les Actes du Symposium méditerranéen des espaces marins et côtiers protégés de la Méditerranée (2002) et l’Epistolari de Pere Alsius i Torrent (2024).", p4: "Collaborateur scientifique du Musée géologique du Séminaire de Barcelone depuis 2005, il s’occupe de ses Archives historiques et biographiques, dont il assure le classement et l’inventaire. À partir de ce fonds, il a documenté l’histoire de la cartographie géologique de la Catalogne avant la guerre civile et catalogué les legs photographiques de Vidal et de Faura.", title: 'Biographie', timeline: 'Parcours', links: 'Liens et profils', research: "Axes de recherche", researchItems: ["Histoire de la cartographie géologique de la Catalogne", "Histoire de la géologie : Lyell, Vidal, Faura, Font i Sagué, Gimbernat, Alsius", "Archives et patrimoine : correspondances, photographie et mines", "Météorites et aurores boréales dans la péninsule (XVIIIe siècle)"], allPubs: "Voir toutes les publications" },
    contact: { title: 'Contact', write: 'Vous pouvez écrire à', name: 'Nom', email: 'E-mail', message: 'Message', send: 'Envoyer' },
    outreach: { intro: "Textes de vulgarisation qui ne sont pas des publications scientifiques : articles de blog, conférences et autres écrits d’Enric Aragonès.", blog: "Article de blog", read: "Lire l’article", talk: "Conférence", page: "Voir la page", pdf: "Télécharger la présentation (PDF)", video: "Voir la vidéo" },
    press: { interview: 'Entretien', mention: 'Mention', news: 'Actualité', read: 'Lire l’entretien', readNews: 'Voir l’actualité', open: 'Voir l’article', article: 'Article' },
    footer: 'Tous droits réservés.',
    langLabel: 'Langue',
  },
} as const;

export const t = (lang: Lang) => ui[lang];
export const href = (lang: Lang, section?: Section) => `/${lang}/${section ? section + '/' : ''}`;
