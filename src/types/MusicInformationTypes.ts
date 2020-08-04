export type SongInfoType = {
  album: AlbumInfoType;
  alias: string[];
  artists: ArtistInfoType[];
  copyrightId: number;
  duration: number;
  fee: number;
  ftype: number;
  id: number;
  mark: number;
  mvid: number;
  name: string;
  rUrl: string | null;
  rtype: number;
  status: number;
};

export type AlbumInfoType = {
  artist: ArtistInfoType;
  copyrightId: number;
  id: number;
  mark: number;
  name: string;
  picId: number;
  publishTime: number;
  size: number;
  status: number;
  picUrl?: string;
  tns?: string[];
  pic?: number;
};

export type ArtistInfoType = {
  albumSize: number;
  alias: string[];
  id: number;
  img1v1: number;
  img1v1Url: string;
  name: string;
  picId: number;
  picUrl: string | null;
  trans: string | null;
  tns?: string[] | null;
};

export type HotSearchType = {
  first: string | null;
  second: number | null;
  third: null;
  iconType: number;
};

export type PlaylistType = {
  id: number;
  type: number;
  name: string;
  copywriter: string;
  picUrl: string;
  canDislike: boolean;
  trackNumberUpdateTime: number;
  playCount: number;
  trackCount: number;
  highQuality: boolean;
  alg: string;
};

export type NewSongInfoType = {
  id: number;
  type: number;
  name: string;
  copywriter: string | null;
  picUrl: string;
  canDislike: boolean;
  trackNumberUpdateTime: null;
  song: {
    name: string;
    id: number;
    position: number;
    alias: string[];
    status: number;
    fee: number;
    copyrightId: number;
    disc: string;
    no: number;
    artists: ArtistDetailInfoType[];
    album: AlbumDetailInfoType;
    starred: false;
    popularity: number;
    score: number;
    starredNum: number;
    duration: number;
    playedNum: number;
    dayPlays: number;
    hearTime: number;
    ringtone: string;
    crbt: null;
    audition: null;
    copyFrom: string;
    commentThreadId: string;
    rtUrl: string | null;
    ftype: number;
    rtUrls: string[];
    copyright: number;
    transName: string | null;
    sign: string | null;
    mark: number;
    noCopyrightRcmd: string | null;
    rtype: number;
    rurl: string | null;
    mvid: number;
    hMusic: MusicDataType;
    mMusic: MusicDataType;
    lMusic: MusicDataType;
    bMusic: MusicDataType;
    mp3Url: string | null;
    exclusive: boolean;
    privilege: {
      id: number;
      fee: number;
      payed: number;
      st: number;
      pl: number;
      dl: number;
      sp: number;
      cp: number;
      subp: number;
      cs: boolean;
      maxbr: number;
      fl: number;
      toast: boolean;
      flag: number;
      preSell: boolean;
    };
  };
  alg: string;
};

export type SongDetailInfoType = {
  name: string;
  id: number;
  pst: number;
  t: number;
  ar: ArtistInfoType[];
  alia: string[];
  pop: number;
  st: number;
  rt: string;
  fee: number;
  v: number;
  crbt: null;
  cf: string;
  // al: {
  //   id: number;
  //   name: string;
  //   picUrl: string;
  //   tns: string[];
  //   pic: number;
  // };
  al: AlbumInfoType;
  dt: number;
  h: MusicQuality;
  m: MusicQuality;
  l: MusicQuality;
  a: null;
  cd: string;
  no: number;
  rtUrl: null;
  ftype: number;
  rtUrls: [];
  djId: number;
  copyright: number;
  s_id: number;
  mark: number;
  originCoverType: number;
  single: number;
  noCopyrightRcmd: null;
  mv: number;
  rtype: number;
  rurl: null;
  mst: number;
  cp: number;
  publishTime: number;
};

// type ArtistInfo = {
//   id: number;
//   name: string;
//   tns: string[];
//   alias: string[];
// };

type MusicQuality = {
  br: number;
  fid: number;
  size: number;
  vd: number;
};

type ArtistDetailInfoType = {
  name: string;
  id: number;
  picId: number;
  img1v1Id: number;
  briefDesc: string;
  picUrl: string;
  img1v1Url: string;
  albumSize: number;
  alias: string[];
  trans: string;
  musicSize: number;
  topicPerson: number;
};

type AlbumDetailInfoType = {
  name: string;
  id: number;
  type: string;
  size: number;
  picId: number;
  blurPicUrl: string;
  companyId: number;
  pic: number;
  picUrl: string;
  publishTime: number;
  description: string;
  tags: string;
  company: string;
  briefDesc: string;
  artist: ArtistDetailInfoType;
  songs: string[];
  alias: string[];
  status: number;
  copyrightId: number;
  commentThreadId: string;
  artists: ArtistDetailInfoType[];
  subType: string;
  transName: null;
  mark: number;
  picId_str: string;
};

type MusicDataType = {
  name: string | null;
  id: number;
  size: number;
  extension: string;
  sr: number;
  dfsId: number;
  bitrate: number;
  playTime: number;
  volumeDelta: number;
};

export type MusicPlayerDataType = {
  id: number;
  url: string;
  br: number;
  size: number;
  md5: string;
  code: number;
  expi: number;
  type: string;
  gain: number;
  fee: number;
  uf: number;
  payed: number;
  flag: number;
  canExtend: false;
  freeTrialInfo: string;
  level: string;
  encodeType: string;
};

export type PlaylistDetailType = {
  relatedVideos: null;
  playlist: {
    // subscribers: [];
    subscribed: boolean;
    // creator: {};
    tracks: SongDetailInfoType[]; // not complete
    trackIds: SongTrackType[];
    updateFrequency: string | null;
    backgroundCoverId: number;
    backgroundCoverUrl: string | null;
    titleImage: number;
    titleImageUrl: string | null;
    englishTitle: string | null;
    opRecommend: boolean;
    adType: number;
    trackNumberUpdateTime: number;
    subscribedCount: number;
    cloudTrackCount: number;
    userId: number;
    createTime: number;
    highQuality: boolean;
    coverImgId: number;
    newImported: boolean;
    specialType: number;
    updateTime: number;
    commentThreadId: string;
    coverImgUrl: string;
    privacy: number;
    trackUpdateTime: number;
    trackCount: number;
    playCount: number;
    tags: string[];
    description: string;
    ordered: true;
    status: number;
    name: string;
    id: number;
    shareCount: number;
    commentCount: number;
  };
};

type SongTrackType = {
  id: number;
  v: number;
  at: number;
  alg: string | null;
};

export type PlaylistCommentType = {
  isMusician: boolean;
  userId: number;
  topComments: Comment[];
  moreHot: boolean;
  hotComments: Comment[];
  commentBanner: string | null;
  comments: Comment[];
  total: number;
  more: boolean;
};

export type Comment = {
  user: UserInfo;
  beReplied: Reply[];
  pendantData: PendantData | null;
  // showFloorComment: null;
  status: number;
  commentId: number;
  content: string;
  time: number;
  likedCount: number;
  expressionUrl: string | null;
  commentLocationType: number;
  parentCommentId: number;
  decoration: {};
  repliedMark: string | null;
  liked: false;
};

type PendantData = {
  id: number;
  imageUrl: string;
};

type UserInfo = {
  locationInfo: string | null;
  liveInfo: string | null;
  anonym: number;
  avatarUrl: string;
  authStatus: number;
  experts: string | null;
  userId: number;
  userType: number;
  nickname: string;
  vipRights: VipRights | null;
  vipType: number;
  remarkName: string | null;
  expertTags: string[] | null;
};

type VipRights = {
  associator: {
    vipCode: number;
    rights: boolean;
  };
  musicPackage: null;
  redVipAnnualCount: number;
};

type Reply = {
  user: UserInfo;
  beRepliedCommentId: number;
  content: Comment;
  status: number;
  expressionUrl: string | null;
};
