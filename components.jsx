/* Hulamania — shared UI bits */
const { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } = window.Motion || window.framerMotion || window['framer-motion'] || {};

/* ------- Tiny SVG Icons ------- */
function Paw({ className = '', style }) {
  return (
    <svg viewBox="0 0 64 64" className={className} style={style} aria-hidden="true">
      <ellipse cx="32" cy="42" rx="14" ry="11" fill="currentColor"/>
      <circle cx="14"  cy="26" r="6.5" fill="currentColor"/>
      <circle cx="26"  cy="14" r="6"   fill="currentColor"/>
      <circle cx="38"  cy="14" r="6"   fill="currentColor"/>
      <circle cx="50"  cy="26" r="6.5" fill="currentColor"/>
    </svg>
  );
}

function Heart({ className = '', style }) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true">
      <path fill="currentColor" d="M12 21s-7.5-4.5-9.5-9.5C1 7 4 4 7 4c2 0 3.7 1 5 2.5C13.3 5 15 4 17 4c3 0 6 3 4.5 7.5C19.5 16.5 12 21 12 21z"/>
    </svg>
  );
}

function Star({ className = '', style }) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true">
      <path fill="currentColor" d="M12 2l2.6 6.6L22 9.5l-5.5 4.7L18 22l-6-3.6L6 22l1.5-7.8L2 9.5l7.4-.9L12 2z"/>
    </svg>
  );
}

function Sparkle({ className = '', style }) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true">
      <path fill="currentColor" d="M12 2l1.6 6.4L20 10l-6.4 1.6L12 18l-1.6-6.4L4 10l6.4-1.6L12 2z"/>
    </svg>
  );
}

/* ------- Floating background ------- */
function FloatingBubble({ size, x, y, delay, duration, opacity = 0.7, hue }) {
  return (
    <div
      className="absolute bubble rounded-full pointer-events-none float-anim"
      style={{
        width: size, height: size, left: `${x}%`, top: `${y}%`, opacity,
        filter: hue ? `hue-rotate(${hue}deg)` : undefined,
        '--d': `${duration}s`,
        '--delay': `${delay}s`,
      }}
    />
  );
}

function FloatingShape({ children, x, y, delay = 0, duration = 8, rotate = 12 }) {
  return (
    <div
      className="absolute pointer-events-none select-none shape-anim"
      style={{
        left: `${x}%`, top: `${y}%`,
        '--d': `${duration}s`,
        '--delay': `${delay}s`,
        '--r1': `-${rotate}deg`,
        '--r2': `${rotate}deg`,
      }}
    >
      {children}
    </div>
  );
}

function BackgroundField({ density = 'normal' }) {
  const bubbles = [
    { size: 90,  x: 6,  y: 12, d: 9,  o: 0.8 },
    { size: 50,  x: 22, y: 30, d: 11, o: 0.7 },
    { size: 130, x: 84, y: 8,  d: 12, o: 0.55 },
    { size: 36,  x: 92, y: 40, d: 8,  o: 0.7 },
    { size: 72,  x: 14, y: 70, d: 10, o: 0.6 },
    { size: 100, x: 78, y: 78, d: 13, o: 0.55 },
    { size: 44,  x: 50, y: 18, d: 9,  o: 0.7 },
    { size: 28,  x: 60, y: 90, d: 7,  o: 0.8 },
  ];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((b, i) => (
        <FloatingBubble key={i} size={b.size} x={b.x} y={b.y} delay={i * 0.6}
                        duration={b.d} opacity={b.o} />
      ))}
      <FloatingShape x={70} y={20} duration={9}>
        <Heart className="w-7 h-7 text-rose/80" />
      </FloatingShape>
      <FloatingShape x={20} y={50} duration={11} delay={1}>
        <Star className="w-6 h-6 text-rose/70" />
      </FloatingShape>
      <FloatingShape x={88} y={60} duration={10} delay={2}>
        <Sparkle className="w-5 h-5 text-hotpink/60" />
      </FloatingShape>
      <FloatingShape x={36} y={84} duration={9} delay={0.8}>
        <Heart className="w-5 h-5 text-petal" />
      </FloatingShape>
    </div>
  );
}

/* ------- Pretty button ------- */
function PrimaryButton({ children, className = '', ...rest }) {
  return (
    <button
      className={
        'group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full ' +
        'bg-gradient-to-b from-rose to-hotpink text-white font-semibold ' +
        'shadow-pop ring-1 ring-white/40 transition ' +
        'hover:-translate-y-0.5 hover:shadow-card active:scale-[0.97] ' + className
      }
      {...rest}
    >
      {children}
    </button>
  );
}

function GhostButton({ children, className = '', ...rest }) {
  return (
    <button
      className={
        'inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass ' +
        'text-plum font-semibold transition ' +
        'hover:-translate-y-0.5 hover:bg-white active:scale-[0.97] ' + className
      }
      {...rest}
    >
      {children}
    </button>
  );
}

/* ------- Section title ------- */
function Eyebrow({ children, color = 'text-hotpink' }) {
  return (
    <div className={`inline-flex items-center gap-2 ${color} font-display text-sm tracking-widest uppercase`}>
      <Paw className="w-4 h-4" />
      <span>{children}</span>
    </div>
  );
}

/* ------- Reveal-on-scroll wrapper ------- */
function Reveal({ children, delay = 0, y = 24, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ------- Hulamania wordmark ------- */
function Logo({ size = 'text-2xl' }) {
  return (
    <div className="flex items-center gap-2">
      <div
        key="badge"
        className="relative w-10 h-10 rounded-2xl bg-gradient-to-br from-rose to-hotpink shadow-pop flex items-center justify-center"
      >
        <Paw className="w-5 h-5 text-white" />
        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-white shadow animate-pulse" />
      </div>
      <div key="word" className={`font-display font-semibold ${size} text-plum leading-none`}>
        Hulamania.
      </div>
    </div>
  );
}

Object.assign(window, {
  Paw, Heart, Star, Sparkle,
  FloatingBubble, FloatingShape, BackgroundField,
  PrimaryButton, GhostButton, Eyebrow, Reveal, Logo,
});
