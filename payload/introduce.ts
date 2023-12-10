import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'Adriel 에서 Backend Team 에서 Dashboard, Payment(Stripe, Nice payment), Message Queue managing을 담당하고 있습니다.',
    '평소에 아티클 혹은 새로운 기능이나 아이디어를 생각하고, 점심시간 혹은 쉬는 시간에 여러 방향에 대해서 대화를 나누는것을 좋아합니다. 단순하게 제가 하는 개발 뿐만 아니라, 항상 새로운 기술과 도구를 학습하고, 최신 개발 트렌드를 따라가며 지식을 업데이트하는 것을 좋아합니다. 끊임없는 자기 계발을 통해 프로젝트에 가치를 더하고, 팀 내에서 협업하며 문제를 해결하는 것을 즐깁니다.',
    '요구 사항을 명확하게 이해하며, 프로젝트의 비즈니스 가치를 최대화하기 위해 노력합니다. 또한, 새로운 아이디어를 제안하고, 문제를 해결하기 위한 창의적인 솔루션을 찾아내는 것을 즐깁니다.',
    '개발자는 비즈니스 요구를 이해하고, 원하는 기능을 정확하게 구현해내고, 능동적, 적극적으로 커뮤니케이션을 함을 통해 비즈니스 그리고 유저의 니즈에 맞는 프로덕트를 만드는 사람이라고 생각합니다.',
  ],
  sign: 'Yoon',
  // sign: packageJson.author.name,
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
