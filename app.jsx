/* Hulamania — main app */
const { useState, useEffect, useRef, useMemo } = React;
const FM = window.Motion || window.framerMotion || window['framer-motion'] || {};
const { motion, AnimatePresence: AP, useScroll: useScroll2, useTransform: useTransform2, useMotionValue: useMV, useSpring: useSpringFM } = FM;
const M = motion;
const C = window.CONTENT;   // alias corto hacia content.js

/* ---------- Promo ticker ---------- */
function PromoTicker() {
  const items = C.promo;

  const Row = ({ k }) =>
  <div key={k} className="flex shrink-0 items-center gap-10 pr-10">
      {items.map((t, i) =>
    <div key={i} className="flex items-center gap-3 text-sm">
          <Paw className="w-3.5 h-3.5" />
          <span className="font-medium tracking-wide">{t}</span>
        </div>
    )}
    </div>;

  return (
    <div className="bg-plum text-blush overflow-hidden border-b border-white/10">
      <div className="flex ticker py-2.5">
        <Row k="a" /><Row k="b" /><Row k="c" />
      </div>
    </div>);

}

/* ---------- Nav ---------- */
function Nav({ onBook }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = C.nav.links;

  return (
    <header className={`sticky top-0 z-40 transition-all ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-5">
        <div className={`flex items-center justify-between rounded-full px-4 py-2.5 transition-all ${
        scrolled ? 'glass shadow-soft' : 'bg-transparent'}`
        }>
          <a href="#top"><Logo /></a>
          <nav className="hidden md:flex items-center gap-1">
            {links.map(([label, href]) =>
            <a key={href} href={href}
            className="px-4 py-2 rounded-full text-plum/80 hover:text-plum hover:bg-white/60 transition text-sm font-semibold">
                {label}
              </a>
            )}
          </nav>
          <div className="flex items-center gap-2">
            <a href={C.cta.telefono} className="hidden sm:inline-flex text-plum/80 hover:text-plum text-sm font-semibold px-3">
              {C.nav.telefono}
            </a>
            <PrimaryButton onClick={onBook} className="!py-2.5 !px-5 text-sm">
              {C.nav.botonReservar}
              <span className="ml-1">→</span>
            </PrimaryButton>
          </div>
        </div>
      </div>
    </header>);

}

/* ---------- Hero ---------- */
function Hero({ onBook }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll2({ target: ref, offset: ['start start', 'end start'] });
  const y1 = useTransform2(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform2(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform2(scrollYProgress, [0, 0.7], [1, 0.2]);

  return (
    <section ref={ref} id="top" className="relative hero-gradient overflow-hidden">
      <BackgroundField />

      {/* Cinematic motion layer — video + halos + particles + glass cards */}
      <HeroVisual />

      <div className="relative max-w-7xl mx-auto px-5 pt-10 md:pt-16 pb-24 md:pb-32 grid lg:grid-cols-12 gap-10 items-center">
        {/* Copy */}
        <M.div style={{ y: y2, opacity }} className="lg:col-span-7 relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 glass-pink rounded-full px-3.5 py-1.5 text-xs font-semibold text-plum">
              <span className="w-2 h-2 rounded-full bg-hotpink animate-pulse" />
              {C.hero.badge}
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="font-display font-semibold text-plum mt-5 leading-[0.95] text-[clamp(3rem,7vw,6.25rem)]" style={{ opacity: "1", fontSize: "60.94px", width: "402px" }}>
              {C.hero.titulo[0]}<br />
              {C.hero.titulo[1]} <br />
              {C.hero.titulo[2]} <span className="relative inline-block">
                <span className="bg-gradient-to-r from-rose to-hotpink bg-clip-text text-transparent">{C.hero.tituloDestacado}</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 14" preserveAspectRatio="none">
                  <path d="M3 10 Q 50 -2, 100 6 T 197 8" fill="none" stroke="#FF8AB3" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>.
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-7 text-lg md:text-xl text-plum/70 max-w-lg leading-relaxed">
              {C.hero.subtitulo}
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <PrimaryButton onClick={onBook}>
                {C.hero.botonPrincipal}
                <span aria-hidden>→</span>
              </PrimaryButton>
              <GhostButton onClick={() => document.getElementById('precios')?.scrollIntoView({ behavior: 'smooth' })}>
                {C.hero.botonSecundario}
              </GhostButton>
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="mt-10 flex items-center gap-5">
              <div className="flex -space-x-3">
                {['#FFB6C9', '#E8528D', '#D9CCEC', '#FF8AB3'].map((c, i) =>
                <div key={i} className="w-10 h-10 rounded-full ring-2 ring-cream flex items-center justify-center"
                style={{ background: c }}>
                    <Paw className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
              <div className="text-sm">
                <div className="flex gap-0.5 text-hotpink">
                  {[...Array(5)].map((_, i) => <Paw key={i} className="w-3.5 h-3.5" />)}
                </div>
                <div className="text-plum/80 font-semibold mt-0.5">
                  {C.hero.estadistica}
                </div>
              </div>
            </div>
          </Reveal>
        </M.div>

        {/* Right column — empty, video & glass cards live in HeroVisual backdrop */}
        <div className="lg:col-span-5 hidden lg:block min-h-[520px]" />
      </div>

      {/* Cinematic gradient bleed into next section */}
      <div className="absolute bottom-0 inset-x-0 h-40 pointer-events-none"
      style={{ background: 'linear-gradient(180deg, transparent, #FFF6F4)' }} />
    </section>);

}

/* Particle field — soft drifting motes for atmosphere */
function ParticleField({ count = 18 }) {
  const particles = useMemo(() => Array.from({ length: count }, (_, i) => ({
    left: Math.random() * 100,
    top: 60 + Math.random() * 40,
    size: 3 + Math.random() * 9,
    dx: (Math.random() - 0.5) * 60,
    d: 8 + Math.random() * 10,
    delay: -Math.random() * 12,
    o: 0.45 + Math.random() * 0.45,
    hue: ['#FFD0DD', '#F4DDF6', '#FFE6EC', '#FFFFFF'][i % 4]
  })), [count]);
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p, i) =>
      <span key={i}
      className="absolute rounded-full particle"
      style={{
        left: `${p.left}%`, top: `${p.top}%`,
        width: p.size, height: p.size,
        background: p.hue,
        boxShadow: `0 0 ${p.size * 2}px ${p.hue}`,
        '--dx': `${p.dx}px`,
        '--d': `${p.d}s`,
        '--delay': `${p.delay}s`,
        '--o': p.o
      }} />
      )}
    </div>);

}

function HeroVisual() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Layer 1 — soft color halo behind everything */}
      <div className="absolute -right-[10%] top-[8%] w-[80vw] max-w-[1100px] aspect-square pulse-soft pointer-events-none"
      style={{
        background: 'radial-gradient(closest-side, rgba(255,180,205,0.55), rgba(217,204,236,0.25) 55%, transparent 75%)',
        filter: 'blur(20px)',
        '--o': 0.55
      }} />

      {/* Layer 2 — accent halo near the action */}
      <div className="absolute right-[6%] top-[16%] w-[42vw] max-w-[640px] aspect-square pulse-soft pointer-events-none"
      style={{
        background: 'radial-gradient(closest-side, rgba(232,82,141,0.35), transparent 70%)',
        filter: 'blur(10px)',
        animationDelay: '-3s',
        '--o': 0.45
      }} />

      {/* Layer 3 — the video itself, feathered into the page */}
      <M.div
        initial={{ scale: 1.04, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-[-6%] md:right-[-2%] top-[4%] w-[78vw] md:w-[58vw] max-w-[820px] aspect-[4/3.5] hero-video-mask">
        <video
          src="assets/hero.mp4"
          autoPlay muted loop playsInline preload="auto"
          poster="assets/bath.png"
          className="w-full h-full object-cover" />
        {/* Color grade — warms it up and harmonises with page palette */}
        <div className="absolute inset-0 hero-color-grade" />
        <div className="absolute inset-0 hero-tint" />
      </M.div>

      {/* Layer 4 — particles drifting through the scene */}
      <ParticleField />

      {/* Layer 5 — glass cards float OVER the motion (depth) */}
      <M.div
        initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
        className="hidden md:flex pointer-events-auto absolute right-[14%] bottom-[18%] glass rounded-2xl px-4 py-3 shadow-card items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-hotpink/10 flex items-center justify-center text-hotpink">
          <Heart className="w-5 h-5" />
        </div>
        <div>
          <div className="font-display text-plum font-semibold leading-none text-sm">{C.heroCards.sinEstres.titulo}</div>
          <div className="text-xs text-plum/60 mt-0.5">{C.heroCards.sinEstres.subtitulo}</div>
        </div>
      </M.div>

      <M.div
        initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 180, damping: 18 }}
        className="hidden lg:flex pointer-events-auto absolute right-[2%] bottom-[28%] glass rounded-2xl px-3.5 py-2.5 shadow-card flex-col">
        <div className="text-2xl font-display font-semibold text-plum leading-none">{C.heroCards.sesion.numero}<span className="text-hotpink">{C.heroCards.sesion.unidad}</span></div>
        <div className="text-[11px] text-plum/60 mt-1">{C.heroCards.sesion.descripcion}</div>
      </M.div>
    </div>);

}

/* ---------- Trust strip ---------- */
function TrustStrip() {
  const items = C.confianza.items;
  return (
    <section className="bg-cream pt-10 pb-2">
      <div className="max-w-7xl mx-auto px-5">
        <Reveal>
          <div className="text-center text-xs uppercase tracking-[0.3em] text-plum/50 font-semibold mb-5">
            {C.confianza.titulo}
          </div>
        </Reveal>
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          {items.map((it, i) =>
          <Reveal key={i} delay={i * 0.05}>
              <div className="px-5 py-2.5 rounded-full bg-white/80 ring-1 ring-petal/40 text-plum font-semibold text-sm flex items-center gap-2">
                <Paw className="w-3.5 h-3.5 text-hotpink" /> {it}
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}


function InteractiveDog() {
  const ref = useRef(null);
  const mx = useMV(0);
  const my = useMV(0);
  const sx = useSpringFM(mx, { stiffness: 70, damping: 18, mass: 0.8 });
  const sy = useSpringFM(my, { stiffness: 70, damping: 18, mass: 0.8 });
  const tilt = useTransform2(sx, [-1, 1], [-3, 3]);
  const headX = useTransform2(sx, [-1, 1], [-6, 6]);
  const eyeX = useTransform2(sx, [-1, 1], [-5, 5]);
  const eyeY = useTransform2(sy, [-1, 1], [-3.5, 3.5]);
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const el = ref.current;if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2,cy = r.top + r.height / 2;
      const nx = (e.clientX - cx) / Math.max(280, window.innerWidth / 2);
      const ny = (e.clientY - cy) / Math.max(280, window.innerHeight / 2);
      mx.set(Math.max(-1, Math.min(1, nx)));
      my.set(Math.max(-1, Math.min(1, ny)));
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [mx, my]);

  useEffect(() => {
    let alive = true;
    const loop = () => {
      if (!alive) return;
      setBlink(true);
      setTimeout(() => setBlink(false), 130);
      setTimeout(loop, 3500 + Math.random() * 4500);
    };
    const t = setTimeout(loop, 2400);
    return () => {alive = false;clearTimeout(t);};
  }, []);

  return (
    <div ref={ref} className="relative w-full max-w-[420px] mx-auto select-none" aria-hidden="true">
      <div className="absolute left-1/2 -translate-x-1/2 bottom-2 w-[70%] h-8 rounded-[50%] bg-rose/25 blur-2xl" />
      <M.div animate={{ scale: [1, 1.014, 1] }}
      transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut' }}
      className="relative" style={{ transformOrigin: '50% 90%' }}>
        <M.div className="relative" style={{ rotate: tilt, x: headX, transformOrigin: '50% 70%' }}>
          <img src="assets/dog.png" alt="Hula" draggable={false}
          className="relative w-full h-auto pointer-events-none" />
          <Pupil cx="42.6%" cy="32.2%" size="2.6%" eyeX={eyeX} eyeY={eyeY} blink={blink} />
          <Pupil cx="56.0%" cy="32.2%" size="2.6%" eyeX={eyeX} eyeY={eyeY} blink={blink} />
        </M.div>
      </M.div>
    </div>);

}

function Pupil({ cx, cy, size, eyeX, eyeY, blink }) {
  return (
    <div className="absolute pointer-events-none"
    style={{ left: cx, top: cy, width: size, aspectRatio: '1 / 1.15', transform: 'translate(-50%,-50%)' }}>
      <M.div className="absolute inset-0" style={{ x: eyeX, y: eyeY }}>
        <M.div className="absolute inset-0 rounded-full"
        animate={{ scaleY: blink ? 0.05 : 1 }}
        transition={{ duration: 0.13, ease: [0.4, 0, 0.2, 1] }}
        style={{ background: 'radial-gradient(circle at 35% 30%, #6b3a26 0%, #2c130b 55%, #1a0905 100%)' }}>
          <span className="absolute rounded-full bg-white/90"
          style={{ width: '32%', height: '28%', top: '18%', left: '22%' }} />
        </M.div>
      </M.div>
    </div>);

}

/* ---------- About ---------- */
function About() {
  /* Trim playback to the first ~1.5s so the loop is just the wag + playful pose. */
  const videoRef = React.useRef(null);
  const onTime = (e) => {
    const v = e.currentTarget;
    if (v.currentTime >= 1.5) {v.currentTime = 0;v.play();}
  };
  /* Subtle parallax on the motion layer as the section enters/leaves the viewport. */
  const sectionRef = React.useRef(null);
  const { scrollYProgress } = useScroll2({ target: sectionRef, offset: ['start end', 'end start'] });
  const yMotion = useTransform2(scrollYProgress, [0, 1], ['-4%', '6%']);
  const yCardA = useTransform2(scrollYProgress, [0, 1], ['-2%', '8%']);
  const yCardB = useTransform2(scrollYProgress, [0, 1], ['4%', '-6%']);
  const haloY = useTransform2(scrollYProgress, [0, 1], ['-3%', '5%']);

  return (
    <section ref={sectionRef} id="nosotras" className="relative py-24 md:py-32 overflow-hidden about-bg" style={{ color: "rgb(232, 171, 177)" }}>
      {/* Page-level halos that wash the video edges into the page */}
      <M.div style={{ y: haloY }} className="absolute -right-[14%] top-[6%] w-[80vw] max-w-[1100px] aspect-square pointer-events-none"
      aria-hidden="true">
        <div className="w-full h-full pulse-soft" style={{
          background: 'radial-gradient(closest-side, rgba(255,205,210,0.55), rgba(222,162,169,0.25) 55%, transparent 75%)',
          filter: 'blur(24px)', '--o': 0.55
        }} />
      </M.div>
      <div className="absolute -left-[10%] bottom-[-10%] w-[60vw] max-w-[820px] aspect-square pointer-events-none"
      style={{
        background: 'radial-gradient(closest-side, rgba(244,221,246,0.45), transparent 70%)',
        filter: 'blur(40px)'
      }} aria-hidden="true" />

      {/* Top + bottom soft fades into surrounding sections */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 z-[1]"
      style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.55), transparent)' }} aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 z-[1]"
      style={{ background: 'linear-gradient(180deg, transparent, #FAF7F2)' }} aria-hidden="true" />

      <BackgroundField />
      <div className="relative max-w-7xl mx-auto px-5 grid lg:grid-cols-12 gap-12 items-center" style={{ color: "rgb(233, 172, 177)" }}>
        <div className="lg:col-span-6 order-2 lg:order-1">
          <Reveal><Eyebrow>{C.nosotras.eyebrow}</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display font-semibold text-plum text-[clamp(2.4rem,4.6vw,4rem)] leading-[1.02] mt-3">
              {C.nosotras.titulo.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-plum/70 text-lg leading-relaxed mt-6 max-w-lg">
              {C.nosotras.parrafo}
              <span className="text-plum font-semibold"> {C.nosotras.parrafoDestacado}</span>.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="grid grid-cols-3 gap-4 mt-10">
              {C.nosotras.estadisticas.
              map(([n, l]) =>
              <div key={l} className="rounded-3xl p-5 bg-white/70 backdrop-blur ring-1 ring-petal/40">
                  <div className="font-display font-semibold text-plum text-3xl">{n}</div>
                  <div className="text-plum/60 text-sm mt-1 leading-tight">{l}</div>
                </div>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-10 flex items-center gap-3">
              <PrimaryButton>{C.nosotras.botonPrincipal}</PrimaryButton>
              <a href="#proceso" className="font-semibold text-plum/80 hover:text-plum">{C.nosotras.botonSecundario}</a>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-6 order-1 lg:order-2 relative" style={{ color: "rgb(233, 172, 177)", opacity: "1" }}>
          <M.div
            style={{ y: yMotion }}
            initial={{ scale: 1.05, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/3.5] max-w-[640px] mx-auto">

            {/* Soft pink halo behind the motion */}
            <div className="absolute -inset-10 pointer-events-none"
            style={{
              background: 'radial-gradient(closest-side, rgba(255,200,210,0.7), rgba(244,221,246,0.35) 55%, transparent 78%)',
              filter: 'blur(28px)'
            }} aria-hidden="true" />

            {/* Feathered video — no card, bleeds into the page */}
            <div className="relative w-full h-full hero-video-mask">
              <video
                ref={videoRef}
                src="assets/wag.mp4"
                autoPlay muted loop playsInline preload="auto"
                onTimeUpdate={onTime}
                className="w-full h-full object-cover" />
              <div className="absolute inset-0 hero-color-grade" />
              <div className="absolute inset-0 hero-tint" style={{ borderColor: "rgb(238, 184, 188)", borderWidth: "0px 1px 0px 0px", width: "900px" }} />
            </div>

            {/* Local particles drifting through the scene */}
            <ParticleField count={14} />

            {/* Glass cards floating over the motion */}
            <M.div
              style={{ y: yCardA }}
              animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity }}
              className="absolute -left-2 md:-left-6 top-[28%] glass rounded-2xl p-3 px-4 shadow-soft flex items-center gap-2">
              <Heart className="w-5 h-5 text-hotpink" />
              <span className="text-plum font-semibold text-sm">{C.nosotras.cardSinLagrimas}</span>
            </M.div>

            <M.div
              style={{ y: yCardB }}
              animate={{ y: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity, delay: 1 }}
              className="absolute -right-2 md:-right-4 bottom-[18%] glass-pink rounded-2xl p-3 px-4 shadow-soft flex items-center gap-2">
              <Sparkle className="w-5 h-5 text-hotpink" />
              <span className="text-plum font-semibold text-sm">{C.nosotras.cardPolaroid}</span>
            </M.div>
          </M.div>
        </div>
      </div>
    </section>);

}

/* ---------- Process ---------- */
const STEPS = C.proceso.pasos.map((p) => ({ n: p.numero, t: p.titulo, d: p.descripcion, icon: p.icono }));


function Process() {
  return (
    <section id="proceso" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal><Eyebrow>{C.proceso.eyebrow}</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display font-semibold text-plum text-[clamp(2.4rem,4.6vw,4rem)] leading-[1.02] mt-3">
              {C.proceso.titulo}
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((s, i) =>
          <Reveal key={s.n} delay={i * 0.08}>
              <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="relative rounded-3xl bg-white p-6 ring-1 ring-petal/30 shadow-soft h-full">

                <div className="absolute -top-4 left-6 px-3 py-1 rounded-full bg-plum text-blush text-xs font-display font-semibold tracking-widest">
                  {s.n}
                </div>
                <div className="mt-3 text-4xl">{s.icon}</div>
                <h3 className="font-display text-xl font-semibold text-plum mt-4">{s.t}</h3>
                <p className="text-plum/65 mt-2 leading-relaxed text-[15px]">{s.d}</p>
              </motion.div>
            </Reveal>
          )}
        </div>

        {/* Galería de fotos reales del proceso */}
        <Reveal delay={0.2}>
          <div className="mt-14 flex gap-4 overflow-x-auto no-scrollbar scroll-snap pb-2 -mx-5 px-5">
            {C.proceso.fotos.map((f, i) =>
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="shrink-0 w-64 md:w-80 aspect-[4/3] rounded-3xl overflow-hidden ring-1 ring-petal/30 shadow-soft scroll-snap">
              <img src={f.src} alt={f.alt}
                className="w-full h-full object-cover" />
            </motion.div>
            )}
          </div>
        </Reveal>
      </div>
    </section>);

}

/* ---------- Pricing ---------- */
const COLORS_PLANES = ['from-petal to-rose', 'from-rose to-hotpink'];

function PriceRow({ label, value, featured }) {
  return (
    <div className="flex items-center justify-between py-1.5">
      <span className={`text-[14px] ${featured ? 'text-blush/80' : 'text-plum/65'}`}>{label}</span>
      <span className={`text-[14px] font-semibold ${featured ? 'text-blush' : 'text-plum'}`}>{value}</span>
    </div>
  );
}

function Pricing({ onPick }) {
  const planes = C.precios.planes;
  const incluido = C.precios.incluido;

  return (
    <section id="precios" className="relative py-24 md:py-32">
      <div className="absolute inset-0 hero-gradient opacity-60" />
      <div className="relative max-w-7xl mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal><Eyebrow>{C.precios.eyebrow}</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display font-semibold text-plum text-[clamp(2.4rem,4.6vw,4rem)] leading-[1.02] mt-3">
              {C.precios.titulo.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6 max-w-3xl mx-auto">
          {planes.map((p, i) =>
          <Reveal key={p.tag} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 280 }}
              className={`relative rounded-[28px] p-7 h-full ring-1 overflow-hidden ${
                p.destacado
                  ? 'bg-plum text-cream ring-plum shadow-card'
                  : 'bg-white text-plum ring-petal/40 shadow-soft'
              }`}>

              {p.destacado &&
                <div className="absolute -top-px left-1/2 -translate-x-1/2 mt-3 px-3 py-1 rounded-full bg-rose text-white text-xs font-display font-semibold tracking-widest">
                  {p.etiquetaDestacado}
                </div>
              }

              {/* Header: ícono + nombre + peso */}
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${COLORS_PLANES[i]} flex items-center justify-center`}>
                  <Paw className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-display font-semibold text-2xl">{p.tag}</div>
                  <div className={`text-xs ${p.destacado ? 'text-blush/70' : 'text-plum/55'}`}>{p.peso}</div>
                </div>
              </div>

              {/* Baños */}
              <div className="mt-6">
                <div className={`text-xs font-display font-semibold tracking-widest uppercase mb-2 ${p.destacado ? 'text-petal/70' : 'text-hotpink/80'}`}>🛁 Baños</div>
                <div className={`rounded-xl px-4 py-1 divide-y ${p.destacado ? 'bg-white/8 divide-white/10' : 'bg-cream divide-petal/20'}`}>
                  {p.banos.map(b => <PriceRow key={b.tipo} label={b.tipo} value={b.precio} featured={p.destacado} />)}
                </div>
              </div>

              {/* Cortes */}
              <div className="mt-4">
                <div className={`text-xs font-display font-semibold tracking-widest uppercase mb-2 ${p.destacado ? 'text-petal/70' : 'text-hotpink/80'}`}>✂️ Cortes</div>
                <div className={`rounded-xl px-4 py-1 divide-y ${p.destacado ? 'bg-white/8 divide-white/10' : 'bg-cream divide-petal/20'}`}>
                  {p.cortes.map(c => <PriceRow key={c.tipo} label={c.tipo} value={c.precio} featured={p.destacado} />)}
                </div>
              </div>

              {/* Incluye */}
              <div className="mt-5 pt-5 border-t border-white/10">
                <div className={`text-xs font-display font-semibold tracking-widest uppercase mb-3 ${p.destacado ? 'text-petal/70' : 'text-hotpink/80'}`}>✨ Todos incluyen</div>
                <ul className={`space-y-2 ${p.destacado ? 'text-blush/85' : 'text-plum/70'}`}>
                  {incluido.map(item =>
                    <li key={item} className="flex items-center gap-2.5">
                      <span className={`w-4 h-4 rounded-full grid place-items-center shrink-0 ${p.destacado ? 'bg-rose' : 'bg-petal'}`}>
                        <svg viewBox="0 0 12 12" className="w-2.5 h-2.5 text-white"><path d="M2 6l3 3 5-7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </span>
                      <span className="text-[14px]">{item}</span>
                    </li>
                  )}
                </ul>
              </div>

              <button
                onClick={() => onPick(p)}
                className={`mt-8 w-full py-3.5 rounded-full font-semibold transition ${
                  p.destacado
                    ? 'bg-rose hover:bg-hotpink text-white'
                    : 'bg-plum hover:bg-ink text-cream'
                }`}>
                Reservar turno →
              </button>
            </motion.div>
          </Reveal>
          )}
        </div>
      </div>
    </section>);

}

/* ---------- Testimonials ---------- */
const COLORS_RESENAS = ['#FFC9D9', '#D9CCEC', '#FFE6EC', '#C9E8D4'];
const REVIEWS = C.resenas.lista.map((r, i) => ({
  name: r.nombre, pet: r.mascota, text: r.texto, color: COLORS_RESENAS[i] || '#FFC9D9',
}));


function Reviews() {
  return (
    <section id="resenas" className="py-24 md:py-32 bg-plum text-cream relative overflow-hidden">
      <FloatingShape x={6} y={20} duration={9}>
        <Heart className="w-10 h-10 text-rose/30" />
      </FloatingShape>
      <FloatingShape x={92} y={70} duration={10} delay={1}>
        <Sparkle className="w-9 h-9 text-petal/40" />
      </FloatingShape>

      <div className="max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-7">
            <Reveal><Eyebrow color="text-petal">{C.resenas.eyebrow}</Eyebrow></Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display font-semibold text-[clamp(2.4rem,4.6vw,4rem)] leading-[1.02] mt-3">
                {C.resenas.titulo}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="lg:col-span-5">
            <p className="text-blush/75 text-lg leading-relaxed">
              {C.resenas.subtitulo}
            </p>
          </Reveal>
        </div>

        <div className="flex gap-5 overflow-x-auto no-scrollbar scroll-snap pb-4 -mx-5 px-5">
          {REVIEWS.map((r, i) =>
          <Reveal key={i} delay={i * 0.08}>
              <motion.div
              whileHover={{ y: -6 }}
              className="min-w-[320px] md:min-w-[380px] max-w-[380px] rounded-3xl p-7 bg-white/[0.06] backdrop-blur ring-1 ring-white/10 hover:ring-rose/40 transition">
              
                <div className="flex gap-0.5 text-rose mb-4">
                  {[...Array(5)].map((_, k) => <Paw key={k} className="w-4 h-4" />)}
                </div>
                <p className="font-display text-xl leading-snug">"{r.text}"</p>
                <div className="flex items-center gap-3 mt-7 pt-5 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full ring-2 ring-white/30 flex items-center justify-center"
                style={{ background: r.color }}>
                    <Paw className="w-4 h-4 text-plum" />
                  </div>
                  <div>
                    <div className="font-semibold">{r.name}</div>
                    <div className="text-xs text-blush/60">{r.pet}</div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}

/* ---------- FAQ ---------- */
const FAQS = C.faq.preguntas;

/* ---------- Happy clients gallery ---------- */
function ClientesGaleria() {
  return (
    <section className="py-16 md:py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-10">
          <Reveal><Eyebrow>{C.clientes.eyebrow}</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display font-semibold text-plum text-[clamp(2rem,4vw,3.5rem)] leading-[1.02] mt-3">
              {C.clientes.titulo.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {C.clientes.fotos.map((f, i) =>
          <Reveal key={i} delay={i * 0.06}>
              <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="aspect-square rounded-3xl overflow-hidden ring-1 ring-petal/30 shadow-soft">
                <img src={f.src} alt={f.alt}
                  className="w-full h-full object-cover" />
              </motion.div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);
}

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="max-w-4xl mx-auto px-5">
        <div className="text-center mb-12">
          <Reveal><Eyebrow>{C.faq.eyebrow}</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display font-semibold text-plum text-[clamp(2.4rem,4.6vw,4rem)] leading-[1.02] mt-3">
              {C.faq.titulo}
            </h2>
          </Reveal>
        </div>

        <div className="space-y-3">
          {FAQS.map(([q, a], i) =>
          <Reveal key={q} delay={i * 0.05}>
              <button
              onClick={() => setOpen(open === i ? -1 : i)}
              className={`w-full text-left rounded-3xl p-5 md:p-6 ring-1 transition ${
              open === i ? 'bg-white ring-rose/40 shadow-soft' : 'bg-white/60 ring-petal/30 hover:bg-white'}`
              }>
              
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-lg md:text-xl font-semibold text-plum">{q}</h3>
                  <motion.div animate={{ rotate: open === i ? 45 : 0 }} className="w-9 h-9 rounded-full bg-petal/40 flex items-center justify-center text-plum text-xl shrink-0">
                    +
                  </motion.div>
                </div>
                <AP initial={false}>
                  {open === i &&
                <M.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden">
                  
                      <p className="text-plum/70 mt-4 leading-relaxed">{a}</p>
                    </M.div>
                }
                </AP>
              </button>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}

/* ---------- CTA banner ---------- */
function CTA({ onBook }) {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose to-hotpink" />
      <FloatingShape x={6} y={15} duration={9}>
        <div className="bubble w-24 h-24 rounded-full opacity-60" />
      </FloatingShape>
      <FloatingShape x={85} y={60} duration={11} delay={1}>
        <div className="bubble w-32 h-32 rounded-full opacity-50" />
      </FloatingShape>
      <FloatingShape x={45} y={80} duration={8} delay={0.5}>
        <Heart className="w-10 h-10 text-white/40" />
      </FloatingShape>

      <div className="relative max-w-4xl mx-auto px-5 text-center">
        <Reveal>
          <h2 className="font-display font-semibold text-white text-[clamp(2.6rem,5.5vw,5rem)] leading-[1.02]">
            {C.cta.titulo.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="text-white/85 text-lg md:text-xl mt-6 max-w-xl mx-auto">
            {C.cta.subtitulo}
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <motion.button
              onClick={onBook}
              whileHover={{ y: -2, scale: 1.03 }} whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-full bg-white text-plum font-display font-semibold text-lg shadow-pop">

              {C.cta.botonPrincipal}
            </motion.button>
            <a href={C.cta.telefono}
            className="px-8 py-4 rounded-full bg-white/15 backdrop-blur text-white font-semibold ring-1 ring-white/40 hover:bg-white/25 transition">
              {C.cta.botonTelefono}
            </a>
          </div>
        </Reveal>
      </div>
    </section>);

}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="bg-plum text-blush/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Logo size="text-3xl" />
            <p className="mt-5 max-w-sm leading-relaxed">
              {C.footer.descripcion}
            </p>
            <div className="flex gap-3 mt-6">
              {['IG', 'TT', 'WA'].map((s) =>
              <a key={s} className="w-10 h-10 rounded-full bg-white/10 hover:bg-rose hover:text-white transition flex items-center justify-center font-display font-semibold text-sm">
                  {s}
                </a>
              )}
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="font-display text-cream text-lg font-semibold mb-3">Visítanos</div>
            <div className="space-y-2 text-sm leading-relaxed">
              <div>{C.footer.direccion.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}</div>
              <div>{C.footer.horario.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}</div>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="font-display text-cream text-lg font-semibold mb-3">Spa</div>
            <ul className="space-y-2 text-sm">
              {['Servicios', 'Precios', 'Reseñas', 'Reservar'].map((l) =>
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-cream">{l}</a></li>
              )}
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="font-display text-cream text-lg font-semibold mb-3">Hablemos</div>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-cream">{C.footer.email}</a></li>
              <li><a className="hover:text-cream">{C.footer.telefono}</a></li>
              <li><a className="hover:text-cream">{C.footer.whatsapp}</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs">
          <div>{C.footer.derechos}</div>
          <div className="flex gap-5">
            <a className="hover:text-cream">Privacidad</a>
            <a className="hover:text-cream">Términos</a>
            <a className="hover:text-cream">Cookies</a>
          </div>
        </div>
      </div>
    </footer>);

}

/* ---------- App ---------- */
function App() {
  const abrirWhatsApp = () => {
    const numero = C.nav.telefono.replace(/\D/g, '');
    const msg = C.cta.mensajeWhatsApp;
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <>
      <PromoTicker />
      <Nav onBook={abrirWhatsApp} />
      <main>
        <Hero onBook={abrirWhatsApp} />
        <TrustStrip />
        <Pricing onPick={abrirWhatsApp} />
        <About />
        <Process />
        <Reviews />
        <ClientesGaleria />
        <FAQ />
        <CTA onBook={abrirWhatsApp} />
      </main>
      <Footer />
    </>);

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);