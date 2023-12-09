import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: 'Programming Languages',
  items: [
    {
      title: 'Typescript',
      level: 3,
    },
    {
      title: 'PHP',
      level: 3,
    },
    {
      title: 'Dart',
      level: 2,
    },
    {
      title: 'Java',
      level: 1,
    },
    {
      title: 'Kotlin',
      level: 1,
    },
    {
      title: 'Python',
      level: 1,
    },
    {
      title: 'Golang',
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
      level: 2,
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
    {
      title: 'Contabo',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [programmingLanguages, frameworkAndLibraries, infrastructureAndDatabases, misc],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
