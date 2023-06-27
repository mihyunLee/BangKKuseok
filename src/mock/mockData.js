const products = [
  {
    id: '1',
    itemName: '{"name": "열쇠", "keyword": "조명"}',
    price: 30000,
    link: 'www.naver.com',
    itemImage: 'https://i.pinimg.com/564x/9d/cd/4c/9dcd4cd2dab228fb064b5939df8e2e85.jpg',
    createdAt: '2023-06-07T14:09:02.181Z',
    updatedAt: '2023-06-07T14:09:02.181Z',
    author: {
      _id: '647fe3b5b2cb2056632d63a8',
      username: 'test333',
      accountname: 'test333',
      intro: 'test test',
      image: 'https://i.pinimg.com/750x/e0/81/9c/e0819c03a4c25514289b41a62200fb9a.jpg',
      isfollow: false,
      following: ['647d90b9b2cb2056632d52ae', '62d8f10617ae6665817fdccb'],
      follower: [],
      followerCount: 0,
      followingCount: 2,
    },
  },
  {
    id: '2',
    itemName: '{"name": "열쇠", "keyword": "조명"}',
    price: 30000,
    link: 'www.naver.com',
    itemImage: 'https://i.pinimg.com/564x/9d/cd/4c/9dcd4cd2dab228fb064b5939df8e2e85.jpg',
    createdAt: '2023-06-07T14:09:02.181Z',
    updatedAt: '2023-06-07T14:09:02.181Z',
    author: {
      _id: '647fe3b5b2cb2056632d63a8',
      username: 'test333',
      accountname: 'test333',
      intro: 'test test',
      image: 'https://i.pinimg.com/736x/ed/2e/df/ed2edfbc03b1e9b9510d33aa1ff267b4.jpg',
      isfollow: false,
      following: ['647d90b9b2cb2056632d52ae', '62d8f10617ae6665817fdccb'],
      follower: [],
      followerCount: 0,
      followingCount: 2,
    },
  },
  {
    id: '3',
    itemName: '{"name": "열쇠", "keyword": "조명"}',
    price: 30000,
    link: 'www.naver.com',
    itemImage: 'https://i.pinimg.com/564x/9d/cd/4c/9dcd4cd2dab228fb064b5939df8e2e85.jpg',
    createdAt: '2023-06-07T14:09:02.181Z',
    updatedAt: '2023-06-07T14:09:02.181Z',
    author: {
      _id: '647fe3b5b2cb2056632d63a8',
      username: 'test333',
      accountname: 'test333',
      intro: 'test test',
      image: 'https://i.pinimg.com/736x/c7/c2/1f/c7c21f31aaa33dbb3621deba69b35f87.jpg',
      isfollow: false,
      following: ['647d90b9b2cb2056632d52ae', '62d8f10617ae6665817fdccb'],
      follower: [],
      followerCount: 0,
      followingCount: 2,
    },
  },
];

const profile = [
  {
    _id: '647fe3b5b2cb2056632d63a8',
    username: '구스구스',
    accountname: 'goose2023',
    intro: '구스덕조아',
    image: 'https://i.pinimg.com/750x/e0/81/9c/e0819c03a4c25514289b41a62200fb9a.jpg',
    isfollow: false,
    following: ['647d90b9b2cb2056632d52ae', '62d8f10617ae6665817fdccb'],
    follower: [],
    followerCount: 0,
    followingCount: 2,
    messages: [
      '안녕하세요! 저는 최근에 새로운 인테리어 상품을 찾고 있는데, 정말로 이번에 구매하고 싶은 상품을 발견했습니다. 이 제품은 매우 훌륭한 성능과 기능을 제공하며, 디자인도 매력적입니다. 리뷰들을 읽어보니 다른 사용자들도 이 제품을 강력히 추천하고 있더라구요. 그래서 저도 이 제품을 구매하고 싶은데, 혹시 제가 궁금한 몇 가지 질문이 있어서 여쭤보려고 합니다. 제가 질문을 몇 가지 할 수 있을까요?',
      '오늘 날씨가 좋네요',
    ],
  },
  {
    _id: '1',
    username: '꾸덕이',
    accountname: 'bangkkuseok',
    intro: '구스덕조아',
    image: 'https://i.pinimg.com/564x/96/62/9d/96629d2fc302fb9f4c04d14b5160f77f.jpg',
    isfollow: false,
    following: ['647d90b9b2cb2056632d52ae', '62d8f10617ae6665817fdccb'],
    follower: [],
    followerCount: 0,
    followingCount: 2,
    messages: [
      '제 상품에 대해 궁금한 점이 있으시면 언제든지 물어보실 수 있습니다.',
      '반갑습니다!',
      '무슨 일로 오셨나요?',
    ],
  },
  {
    _id: '2',
    username: '집순이',
    accountname: 'jipjoa',
    intro: '구스덕조아',
    image: 'https://i.pinimg.com/564x/b5/8f/2f/b58f2f6c940f8bc9e36e10211dcacfa2.jpg',
    isfollow: false,
    following: ['647d90b9b2cb2056632d52ae', '62d8f10617ae6665817fdccb'],
    follower: [],
    followerCount: 0,
    followingCount: 2,
    messages: [
      '반갑습니다~~~~~',
      '상품구매 희망하여 연락을 드리게 되었습니다',
      '사고싶어요오오오오오오오',
      '얼마인가요???',
    ],
  },
];

const posts = [
  {
    _id: '64886bbdb2cb2056633391ca',
    content:
      '{"space": "원룸", "detail" :"옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 약동하다. 대고, 못할 약동하다."}',
    image: 'https://i.pinimg.com/474x/a4/99/e3/a499e36a2a1ba4625703d1efd4ac6ad6.jpg',
    comments: [],
    heartCount: 0,
    author: {
      _id: '6481eb89b2cb2056632d92c8',
      hearts: [],
      following: [],
      follower: ['6476d76cb2cb2056632cffeb'],
      username: 'test3',
      accountname: 'pig3',
      email: 'zxcasd1113@naver.com',
      intro: '안녕하세요요',
      salt: '712cccaef4b8e21288af6ace0960bd37',
      hash: '123',
      image: '',
      createdAt: '2023-06-08T14:54:01.193Z',
      updatedAt: '2023-06-08T14:59:40.758Z',
      __v: 0,
    },
    createdAt: '2023-06-13T13:14:37.740Z',
    updatedAt: '2023-06-13T13:14:37.740Z',
    __v: 0,
  },
  {
    _id: '64886ba6b2cb2056633391c4',
    content:
      '{"space": "원룸", "detail" :"옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 약동하다. 대고, 못할 약동하다."}',
    image: 'https://i.pinimg.com/474x/a4/99/e3/a499e36a2a1ba4625703d1efd4ac6ad6.jpg',
    comments: [],
    heartCount: 0,
    author: {
      _id: '6481eb89b2cb2056632d92c8',
      hearts: [],
      following: [],
      follower: ['6476d76cb2cb2056632cffeb'],
      username: 'test3',
      accountname: 'pig3',
      email: 'zxcasd1113@naver.com',
      intro: '안녕하세요요',
      salt: '712cccaef4b8e21288af6ace0960bd37',
      hash: '123',
      image: '',
      createdAt: '2023-06-08T14:54:01.193Z',
      updatedAt: '2023-06-08T14:59:40.758Z',
      __v: 0,
    },
    createdAt: '2023-06-13T13:14:14.079Z',
    updatedAt: '2023-06-13T13:14:14.079Z',
    __v: 0,
  },
  {
    _id: '648863e3b2cb205663338e66',
    content:
      '{"space": "원룸", "detail" :"옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 약동하다. 대고, 못할 약동하다."}',
    image: 'https://i.pinimg.com/474x/a4/99/e3/a499e36a2a1ba4625703d1efd4ac6ad6.jpg',
    comments: [],
    heartCount: 0,
    author: {
      _id: '6481eb89b2cb2056632d92c8',
      hearts: [],
      following: [],
      follower: ['6476d76cb2cb2056632cffeb'],
      username: 'test3',
      accountname: 'pig3',
      email: 'zxcasd1113@naver.com',
      intro: '안녕하세요요',
      salt: '712cccaef4b8e21288af6ace0960bd37',
      hash: '123',
      image: '',
      createdAt: '2023-06-08T14:54:01.193Z',
      updatedAt: '2023-06-08T14:59:40.758Z',
      __v: 0,
    },
    createdAt: '2023-06-13T12:41:07.230Z',
    updatedAt: '2023-06-13T12:41:07.230Z',
    __v: 0,
  },
  {
    _id: '648861fab2cb205663338e17',
    content:
      '{"space": "원룸", "detail" :"옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 약동하다. 대고, 못할 약동하다."}',
    image: 'https://i.pinimg.com/474x/a4/99/e3/a499e36a2a1ba4625703d1efd4ac6ad6.jpg',
    comments: [],
    heartCount: 0,
    author: {
      _id: '6481eb89b2cb2056632d92c8',
      hearts: [],
      following: [],
      follower: ['6476d76cb2cb2056632cffeb'],
      username: 'test3',
      accountname: 'pig3',
      email: 'zxcasd1113@naver.com',
      intro: '안녕하세요요',
      salt: '712cccaef4b8e21288af6ace0960bd37',
      hash: '123',
      image: '',
      createdAt: '2023-06-08T14:54:01.193Z',
      updatedAt: '2023-06-08T14:59:40.758Z',
      __v: 0,
    },
    createdAt: '2023-06-13T12:32:58.874Z',
    updatedAt: '2023-06-13T12:32:58.874Z',
    __v: 0,
  },
  {
    _id: '64885f99b2cb205663338d87',
    content:
      '{"space": "원룸", "detail" :"옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 약동하다. 대고, 못할 약동하다."}',
    image: 'https://i.pinimg.com/474x/a4/99/e3/a499e36a2a1ba4625703d1efd4ac6ad6.jpg',
    comments: [],
    heartCount: 0,
    author: {
      _id: '647fe3b5b2cb2056632d63a8',
      hearts: [
        '6481e23cb2cb2056632d921f',
        '6481ecfab2cb2056632d92e3',
        '64832a1ab2cb2056632de97a',
        '6481ed1db2cb2056632d92e9',
        '64829353b2cb2056632db2c4',
        '64859572b2cb2056632e1b94',
        '64869bd4b2cb2056632e5371',
        '6486d999b2cb2056632e7302',
        '6487503db2cb205663307509',
        '6487505cb2cb205663307570',
      ],
      following: ['647d90b9b2cb2056632d52ae', '62d8f10617ae6665817fdccb'],
      follower: [],
      username: 'test333',
      accountname: 'test333',
      email: 'test333@test333.com',
      intro: 'test test',
      salt: '39f682c2cb35661fd6af98407546c538',
      hash: '123',
      image: 'https://i.pinimg.com/750x/e0/81/9c/e0819c03a4c25514289b41a62200fb9a.jpg',
      createdAt: '2023-06-07T01:56:05.658Z',
      updatedAt: '2023-06-13T02:03:15.239Z',
      __v: 0,
    },
    createdAt: '2023-06-13T12:22:49.668Z',
    updatedAt: '2023-06-13T12:22:49.668Z',
    __v: 0,
  },
  {
    _id: '64885f81b2cb205663338d6b',
    content:
      '{"space": "원룸", "detail" :"옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 약동하다. 대고, 못할 약동하다."}',
    image: 'https://i.pinimg.com/474x/a4/99/e3/a499e36a2a1ba4625703d1efd4ac6ad6.jpg',
    comments: [],
    heartCount: 0,
    author: {
      _id: '6487fe9bb2cb205663308aa5',
      hearts: [],
      following: [],
      follower: [],
      username: 'testComma',
      accountname: '..__',
      email: 'testcomma@testcomma.com',
      intro: '콤마',
      salt: '63835b8683dbc22958d1727379ad2fa9',
      hash: '123',
      image: 'https://mandarin.api.weniv.co.kr/Ellipse.png',
      createdAt: '2023-06-13T05:29:00.000Z',
      updatedAt: '2023-06-13T05:29:00.000Z',
      __v: 0,
    },
    createdAt: '2023-06-13T12:22:25.109Z',
    updatedAt: '2023-06-13T12:22:25.109Z',
    __v: 0,
  },
  {
    _id: '6487505cb2cb205663307570',
    content:
      '{"space": "원룸", "detail" :"옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 약동하다. 대고, 못할 약동하다."}',
    image: 'https://i.pinimg.com/474x/a4/99/e3/a499e36a2a1ba4625703d1efd4ac6ad6.jpg',
    comments: [],
    heartCount: 1,
    author: {
      _id: '647fe3b5b2cb2056632d63a8',
      hearts: [
        '6481e23cb2cb2056632d921f',
        '6481ecfab2cb2056632d92e3',
        '64832a1ab2cb2056632de97a',
        '6481ed1db2cb2056632d92e9',
        '64829353b2cb2056632db2c4',
        '64859572b2cb2056632e1b94',
        '64869bd4b2cb2056632e5371',
        '6486d999b2cb2056632e7302',
        '6487503db2cb205663307509',
        '6487505cb2cb205663307570',
      ],
      following: ['647d90b9b2cb2056632d52ae', '62d8f10617ae6665817fdccb'],
      follower: [],
      username: 'test333',
      accountname: 'test333',
      email: 'test333@test333.com',
      intro: 'test test',
      salt: '39f682c2cb35661fd6af98407546c538',
      hash: '123',
      image: 'https://i.pinimg.com/750x/e0/81/9c/e0819c03a4c25514289b41a62200fb9a.jpg',
      createdAt: '2023-06-07T01:56:05.658Z',
      updatedAt: '2023-06-13T02:03:15.239Z',
      __v: 0,
    },
    createdAt: '2023-06-12T17:05:32.032Z',
    updatedAt: '2023-06-13T02:03:15.244Z',
    __v: 0,
  },
  {
    _id: '6487503db2cb205663307509',
    content:
      '{"space": "원룸", "detail" :"옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 약동하다. 대고, 못할 약동하다."}',
    image: 'https://i.pinimg.com/474x/a4/99/e3/a499e36a2a1ba4625703d1efd4ac6ad6.jpg',
    comments: [],
    heartCount: 1,
    author: {
      _id: '647fe3b5b2cb2056632d63a8',
      hearts: [
        '6481e23cb2cb2056632d921f',
        '6481ecfab2cb2056632d92e3',
        '64832a1ab2cb2056632de97a',
        '6481ed1db2cb2056632d92e9',
        '64829353b2cb2056632db2c4',
        '64859572b2cb2056632e1b94',
        '64869bd4b2cb2056632e5371',
        '6486d999b2cb2056632e7302',
        '6487503db2cb205663307509',
        '6487505cb2cb205663307570',
      ],
      following: ['647d90b9b2cb2056632d52ae', '62d8f10617ae6665817fdccb'],
      follower: [],
      username: 'test333',
      accountname: 'test333',
      email: 'test333@test333.com',
      intro: 'test test',
      salt: '39f682c2cb35661fd6af98407546c538',
      hash: '123',
      image: 'https://i.pinimg.com/736x/c7/c2/1f/c7c21f31aaa33dbb3621deba69b35f87.jpg',
      createdAt: '2023-06-07T01:56:05.658Z',
      updatedAt: '2023-06-13T02:03:15.239Z',
      __v: 0,
    },
    createdAt: '2023-06-12T17:05:01.097Z',
    updatedAt: '2023-06-13T01:36:43.236Z',
    __v: 0,
  },
  {
    _id: '6486d9beb2cb2056632e7364',
    content:
      '{"space": "원룸", "detail" :"옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 약동하다. 대고, 못할 약동하다."}',
    image: 'https://i.pinimg.com/474x/a4/99/e3/a499e36a2a1ba4625703d1efd4ac6ad6.jpg',
    comments: [],
    heartCount: 0,
    author: {
      _id: '6481eb89b2cb2056632d92c8',
      hearts: [],
      following: [],
      follower: ['6476d76cb2cb2056632cffeb'],
      username: 'test3',
      accountname: 'pig3',
      email: 'zxcasd1113@naver.com',
      intro: '안녕하세요요',
      salt: '712cccaef4b8e21288af6ace0960bd37',
      hash: '123',
      image: '',
      createdAt: '2023-06-08T14:54:01.193Z',
      updatedAt: '2023-06-08T14:59:40.758Z',
      __v: 0,
    },
    createdAt: '2023-06-12T08:39:26.170Z',
    updatedAt: '2023-06-12T08:39:26.170Z',
    __v: 0,
  },
  {
    _id: '6486d999b2cb2056632e7302',
    content:
      '{"space": "원룸", "detail" :"옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 약동하다. 대고, 못할 약동하다."}',
    image: 'https://i.pinimg.com/474x/a4/99/e3/a499e36a2a1ba4625703d1efd4ac6ad6.jpg',
    comments: [],
    heartCount: 1,
    author: {
      _id: '6481eb89b2cb2056632d92c8',
      hearts: [],
      following: [],
      follower: ['6476d76cb2cb2056632cffeb'],
      username: 'test3',
      accountname: 'pig3',
      email: 'zxcasd1113@naver.com',
      intro: '안녕하세요요',
      salt: '712cccaef4b8e21288af6ace0960bd37',
      hash: '123',
      image: '',
      createdAt: '2023-06-08T14:54:01.193Z',
      updatedAt: '2023-06-08T14:59:40.758Z',
      __v: 0,
    },
    createdAt: '2023-06-12T08:38:49.989Z',
    updatedAt: '2023-06-12T15:14:40.874Z',
    __v: 0,
  },
];

const topLikedPosts = [
  {
    id: 1,
    content: '{"space": "원룸", "detail" :""}',
    image: 'https://i.pinimg.com/474x/a4/99/e3/a499e36a2a1ba4625703d1efd4ac6ad6.jpg',
    heartCount: 30,
    author: {
      id: 'kimmutsa',
      username: '김멋사',
    },
    createdAt: '2023-06-09T13:33:14.054Z',
  },
  {
    id: 2,
    content: '{"space": "작업실", "detail" :""}',
    image:
      'https://plus.unsplash.com/premium_photo-1671569714765-5829db780ba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80',
    heartCount: 12,
    author: {
      id: 'leemutsa',
      username: '이멋사',
    },
    createdAt: '2023-06-06T13:33:14.054Z',
  },
  {
    id: 3,
    content: '{"space": "거실", "detail" :""}',
    image:
      'https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    heartCount: 10,
    author: {
      id: 'parkmutsa',
      username: '박멋사',
    },
    createdAt: '2023-06-01T13:33:14.054Z',
  },
];

const postDetail = {
  id: '6488b20ab2cb20566333a220',
  content:
    '{"space": "원룸", "detail" :"옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 약동하다. 대고, 못할 약동하다."}',
  image: 'https://i.pinimg.com/474x/a4/99/e3/a499e36a2a1ba4625703d1efd4ac6ad6.jpg',
  createdAt: '2023-06-13T18:14:34.014Z',
  updatedAt: '2023-06-13T20:04:41.839Z',
  hearted: false,
  heartCount: 30,
  comments: ['6488cbd3b2cb20566333ad82', '6488cbd9b2cb20566333ad92'],
  commentCount: 2,
  author: {
    _id: '63b282c6b2cb205663a092f7',
    username: '호박이귀여워',
    accountname: 'hobak2',
    intro: '야옹 야옹 냥냐옹, 야옹',
    image: 'https://api.mandarin.weniv.co.kr/1683083205602.jpeg',
    isfollow: false,
    following: [
      '63b2851fb2cb205663a0af2d',
      '63b284a8b2cb205663a0abf5',
      '63b28468b2cb205663a0ab16',
      '63b284dcb2cb205663a0ad06',
    ],
    follower: [
      '63b284dcb2cb205663a0ad06',
      '63b284a8b2cb205663a0abf5',
      '63b2851fb2cb205663a0af2d',
      '63b284c3b2cb205663a0ac5f',
      '63b283fab2cb205663a0a883',
      '63b2850cb2cb205663a0ae74',
      '63b28468b2cb205663a0ab16',
      '63b5883bb2cb205663f9c787',
      '63b59696b2cb205663fa201f',
      '639ee61717ae666581c6e650',
    ],
    followerCount: 10,
    followingCount: 4,
  },
};

const comments = [
  {
    id: '6488cbd3b2cb20566333ad82',
    content: '이건 댓글입니다 이건 댓글입니다 이건 댓글입니다 이건 댓글입니다 이건 댓글입니다',
    createdAt: '2021-12-20T06:10:26.803Z',
    author: {
      _id: '647fe3b5b2cb2056632d63a8',
      username: '구스덕하실분',
      accountname: '구스독',
      intro: '구스덕조아',
      image: 'https://i.pinimg.com/750x/e0/81/9c/e0819c03a4c25514289b41a62200fb9a.jpg',
      isfollow: false,
      following: ['647d90b9b2cb2056632d52ae', '62d8f10617ae6665817fdccb'],
      follower: [],
      followerCount: 0,
      followingCount: 2,
    },
  },
  {
    id: '6488cbd9b2cb20566333ad92',
    content: '이건 댓글입니다22',
    createdAt: '2022-12-20T06:10:26.803Z',
    author: {
      _id: '작성자 id',
      username: '댓글작성자2',
      accountname: '1',
      intro: '1',
      image: 'https://api.mandarin.weniv.co.kr/1683083205602.jpeg',
      following: [],
      follower: [],
      followerCount: 0,
      followingCount: 0,
    },
  },
];
export { products, profile, posts, topLikedPosts, postDetail, comments };
