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

export type SongDetailInfoType = {
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
