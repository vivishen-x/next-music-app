import * as React from "react";
import { SongDetailInfoType } from "../src/types/MusicInformationTypes";
import { fetchMusicPlayerUrlByIds, MusicPlayerDataJson } from "../src/musicApi";

type Props = { songs: SongDetailInfoType[] };

type State = {
  musicPlayerData: MusicPlayerDataJson;
};

export default class SongsShow extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      musicPlayerData: { data: null }
    };

    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    const { songs } = this.props;
    const ids = songs.map(song => song.id);
    const musicPlayerData = await fetchMusicPlayerUrlByIds(ids);
    this.setState({ musicPlayerData });
  }

  handleClick(id: number) {
    const { musicPlayerData } = this.state;
    const songData = musicPlayerData.data.find(song => song.id === id);
    console.log(songData.url);
  }

  render() {
    const { songs } = this.props;
    return (
      <div className="container">
        {songs.map(song => {
          const artistName = song.song.artists
            .map(artist => artist.name)
            .join(" & ");
          return (
            <div
              className="song-container"
              key={song.id}
              onClick={() => this.handleClick(song.id)}
            >
              <div className="img-container">
                <img src={song.picUrl} alt={song.name} />
              </div>
              <div className="title-container">{song.name}</div>
              <div className="name-container">{artistName}</div>
            </div>
          );
        })}
        <style jsx>{`
          .container {
            display: flex;
            flex-wrap: wrap;
            justify-content: start;
          }
          .song-container {
            flex: 0 0 16%;
            margin: 8px 0;
            padding-right: 16px;
            cursor: pointer;
          }
          .song-container:hover .img-container img {
            filter: brightness(0.9);
          }
          .img-container img {
            border-radius: 5px;
          }
          .title-container {
            margin-top: 10px;
            padding: 3px 8px;
            color: #333333;
          }
          .name-container {
            padding: 3px 8px;
            color: #777777;
            font-size: 12px;
          }
        `}</style>
      </div>
    );
  }
}
