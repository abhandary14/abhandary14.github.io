export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  href: string;
  award?: {
    title: string;
    detail: string;
    image: string;
    imageAlt: string;
  };
}

export const publications: Publication[] = [
  {
    title: 'An Interpretable Palmprint Recognition Approach Using a CNN and Explainable-AI Frameworks',
    authors: 'Aakash Bhandary, Chintan Bhatt, Rinkal Jain',
    venue: 'Global AI Summit 2024, International Conference on AI and Emerging Technology (IEEE)',
    year: '2024',
    href: 'https://ieeexplore.ieee.org/document/10947987',
    award: {
      title: 'Best Paper Award',
      detail: 'Computer Vision and Virtual Reality session',
      image: '/assets/best_paper.jpg',
      imageAlt:
        'Best Paper Award certificate from Global AI Summit 2024 at Bennett University, co-sponsored by IEEE UP Section',
    },
  },
  {
    title: 'Enhancing Household Energy Consumption Predictions through Explainable AI Frameworks',
    authors:
      'Aakash Bhandary, Vruti Dobariya, Gokul Yenduri, Rutvij H. Jhaveri, Saikat Gochhait, Francesco Benedetto',
    venue: 'IEEE Access, vol. 12',
    year: '2024',
    href: 'https://ieeexplore.ieee.org/document/10459177',
  },
];
