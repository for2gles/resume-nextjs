import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: 'Adriel',
      position: 'Software Engineer (English)',
      startedAt: '2021-08',
      descriptions: [
        '광고 데이터 대시보드와 AdOps(Advertisement + Operation) 플랫폼 스타트업 (50~70명, BE팀 8~10명)',
        '아드리엘 백엔드, AdgenAI 백엔드 개발 및 유지보수',
        'BO 페이지 개발 및 유지보수',
        'NCloud > AWS 이전, 용도와 목적에 맞게 다양한 클라우드의 인프라 테스트 및 도입',
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
        'Gitlab',
        'Vue.js',
      ],
    },
    {
      title: 'RS Team',
      position: 'Software Engineer Team 팀장',
      startedAt: '2020-02',
      endedAt: '2021-07',
      descriptions: [
        'IoT 및 SI 중소기업 (10~20명, BE팀 4~6명)',
        'RSTeam CMS 개발',
        '프로젝트 개발 및 운영',
        'AWS 인프라 및 데이터베이스 유지보수 및 관리',
      ],
      skillKeywords: [
        'Node.js',
        'Nest.js',
        'Prisma',
        'mysql',
        'PHP',
        'jQuery',
        'Bootstrap',
        'AWS',
        'RDBMS',
        'CMS',
      ],
    },
  ],
};

export default experience;
