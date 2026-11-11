const app = document.querySelector('#app');
const reference = 'assets/academia-innovate-referencia.png';
const menus = [
  ['inicio', 'Inicio'], ['nosotros', 'Nosotros'], ['niveles', 'Niveles'], ['cursos', 'Cursos'],
  ['talleres', 'Talleres'], ['calendario', 'Calendario'], ['noticias', 'Noticias'], ['contacto', 'Contacto']
];

const pages = {
  nosotros: {
    label: 'Conócenos', title: '¿QUIÉNES SOMOS?', body: `<div class="detail-card"><p>En <strong>INNÓVATE</strong> somos una academia educativa comprometida con la excelencia académica, la formación integral y el desarrollo del máximo potencial de cada estudiante.</p><p>Nacemos con la convicción de que todo estudiante tiene capacidades extraordinarias que pueden descubrirse, fortalecerse y transformarse en grandes logros cuando recibe una educación de calidad, acompañamiento personalizado y estrategias de aprendizaje innovadoras.</p><p>Ofrecemos un servicio educativo especializado en reforzamiento escolar para estudiantes del nivel primaria, de primero a sexto grado, y preparación preuniversitaria, mediante metodologías dinámicas, docentes comprometidos y herramientas pedagógicas que convierten el aprendizaje en una experiencia significativa.</p><p>No nos limitamos a enseñar contenidos: desarrollamos habilidades, fortalecemos el pensamiento crítico, estimulamos la creatividad y formamos estudiantes seguros, autónomos y preparados para afrontar los desafíos del futuro.</p><p><strong>En INNÓVATE no solo preparamos estudiantes para aprobar, los formamos para destacar.</strong></p></div><div class="detail-grid"><img class="detail-photo" src="https://images.unsplash.com/photo-1557989048-03456d01a26e?auto=format&fit=crop&w=1000&q=85" alt="Docente acompañando a sus estudiantes"><img class="detail-photo" src="https://images.unsplash.com/photo-1758525861586-1c8c8e424dc8?auto=format&fit=crop&w=1000&q=85" alt="Estudiantes aprendiendo en equipo"></div>`
  },
  niveles: {
    label: 'Programas para cada etapa', title: 'NIVELES ACADÉMICOS', body: `<div class="detail-grid"><div class="detail-card"><h2>NIVEL PRIMARIO: de 1.° a 6.° grado</h2><h2>REFORZAMIENTO:</h2><ul><li>Comunicación (comprensión lectora, escritura, gramática y razonamiento verbal).</li><li>Matemáticas (Aritmética, álgebra, geometría, razonamiento matemático, resolución de problemas y juegos matemáticos).</li></ul><h2>TALLERES:</h2><ul><li>Oratoria y liderazgo (aprende a hablar en público y técnicas para perder el miedo).</li><li>Deporte fútbol y vóley (para mejorar las habilidades físico cognitivas y fomentar el trabajo en equipo).</li><li>Habilidades socioemocionales (para desarrollar la autoestima, valores, comunicación asertiva y gestión emocional).</li><li>Ajedrez (para desarrollar nuestras habilidades estratégicas).</li></ul></div><div class="detail-card"><h2>NIVEL SECUNDARIO: PRE- 1.°, 2.°, 3.° y 4.°</h2><ul><li>Álgebra</li><li>Aritmética</li><li>Geometría</li><li>Razonamiento matemático</li><li>Química</li><li>Biología</li><li>Comunicación</li><li>Habilidades sociales.</li><li>Oratoria</li><li>Deporte (fútbol y vóley)</li></ul></div></div>`
  },
  cursos: {
    label: 'Aprender haciendo', title: 'CURSOS', body: `<p>Refuerzo escolar, talleres y preparación preuniversitaria con una metodología práctica, motivadora y de calidad.</p><div class="detail-grid"><div class="detail-card"><h2>Reforzamiento escolar</h2><p>Primaria de 1.° a 6.° grado y acompañamiento para avanzar con confianza en cada curso.</p><h2>Preparación preuniversitaria</h2><p>Refuerza tus conocimientos y prepárate para alcanzar tus metas académicas.</p></div><img class="detail-photo" src="https://images.unsplash.com/photo-1719159381916-062fa9f435a6?auto=format&fit=crop&w=1000&q=85" alt="Estudiante preparándose para sus clases"></div>`
  },
  talleres: {
    label: 'Aprendizajes para la vida', title: 'TALLERES:', body: `<div class="detail-grid"><div class="detail-card"><ul><li>Oratoria y liderazgo (aprende a hablar en público y técnicas para perder el miedo).</li><li>Deporte fútbol y vóley (para mejorar las habilidades físico cognitivas y fomentar el trabajo en equipo).</li><li>Habilidades socioemocionales (para desarrollar la autoestima, valores, comunicación asertiva y gestión emocional).</li><li>Ajedrez (para desarrollar nuestras habilidades estratégicas).</li></ul><h2>⏰ HORARIOS DE MATRÍCULA:</h2><p><strong>De lunes a sábados de 8:00 a 1:00 pm - 2:00 a 6:00 pm</strong></p><a class="detail-action" href="https://wa.me/51982573452">Consulta tu matrícula</a></div><div><img class="detail-photo" src="https://images.unsplash.com/photo-1758525861586-1c8c8e424dc8?auto=format&fit=crop&w=1000&q=85" alt="Estudiantes en un taller colaborativo"><img class="detail-photo" style="margin-top:15px" src="https://images.unsplash.com/photo-1557989048-03456d01a26e?auto=format&fit=crop&w=1000&q=85" alt="Niños practicando deporte"></div></div>`
  },
  calendario: {
    label: 'Planea tu aprendizaje', title: 'HORARIOS', body: `<div class="detail-card"><h2>⏰ HORARIOS DE MATRÍCULA:</h2><p><strong>De lunes a sábados de 8:00 a 1:00 pm - 2:00 a 6:00 pm</strong></p><p>Consulta por teléfono los horarios de clases disponibles según el nivel.</p><a class="detail-action" href="tel:+51982573452">Llámanos: 982573452</a></div>`
  },
  noticias: {
    label: 'La comunidad Innóvate', title: 'NOTICIAS', body: `<div class="detail-card"><h2>Aprende · Practica · Crea · Logra</h2><p>Una comunidad que cree en tu potencial. Acompañamos a nuestros estudiantes con metodología práctica y personalizada, docentes especializados y un ambiente seguro y motivador.</p><img class="detail-photo" src="https://images.unsplash.com/photo-1557989048-03456d01a26e?auto=format&fit=crop&w=1100&q=85" alt="Estudiantes participando en una clase"></div>`
  },
  contacto: {
    label: 'Estamos para ayudarte', title: 'CONTACTO', body: `<div class="detail-card"><h2>Academia Innóvate</h2><p class="info-row">☎ &nbsp;<a href="tel:+51982573452">982573452 &nbsp;·&nbsp; 945534912 &nbsp;·&nbsp; 910957003</a></p><p class="info-row">⌂ &nbsp;Estamos ubicados en <strong>Kari grande G-2, San Sebastián-Cusco,</strong> referencia final de la Av. Collasuyo.</p><h2>⏰ HORARIOS DE MATRÍCULA:</h2><p>De lunes a sábados de 8:00 a 1:00 pm - 2:00 a 6:00 pm</p><a class="detail-action" href="https://wa.me/51982573452">Escríbenos por WhatsApp</a></div>`
  },
  matricula: {
    label: 'Da el siguiente paso', title: 'MATRÍCULA EN LÍNEA', body: `<div class="detail-card"><h2>¡Potenciamos tu talento!</h2><p>Inscripciones y consultas de lunes a sábados de 8:00 a 1:00 pm - 2:00 a 6:00 pm.</p><p>☎ &nbsp;<a href="tel:+51982573452">982573452 · 945534912 · 910957003</a></p><p>⌂ &nbsp;Kari grande G-2, San Sebastián-Cusco, referencia final de la Av. Collasuyo.</p><a class="detail-action" href="https://wa.me/51982573452">Solicitar información por WhatsApp</a></div>`
  }
};

function hotspots(activeKey = 'inicio') {
  return `<nav class="hotspot-nav" aria-label="Menú principal">${menus.map(([key, label]) => `<a class="${key === activeKey ? 'is-active' : ''}" href="#${key}" aria-current="${key === activeKey ? 'page' : 'false'}" aria-label="${label}" title="${label}"></a>`).join('')}</nav><a class="hotspot-enroll ${activeKey === 'matricula' ? 'is-active' : ''}" href="#matricula" aria-current="${activeKey === 'matricula' ? 'page' : 'false'}" aria-label="Matrícula en línea" title="Matrícula en línea"></a>${socialLinks('top')}`;
}

function socialLinks(position) {
  const socials = [
    ['facebook', 'Facebook', 'https://web.facebook.com/profile.php?id=61570781371275&locale=es_LA'],
    ['instagram', 'Instagram', 'https://www.instagram.com/'],
    ['youtube', 'YouTube', 'https://www.youtube.com/'],
    ['tiktok', 'TikTok', 'https://www.tiktok.com/']
  ];
  return `<nav class="social-hotspots social-${position}" aria-label="Redes sociales">${socials.map(([key, label, url]) => `<a class="social-${key}" href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${label}" title="${label}"></a>`).join('')}</nav>`;
}

function coverLinks() {
  return `<a class="cover-hotspot cover-cta" href="#niveles" aria-label="Conoce nuestros programas"></a>
    <a class="cover-hotspot program-primary" href="#niveles" aria-label="Programa Primaria"></a>
    <a class="cover-hotspot program-secondary" href="#niveles" aria-label="Programa Secundaria"></a>
    <a class="cover-hotspot program-preu" href="#cursos" aria-label="Programa Preuniversitario"></a>
    ${Array.from({length: 8}, (_, index) => `<a class="cover-hotspot workshop-link workshop-link-${index + 1}" href="#talleres" aria-label="Ver talleres"></a>`).join('')}
    ${socialLinks('bottom')}`;
}

function studentGallery() {
  const photos = [
    ['assets/innovate-deportes-digital.png', 'Estudiantes en el centro de cómputo y talleres deportivos'],
    ['assets/innovate-lectura.png', 'Niños disfrutando del taller de lectura'],
    ['assets/innovate-formacion-docente.png', 'Formación docente innovadora en Academia Innóvate'],
    ['assets/innovate-ciencia-tecnologia.png', 'Estudiantes en el taller de ciencia y tecnología']
  ];
  return `<section class="photo-carousel" aria-label="Fotos de Academia Innóvate"><h2>Así aprendemos en Innóvate</h2><div class="carousel-window"><div class="carousel-track">${photos.map(([src, alt]) => `<figure class="carousel-slide"><img src="${src}" alt="${alt}"></figure>`).join('')}</div></div><div class="carousel-controls"><button class="carousel-arrow" type="button" data-direction="-1" aria-label="Foto anterior">‹</button><div class="carousel-dots">${photos.map((_, index) => `<button class="carousel-dot ${index === 0 ? 'is-active' : ''}" type="button" data-slide="${index}" aria-label="Mostrar foto ${index + 1}" aria-pressed="${index === 0}"></button>`).join('')}</div><button class="carousel-arrow" type="button" data-direction="1" aria-label="Foto siguiente">›</button></div></section>`;
}

function initCarousel() {
  const carousel = app.querySelector('.photo-carousel');
  if (!carousel) return;

  const track = carousel.querySelector('.carousel-track');
  const slides = [...carousel.querySelectorAll('.carousel-slide')];
  const dots = [...carousel.querySelectorAll('.carousel-dot')];
  let current = 0;

  function showSlide(index) {
    current = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((dot, dotIndex) => {
      const active = dotIndex === current;
      dot.classList.toggle('is-active', active);
      dot.setAttribute('aria-pressed', String(active));
    });
  }

  carousel.querySelectorAll('.carousel-arrow').forEach(button => {
    button.addEventListener('click', () => showSlide(current + Number(button.dataset.direction)));
  });
  dots.forEach(dot => dot.addEventListener('click', () => showSlide(Number(dot.dataset.slide))));
}

function render() {
  const key = location.hash.slice(1) || 'inicio';
  if (key === 'inicio' || !pages[key]) {
    app.innerHTML = `<section class="reference-page" aria-label="Academia Innóvate"><img src="${reference}" alt="Portada de Academia Innóvate: Potenciamos tu talento para un futuro mejor">${hotspots('inicio')}${coverLinks()}</section>`;
    document.title = 'Academia Innóvate | Potenciamos tu talento';
    return;
  }
  const page = pages[key];
  const bodyWithoutOldPhotos = page.body.replace(/<img\b[^>]*>/gi, '').replace(/<div>\s*<\/div>/gi, '').replace(/<div class="detail-grid">\s*<\/div>/gi, '');
  app.innerHTML = `<header class="detail-header"><img src="${reference}" alt="">${hotspots(key)}</header><section class="detail-page"><div class="detail-wrap"><a href="#inicio" class="back-link">← Volver al inicio</a><p class="page-kicker">ACADEMIA INNÓVATE · ${page.label.toLocaleUpperCase('es')}</p><h1>${page.title}</h1>${bodyWithoutOldPhotos}${studentGallery()}</div></section><footer class="detail-footer" aria-label="Academia Innóvate, teléfonos y dirección">${socialLinks('bottom')}</footer>`;
  document.title = `${page.title} | Academia Innóvate`;
  initCarousel();
  window.scrollTo(0, 0);
}

window.addEventListener('hashchange', render);
render();

