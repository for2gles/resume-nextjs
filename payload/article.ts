import { IArticle } from '../component/article/IArticle';

const article: IArticle.Payload = {
  disable: false,

  list: [
    {
      content: '홈서버 구축하기 시리즈',
      descriptions: [
        {
          content: '[1] 홈서버를 구축 한 이유',
          href: 'https://blog.ewq.kr/69',
        },
        {
          content: '[2] 제품 선택 및 설치',
          href: 'https://blog.ewq.kr/70',
        },
        {
          content: '[3] 내부망 고정아이피 설정 및 포트포워딩 그리고 DDNS',
          href: 'https://blog.ewq.kr/71',
        },
        {
          content: '[4] 클라우드플레어를 활용하여 내 서버 아이피 숨기기(feat. HTTPS)',
          href: 'https://blog.ewq.kr/72',
        },
        {
          content: '[5] 클라우드를 사용해 게이트웨이 구축(feat.vpn)',
          href: 'https://blog.ewq.kr/73',
        },
        {
          content: '[6] Docker 및 Docker Swarm 설정하기',
          href: 'https://blog.ewq.kr/74',
        },
        {
          content: '[7] 공유 스토리지를 만들어보자(feat. 시놀로지)',
          href: 'https://blog.ewq.kr/75',
        },
        {
          content: '[8] 완성된 내 홈서버 네트워크 구성도 및 홈서버 배치 모습 그리고 총 비용',
          href: 'https://blog.ewq.kr/76',
        },
      ],
    },
    {
      content: 'NestJS + Websocket으로 채팅만들기 시리즈',
      descriptions: [
        {
          content: '(2021.07.16) NestJS + Websocket으로 채팅만들기 #1',
          href: 'https://blog.ewq.kr/37',
        },
        {
          content: '(2021.07.25) NestJS + Websocket으로 채팅만들기 #2 (feat. Socket.io)',
          href: 'https://blog.ewq.kr/40',
        },
        {
          content: '(2021.07.26) NestJS + Websocket으로 채팅만들기 #3 (feat. 채팅 "방" 만들기)',
          href: 'https://blog.ewq.kr/41',
        },
        {
          content: '(2021.07.26) NestJS + Websocket으로 채팅만들기 #4 (feat. 채팅 구색갖추기)',
          href: 'https://blog.ewq.kr/42',
        },
      ],
    },
  ],
};

export default article;
