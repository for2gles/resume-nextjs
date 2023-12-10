import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: 'Programming Languages',
  items: [
    {
      title: 'Typescript',
      level: 3,
    },
    {
      title: 'Javascript',
      level: 3,
    },
    {
      title: 'PHP',
      level: 3,
    },
    {
      title: 'HTML/CSS',
      level: 2,
    },
    {
      title: 'Dart',
      level: 1,
    },
    {
      title: 'Java',
      level: 1,
    },
  ],
};

const frameworkAndLibraries: ISkill.Skill = {
  category: 'Fameworks & Libraries',
  items: [
    {
      title: 'Node.js',
      level: 3,
    },
    {
      title: 'Express.js',
      level: 3,
    },
    {
      title: 'Nest.js',
      level: 3,
    },
    {
      title: 'CodeIgniter',
      level: 3,
    },
    {
      title: 'GnuBoard',
      level: 2,
    },
    {
      title: 'Vue.js',
      level: 2,
    },
    {
      title: 'Flutter',
      level: 1,
    },
    {
      title: 'Spring',
      level: 1,
    },
  ],
};

const infrastructureAndDatabases: ISkill.Skill = {
  category: 'Infrastructures & Databases',
  items: [
    {
      title: 'Docker Swarm',
    },
    {
      title: 'Docker',
    },
    {
      title: 'Nginx',
    },
    {
      title: 'BullMQ',
    },
    {
      title: 'PostgreSQL',
    },
    {
      title: 'Redis',
    },
    {
      title: 'AWS',
    },
  ],
};

const misc: ISkill.Skill = {
  category: 'Misc',
  items: [
    {
      title: 'English (자유로운 업무소통 가능)',
    },
    {
      title: 'Ubuntu',
    },
    {
      title: 'Browserless & Puppeteer',
    },
    {
      title: 'Stripe',
    },
    {
      title: 'Nice Payment',
    },
    {
      title: 'Elastic Search APM',
    },
    {
      title: 'VS Code',
    },
    {
      title: 'Cloudflare',
    },
    {
      title: 'Hubspot',
    },
    {
      title: "Let's Encrypt",
    },
    {
      title: 'Github Action',
    },
    {
      title: 'Home Server',
    },
    {
      title: 'Oracle Cloud',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [programmingLanguages, frameworkAndLibraries, infrastructureAndDatabases, misc],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
