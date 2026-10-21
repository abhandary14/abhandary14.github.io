import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Entrance, scroll and hover motion. Content is fully readable without any of it: elements are only
// hidden by JS right before they animate in, and nothing runs when the visitor prefers reduced motion.
gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia();

mm.add(
  {
    desktop: '(min-width: 769px) and (prefers-reduced-motion: no-preference)',
    phone: '(max-width: 768px) and (prefers-reduced-motion: no-preference)',
    finePointer: '(hover: hover) and (pointer: fine)',
  },
  (context) => {
    const { desktop, phone, finePointer } = context.conditions ?? {};
    if (!desktop && !phone) return;

    // Phones get shorter, smaller moves.
    const distance = desktop ? 24 : 12;

    // Hero tiles ripple in across the grid.
    gsap.from('[data-hero-tile]', {
      y: distance,
      scale: desktop ? 0.97 : 1,
      autoAlpha: 0,
      duration: desktop ? 0.7 : 0.5,
      ease: 'power3.out',
      stagger: { each: 0.06, from: 'start' },
    });

    // Everything else fades up as it scrolls into view, staggering siblings that arrive together.
    gsap.set('[data-reveal]', { y: distance, autoAlpha: 0 });
    ScrollTrigger.batch('[data-reveal]', {
      start: 'top 90%',
      once: true,
      onEnter: (elements) =>
        gsap.to(elements, { y: 0, autoAlpha: 1, duration: 0.6, ease: 'power2.out', stagger: 0.08 }),
    });

    // Gentle 3D tilt toward the cursor (desktop with a mouse only).
    if (desktop && finePointer) {
      const cleanups: (() => void)[] = [];
      gsap.utils.toArray<HTMLElement>('[data-tilt]').forEach((tile) => {
        gsap.set(tile, { transformPerspective: 900 });
        const rotateX = gsap.quickTo(tile, 'rotationX', { duration: 0.5, ease: 'power3.out' });
        const rotateY = gsap.quickTo(tile, 'rotationY', { duration: 0.5, ease: 'power3.out' });

        const onMove = (event: PointerEvent) => {
          const rect = tile.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;
          // Bigger tiles tilt less so wide cards don't swing.
          const max = Math.min(4, 1400 / Math.max(rect.width, rect.height));
          rotateY(x * max);
          rotateX(-y * max);
        };
        const onLeave = () => {
          rotateX(0);
          rotateY(0);
        };

        tile.addEventListener('pointermove', onMove);
        tile.addEventListener('pointerleave', onLeave);
        cleanups.push(() => {
          tile.removeEventListener('pointermove', onMove);
          tile.removeEventListener('pointerleave', onLeave);
        });
      });
      return () => cleanups.forEach((cleanup) => cleanup());
    }
  },
);
