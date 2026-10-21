// Site-wide settings and personal details. Edit these values to update the whole site.

export const site = {
  name: 'Aakash Vasant Bhandary',
  shortName: 'Aakash Bhandary',
  tagline: 'Software engineer building reliable backend and AI systems',
  location: 'Raleigh, NC',
  availability: 'Available immediately',
  openTo: 'Open to relocation and remote roles',
  email: 'aakashbhandary2024@gmail.com',
  resume: '/Aakash_Resume.pdf',
  profilePhoto: '/assets/profile.jpeg',
  description:
    'Aakash Bhandary is a software engineer and NC State computer science graduate building reliable backend and AI systems.',
};

// About section. TODO: replace these paragraphs with your own words.
export const about: string[] = [
  "I'm a software engineer with a Master's in Computer Science from NC State, where I focused on software engineering, algorithms, and generative AI.",
  'I enjoy building backend services that hold up under real load, and AI systems you can actually trust: from job queues and CI pipelines to tools that catch when an LLM agent goes wrong.',
  // TODO: add a sentence about what drives you, or a personal touch (hobbies, interests).
];

export interface SocialLink {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'mail' | 'link';
}

export const socials: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/abhandary14', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abhandary14/', icon: 'linkedin' },
  { label: 'Email', href: `mailto:${site.email}`, icon: 'mail' },
  // Uncomment and fill in to show more profiles:
  // { label: 'LeetCode', href: 'https://leetcode.com/u/<username>/', icon: 'link' },
  // { label: 'Kaggle', href: 'https://www.kaggle.com/<username>', icon: 'link' },
  // { label: 'Medium', href: 'https://medium.com/@<username>', icon: 'link' },
  // { label: 'Dev.to', href: 'https://dev.to/<username>', icon: 'link' },
  // { label: 'X', href: 'https://x.com/<username>', icon: 'link' },
];

// Third-party services. Leave a value empty to turn that feature off.
export const services = {
  // Contact form delivery. Get a free access key at https://web3forms.com (it is safe to publish).
  web3formsAccessKey: '00e75dbd-9166-4ff7-ac93-bb1324537982',
  // Private visit + resume view/download counter. Sign up at https://www.goatcounter.com
  // and put your site code here, e.g. 'abhandary14' for https://abhandary14.goatcounter.com
  goatcounterCode: 'abhandary14',
};
