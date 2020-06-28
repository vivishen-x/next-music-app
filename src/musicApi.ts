import qs from "qs";
import { SongInfoType } from "./types/MusicInformationTypes";

export type SearchResultJson = {
  result: {
    songCount: number;
    songs: SongInfoType[];
  };
};

// PORT = 8080
const localNeteaseMusicUri = "http://localhost:8080/";

export async function searchMusicByKeyword(
  keywords: string
): Promise<SearchResultJson> {
  const query = qs.stringify({
    keywords
  });
  const searchResultUrl = `${localNeteaseMusicUri}search?${query}`;
  const searchResultJson: SearchResultJson = await fetch(
    searchResultUrl
  ).then(res => res.json());
  return searchResultJson;
}
