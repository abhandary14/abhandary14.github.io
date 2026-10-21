import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Entrance and scroll animations. Everything is visible without JS; GSAP only animates *from* hidden.
gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia();

mm.add('(prefers-reduced-motion: no-preference)', () => {
  // Hero intro.
  const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
  intro
    .from('[data-hero]', { y: 24, autoAlpha: 0, duration: 0.8, stagger: 0.08 })
    .from('[data-hero-photo]', { scale: 0.85, autoAlpha: 0, duration: 1 }, 0.15);

  // Slow drift on the pastel background blobs.
  gsap.utils.toArray<HTMLElement>('[data-blob]').forEach((blob, i) => {
    gsap.to(blob, {
      x: gsap.utils.random(-40, 40),
      y: gsap.utils.random(-30, 30),
      scale: gsap.utils.random(0.9, 1.15),
      duration: 8 + i * 2,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
    });
  });

  // Reveal sections as they scroll into view, staggering siblings that enter together.
  gsap.set('[data-reveal]', { y: 28, autoAlpha: 0 });
  ScrollTrigger.batch('[data-reveal]', {
    start: 'top 88%',
    once: true,
    onEnter: (elements) =>
      gsap.to(elements, { y: 0, autoAlpha: 1, duration: 0.7, ease: 'power2.out', stagger: 0.1 }),
  });
});
