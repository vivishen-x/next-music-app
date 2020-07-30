import { PlaylistType } from "../src/types/MusicInformationTypes";
import { Router } from "next/router";

export default function PlaylistsShow({
  playlists
}: {
  playlists: PlaylistType[];
}) {
  return (
    <div className="container">
      {playlists.map(playlist => {
        const href = `/playlist/${playlist.id}`;
        return (
          <a
            className="playlist-container"
            key={playlist.id}
            role="button"
            href={href}
          >
            <div className="img-container">
              <img src={playlist.picUrl} alt={playlist.name} />
            </div>
            <div className="title-container">{playlist.name}</div>
          </a>
        );
      })}
      <style jsx>{`
        .container {
          display: flex;
          flex-wrap: wrap;
          justify-content: start;
        }
        .playlist-container {
          flex: 0 0 16%;
          margin: 8px 0;
          padding-right: 16px;
          cursor: pointer;
          display: block;
        }
        .playlist-container:hover .img-container img {
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
      `}</style>
    </div>
  );
}
