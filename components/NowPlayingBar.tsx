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
  musicIds: number[];
};

type State = {
  musicPlayerData: MusicPlayerDataType[];
  songDetailData: SongDetailInfoType[];
};

export default class NowPlayingBar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      musicPlayerData: [],
      songDetailData: []
    };
  }

  async componentDidMount() {
    const { musicIds } = this.props;
    if (!musicIds) return;
    const [musicPlayerDataJson, songDetailDataJson] = await Promise.all([
      fetchMusicPlayerUrlByIds(musicIds),
      fetchSongDetailInfoByIds(musicIds)
    ]);
    this.setState({
      musicPlayerData: musicPlayerDataJson.data,
      songDetailData: songDetailDataJson.songs
    });
  }

  render() {
    const { musicPlayerData, songDetailData } = this.state;
    const songDetail = songDetailData[0];
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
          <AudioPlayer musicData={musicPlayerData[0]} />
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
