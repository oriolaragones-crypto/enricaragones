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
      intro: 'Aquí hi anirà una breu introducció a la trajectòria professional i científica d’Enric Aragonès.',
      areas: 'Àrees d’especialitat',
      featured: 'Publicacions destacades',
      all: 'Veure totes les publicacions',
      readBio: 'Llegir la biografia',
    },
    pubs: { search: 'Cerca per títol, autor o paraula clau…', year: 'Any', type: 'Tipus', topic: 'Tema', all: 'Tots', results: 'resultats', none: 'Cap resultat.', pdf: 'Descarregar PDF', source: 'Veure a la revista', abstract: 'Resum', cite: 'Cita' },
    types: { article: 'Article', book: 'Llibre', chapter: 'Capítol', report: 'Informe', map: 'Mapa', conference: 'Comunicació' },
    topics: { estratigrafia: 'Estratigrafia', hidrogeologia: 'Hidrogeologia', cartografia: 'Cartografia', regional: 'Geologia regional' },
    bio: { title: 'Biografia', timeline: 'Trajectòria', links: 'Enllaços i perfils' },
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
      intro: 'Aquí irá una breve introducción a la trayectoria profesional y científica de Enric Aragonès.',
      areas: 'Áreas de especialidad',
      featured: 'Publicaciones destacadas',
      all: 'Ver todas las publicaciones',
      readBio: 'Leer la biografía',
    },
    pubs: { search: 'Buscar por título, autor o palabra clave…', year: 'Año', type: 'Tipo', topic: 'Tema', all: 'Todos', results: 'resultados', none: 'Sin resultados.', pdf: 'Descargar PDF', source: 'Ver en la revista', abstract: 'Resumen', cite: 'Cita' },
    types: { article: 'Artículo', book: 'Libro', chapter: 'Capítulo', report: 'Informe', map: 'Mapa', conference: 'Comunicación' },
    topics: { estratigrafia: 'Estratigrafía', hidrogeologia: 'Hidrogeología', cartografia: 'Cartografía', regional: 'Geología regional' },
    bio: { title: 'Biografía', timeline: 'Trayectoria', links: 'Enlaces y perfiles' },
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
      intro: 'A short introduction to Enric Aragonès’s professional and scientific career will appear here.',
      areas: 'Areas of expertise',
      featured: 'Featured publications',
      all: 'See all publications',
      readBio: 'Read the biography',
    },
    pubs: { search: 'Search by title, author or keyword…', year: 'Year', type: 'Type', topic: 'Topic', all: 'All', results: 'results', none: 'No results.', pdf: 'Download PDF', source: 'View at the journal', abstract: 'Abstract', cite: 'Cite' },
    types: { article: 'Article', book: 'Book', chapter: 'Chapter', report: 'Report', map: 'Map', conference: 'Conference paper' },
    topics: { estratigrafia: 'Stratigraphy', hidrogeologia: 'Hydrogeology', cartografia: 'Cartography', regional: 'Regional geology' },
    bio: { title: 'Biography', timeline: 'Career', links: 'Links and profiles' },
    contact: { title: 'Contact', name: 'Name', email: 'Email', message: 'Message', send: 'Send' },
    placeholder: 'Website under construction',
    wip: 'Website under construction. We are collecting and digitising the complete body of work; content will be added gradually.',
    footer: 'All rights reserved.',
    langLabel: 'Language',
  },
} as const;

export const t = (lang: Lang) => ui[lang];
export const href = (lang: Lang, section?: Section) => `/${lang}/${section ? section + '/' : ''}`;
