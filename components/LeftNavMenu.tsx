import classNames from "classnames";

const navItems = [
  { id: 1, name: "首页" },
  { id: 2, name: "新碟" },
  { id: 3, name: "我的歌单" }
];

export default function LeftNavMenu({ id }: { id: number }) {
  return (
    <div className="nav-container">
      <div className="nav-wrapper">
        {navItems.map(navItem => {
          const isActive = id === navItem.id;
          let itemClass = classNames("nav-item", {
            "nav-item--active": isActive
          });
          return (
            <div className={itemClass} key={navItem.id}>
              {navItem.name}
            </div>
          );
        })}
      </div>
      <style jsx>
        {`
          .nav-container {
            position: relative;
            width: 0;
            padding-right: 200px;
            height: 100%;
          }
          .nav-wrapper {
            position: fixed;
            width: 200px;
            height: 100%;
            padding: 20px;
            background: #ffffff;
            font-size: 16px;
            font-weight: bold;
          }
          .nav-item {
            color: #333333;
            padding-left: 10px;
            margin: 20px 0;
          }
          .nav-item--active {
            color: #d43c33;
            border-left: solid 3px #d43c33;
          }
        `}
      </style>
    </div>
  );
}
