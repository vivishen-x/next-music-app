import * as React from "react";
import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import {
  HotSearchListJson,
  fetchSearchHotList,
  PersonalizedPlaylistJson,
  fetchPersonalizedPlaylist,
  PersonalizedNewSongJson,
  fetchPersonalizedNewSongs
} from "../src/musicApi";
import SearchKeywordLabel from "../components/SearchKeywordLabel";
import PlaylistsShow from "../components/PlaylistsShow";
import SongsShow from "../components/SongsShow";

type Props = {
  hotSearchList: HotSearchListJson;
  personalizedPlaylist: PersonalizedPlaylistJson;
  personalizedNewSong: PersonalizedNewSongJson;
};

type State = {};

export default class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  // async componentDidMount() {
  // }

  render() {
    const {
      hotSearchList,
      personalizedPlaylist,
      personalizedNewSong
    } = this.props;

    if (!hotSearchList)
      return (
        <Layout meta={{}}>
          <div className="container">
            <p>Please Run Local Netease Cloud Music Api.</p>
          </div>
        </Layout>
      );
    return (
      <Layout meta={{}}>
        <div className="container">
          <h1 className="h1">热门搜索</h1>
          <div className="top-recommend">
            {hotSearchList.result.hots.map((hotSearch, index) => (
              <SearchKeywordLabel key={index} keyword={hotSearch.first} />
            ))}
          </div>
          <h1 className="h1">推荐歌单</h1>
          <div className="top-recommend">
            <PlaylistsShow playlists={personalizedPlaylist.result} />
          </div>
          <h1 className="h1">最新音乐</h1>
          <div className="top-recommend">
            <SongsShow songs={personalizedNewSong.result} />
          </div>
        </div>
        <style jsx>{`
          .container {
            height: auto;
            padding-bottom: 100px;
          }
          .h1 {
            font-size: 18px;
            padding-left: 8px;
            line-height: 1;
            border-left: solid 3px #d43c33;
            margin: 10px 0;
          }
          .top-recommend {
            height: auto;
          }
        `}</style>
      </Layout>
    );
  }
}

export const getStaticProps: GetStaticProps = async () => {
  const hotSearchList = await fetchSearchHotList();
  const personalizedPlaylist = await fetchPersonalizedPlaylist();
  const personalizedNewSong = await fetchPersonalizedNewSongs();
  return {
    props: {
      hotSearchList,
      personalizedPlaylist,
      personalizedNewSong
    }
  };
};
