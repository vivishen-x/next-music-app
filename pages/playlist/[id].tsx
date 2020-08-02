import { GetServerSideProps } from "next";
import {
  fetchPlaylistDetailInfoById,
  fetchSongDetailInfoByIds
} from "../../src/musicApi";
import {
  PlaylistDetailType,
  SongDetailInfoType
} from "../../src/types/MusicInformationTypes";
import Layout from "../../components/Layout";
import SongResultItem from "../../components/SongResultItem";

export default function Playlist({
  playlistDetail,
  songDetails
}: {
  playlistDetail: PlaylistDetailType;
  songDetails: SongDetailInfoType[];
}) {
  const { playlist } = playlistDetail;
  return (
    <Layout meta={{}}>
      <div className="playlist-header">
        <div className="img-container">
          <img src={playlist.coverImgUrl} alt={playlist.name} />
        </div>
        <div className="playlist-intro">
          <h2>{playlist.name}</h2>
          <p>{playlist.description}</p>
        </div>
      </div>
      <p>共{playlist.trackCount}首歌曲</p>
      <div className="playlist-tracks">
        {songDetails.map((songDetail, index) => (
          <SongResultItem
            key={songDetail.id}
            index={index + 1}
            songName={songDetail.name}
            artists={songDetail.ar}
            album={songDetail.al}
          />
        ))}
      </div>
      <style jsx>
        {`
          .playlist-header {
            margin-bottom: 50px;
            display: flex;
          }
          .img-container {
            flex: 0 0 200px;
            width: 200px;
            height: 200px;
            margin-right: 25px;
          }
          .img-container img {
            border-radius: 5px;
          }
          .playlist-intro p {
            color: #999999;
          }
          .playlist-tracks {
            margin: 10px 0 50px;
          }
        `}
      </style>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { id } = context.query as { id: string };
  const playlistDetail = await fetchPlaylistDetailInfoById(id);

  const trackIds = playlistDetail.playlist.trackIds.map(trackId => trackId.id);
  const songDetailDataJson = await fetchSongDetailInfoByIds(trackIds);
  return {
    props: {
      playlistDetail,
      songDetails: songDetailDataJson.songs
    }
  };
};
