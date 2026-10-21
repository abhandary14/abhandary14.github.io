export interface Education {
  degree: string;
  school: string;
  location: string;
  dates: string;
  gpa: string;
  note?: string;
  coursework: string[];
}

export const education: Education[] = [
  {
    degree: 'Master of Computer Science',
    school: 'North Carolina State University',
    location: 'Raleigh, NC',
    dates: 'Aug 2024 – May 2026',
    gpa: '4.0 / 4.0',
    coursework: ['Software Engineering', 'Algorithms', 'Generative AI', 'Neural Networks'],
  },
  {
    degree: 'Bachelor of Technology, Computer Engineering',
    school: 'Pandit Deendayal Energy University',
    location: 'Gandhinagar, India',
    dates: 'Aug 2020 – May 2024',
    gpa: '9.80 / 10.0',
    note: "Dean's List",
    coursework: [
      'Data Structures and Algorithms',
      'Database Management Systems',
      'Computer Networks',
      'Operating Systems',
      'Artificial Intelligence',
      'Machine Learning',
      'Data Analytics with Python',
    ],
  },
];
