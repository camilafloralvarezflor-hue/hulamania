/* =============================================================
   HULAMANIA — CONTENIDO EDITABLE
   Edita aquí todos los textos del sitio sin tocar el código.
   ============================================================= */

const CONTENT = {

  /* ── BARRA DE PROMOCIONES (la que se mueve arriba del todo) ── */
  promo: [
    'Baños desde $22.000',
    'Priorizamos el bienestar, no la velocidad',
    'Ubicados en zona norte Comodoro Rivadavia',
    'Servicios personalizados para cada peludo',
    'No trabajamos con Bozales ni jaulas',
  ],

  /* ── NAVEGACIÓN ── */
  nav: {
    telefono: '2974437593',
    botonReservar: 'Reservar',
    links: [
      ['Precios', '#precios'],
      ['Nosotras', '#nosotras'],
      ['Proceso', '#proceso'],
      ['Reseñas', '#resenas'],
    ],
  },

  /* ── HERO (sección principal) ── */
  hero: {
    badge: 'Reservas abiertas',
    titulo: ['Cada peludo', 'merece su día', 'de'],
    tituloDestacado: 'spa',        // Palabra con el gradiente de color
    subtitulo: 'Hulamania Spa Canino donde tu peludo es tratado como de la familia.',
    botonPrincipal: 'Reservar mi cita',
    botonSecundario: 'Ver servicios',
    estadistica: '4.8 ★ en Google · 26 familias felices',
  },

  /* ── FRANJA DE CONFIANZA ── */
  confianza: {
    titulo: 'Confían en nosotras',
    items: ['Vet-aprobado', 'Productos de Calidad', 'Cero jaulas', 'Turnos personalizados', 'Sin bozales', 'Adaptamos a cada peludo'],
  },

  /* ── SERVICIOS ── */
  servicios: {
    eyebrow: 'Servicios',
    titulo: 'Mimos a la medida\nde cada hocico.',
    subtitulo: 'Desde el primer baño del cachorro hasta el spa completo del peludo senior. Cada servicio está pensado para que la cita sea un mimo, no un trámite.',
    lista: [
      { nombre: 'Baño Spa',    descripcion: 'Baño Hidratante, secado profesional, corte zona Higenica, corte de uñas y despeje de almohadillas.',        precio: 'desde $22.000', icono: '🛁' },
      { nombre: 'Corte Parejo',    descripcion: 'Máquina parejo en todo el cuerpo + baño spa.',     precio: 'desde $29.000', icono: '✂️' },
      { nombre: 'Cara Linda',      descripcion: 'Cuerpo cortado a maquina y carita hecha a tijera + baño spa.',              precio: 'desde $35.000', icono: '💆' },
      { nombre: 'Corte Oriental',   descripcion: 'Corte cuerpo a maquina, patas y cara a tijera + baño spa.',             precio: 'desde $45.000', icono: '🐾' },
      { nombre: 'Completo a Tijera',  descripcion: 'Servicio completo con corte a tijera y baño spa.',        precio: 'Depende del tamaño y estado del pelaje desde $55.000', icono: '🎀' },
    ],
  },

  /* ── NOSOTRAS ── */
  nosotras: {
    eyebrow: 'Nosotras',
    titulo: 'Hola, somos\nel equipo de Hula.',
    parrafo: 'Hulamania nacio con un solo objetivo:',
    parrafoDestacado: 'tratar a cada perrito como si fuera parte de la familia',
    estadisticas: [
      ['10',   'años cuidando colas'],
      ['mas de 100mil',   'seguidores en tik tok'],
      ['4.8★', 'promedio en Google'],
    ],
    botonPrincipal: 'Conoce a Hulamania',
    botonSecundario: 'Ver el proceso →',
    cardSinLagrimas: 'Sin estrés',
    cardPolaroid: 'tu mascota es la prioridad',
  },

  /* ── PROCESO (pasos) ── */
  proceso: {
    eyebrow: 'proceso',
    titulo: 'De casa al brillo en 4 pasos.',
    pasos: [
      { numero: '01', titulo: 'Cuéntanos de tu peludo', descripcion: 'Tamaño, raza, manías y edad. Adaptamos la sesión.',    icono: '📋' },
      { numero: '02', titulo: 'Turnos',     descripcion: 'Turnos Personalizados, toda la atencion para tu perrito.',          icono: '🚗' },
      { numero: '03', titulo: 'Servicio a su medida',    descripcion: 'Baño, corte y secado tranqui, con pausas y adaptaciones.',        icono: '✂️' },
      { numero: '04', titulo: 'Higiene es salud',       descripcion: 'Priorizamos su bienestar, por lo que no forzamos resultados, lo importante es que se sienta cómodo.',              icono: '✨' },
    ],
    fotos: [
      { src: 'uploads/proceso mawy/image-1778269486125.jpg', alt: 'Perrito con correa y collar de seguridad' },
      { src: 'uploads/proceso mawy/image-1778269531455.jpg', alt: 'Cepillado profesional' },
      { src: 'uploads/proceso mawy/image-1778269539006.jpg', alt: 'Baño con champú hidratante' },
      { src: 'uploads/proceso mawy/image-1778269543139.jpg', alt: 'Secado con velocidad baja' },
      { src: 'uploads/proceso mawy/image-1778269546587.jpg', alt: 'Corte de uñas' },
    ],
  },

  /* ── GALERÍA CLIENTES FELICES ── */
  clientes: {
    eyebrow: 'Nuestros peludos',
    titulo: 'Salieron brillantes,\nvolvieron felices.',
    fotos: [
      { src: 'uploads/clientes/473167029_1342370063795873_1039505781928239406_n.jpg', alt: 'Cliente feliz 1' },
      { src: 'uploads/clientes/473179872_1342377147128498_896923061181710879_n.jpg',  alt: 'Cliente feliz 2' },
      { src: 'uploads/clientes/473228137_1341783720521174_1886535465084782462_n.jpg', alt: 'Cliente feliz 3' },
      { src: 'uploads/clientes/473317957_1342377270461819_2707701968645197296_n.jpg', alt: 'Cliente feliz 4' },
      { src: 'uploads/clientes/473387866_1342389587127254_2693942007850113192_n.jpg', alt: 'Cliente feliz 5' },
      { src: 'uploads/clientes/473579030_1341790463853833_2538680654260182461_n.jpg', alt: 'Cliente feliz 6' },
    ],
  },

  /* ── PRECIOS ── */
  precios: {
    eyebrow: 'Precios por tamaño',
    titulo: 'Sin sorpresas.\nSolo mimos.',
    incluido: [
      'Baño completo',
      'Limpieza de oídos',
      'Corte de uñas',
      'Despeje Higiénico',
      'Limpieza de almohadillas',
      'Brushing o Deslanado',
      'Turno Personalizado',
    ],
    planes: [
      {
        tag: 'Chico',
        peso: 'hasta 8 kg',
        destacado: false,
        banos: [
          { tipo: 'Pelo corto', precio: 'desde $22.000' },
          { tipo: 'Pelo largo', precio: 'desde $26.000' },
        ],
        cortes: [
          { tipo: 'Parejo', precio: 'desde $29.000' },
          { tipo: 'Cara a tijera', precio: 'desde $35.000' },
          { tipo: 'Oriental / tijeras', precio: 'desde $45.000' },
        ],
      },
      {
        tag: 'Mediano',
        peso: 'hasta 15 kg',
        destacado: true,                  // ← el plan resaltado
        etiquetaDestacado: 'MÁS POPULAR',
        banos: [
          { tipo: 'Pelo corto', precio: 'desde $35.000' },
          { tipo: 'Pelo largo', precio: 'desde $40.000' },
        ],
        cortes: [
          { tipo: 'Parejo', precio: 'desde $45.000' },
          { tipo: 'Cara a tijera', precio: 'desde $55.000' },
          { tipo: 'Oriental / tijeras', precio: 'desde $65.000' },
        ],
      },
    ],
  },

  /* ── RESEÑAS ── */
  resenas: {
    eyebrow: 'Reseñas',
    titulo: 'Las colas hablan más que las palabras.',
    subtitulo: '4.8 estrellas en Google · 26 opiniones reales de familias de Comodoro Rivadavia.',
    lista: [
      { nombre: 'Mili',             mascota: 'Local Guide · Google',   texto: 'La mejor atención para nuestros animalitos y para los dueños! Servicio, profesionalidad y medidas sanitarias impecables. Muy recomendable.' },
      { nombre: 'Marcos Ferlatti',  mascota: 'Google',                 texto: 'Excelente atención y el amor que le brindan a nuestras mascotas se siente, los súper recomiendo!' },
      { nombre: 'Ivan Serrizuela',  mascota: 'Local Guide · Google',   texto: 'Amamos como nos atendieron, muchas gracias. Todos los meses estaremos ahí para llevar a nuestra Ava 😍' },
      { nombre: 'Facebook',         mascota: '5.0 · 6 recomendaciones', texto: 'Recomendado por el 100% de los usuarios en Facebook.' },
    ],
  },

  /* ── PREGUNTAS FRECUENTES ── */
  faq: {
    eyebrow: 'Preguntas frecuentes',
    titulo: 'Lo que las familias preguntan.',
    preguntas: [
      ['¿Cuánto dura una sesión?',          'Entre 60 y 120 min según tamaño, servicio a realizar y estado delpelaje. Avisamos por WhatsApp cuando ya casi termina.'],
      ['¿Cero jaulas, en serio?',            'si, nos manejamos con turnos personalizados, tu mascota es atendida ni bien llega a nuestras manos, sin esperas.'],
      ['¿Atienden cachorros?',               'Desde los 3 meses, se recomienda comenzar con sesiones tempranas para generar el habito a la peluqueria.'],
      ['¿Atienden perros agresivos?',      'No, no atendemos perros agresivos, por una cuestion que trabajamos sin bozal, en un entorno tranquilo.'],
      ['¿Que recomendaciones tienen?', 'Es muy importante dar aviso de cualquier patologia como Epilepsia, alergias, etc.'],
    ],
  },

  /* ── BANNER FINAL (CTA) ── */
  cta: {
    titulo: 'Tu peludo te lo va\na agradecer.',
    subtitulo: 'Escribinos por WhatsApp y te damos turno al instante.',
    botonPrincipal: 'Pedir turno por WhatsApp ✨',
    botonTelefono: 'Llamar 297 · 443 · 7593',
    telefono: 'tel:+2974437593',
    /* Mensaje que se pre-completa en WhatsApp al tocar "Reservar" */
    mensajeWhatsApp: 'Hola Hulamania! Quiero pedir un turno para mi peludo. ¿Qué fechas tienen disponibles?',
  },

  /* ── PIE DE PÁGINA (FOOTER) ── */
  footer: {
    descripcion: 'Peluquería canina de barrio, hecha con Amor, productos profesionales y mucho cuidado. Cada peludo merece su día de spa.',
    direccion: 'Zona Norte, Comodoro Rivadavia, Chubut',
    horario: 'Lun – Vier · 11:00 – 19:00\nSabado y Domingo · cerrado',
    email: 'hualamaniacr@gmail.com',
    telefono: '297 · 443 · 7593',
    whatsapp: 'WhatsApp 2974437593',
    derechos: '© 2026 Hulamania · Hecho con ♥ y mucho champú.',
  },

  /* ══════════════════════════════════════════════════════════════
     AGENDA — El dueño configura toda la disponibilidad aquí.
     ══════════════════════════════════════════════════════════════ */
  agenda: {

    /* ── Días de la semana habilitados ─────────────────────────
       Cambiar false ↔ true para abrir o cerrar cada día.       */
    diasSemana: {
      lunes:     true,
      martes:    true,
      miercoles: true,
      jueves:    true,
      viernes:   true,
      sabado:    false,   // ← cambiar a true para abrir sábados
      domingo:   false,
    },

    /* ── Horarios disponibles ───────────────────────────────────
       Agregar o borrar horarios según necesites.               */
    horarios: [
      '09:00',
      '10:00',
      '11:00',
      '14:00',
      '15:00',
      '16:00',
      '17:00',
    ],

    /* ── Fechas bloqueadas (feriados, vacaciones, etc.) ────────
       Formato: 'YYYY-MM-DD'  ej: '2026-05-25'                  */
    fechasBloqueadas: [
      // '2026-06-20',   // ejemplo: feriado nacional
      // '2026-07-01',   // ejemplo: vacaciones
    ],

    /* ── Días mínimos de anticipación para reservar ────────────
       1 = se puede reservar desde mañana                       */
    anticipacion: 1,

    /* ── Mensaje de confirmación por WhatsApp ──────────────────
       {nombre}, {mascota}, {fecha}, {hora}, {servicio} se
       reemplazan automáticamente.                              */
    mensajeWhatsApp: 'Hola Hulamania! Quiero reservar un turno:\n\n Mi nombre: {nombre}\n Mi peludo: {mascota}',
  },

  /* ── MODAL DE RESERVA ── */
  reserva: {
    titulo: 'Reservar turno',
    preguntaMascota: '¿Cómo se llama tu peludo?',
    placeholderMascota: 'Coco, Luna, Bigotes…',
    preguntaNombre: '¿Y tu nombre?',
    placeholderNombre: 'Tu nombre',
    elegirTamano: 'Elige el tamaño',
    elegirServicio: 'Servicio',
    confirmacion: '¡Reserva lista!',
    botonSiguiente: 'Siguiente',
    botonConfirmar: 'Confirmar',
    botonListo: 'Enviar por WhatsApp ✨',
    botonAtras: '← Atrás',
  },

  /* ── TARJETAS FLOTANTES DEL HERO ── */
  heroCards: {
    sinEstres: { titulo: 'Sin estrés', subtitulo: 'Manejo gentil certificado' },
    sesion: { numero: '90', unidad: ' minutos', descripcion: 'duración de sesión promedio' },
  },

};

/* Exporta al scope global para que app.jsx lo pueda usar */
window.CONTENT = CONTENT;
