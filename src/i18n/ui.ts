export const languages = { ca: 'Català', es: 'Español', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'ca';

export const sections = ['biografia', 'recerca', 'publicacions', 'projectes', 'galeria', 'premsa', 'contacte'] as const;
export type Section = (typeof sections)[number];

// Els textos marcats com a proveïdor són provisionals: cal substituir-los pels reals.
export const ui = {
  ca: {
    siteTitle: 'Enric Aragonès i Valls',
    role: 'Geòleg investigador',
    tagline: 'Recerca i obra geològica de tota una vida',
    nav: { biografia: 'Biografia', recerca: 'Recerca', publicacions: 'Publicacions', projectes: 'Projectes i camp', galeria: 'Galeria', premsa: 'Premsa', contacte: 'Contacte' },
    home: {
      intro: 'Geòleg i hidrogeòleg, funcionari de la Generalitat de Catalunya i estudiós de la història de la geologia a Catalunya.',
      areas: 'Àrees d’especialitat',
      featured: 'Publicacions destacades',
      all: 'Veure totes les publicacions',
      readBio: 'Llegir la biografia',
    },
    pubs: { search: 'Cerca per títol, autor o paraula clau…', year: 'Any', type: 'Tipus', topic: 'Tema', all: 'Tots', results: 'resultats', none: 'Cap resultat.', pdf: 'Descarregar PDF', source: 'Veure la font', abstract: 'Resum', cite: 'Cita' },
    types: { article: 'Article', book: 'Llibre', chapter: 'Capítol', report: 'Informe', map: 'Mapa', conference: 'Comunicació' },
    topics: { historia: 'Història de la geologia', estratigrafia: 'Estratigrafia', hidrogeologia: 'Hidrogeologia', cartografia: 'Cartografia', regional: 'Geologia regional' },
    bio: { p1: "Enric Aragonès i Valls (Tarragona, 1948) és geòleg (1972) i hidrogeòleg (1973), i té un màster en enginyeria i gestió ambiental (1993). És funcionari de la Generalitat de Catalunya des de 1981 i treballa a la Direcció d’Energia i Mines.", p2: "Ha publicat nombrosos treballs en revistes especialitzades sobre geologia i, sobretot, sobre la història de la geologia a Catalunya. És també l’autor de les Notícies de Natura, una publicació singular sobre la història de les ciències naturals a Catalunya, editada en autoedició i de distribució restringida entre amics i algunes institucions.", p3: "Col·laborador científic estretament vinculat al Museu Geològic del Seminari de Barcelona, hi ha documentat la història de la cartografia geològica de Catalunya anterior a la guerra civil a partir de la documentació de l’Arxiu Històric i Biogràfic del Museu, i actualment té cura de l’endreç i l’inventari d’aquest arxiu.", title: 'Biografia', timeline: 'Trajectòria', links: 'Enllaços i perfils' },
    contact: { title: 'Contacte', name: 'Nom', email: 'Correu electrònic', message: 'Missatge', send: 'Enviar' },
    placeholder: 'Web en construcció',
    wip: 'Web en construcció. Estem recopilant i digitalitzant tota l’obra; hi anirem afegint contingut de mica en mica.',
    footer: 'Tots els drets reservats.',
    langLabel: 'Idioma',
  },
  es: {
    siteTitle: 'Enric Aragonès i Valls',
    role: 'Geólogo investigador',
    tagline: 'Investigación y obra geológica de toda una vida',
    nav: { biografia: 'Biografía', recerca: 'Investigación', publicacions: 'Publicaciones', projectes: 'Proyectos y campo', galeria: 'Galería', premsa: 'Prensa', contacte: 'Contacto' },
    home: {
      intro: 'Geólogo e hidrogeólogo, funcionario de la Generalitat de Catalunya y estudioso de la historia de la geología en Cataluña.',
      areas: 'Áreas de especialidad',
      featured: 'Publicaciones destacadas',
      all: 'Ver todas las publicaciones',
      readBio: 'Leer la biografía',
    },
    pubs: { search: 'Buscar por título, autor o palabra clave…', year: 'Año', type: 'Tipo', topic: 'Tema', all: 'Todos', results: 'resultados', none: 'Sin resultados.', pdf: 'Descargar PDF', source: 'Ver la fuente', abstract: 'Resumen', cite: 'Cita' },
    types: { article: 'Artículo', book: 'Libro', chapter: 'Capítulo', report: 'Informe', map: 'Mapa', conference: 'Comunicación' },
    topics: { historia: 'Historia de la geología', estratigrafia: 'Estratigrafía', hidrogeologia: 'Hidrogeología', cartografia: 'Cartografía', regional: 'Geología regional' },
    bio: { p1: "Enric Aragonès i Valls (Tarragona, 1948) es geólogo (1972) e hidrogeólogo (1973), y tiene un máster en ingeniería y gestión ambiental (1993). Es funcionario de la Generalitat de Catalunya desde 1981 y trabaja en la Direcció d’Energia i Mines.", p2: "Ha publicado numerosos trabajos en revistas especializadas sobre geología y, sobre todo, sobre la historia de la geología en Cataluña. Es también autor de las Notícies de Natura, una publicación singular sobre la historia de las ciencias naturales en Cataluña, editada en autoedición y de distribución restringida entre amigos y algunas instituciones.", p3: "Colaborador científico estrechamente vinculado al Museu Geològic del Seminari de Barcelona, ha documentado allí la historia de la cartografía geológica de Cataluña anterior a la guerra civil a partir de la documentación del Arxiu Històric i Biogràfic del Museo, y actualmente se ocupa del ordenamiento y el inventario de ese archivo.", title: 'Biografía', timeline: 'Trayectoria', links: 'Enlaces y perfiles' },
    contact: { title: 'Contacto', name: 'Nombre', email: 'Correo electrónico', message: 'Mensaje', send: 'Enviar' },
    placeholder: 'Web en construcción',
    wip: 'Web en construcción. Estamos recopilando y digitalizando toda la obra; iremos añadiendo contenido poco a poco.',
    footer: 'Todos los derechos reservados.',
    langLabel: 'Idioma',
  },
  en: {
    siteTitle: 'Enric Aragonès i Valls',
    role: 'Research geologist',
    tagline: 'A lifetime of geological research',
    nav: { biografia: 'Biography', recerca: 'Research', publicacions: 'Publications', projectes: 'Projects & fieldwork', galeria: 'Gallery', premsa: 'Press', contacte: 'Contact' },
    home: {
      intro: 'Geologist and hydrogeologist, civil servant of the Generalitat de Catalunya and scholar of the history of geology in Catalonia.',
      areas: 'Areas of expertise',
      featured: 'Featured publications',
      all: 'See all publications',
      readBio: 'Read the biography',
    },
    pubs: { search: 'Search by title, author or keyword…', year: 'Year', type: 'Type', topic: 'Topic', all: 'All', results: 'results', none: 'No results.', pdf: 'Download PDF', source: 'View source', abstract: 'Abstract', cite: 'Cite' },
    types: { article: 'Article', book: 'Book', chapter: 'Chapter', report: 'Report', map: 'Map', conference: 'Conference paper' },
    topics: { historia: 'History of geology', estratigrafia: 'Stratigraphy', hidrogeologia: 'Hydrogeology', cartografia: 'Cartography', regional: 'Regional geology' },
    bio: { p1: "Enric Aragonès i Valls (born in Tarragona, 1948) is a geologist (1972) and hydrogeologist (1973), with a master’s degree in environmental engineering and management (1993). He has been a civil servant of the Generalitat de Catalunya since 1981 and works at the Directorate for Energy and Mines.", p2: "He has published numerous papers in specialised journals on geology and, above all, on the history of geology in Catalonia. He is also the author of Notícies de Natura, a singular publication on the history of the natural sciences in Catalonia, self-published and distributed on a restricted basis among friends and some institutions.", p3: "A scientific collaborator closely linked to the Museu Geològic del Seminari de Barcelona, he has documented the history of Catalonia’s pre-Civil War geological cartography from the documents of the Museum’s Historical and Biographical Archive, and is currently in charge of arranging and cataloguing that archive.", title: 'Biography', timeline: 'Career', links: 'Links and profiles' },
    contact: { title: 'Contact', name: 'Name', email: 'Email', message: 'Message', send: 'Send' },
    placeholder: 'Website under construction',
    wip: 'Website under construction. We are collecting and digitising the complete body of work; content will be added gradually.',
    footer: 'All rights reserved.',
    langLabel: 'Language',
  },
} as const;

export const t = (lang: Lang) => ui[lang];
export const href = (lang: Lang, section?: Section) => `/${lang}/${section ? section + '/' : ''}`;
