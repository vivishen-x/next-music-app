import * as React from "react";

type Props = {
  src: string;
};

export default class AudioPlayer extends React.Component<Props> {
  render() {
    const { src } = this.props;
    return (
      <div className="container">
        <div className="player-container">
          <button className="button-wrapper">
            <img alt="previous" src="./icons/skip_previous.svg" />
          </button>
          <button className="button-wrapper button-wrapper--main">
            <img alt="play" src="./icons/play_circle.svg" />
          </button>
          <button className="button-wrapper">
            <img alt="next" src="./icons/skip_next.svg" />
          </button>
        </div>
        <div className="progress-container">
          <div className="progress-bar-time">00:00</div>
          <div className="progress-bar" />
          <div className="progress-bar-time">00:00</div>
        </div>
        {/* <audio controls src={src}></audio> */}
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
            .progress-bar {
              width: 100%;
              height: 4px;
              margin: 8px 0;
              border-radius: 2px;
              background: #999999;
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
