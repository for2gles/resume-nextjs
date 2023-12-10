import { faEnvelope, faPhone, faPen } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import profileImage from '../asset/_picture.png';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image: profileImage,
  name: {
    title: '허윤',
    small: '(Glenn)',
  },
  contact: [
    {
      title: 'for2gles@naver.com',
      link: 'mailto:for2gles@naver.com',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/for2gles',
      icon: faGithub,
    },
    {
      link: 'https://blog.ewq.kr',
      icon: faPen,
    },
  ],
  notice: {
    title: '이메일로 연락 부탁드립니다.',
    icon: faBell,
  },
};

export default profile;
