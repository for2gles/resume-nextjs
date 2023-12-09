import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: 'Adriel',
      position: 'Software Developer',
      startedAt: '2021-08',
      descriptions: [
        'Steering Kernel patching and updates for various distributions',
        'Automating deployment and integration processes for Linux servers',
        'Spearheading initiatives to enhance Linux kernel security',
        'Collaborating with global developers to coordinate code contributions',
      ],
      skillKeywords: [
        'Node.js',
        'Typescript',
        'Express.js',
        'BullMQ',
        'AWS',
        'Ubuntu',
        'PostgreSQL',
        'Redis',
        'Docker',
        'Docker Swarm',
        'Nginx',
        'Stripe',
        'Nice Payment',
        'Browserless',
        'Jest',
        'ElasticSearch APM',
        'Cloudflare',
      ],
    },
    {
      title: 'RS Team',
      position: 'Software Develop Team Leader',
      startedAt: '2020-02',
      endedAt: '2021-08',
      descriptions: [
        'Promoted the use and development of Linux globally.',
        'Developed automated scripts to streamline system configuration.',
        'Facilitated live patching systems, reducing downtime.',
      ],
      skillKeywords: ['Node.js', 'Nest.js', 'PHP', 'AWS', 'RDBMS', 'CMS'],
    },
  ],
};

export default experience;
