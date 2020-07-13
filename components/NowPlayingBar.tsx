import * as React from "react";
import AudioPlayer from "./AudioPlayer";
import { fetchMusicPlayerUrlByIds } from "../src/musicApi";
import { MusicPlayerDataType } from "../src/types/MusicInformationTypes";

type Props = {
  musicIds: number[];
};

type State = {
  musicPlayerData: MusicPlayerDataType[];
};

export default class NowPlayingBar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      musicPlayerData: []
    };
  }

  async componentDidMount() {
    const { musicIds } = this.props;
    if (!musicIds) return;
    const musicPlayerDataJson = await fetchMusicPlayerUrlByIds(musicIds);
    this.setState({ musicPlayerData: musicPlayerDataJson.data });
  }

  render() {
    const { musicPlayerData } = this.state;
    return (
      <div className="bottom-fix">
        <div className="now-playing-bar">
          <AudioPlayer musicData={musicPlayerData[0]} />
        </div>
        <style jsx>
          {`
            .bottom-fix {
              position: sticky;
              height: 0;
              bottom: 0;
              width: 100%;
            }
            .now-playing-bar {
              height: 90px;
              width: 100%;
              position: fixed;
              bottom: 0;
              padding: 0 20px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #ffffff;
              background: #333333;
            }
          `}
        </style>
      </div>
    );
  }
}
