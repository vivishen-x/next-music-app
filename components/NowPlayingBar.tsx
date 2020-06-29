export default function NowPlayingBar() {
  return (
    <div className="now-playing-bar">
      <div>player controllers</div>
      <style jsx>
        {`
          .now-playing-bar {
            height: 90px;
            width: 100%;
            position: fixed;
            bottom: 0;
            background: #333333;
            padding: 0 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ffffff;
          }
        `}
      </style>
    </div>
  );
}
