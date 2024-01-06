import { IPersonalProject } from '../component/personalProject/IPersonalProject';

const personalProject: IPersonalProject.Payload = {
  disable: false,
  list: [
    {
      title: '라스트쉘터 정보공유페이지',
      descriptions: [
        {
          content: ' Since 2019 ~',
        },
        {
          content: '라스트쉘터라는 게임 정보 공유 페이지입니다.',
        },
        {
          content:
            '의경으로 복무하던 시절, 즐겨하던 게임에 대한 정보를 공유하고자 하는 목적으로 제작되었습니다.',
        },
        {
          content:
            '다개국어 지원을 목적으로 제작이 되었고, 당시 전 세계에서 매달 천명이 넘는 방문자를 기록했습니다.',
        },
        {
          content: 'https://lss.ewq.kr',
          href: 'https://lss.ewq.kr',
        },
      ],
    },
    {
      title: '아파트369',
      descriptions: [
        {
          content: ' Since 2022 ~',
        },
        {
          content:
            '매일 공개되는 아파트 거래내역을 최근 수년 거래 내역과 비교하여 얼마나 오르거나 떨어졌는지를 보여줍니다.',
        },
        {
          content: '비교하고자 하는 기간, 보고싶은 지역 등을 선택할 수 있습니다.',
        },
        {
          content: '탭 기능을 활용하여 각각 분리된 지역, 메트릭을 쉽게 확인할 수 있습니다.',
        },
        {
          content: 'https://apt.369.kr',
          href: 'https://apt.369.kr',
        },
      ],
    },
  ],
};

export default personalProject;
