// @ts-check
import { defineConfig } from 'astro/config';

// Served from the root of the user site repo (abhandary14.github.io), so no `base` is needed.
export default defineConfig({
  site: 'https://abhandary14.github.io',

  // Content Security Policy, emitted as a <meta> tag on every page (GitHub Pages can't set headers).
  // Astro adds hashes for its own scripts and styles; everything else must be allow-listed here.
  security: {
    csp: {
      algorithm: 'SHA-384',
      directives: [
        "default-src 'self'",
        "img-src 'self' data: https://*.goatcounter.com",
        "font-src 'self' https://fonts.gstatic.com",
        // Web3Forms (contact form) and GoatCounter (visit counter).
        "connect-src 'self' https://api.web3forms.com https://*.goatcounter.com",
        "form-action 'self' https://api.web3forms.com",
        "base-uri 'self'",
        "object-src 'none'",
        // Only our own files (the resume PDF viewer) may be shown in a frame.
        "frame-src 'self'",
        "worker-src 'none'",
        'upgrade-insecure-requests',
      ],
      styleDirective: {
        resources: ["'self'", 'https://fonts.googleapis.com'],
      },
      scriptDirective: {
        resources: ["'self'", 'https://gc.zgo.at'],
      },
    },
  },
});
