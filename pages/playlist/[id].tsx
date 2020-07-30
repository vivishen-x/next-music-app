import { GetServerSideProps } from "next";
import { fetchPlaylistDetailInfoById } from "../../src/musicApi";
import { PlaylistDetailType } from "../../src/types/MusicInformationTypes";
import Layout from "../../components/Layout";

type Props = {
  playlistDetail: PlaylistDetailType;
};

export default function Playlist({
  playlistDetail
}: {
  playlistDetail: PlaylistDetailType;
}) {
  const { playlist } = playlistDetail;
  return (
    <Layout meta={{}}>
      <div>{playlist.name}</div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { id } = context.query as { id: string };
  const playlistDetail = await fetchPlaylistDetailInfoById(id);
  return {
    props: {
      playlistDetail
    }
  };
};
