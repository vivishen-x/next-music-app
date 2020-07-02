import qs from "qs";
import { SongInfoType, HotSearchType } from "./types/MusicInformationTypes";

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

// PORT = 8080
const NETEASE_MUSIC_URI = "http://localhost:8080/";

const searchApi = `${NETEASE_MUSIC_URI}search`;

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
