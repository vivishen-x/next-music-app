import { siteTitle } from "./Layout";

export default function TopFixBar() {
  return (
    <div className="top-fix">
      <div className="top-fix-bar">
        <h1>{siteTitle}</h1>
      </div>
      <style jsx>
        {`
          .top-fix {
            height: 0;
            padding-bottom: 70px;
            width: 100%;
          }
          .top-fix-bar {
            position: fixed;
            background: #d43c33;
            top: 0;
            left: 0;
            width: 100%;
            height: 70px;
            padding: 0 20px;
            display: flex;
            align-items: center;
          }
          .top-fix h1 {
            color: #ffffff;
            font-family: "XiaoWei";
          }
        `}
      </style>
    </div>
  );
}
