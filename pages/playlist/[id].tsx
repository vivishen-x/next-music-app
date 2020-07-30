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
        <h2>{playlist.name}</h2>
      </div>
      {songDetails.map((songDetail, index) => (
        <SongResultItem
          key={songDetail.id}
          index={index + 1}
          songName={songDetail.name}
          artists={songDetail.ar}
          album={songDetail.al}
        />
      ))}
      <style jsx>
        {`
          .playlist-header {
            margin-bottom: 20px;
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
