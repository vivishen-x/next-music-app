import { Comment } from "../src/types/MusicInformationTypes";

export default function CommentShow({ comment }: { comment: Comment }) {
  const { user } = comment;
  const date = new Date(comment.time);
  return (
    <div className="comment-wrapper">
      <div className="user-wrapper">
        <img alt={user.nickname} src={user.avatarUrl} />
      </div>
      <div className="comment-content-wrapper">
        <p className="name">{user.nickname}</p>
        <p className="date">{date.toLocaleDateString()}</p>
        <p className="content">{comment.content}</p>
      </div>
      <style jsx>{`
        .comment-wrapper {
          display: flex;
          padding: 12px 10px;
          border-top: solid 1px #d43c337a;
        }
        .comment-wrapper:hover {
          background: #f0f0f0;
        }
        .user-wrapper {
          width: 40px;
          height: 40px;
          margin-right: 10px;
          flex: 0 0 auto;
        }
        .user-wrapper img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
        .comment-wrapper p {
          margin: 0;
          font-size: 12px;
        }
        .comment-wrapper .name {
          font-weight: 500;
        }
        .comment-wrapper .date {
          color: #333333;
          font-size: 11px;
        }
      `}</style>
    </div>
  );
}
