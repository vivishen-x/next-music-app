export default function NowPlayingBar() {
  return (
    <div className="bottom-fix">
      <div className="now-playing-bar">
        <div>player controllers</div>
      </div>
      <style jsx>
        {`
          .bottom-fix {
            position: sticky;
            height: 0;
            bottom: 0;
            width: 100%;
            padding-top: 90px;
          }
          .now-playing-bar {
            height: 90px;
            width: 100%;
            position: fixed;
            bottom: 0;
            padding: 0 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ffffff;
            background: #333333;
          }
        `}
      </style>
    </div>
  );
}
