import { SongDetailInfoType } from "../src/types/MusicInformationTypes";

export default function SongsShow({ songs }: { songs: SongDetailInfoType[] }) {
  return (
    <div className="container">
      {songs.map(song => {
        const artistName = song.song.artists
          .map(artist => artist.name)
          .join("&");
        return (
          <div className="song-container" key={song.id}>
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
