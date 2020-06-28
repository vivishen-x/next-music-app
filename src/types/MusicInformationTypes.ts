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
