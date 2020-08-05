import { GetServerSideProps } from "next";
import {
  fetchPlaylistDetailInfoById,
  fetchSongDetailInfoByIds,
  fetchPlaylistCommentById
} from "../../src/musicApi";
import {
  PlaylistDetailType,
  SongDetailInfoType,
  PlaylistCommentType
} from "../../src/types/MusicInformationTypes";
import Layout from "../../components/Layout";
import SongResultItem from "../../components/SongResultItem";
import CommentShow from "../../components/Comment";

export default function Playlist({
  playlistDetail,
  songDetails,
  playlistComment
}: {
  playlistDetail: PlaylistDetailType;
  songDetails: SongDetailInfoType[];
  playlistComment: PlaylistCommentType;
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
      <div className="playlist-comments-container">
        <h2>评论区 ({playlistComment.comments.length})</h2>
        <div className="comments-container">
          {playlistComment.comments.map(comment => (
            <CommentShow key={comment.commentId} comment={comment} />
          ))}
        </div>
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
          .comments-container {
            margin: 10px 0 50px;
          }
        `}
      </style>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { id } = context.query as { id: string };
  const [playlistDetail, playlistComment] = await Promise.all([
    fetchPlaylistDetailInfoById(id),
    fetchPlaylistCommentById(id)
  ]);

  const trackIds = playlistDetail.playlist.trackIds.map(trackId => trackId.id);
  const songDetailDataJson = await fetchSongDetailInfoByIds(trackIds);
  return {
    props: {
      playlistDetail,
      songDetails: songDetailDataJson.songs,
      playlistComment
    }
  };
};
