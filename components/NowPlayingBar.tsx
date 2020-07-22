import * as React from "react";
import AudioPlayer from "./AudioPlayer";
import {
  fetchMusicPlayerUrlByIds,
  fetchSongDetailInfoByIds
} from "../src/musicApi";
import {
  MusicPlayerDataType,
  SongDetailInfoType
} from "../src/types/MusicInformationTypes";

type Props = {
  playlistMusicIds?: number[];
  nowPlayingIndex?: number | null;
};

type State = {
  musicPlayerData: MusicPlayerDataType[];
  songDetailData: SongDetailInfoType[];
  nowPlayingMusic: {
    index: number;
    id: number;
    songDetail: SongDetailInfoType;
    musicData: MusicPlayerDataType;
  } | null;
};

export default class NowPlayingBar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      musicPlayerData: [],
      songDetailData: [],
      nowPlayingMusic: null
    };

    this.updateNowPlayingMusic = this.updateNowPlayingMusic.bind(this);
  }

  async componentDidMount() {
    const { playlistMusicIds, nowPlayingIndex } = this.props;
    if (!playlistMusicIds) return;
    const [musicPlayerDataJson, songDetailDataJson] = await Promise.all([
      fetchMusicPlayerUrlByIds(playlistMusicIds),
      fetchSongDetailInfoByIds(playlistMusicIds)
    ]);

    const index = nowPlayingIndex ? nowPlayingIndex : 0;
    const nowPlayingId = playlistMusicIds[index];
    const songDetail = songDetailDataJson.songs.find(
      song => song.id === nowPlayingId
    );
    const musicData = musicPlayerDataJson.data.find(
      music => music.id === nowPlayingId
    );
    this.setState({
      musicPlayerData: musicPlayerDataJson.data,
      songDetailData: songDetailDataJson.songs,
      nowPlayingMusic: {
        index,
        id: nowPlayingId,
        songDetail,
        musicData
      }
    });
  }

  updateNowPlayingMusic(key: "next" | "prev") {
    const { playlistMusicIds } = this.props;
    const { songDetailData, musicPlayerData } = this.state;
    const nowPlayingIndex = this.updateNowPlayingIndex(key);

    const nowPlayingId = playlistMusicIds[nowPlayingIndex];
    const songDetail = songDetailData.find(song => song.id === nowPlayingId);
    const musicData = musicPlayerData.find(music => music.id === nowPlayingId);

    this.setState({
      nowPlayingMusic: {
        index: nowPlayingIndex,
        id: nowPlayingId,
        songDetail,
        musicData
      }
    });
  }

  updateNowPlayingIndex(key: "next" | "prev"): number {
    const { index } = this.state.nowPlayingMusic;
    const totalLength = this.props.playlistMusicIds.length;
    let nowPlayingIndex;
    if (index > 0 && index < totalLength - 1) {
      switch (key) {
        case "next":
          nowPlayingIndex = index + 1;
          break;
        case "prev":
          nowPlayingIndex = index - 1;
          break;
      }
    } else if (index == 0) {
      switch (key) {
        case "next":
          nowPlayingIndex = index + 1;
          break;
        case "prev":
          nowPlayingIndex = totalLength - 1;
          break;
      }
    } else if (index == totalLength - 1) {
      switch (key) {
        case "next":
          nowPlayingIndex = 0;
          break;
        case "prev":
          nowPlayingIndex = index - 1;
          break;
      }
    }
    return nowPlayingIndex;
  }

  render() {
    const { nowPlayingMusic } = this.state;
    if (!nowPlayingMusic) return null;

    const { songDetail, musicData } = nowPlayingMusic;

    return (
      <div className="bottom-fix">
        <div className="now-playing-bar__left">
          {songDetail ? (
            <React.Fragment>
              <img
                className="song-image"
                src={songDetail.al.picUrl}
                alt={songDetail.name}
              />
              <div className="song-text-wrapper">
                <p className="song-text">{songDetail.name}</p>
                <p className="song-text song-text-name">
                  {songDetail.ar.map(ar => ar.name).join(", ")}
                </p>
              </div>
            </React.Fragment>
          ) : null}
        </div>
        <div className="now-playing-bar__center">
          <AudioPlayer
            updateNowPlayingMusic={this.updateNowPlayingMusic}
            musicData={musicData}
          />
        </div>
        <div className="now-playing-bar__right"></div>
        <style jsx>
          {`
            .bottom-fix {
              position: fixed;
              height: 0;
              bottom: 0;
              width: 100%;
              display: flex;
              background: #333333;
              height: 90px;
              padding: 0 20px;
            }
            .now-playing-bar__left {
              width: 25%;
              display: flex;
              margin: 10px 0;
            }
            .song-image {
              height: 100%;
              border-radius: 3px;
            }
            .song-text-wrapper {
              width: auto;
              max-width: 200px;
              margin: 0 10px;
            }
            .now-playing-bar__left .song-text {
              color: #ffffff;
              font-weight: 500;
              letter-spacing: 1px;
              font-size: 12px;
              margin: 0;
            }
            .now-playing-bar__left .song-text-name {
              color: #777777;
            }
            .now-playing-bar__center {
              height: 90px;
              width: 50%;
              padding: 0 10px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #ffffff;
            }
            .now-playing-bar__right {
              width: 25%;
            }
          `}
        </style>
      </div>
    );
  }
}
