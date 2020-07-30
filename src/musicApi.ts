import qs from "qs";
import {
  SongInfoType,
  HotSearchType,
  PlaylistType,
  NewSongInfoType,
  MusicPlayerDataType,
  SongDetailInfoType,
  PlaylistDetailType
} from "./types/MusicInformationTypes";

export type SearchResultJson = {
  result: {
    songCount: number;
    songs: SongInfoType[];
  };
};

export type HotSearchListJson = {
  result: {
    hots: HotSearchType[];
  };
};

export type PersonalizedPlaylistJson = {
  result: PlaylistType[];
};

export type PersonalizedNewSongJson = {
  result: NewSongInfoType[];
};

export type MusicPlayerDataJson = {
  data: MusicPlayerDataType[];
};

export type SongDetailDataJson = {
  songs: SongDetailInfoType[];
};

// PORT = 8080
const NETEASE_MUSIC_URI = "http://localhost:8080/";

const searchApi = `${NETEASE_MUSIC_URI}search`;

const personalizedApi = `${NETEASE_MUSIC_URI}personalized`;

const songApi = `${NETEASE_MUSIC_URI}song`;

const playlistApi = `${NETEASE_MUSIC_URI}playlist`;

export async function searchMusicByKeyword(
  keywords: string
): Promise<SearchResultJson> {
  const query = qs.stringify({
    keywords
  });
  const searchResultUrl = `${searchApi}?${query}`;
  const searchResultJson: SearchResultJson = await fetch(searchResultUrl)
    .then(res => res.json())
    .catch(e => {
      return null;
    });
  return searchResultJson;
}

export async function fetchSearchHotList(): Promise<HotSearchListJson> {
  const searchHotListUrl = `${searchApi}/hot`;
  const hotListJson = await fetch(searchHotListUrl)
    .then(res => res.json())
    .catch(e => {
      return null;
    });
  return hotListJson;
}

export async function fetchPersonalizedPlaylist(
  limit: number = 6
): Promise<PersonalizedPlaylistJson> {
  const query = qs.stringify({
    limit
  });
  const personalizedUrl = `${personalizedApi}?${query}`;
  const personalizedPlayListJson = await fetch(personalizedUrl)
    .then(res => res.json())
    .catch(e => {
      return null;
    });
  return personalizedPlayListJson;
}

export async function fetchPersonalizedNewSongs(): Promise<
  PersonalizedNewSongJson
> {
  const personalizedNewSongUrl = `${personalizedApi}/newsong`;
  const personalizedNewSongJson = await fetch(personalizedNewSongUrl)
    .then(res => res.json())
    .catch(e => {
      return null;
    });
  return personalizedNewSongJson;
}

export async function fetchMusicPlayerUrlByIds(
  ids: number[]
): Promise<MusicPlayerDataJson> {
  const query = qs.stringify({
    id: ids.join(",")
  });
  const songUrl = `${songApi}/url?${query}`;
  const musicPlayerDataJson = await fetch(songUrl)
    .then(res => res.json())
    .catch(e => {
      return null;
    });
  return musicPlayerDataJson;
}

export async function fetchSongDetailInfoByIds(
  ids: number[]
): Promise<SongDetailDataJson> {
  const query = qs.stringify({
    ids: ids.join(",")
  });
  const songDetailUrl = `${songApi}/detail?${query}`;
  const songDetailDataJson = await fetch(songDetailUrl)
    .then(res => res.json())
    .catch(e => {
      return null;
    });
  return songDetailDataJson;
}

export async function fetchPlaylistDetailInfoById(
  id: string
): Promise<PlaylistDetailType> {
  const query = qs.stringify({ id });
  const playlistDetailUrl = `${playlistApi}/detail?${query}`;
  const playlistDetailDataJson = await fetch(playlistDetailUrl)
    .then(res => res.json())
    .catch(e => {
      return null;
    });
  return playlistDetailDataJson;
}
