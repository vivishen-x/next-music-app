import * as React from "react";
import { GetServerSideProps } from "next";
import { SongInfoType } from "../../src/types/MusicInformationTypes";
import { searchMusicByKeyword } from "../../src/musicApi";
import Layout from "../../components/Layout";
import SongResultItem from "../../components/SongResultItem";

type Props = {
  keywords: string;
  searchResult: {
    songCount: number;
    songs: SongInfoType[];
  };
};

export default class KeywordSearchShow extends React.Component<Props> {
  render() {
    const { keywords, searchResult } = this.props;
    return (
      <Layout meta={{}}>
        <div className="container">
          <h1 className="h1">「{keywords}」的搜索结果</h1>
          <div className="result-container">
            {searchResult.songs.map(song => (
              <SongResultItem
                key={song.id}
                songName={song.name}
                artists={song.artists}
                album={song.album}
              />
            ))}
          </div>
        </div>
        <style jsx>
          {`
            .container {
              height: auto;
              padding-bottom: 100px;
            }
            .h1 {
              font-size: 18px;
              line-height: 1;
              margin: 10px 0;
            }
            .result-container {
              margin: 25px 0;
            }
          `}
        </style>
      </Layout>
    );
  }
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { keywords } = context.query as { keywords: string };
  const keywordSearchResult = await searchMusicByKeyword(keywords);
  return {
    props: {
      keywords,
      searchResult: keywordSearchResult.result
    }
  };
};
