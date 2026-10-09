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
    bio: { p1: "Enric Aragonès i Valls (Tarragona, 1948), llicenciat en Ciències Geològiques per la Universitat de Barcelona, ha desenvolupat la major part de la seva vida laboral a la Generalitat de Catalunya, d’on es va jubilar reglamentàriament l’any 2011. Amb el temps s’ha especialitzat en la història de la geologia catalana, amb incursions en altres temes d’història natural com els recursos miners, les exploracions espeleològiques i les observacions de bòlids i aurores boreals. Com a col·laborador científic del Museu Geològic del Seminari de Barcelona, ha assumit la responsabilitat d’inventariar i endreçar els arxius documental i fotogràfic de la institució. Ha publicat tres monografies i una cinquantena d’articles en diverses revistes i actes. Des de l’any 2000 edita, en règim d’autoedició i difusió restringida, el periòdic semestral Notícies de Natura, que ha assolit el número 52.", title: 'Biografia', timeline: 'Trajectòria', links: 'Enllaços i perfils', research: "Línies de recerca", researchItems: ["Primers naturalistes viatgers per Catalunya", "Descobriment i primers estudis de la regió volcànica", "Contribucions vuitcentistes a les geologies catalana i espanyola", "Història de la cartografia geològica de Catalunya anterior a la guerra civil (1869-1936)", "Patrimoni històric: arxius, exposicions, fòssils i mines (casos puntuals)", "Observacions precientífiques de fenòmens atmosfèrics (bòlids, meteorits i aurores boreals)"], allPubs: "Veure totes les publicacions" },
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
    bio: { p1: "Enric Aragonès i Valls (Tarragona, 1948), licenciado en Ciencias Geológicas por la Universidad de Barcelona, ha desarrollado la mayor parte de su vida laboral en la Generalitat de Catalunya, de la que se jubiló reglamentariamente en 2011. Con el tiempo se ha especializado en la historia de la geología catalana, con incursiones en otros temas de historia natural como los recursos mineros, las exploraciones espeleológicas y las observaciones de bólidos y auroras boreales. Como colaborador científico del Museu Geològic del Seminari de Barcelona, ha asumido la responsabilidad de inventariar y ordenar los archivos documental y fotográfico de la institución. Ha publicado tres monografías y una cincuentena de artículos en diversas revistas y actas. Desde el año 2000 edita, en régimen de autoedición y difusión restringida, el periódico semestral Notícies de Natura, que ha alcanzado el número 52.", title: 'Biografía', timeline: 'Trayectoria', links: 'Enlaces y perfiles', research: "Líneas de investigación", researchItems: ["Primeros naturalistas viajeros por Cataluña", "Descubrimiento y primeros estudios de la región volcánica", "Contribuciones decimonónicas a las geologías catalana y española", "Historia de la cartografía geológica de Cataluña anterior a la guerra civil (1869-1936)", "Patrimonio histórico: archivos, exposiciones, fósiles y minas (casos puntuales)", "Observaciones precientíficas de fenómenos atmosféricos (bólidos, meteoritos y auroras boreales)"], allPubs: "Ver todas las publicaciones" },
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
    bio: { p1: "Enric Aragonès i Valls (born in Tarragona, 1948), who graduated in Geological Sciences from the University of Barcelona, spent most of his working life with the Generalitat de Catalunya, from which he retired in 2011. Over time he has specialised in the history of Catalan geology, with forays into other natural-history subjects such as mineral resources, speleological explorations and observations of fireballs and auroras. As a scientific collaborator of the Museu Geològic del Seminari de Barcelona, he has taken on the task of inventorying and organising the institution’s documentary and photographic archives. He has published three monographs and some fifty articles in various journals and proceedings. Since 2000 he has edited, self-published and with restricted distribution, the biannual periodical Notícies de Natura, which has reached issue number 52.", title: 'Biography', timeline: 'Career', links: 'Links and profiles', research: "Research areas", researchItems: ["The first travelling naturalists in Catalonia", "Discovery and first studies of the volcanic region", "Nineteenth-century contributions to Catalan and Spanish geology", "History of the geological mapping of Catalonia before the Civil War (1869-1936)", "Historical heritage: archives, exhibitions, fossils and mines (selected cases)", "Pre-scientific observations of atmospheric phenomena (fireballs, meteorites and auroras)"], allPubs: "See all publications" },
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
    bio: { p1: "Enric Aragonès i Valls (né à Tarragone en 1948), licencié en sciences géologiques de l’Université de Barcelone, a passé l’essentiel de sa vie professionnelle à la Generalitat de Catalogne, dont il a pris sa retraite réglementaire en 2011. Avec le temps, il s’est spécialisé dans l’histoire de la géologie catalane, avec des incursions dans d’autres thèmes d’histoire naturelle comme les ressources minières, les explorations spéléologiques et les observations de bolides et d’aurores boréales. Collaborateur scientifique du Musée géologique du Séminaire de Barcelone, il a assumé la responsabilité d’inventorier et de classer les archives documentaires et photographiques de l’institution. Il a publié trois monographies et une cinquantaine d’articles dans diverses revues et actes. Depuis l’an 2000, il édite en autoédition et à diffusion restreinte le périodique semestriel Notícies de Natura, qui a atteint le numéro 52.", title: 'Biographie', timeline: 'Parcours', links: 'Liens et profils', research: "Axes de recherche", researchItems: ["Premiers naturalistes voyageurs en Catalogne", "Découverte et premières études de la région volcanique", "Contributions du XIXe siècle aux géologies catalane et espagnole", "Histoire de la cartographie géologique de la Catalogne avant la guerre civile (1869-1936)", "Patrimoine historique : archives, expositions, fossiles et mines (cas ponctuels)", "Observations préscientifiques de phénomènes atmosphériques (bolides, météorites et aurores boréales)"], allPubs: "Voir toutes les publications" },
    contact: { title: 'Contact', write: 'Vous pouvez écrire à', name: 'Nom', email: 'E-mail', message: 'Message', send: 'Envoyer' },
    outreach: { intro: "Textes de vulgarisation qui ne sont pas des publications scientifiques : articles de blog, conférences et autres écrits d’Enric Aragonès.", blog: "Article de blog", read: "Lire l’article", talk: "Conférence", page: "Voir la page", pdf: "Télécharger la présentation (PDF)", video: "Voir la vidéo" },
    press: { interview: 'Entretien', mention: 'Mention', news: 'Actualité', read: 'Lire l’entretien', readNews: 'Voir l’actualité', open: 'Voir l’article', article: 'Article' },
    footer: 'Tous droits réservés.',
    langLabel: 'Langue',
  },
} as const;

export const t = (lang: Lang) => ui[lang];
export const href = (lang: Lang, section?: Section) => `/${lang}/${section ? section + '/' : ''}`;
