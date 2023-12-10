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
        '아드리엘 백엔드 및 AdgenAI 백엔드 개발',
        '대시보드 로직 유지보수 및 리팩토링',
        '결제 로직 유지보수 및 리팩토링',
        'Vue를 활용한 BO 페이지 구현 및 유지보수',
        '사용자 Needs 에 맞는 사용성 개선과 신규 비즈니스 로직 구현',
        'AWS, NCP, Contabo 등 인프라 및 데이터베이스 유지보수 및 관리',
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
      position: 'Software Engineer Team Member -> Leader',
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
