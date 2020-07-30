import * as React from "react";
import {
  ArtistInfoType,
  AlbumInfoType
} from "../src/types/MusicInformationTypes";

function SongResultItem({
  index,
  songName,
  artists,
  album
}: {
  index?: number;
  songName: string;
  artists: ArtistInfoType[];
  album: AlbumInfoType;
}) {
  const artistNames = artists.map(artist => artist.name).join(" & ");

  return (
    <div className="song-wrapper">
      <div className="song-info-wrapper">
        {index ? <div className="song-index">{index}</div> : null}
        <div className="song-info">
          <div className="song-title">{songName}</div>
          <div className="song-artist">{`${artistNames} - ${album.name}`}</div>
        </div>
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
          .song-info-wrapper {
            display: flex;
            align-items: center;
          }
          .song-info-wrapper .song-index {
            min-width: 30px;
            text-align: center;
            padding-right: 10px;
            color: #666666;
          }
        `}
      </style>
    </div>
  );
}

export default SongResultItem;
