import qs from "qs";
import {
  SongInfoType,
  HotSearchType,
  PlaylistType,
  SongDetailInfoType,
  MusicPlayerDataType
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
  result: SongDetailInfoType[];
};

export type MusicPlayerDataJson = {
  data: MusicPlayerDataType[];
};

// PORT = 8080
const NETEASE_MUSIC_URI = "http://localhost:8080/";

const searchApi = `${NETEASE_MUSIC_URI}search`;

const personalizedApi = `${NETEASE_MUSIC_URI}personalized`;

const songApi = `${NETEASE_MUSIC_URI}song`;

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
