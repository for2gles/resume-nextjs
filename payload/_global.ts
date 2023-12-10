import favicon from '../asset/favicon.ico';
import profileImage from '../asset/_picture.png';
import { IGlobal } from '../component/common/IGlobal';

const title = 'Resume: Heo Yoon';
const description = "This is Backend Developer Heo Yoon's Resume. Thank you";

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: profileImage,
          width: 800,
          height: 600,
          alt: 'OpenGraph Image Sample.png',
        },
      ],
      type: 'profile',
      profile: {
        firstName: 'Yoon',
        lastName: 'Heo',
        username: 'for2gles',
        gender: 'male',
      },
    },
  },
};
