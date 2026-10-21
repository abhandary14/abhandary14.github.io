// Projects with a public repo. Academic projects (no public code) are written up in
// src/content/projects/*.md instead and get their own page.
// To add a project, copy one of the objects below and fill it in.

export interface ProjectImage {
  src: string; // put files in public/assets/projects/
  alt: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  kind: string; // small label above the title
  summary: string; // 1–2 plain-language sentences anyone can follow
  screenshots: ProjectImage[]; // first one is the cover; up to 3 show in the gallery
  tags: string[];
  repo?: string; // shows the "Read more on GitHub" button
  links: ProjectLink[]; // any extra links
}

export const projects: Project[] = [
  {
    title: 'Agentic Chatbot Failure Detection System',
    kind: 'GitHub project',
    // TODO: edit this draft
    summary:
      'AI chatbots that use tools can fail quietly, like calling the wrong tool or inventing a result. I built a checker that reviews each step a chatbot takes and flags those mistakes, then proved it works by deliberately breaking real conversations and confirming every problem gets caught.',
    screenshots: [
      // { src: '/assets/projects/agent-failure-detection-1.png', alt: 'TODO' },
    ],
    tags: ['Python', 'Llama 3.1 8B', 'Ollama', 'LLM evaluation'],
    repo: 'https://github.com/abhandary14/agent-failure-detection',
    links: [],
  },
  {
    title: 'Financial Transaction Analysis Platform',
    kind: 'GitHub project',
    // TODO: edit this draft
    summary:
      "A web app where organizations record and analyze their financial transactions. Each organization only sees its own data, people only get the access their role allows, and every code change is automatically checked by 160+ tests before it ships.",
    screenshots: [
      // { src: '/assets/projects/ledger-watch-1.png', alt: 'TODO' },
    ],
    tags: ['Python', 'TypeScript', 'Django REST', 'PostgreSQL', 'Jenkins', 'Docker'],
    repo: 'https://github.com/abhandary14/ledger_watch',
    links: [],
  },
  {
    title: 'rerunner',
    kind: 'Open source',
    summary: 'Contributions to an open-source project.', // TODO: describe what you contributed
    screenshots: [],
    tags: [], // TODO: tech used
    links: [
      { label: 'PR #6', href: 'https://github.com/aakash1552005/rerunner/pull/6' },
      { label: 'PR #14', href: 'https://github.com/aakash1552005/rerunner/pull/14' },
      { label: 'Repository', href: 'https://github.com/aakash1552005/rerunner' },
    ],
  },
];
