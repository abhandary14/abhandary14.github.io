// Wrap words in **double asterisks** to bold them.

export interface Experience {
  role: string;
  company: string;
  companyUrl?: string;
  logo?: string;
  location: string;
  dates: string;
  bullets: string[];
}

export const experience: Experience[] = [
  {
    role: 'Software Engineer (Volunteer)',
    company: 'Future World Alliance',
    logo: '/assets/future_world_alliance_logo.jpg',
    location: 'Raleigh, NC (Remote)',
    dates: 'Sep 2026 – Present',
    bullets: [
      'Developed a **Python** and **FastAPI** service that turns paid course enrollments into learner accounts and onboarding emails.',
      'Engineered a retry-enabled **PostgreSQL** job queue and load tested it with **1,000** enrollments across 3 workers, finishing in 13.7 seconds with zero duplicates.',
      'Packaged the service with **Docker** and set up **GitHub Actions** CI for linting, tests, and migration checks.',
      'Collaborated in a cross-functional team in **Agile** sprints to scope three product requirement documents to launch-critical features.',
    ],
  },
  {
    role: 'Data Science Intern',
    company: 'AEON Software Pvt. Ltd.',
    logo: '/assets/aeon_software_pvt_ltd_logo.jpg',
    location: 'Gandhinagar, India (Remote)',
    dates: 'May – Jul 2023 · Part-time',
    bullets: [
      'Engineered a **Python** pipeline using **PySpark** to process a **4M+** record transportation systems dataset, replacing a pandas-based approach that repeatedly crashed the environment from memory exhaustion.',
      'Deployed a Python forecasting model with 95.93% R² score as a **Flask API** on AWS **EC2** using Docker, creating a reusable internal tool to support the company’s future needs.',
      'Created **Power BI** dashboards by writing **SQL** queries after loading the dataset into SQLite, prototyping a workflow for planned live-data integration.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'eInfochips (An Arrow Company)',
    logo: '/assets/einfochips_logo.jpg',
    location: 'Gandhinagar, India (Remote)',
    dates: 'May – Jun 2023 · Part-time',
    bullets: [
      'Developed product listing and user cart pages for a client eCommerce site using PHP, **JavaScript**, HTML5/CSS3, and **MySQL**, supporting product browsing and cart management.',
      'Led weekly client meetings to gather requirements and turn feedback into technical specifications, and coordinate development priorities, contributing to project delivery one week ahead of schedule.',
      'Configured a **GitHub Actions** CI/CD pipeline on AWS EC2 and RDS to reduce deployment time by **40%**, accelerating client feedback cycles.',
    ],
  },
];
