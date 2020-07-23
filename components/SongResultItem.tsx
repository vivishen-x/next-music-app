import * as React from "react";
import { SongInfoType } from "../src/types/MusicInformationTypes";

function SongResultItem({ song }: { song: SongInfoType }) {
  const artistNames = song.artists.map(artist => artist.name).join(" & ");

  return (
    <div className="song-wrapper">
      <div className="song-info">
        <div className="song-title">{song.name}</div>
        <div className="song-artist">{`${artistNames} - ${song.album.name}`}</div>
      </div>
      <div className="button">
        <img alt="play" src="../icons/play_circle_red.svg" />
      </div>
      <style jsx>
        {`
          .song-wrapper {
            cursor: pointer;
            padding: 12px 10px;
            border-top: solid 1px #d43c337a;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .song-wrapper:hover {
            background: #f0f0f0;
          }
          .song-title {
            font-weight: 500;
          }
          .song-artist {
            font-size: 12px;
            color: #333333;
          }
          .button {
            display: none;
          }
          .song-wrapper:hover .button {
            display: block;
          }
        `}
      </style>
    </div>
  );
}

export default SongResultItem;
