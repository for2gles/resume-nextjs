import { IArticle } from '../component/article/IArticle';

const article: IArticle.Payload = {
  disable: false,

  list: [
    {
      content:
        '(2022.12.25) 개발자 네카라쿠배당토 중 한곳 면접 후기, 느낀점(feat. 함수형프로그래밍)',
      href: 'https://blog.ewq.kr/56',
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
    {
      content: '(2021.07.14) 보안에 대한 오늘의 고찰(GraphQL, 파일다운로드)',
      href: 'https://blog.ewq.kr/35',
    },
    {
      content: '비전공, 고졸 그리고 웹개발자 시리즈 - 내가 개발자가 된 이야기',
      descriptions: [
        {
          content: '(2020.03.26) 비전공, 고졸 그리고 웹개발자1',
          href: 'https://blog.ewq.kr/30',
        },
        {
          content: '(2020.03.27) 비전공, 고졸 그리고 웹개발자2',
          href: 'https://blog.ewq.kr/31',
        },
        {
          content: '(2020.03.28) 비전공, 고졸 그리고 웹개발자3',
          href: 'https://blog.ewq.kr/32',
        },
        {
          content: '(2020.03.29) 비전공, 고졸 그리고 웹개발자4',
          href: 'https://blog.ewq.kr/33',
        },
        {
          content: '(2020.03.30) 비전공, 고졸 그리고 웹개발자5',
          href: 'https://blog.ewq.kr/34',
        },
      ],
    },
  ],
};

export default article;
