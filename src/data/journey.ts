// Milestones for the "My journey" timeline pop-up, oldest first.

export interface Milestone {
  date: string;
  title: string;
  detail: string;
  kind: 'Education' | 'Work';
  tone: 'green' | 'pink' | 'orange' | 'neutral';
}

export const journey: Milestone[] = [
  {
    date: 'Aug 2020',
    title: 'Started a B.Tech in Computer Engineering',
    detail: 'Pandit Deendayal Energy University · Gandhinagar, India',
    kind: 'Education',
    tone: 'pink',
  },
  {
    date: 'May 2023',
    title: 'Software Engineer Intern at eInfochips',
    detail: 'Built eCommerce pages and a CI/CD pipeline that cut deployment time by 40%',
    kind: 'Work',
    tone: 'orange',
  },
  {
    date: 'May 2023',
    title: 'Data Science Intern at AEON Software',
    detail: 'Processed a 4M+ record dataset and deployed a forecasting model as an API',
    kind: 'Work',
    tone: 'orange',
  },
  {
    date: 'May 2024',
    title: 'Graduated with a 9.80/10 GPA',
    detail: "B.Tech in Computer Engineering · Dean's List",
    kind: 'Education',
    tone: 'pink',
  },
  {
    date: 'Aug 2024',
    title: 'Moved to Raleigh for a Master’s in Computer Science',
    detail: 'North Carolina State University',
    kind: 'Education',
    tone: 'pink',
  },
  {
    date: 'May 2026',
    title: 'Graduated with a 4.0/4.0 GPA',
    detail: 'M.S. in Computer Science · NC State',
    kind: 'Education',
    tone: 'pink',
  },
  {
    date: 'Sep 2026',
    title: 'Software Engineer (Volunteer) at Future World Alliance',
    detail: 'Building the service that turns course enrollments into learner accounts',
    kind: 'Work',
    tone: 'orange',
  },
];
