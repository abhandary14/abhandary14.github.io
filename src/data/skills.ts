export interface SkillGroup {
  name: string;
  tone: 'lavender' | 'mint' | 'peach' | 'sky';
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    name: 'Languages',
    tone: 'lavender',
    items: ['Python', 'C/C++', 'SQL', 'HTML', 'CSS', 'JavaScript', 'TypeScript'],
  },
  {
    name: 'Full-Stack',
    tone: 'mint',
    items: ['React.js', 'Node.js', 'Django', 'Express.js', 'REST APIs', 'Flask', 'FastAPI', 'MongoDB', 'MySQL', 'PostgreSQL', 'Agile'],
  },
  {
    name: 'Cloud & Deployment',
    tone: 'peach',
    items: ['Docker', 'Jenkins', 'GitHub Actions', 'AWS', 'Azure', 'Git/GitHub', 'Linux'],
  },
  {
    name: 'AI / ML',
    tone: 'sky',
    items: ['RAG', 'MCP', 'PyTorch', 'TensorFlow', 'SciPy', 'NumPy', 'Pandas', 'scikit-learn', 'Claude Code', 'OpenAI Codex'],
  },
];
