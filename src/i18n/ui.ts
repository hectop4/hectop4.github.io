export const languages = {
  es: "Español",
  en: "English",
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = "es";

export const ui = {
  es: {
    // Nav
    "nav.home": "Inicio",
    "nav.blog": "Blog",
    "nav.contact": "Contacto",
    "nav.cv": "Currículum",
    // Hero
    "hero.greeting": "Hola, soy",
    "hero.role": "Ingeniero Electrónico · Investigador · Creador de Contenido",
    "hero.institution":
      "Maestrante en Ingeniería y Tecnologías Espaciales en el INPE (Brasil) e investigador en la UPTC (Colombia)",
    "hero.kaizen": '"Mejorando un poco cada día"',
    "hero.cta.cv": "Ver Currículum",
    "hero.cta.contact": "Contactarme",
    // About
    "about.title": "Sobre mí",
    "about.p1":
      "Soy Hector Puentes, ingeniero electrónico egresado de la Universidad Pedagógica y Tecnológica de Colombia (UPTC), actualmente maestrante en Ingeniería Espacial y Tecnologías Asociadas en el Instituto Nacional de Pesquisas Espaciales (INPE) de Brasil.",
    "about.p2":
      "Me apasionan la exploración espacial, el desarrollo de robots y la inteligencia artificial. Creo firmemente que la educación es el mejor regalo que se puede dar a otra persona y a uno mismo, por eso grabo videos sobre ingeniería, lectura y aprendizaje en mi canal de YouTube.",
    "about.p3":
      "Siempre estoy en busca de nuevos desafios que pongan a prueba mis conocimientos y habilidades para poder crecer como ingeniero, investigador y persona.",
    // Skills
    "skills.title": "Habilidades",
    "skills.languages": "Lenguajes",
    "skills.tools": "Herramientas",
    // Blog
    "blog.title": "Blog",
    "blog.subtitle": "Proyectos, eventos, pensamientos y reseñas",
    "blog.viewAll": "Ver todos",
    "blog.readMore": "Leer más →",
    "blog.empty": "Próximamente...",
    // Categories
    "cat.projects": "Proyectos",
    "cat.projects.desc":
      "Desarrollos de hardware, software y sistemas embebidos",
    "cat.events": "Eventos",
    "cat.events.desc": "Conferencias, hackathons y competencias",
    "cat.thoughts": "Pensamientos",
    "cat.thoughts.desc": "Reflexiones sobre ingeniería, aprendizaje y vida",
    "cat.reviews": "Reseñas",
    "cat.reviews.desc": "Libros, series y películas que me marcaron",
    // Post
    "post.back": "← Volver al blog",
    "post.writtenBy": "Escrito por",
    "post.postedOn": "Publicado el",
    "post.readingTime": "min de lectura",
    "post.tags": "Etiquetas",
    "post.by": "por",
    "post.rating": "Calificación",
    // Item types
    "type.book": "Libro",
    "type.movie": "Película",
    "type.series": "Serie",
    "review.spoilerBadge": "Spoilers",
    "review.spoilerWarning":
      "Este artículo puede contener spoilers del argumento.",
    "review.noSpoilerBadge": "Sin spoilers",
    // Contact
    "contact.title": "Contacto",
    "contact.subtitle": "Hablemos",
    "contact.desc":
      "¿Tienes un proyecto, una idea o simplemente quieres conversar? Escríbeme.",
    "contact.name": "Nombre",
    "contact.email": "Email",
    "contact.message": "Mensaje",
    "contact.send": "Enviar mensaje",
    "contact.or": "o escríbeme directamente a",
    // Footer
    "footer.rights": "Todos los derechos reservados",
    "footer.made": "Hecho con dedicación",
    // 404
    "404.code": "404",
    "404.title": "Página no encontrada",
    "404.desc": "La página que buscas no existe o fue movida.",
    "404.back": "Volver al inicio",
  },
  en: {
    // Nav
    "nav.home": "Home",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.cv": "Resume",
    // Hero
    "hero.greeting": "Hi, I'm",
    "hero.role": "Electronic Engineer · Researcher · Content Creator",
    "hero.institution":
      "Master's student in Space Engineering and Technology at INPE (Brazil) and researcher at UPTC (Colombia)",
    "hero.kaizen": '"Getting a little better every day"',
    "hero.cta.cv": "View Resume",
    "hero.cta.contact": "Contact me",
    // About
    "about.title": "About me",
    "about.p1":
      "I'm Hector Puentes, an Electronic Engineer graduated from Universidad Pedagógica y Tecnológica de Colombia (UPTC), currently pursuing a Master's in Space Engineering and Associated Technologies at Instituto Nacional de Pesquisas Espaciales (INPE) in Brazil.",
    "about.p2":
      "I'm passionate about space exploration, robotics, and artificial intelligence. I believe strongly that education is the best gift you can give to others and to yourself, which is why I record videos about engineering, reading, and learning on my YouTube channel.",
    "about.p3":
      "I'm always looking for new challenges that test my knowledge and skills to grow as an engineer, researcher, and person.",
    // Skills
    "skills.title": "Skills",
    "skills.languages": "Languages",
    "skills.tools": "Tools",
    // Blog
    "blog.title": "Blog",
    "blog.subtitle": "Projects, events, thoughts and reviews",
    "blog.viewAll": "View all",
    "blog.readMore": "Read more →",
    "blog.empty": "Coming soon...",
    // Categories
    "cat.projects": "Projects",
    "cat.projects.desc": "Hardware, software and embedded systems development",
    "cat.events": "Events",
    "cat.events.desc": "Conferences, hackathons and competitions",
    "cat.thoughts": "Thoughts",
    "cat.thoughts.desc": "Reflections on engineering, learning and life",
    "cat.reviews": "Reviews",
    "cat.reviews.desc": "Books, series and movies that marked me",
    // Post
    "post.back": "← Back to blog",
    "post.writtenBy": "Written by",
    "post.postedOn": "Posted on",
    "post.readingTime": "min read",
    "post.tags": "Tags",
    "post.by": "by",
    "post.rating": "Rating",
    // Item types
    "type.book": "Book",
    "type.movie": "Movie",
    "type.series": "Series",
    "review.spoilerBadge": "Spoilers",
    "review.spoilerWarning": "This article may contain plot spoilers.",
    "review.noSpoilerBadge": "Spoiler-free",
    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Let's talk",
    "contact.desc":
      "Have a project, an idea, or just want to chat? Write to me.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send message",
    "contact.or": "or write to me directly at",
    // Footer
    "footer.rights": "All rights reserved",
    "footer.made": "Made with dedication",
    // 404
    "404.code": "404",
    "404.title": "Page not found",
    "404.desc": "The page you're looking for doesn't exist or has been moved.",
    "404.back": "Back to home",
  },
} as const;

export type UiKey = keyof typeof ui.es;
