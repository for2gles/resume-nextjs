import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'Adriel 백엔드 서비스 개발',
      startedAt: '2021-08',
      where: 'Adriel',
      descriptions: [
        {
          content: '2023년 AI를 활용하여 마케터에 광고 인사이트 제공 기능 구현중',
        },
        {
          content: '2023년 AdgenAI 배너 생성로직 최적화 작업',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '에러가 발생하는 근본적인 원인을 분석하고, CPU 사용량이 많은 Puppeteer 로직을 Browserless를 활용하여 서버를 분리함을 통해 최적화 및 성공률 개선',
            },
            { content: '별도의 Dedicated 서버를 구축하고 동시 작업량 제어' },
            { content: '배너제작 에러율 50% => 1%로 감소' },
            { content: '개당 배너제작 시간 15초 => 5초로 감소' },
            {
              content:
                '유저가 순간적으로 몰리는 상황을 대비하여 확장에 용이하도록 서버 및 로직 구축',
            },
            {
              content:
                'CPU, Memory, Network 사용량 모니터링 시스템 구축 (Elastic Search MetricBeat)',
            },
            {
              content: 'Puppeteer 최적화 작업 기록 (feat. Browserless)',
              href: 'https://blog.ewq.kr/78',
            },
          ],
        },
        {
          content: '2023년 내부 데이터 헙스팟과 연동',
        },
        {
          content: '2023년 페이먼트 로직 리팩토링 - Stripe, Nicepay',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'Stripe 기능 로직상 분리 - Customer, Payment, Subscription',
            },
            { content: 'Stripe 결제시스템에 Usage Based 기능 구현' },
            { content: '크레딧 기능 구현' },
            { content: '동시에 들어오는 요청에 대한 처리 개선' },
            { content: '어댑터 패턴을 활용하여 PG사 추가에 용이' },
            { content: '결제 및 환불 등 문제발생시 담당자에 슬랙 알림' },
            { content: '구독 및 결제 관련 백오피스 페이지 재구축 및 Trial 등 설정 기능 개선' },
          ],
        },
        {
          content: '2023년 대시보드 데이터 불러오는 라우터 로직 Sync > Async 전환',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '기존 대시보드에서 데이터를 불러 올 때 발생하는 Timeout 및 동시 작업량 제어를 위해 Sync > Async로 전환',
            },
            { content: '순간적인 트래픽이 몰렸을 때 서버 리스크 감소' },
          ],
        },
        {
          content: '2022년 Naver SA 커넥터 리팩토링',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '데이터 정합성 문제와 안정성에 문제가 있었던 코드를 전면 리팩토링을 진행',
            },
            {
              content:
                'Background 작업이 진행되지 못하고 정체되던 문제를 해결. 하루에 수차례 들어오던 NaverSA 정합성 문의가 없어짐',
            },
            { content: '추가 최적화를 위해 Proxy 서버 구축을 통해 서비스 안정성 및 속도 향상' },
          ],
        },
        {
          content: '2022년 레거시 코드 최적화 및 개선',
          descriptions: [
            {
              content:
                '레거시 코드를 분석중 CPU, memory, duration이 상당한 Bottle neck을 발견. BullMQ를 활용하여 Async 로 처리하도록 변경 및 서버분리작업을 통해 안정성 개선',
            },
            {
              content:
                'CPU intensive한 작업을 분석하고 개선하여 기존 5시간 걸리던 작업을 5분이내로 단축',
            },
          ],
        },
        {
          content: '2022년 NCP > AWS 마이그레이션',
        },
        {
          content: '2022년 대시보드 로직 리팩토링',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'Javascript -> Typescript',
            },
            { content: '유지보수하기 힘든 Recursive 로직 개선' },
          ],
        },
        {
          content: '2022년 데이터베이스 파티셔닝을 통해 퍼포먼스 향상',
        },
        {
          content: '2022년 Data Source 통합 데이터 축적 시스템 구축',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '불필요하게 산발적으로 구현되어있던 데이터 축적시스템을 한개 시스템으로 통합',
            },
            {
              content:
                '기존, 유저가 요청할 때 마다 데이터를 축적하던 시스템을 "유저 요청 이전에 우선적으로 축적"하는 시스템으로 변경함을 통해 데이터 로딩에 1분 넘게 소요될 수 있었던 작업을 1초 이내로 단축시켜 유저 경험 개선하고, 예상가능한 요청량으로 개선함을 통해 Rate limit 리스크 감소',
            },
          ],
        },
      ],
    },
    {
      title: 'CICCommunity',
      startedAt: '2021-01',
      endedAt: '2021-07',
      where: 'RS Team',
      descriptions: [
        {
          content: '포럼 및 일반 게시판들이 포함된 커뮤니티 사이트',
        },
        {
          content: 'PHP + CodeIgniter + CIBoard 를 활용하여 제작',
        },
        {
          content: 'AWS EC2 / RDS 활용',
        },
      ],
    },
    {
      title: 'Smtech - 결제시스템 구축',
      startedAt: '2021-01',
      endedAt: '2021-07',
      where: 'RS Team',
      descriptions: [
        {
          content: '비회원 쇼핑몰 기능 추가 작업',
        },
        {
          content: 'PHP + CodeIgniter + IamPort + Inicis 연동작업',
        },
        {
          content: 'Inicis 직접 계약대행 및 IamPort 연동',
        },
        {
          content: '관리자(주문관리, 배송관리)+유저(상품목록, 상품상세, 결제) 직접 구현',
        },
      ],
    },
    {
      title: 'RSTeam CMS',
      startedAt: '2021-01',
      endedAt: '2021-07',
      where: 'RS Team',
      descriptions: [
        {
          content: 'RS Team SI 납품용 자체적인 CMS',
        },
        {
          content: '백엔드 프로젝트를 담당하였고, Nestjs + GraphQL 를 활용하여 제작',
        },
        {
          content: '추후에 MSA 전환을 고려하여 도메인별로 분리하여 구현',
        },
        // {
        //   content: '회원, 게시판 등을 직접 구현하며 보안에 신경을 엄청 쓰는 경험',
        // },
      ],
    },
    {
      title: 'InNest - Simulator',
      startedAt: '2020-10',
      endedAt: '2021-01',
      where: 'RS Team',
      descriptions: [
        {
          content:
            '가상 환경을 구성하여 가상 센서, 가상 액츄에이터를 생성하여 24시간 작동시키고, 수동 혹은 주기적으로 센싱값을 관제서버로 인터페이스에 맞추어 전송하는 시스템',
        },
        {
          content: 'Nodejs + Graphql 를 활용하여 제작',
        },
        {
          content: '공공데이터 API를 활용하여 가상환경 조성',
        },
        {
          content:
            '데이터베이스 요청량이 많아 속도가 느려지는 증상이 발생하여, 중복되는 요청을 최소화 하는 최적화를 통해 개선',
        },
        {
          content: 'AWS Lightsail / RDS',
        },
      ],
    },
    {
      title: 'Percommunity',
      startedAt: '2020-08',
      endedAt: '2020-10',
      where: 'RS Team',
      descriptions: [
        {
          content:
            '게시판에 광고 미션을 등록하고, 유저가 미션 수행후 인증을 하면 관리자가 보상을 주는 사이트.',
        },
        {
          content: 'PHP + CodeIgniter3 + CIBoard(CMS) 를 활용하여 제작',
        },
        {
          content: 'AWS Lightsail / RDS',
        },
      ],
    },
    {
      title: 'Cindymap',
      startedAt: '2020-05',
      endedAt: '2020-08',
      where: 'RS Team',
      descriptions: [
        {
          content: '마사지 예약 중계 사이트, 이벤트, 포인트샵',
        },
        {
          content: 'PHP + CodeIgniter3 를 활용하여 제작',
        },
        {
          content:
            '대규모 테스트와 Query 튜닝작업을 통해 10만개 이상 데이터를 보유한 테이블들을 Join 하여 1분이상 걸리던 수많은 Query를 1~5초내로 단축',
        },
        {
          content:
            '수만명의 테스트유저에게 푸시요청을 하면 서버가 뻗는 현상이 있어, 1000명씩 Chunk하여 전송시키도록 보완하여 서비스 안정화',
        },
        {
          content:
            'jQuery를 활용하여 Infinite Scroll 구현 및 Dom을 활용하여 페이지 새로고침 없이 페이지 전환',
        },
        {
          content: 'AWS Lightsail / RDS',
        },
      ],
    },
    {
      title: 'JWEntertainment',
      startedAt: '2020-03',
      endedAt: '2020-05',
      where: 'RS Team',
      descriptions: [
        {
          content: '노래방 기계의 라이센스 판매하는 사이트, B2B 모델의 비공개사이트',
        },
        {
          content: 'PHP + CodeIgniter3 과 AdminLTE Bootstrap 템플릿을 활용하여 구현',
        },
        {
          content: 'AWS Lightsail / RDS',
        },
        {
          content: 'csv를 업로드시 Database 에 칼럼에 맞추어 비동기로 등록되는 기능 구현.',
        },
      ],
    },
  ],
};

export default project;
