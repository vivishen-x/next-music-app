import AudioPlayer from "./AudioPlayer";

export default function NowPlayingBar() {
  const testSrc =
    "http://m7.music.126.net/20200707222122/841819df5f0358067cefd698e8300d4a/ymusic/0fd6/4f65/43ed/a8772889f38dfcb91c04da915b301617.mp3";
  return (
    <div className="bottom-fix">
      <div className="now-playing-bar">
        <AudioPlayer src={testSrc} />
      </div>
      <style jsx>
        {`
          .bottom-fix {
            position: sticky;
            height: 0;
            bottom: 0;
            width: 100%;
            /* padding-top: 90px; */
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
