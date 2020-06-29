import { siteTitle } from "./Layout";

export default function TopFixBar() {
  return (
    <div className="top-fix">
      <h1>{siteTitle}</h1>
      <style jsx>
        {`
          .top-fix {
            background: #333333;
            height: 70px;
            width: 100%;
            position: fixed;
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
