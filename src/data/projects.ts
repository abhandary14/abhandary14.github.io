// To add a project, copy one of the objects below and fill it in.
// Wrap words in **double asterisks** to bold them in bullets.

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  kind?: string; // small label above the title, e.g. "Open source"
  summary: string; // 1–2 sentences for a non-technical reader; hidden while empty
  image?: { src: string; alt: string }; // put files in public/assets/projects/
  tags: string[];
  bullets: string[];
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    title: 'Agentic Chatbot Failure Detection System',
    summary: '', // TODO: plain-language summary
    // image: { src: '/assets/projects/agent-failure-detection.png', alt: 'TODO' },
    tags: ['Python', 'Llama 3.1 8B', 'Ollama', 'LLM evaluation'],
    bullets: [
      'Designed a rule-based system in **Python** that inspects **tool-calling** traces on a Llama 3.1 8B based chatbot hosted through Ollama.',
      'Wrote a failure injection harness that corrupts real traces with known failure types and proves each one gets caught by the flagging layer.',
      'Validated the system against **35+** hand-labelled questions, measuring precision, recall, and F1-score per check.',
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/abhandary14/agent-failure-detection' }],
  },
  {
    title: 'Financial Transaction Analysis Platform',
    summary: '', // TODO: plain-language summary
    // image: { src: '/assets/projects/ledger-watch.png', alt: 'TODO' },
    tags: ['Python', 'TypeScript', 'Django REST', 'PostgreSQL', 'Jenkins', 'Docker'],
    bullets: [
      'Developed an application in Python, TypeScript, Django REST API framework, and PostgreSQL to add and analyze financial transaction data, isolated per organization, and through role-based access control.',
      'Integrated a CI/CD pipeline via **Jenkins** and **Docker**, running **160+** pytest tests on every commit.',
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/abhandary14/ledger_watch' }],
  },
  {
    title: 'rerunner',
    kind: 'Open source',
    summary: 'Contributions to an open-source project.', // TODO: describe what you contributed
    tags: [], // TODO: tech used
    bullets: [], // TODO: what each PR changed
    links: [
      { label: 'PR #6', href: 'https://github.com/aakash1552005/rerunner/pull/6' },
      { label: 'PR #14', href: 'https://github.com/aakash1552005/rerunner/pull/14' },
      { label: 'Repository', href: 'https://github.com/aakash1552005/rerunner' },
    ],
  },
];
