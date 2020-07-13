import * as React from "react";
import { fetchMusicPlayerUrlByIds } from "../src/musicApi";
import { MusicPlayerDataType } from "../src/types/MusicInformationTypes";

type Props = {
  musicData: MusicPlayerDataType;
};

type State = {
  canplay: boolean;
  isPlaying: boolean;
  currentTime: string;
  duration: string;
  progressRate: number;
};

function secToTimeFormat(sec: number): string {
  let mm, ss;
  const minute = Math.floor(sec / 60);
  const second = Math.floor(sec % 60);
  if (minute < 10) mm = `0${minute}`;
  else mm = minute.toString();
  if (second < 10) ss = `0${second}`;
  else ss = second.toString();

  return `${mm}:${ss}`;
}

export default class AudioPlayer extends React.Component<Props, State> {
  audioRef: HTMLAudioElement;

  progressBar: any;

  constructor(props: Props) {
    super(props);
    this.state = {
      canplay: false,
      isPlaying: false,
      currentTime: "00:00",
      duration: "00:00",
      progressRate: 0
    };

    this.toggleIsPlaying = this.toggleIsPlaying.bind(this);
    this.updateDuration = this.updateDuration.bind(this);
    this.updateCurrentTime = this.updateCurrentTime.bind(this);
    this.onClickUpdateCurrentTime = this.onClickUpdateCurrentTime.bind(this);
  }

  componentDidMount() {
    this.audioRef.addEventListener("durationchange", this.updateDuration);
    this.audioRef.addEventListener("timeupdate", this.updateCurrentTime);
    // this.progressBar.addEventListener("click", this.onClickUpdateCurrentTime);
  }

  updateDuration() {
    this.setState({
      duration: secToTimeFormat(this.audioRef.duration)
    });
  }

  updateCurrentTime() {
    this.setState({
      currentTime: secToTimeFormat(this.audioRef.currentTime),
      progressRate: this.audioRef.currentTime / this.audioRef.duration
    });
  }

  onClickUpdateCurrentTime(event: any) {
    const left = event.nativeEvent.offsetX;
    const width = this.progressBar.clientWidth;
    this.audioRef.currentTime = (this.audioRef.duration * left) / width;
  }

  toggleIsPlaying() {
    const { isPlaying } = this.state;
    this.setState(
      {
        isPlaying: !isPlaying
      },
      () => {
        if (this.state.isPlaying) this.audioRef.play();
        else this.audioRef.pause();
      }
    );
  }

  componentWillUnmount() {
    this.audioRef.removeEventListener("durationchange", this.updateDuration);
    this.audioRef.removeEventListener("timeupdate", this.updateCurrentTime);
  }

  render() {
    const { musicData } = this.props;
    const { isPlaying, duration, currentTime, progressRate } = this.state;
    return (
      <div className="container">
        <audio
          src={musicData ? musicData.url : null}
          ref={ref => {
            this.audioRef = ref;
          }}
        ></audio>
        <div className="player-container">
          <button className="button-wrapper">
            <img alt="previous" src="./icons/skip_previous.svg" />
          </button>
          <button
            className="button-wrapper button-wrapper--main"
            onClick={this.toggleIsPlaying}
          >
            {isPlaying ? (
              <img alt="play" src="./icons/pause_circle.svg" />
            ) : (
              <img alt="play" src="./icons/play_circle.svg" />
            )}
          </button>
          <button className="button-wrapper">
            <img alt="next" src="./icons/skip_next.svg" />
          </button>
        </div>
        <div className="progress-container">
          <div className="progress-bar-time">{currentTime}</div>
          <div
            className="progress-bar-wrapper"
            role="button"
            onClick={this.onClickUpdateCurrentTime}
            ref={ref => {
              this.progressBar = ref;
            }}
          >
            <div className="progress-bar">
              <div
                className="progress-bar__rate"
                style={{
                  transform: `translateX(${(progressRate - 1) * 100}%)`
                }}
              />
            </div>
            <button
              className="progress-bar__btn"
              style={{ left: `${progressRate * 100}%` }}
            />
          </div>
          <div className="progress-bar-time">{duration}</div>
        </div>
        <style jsx>
          {`
            .container {
              width: 50%;
              max-width: 750px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }
            .player-container {
              display: flex;
              align-items: center;
              justify-content: space-between;
              width: 240px;
              margin-bottom: 10px;
            }
            .button-wrapper {
              background-color: transparent;
              border: none;
              width: 20px;
              min-width: 20px;
              height: 20px;
              outline: none;
            }
            .button-wrapper--main {
              width: 35px;
              min-width: 35px;
              height: 35px;
            }
            .button-wrapper img {
              width: 100%;
            }
            .progress-container {
              width: 100%;
              margin-bottom: 10px;
              display: flex;
            }
            .progress-bar-wrapper {
              width: 100%;
              display: flex;
              position: relative;
            }
            .progress-bar {
              width: 100%;
              height: 4px;
              margin: 8px 0;
              border-radius: 2px;
              background: #999999;
              overflow: hidden;
            }
            .progress-bar__rate {
              width: 100%;
              height: 4px;
              border-radius: 2px;
              background: #ffffff;
            }
            .progress-bar__btn {
              background-color: #fff;
              border: 0;
              border-radius: 50%;
              width: 12px;
              height: 12px;
              margin-left: -6px;
              left: 0%;
              position: absolute;
              top: 4px;
            }
            .progress-bar-time {
              font-size: 12px;
              min-width: 50px;
              text-align: center;
            }
          `}
        </style>
      </div>
    );
  }
}
