import { siteTitle } from "./Layout";
import SearchInputBox from "./SearchInputBox";

export default function TopFixBar() {
  return (
    <div className="top-fix">
      <div className="top-fix-bar">
        <h1>{siteTitle}</h1>
        <SearchInputBox />
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
            z-index: 1000;
            top: 0;
            left: 0;
            width: 100%;
            height: 70px;
            padding: 0 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
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
