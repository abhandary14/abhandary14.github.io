export interface SkillGroup {
  name: string;
  tone: 'green' | 'pink' | 'orange' | 'neutral';
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    name: 'Languages',
    tone: 'green',
    items: ['Python', 'C/C++', 'SQL', 'HTML', 'CSS', 'JavaScript', 'TypeScript'],
  },
  {
    name: 'Full-Stack',
    tone: 'pink',
    items: ['React.js', 'Node.js', 'Django', 'Express.js', 'REST APIs', 'Flask', 'FastAPI', 'MongoDB', 'MySQL', 'PostgreSQL', 'Agile'],
  },
  {
    name: 'Cloud & Deployment',
    tone: 'orange',
    items: ['Docker', 'Jenkins', 'GitHub Actions', 'AWS', 'Azure', 'Git/GitHub', 'Linux'],
  },
  {
    name: 'AI / ML',
    tone: 'neutral',
    items: ['RAG', 'MCP', 'PyTorch', 'TensorFlow', 'SciPy', 'NumPy', 'Pandas', 'scikit-learn', 'Claude Code', 'OpenAI Codex'],
  },
];
