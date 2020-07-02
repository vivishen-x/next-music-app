import * as React from "react";
import Layout from "../components/Layout";
import { HotSearchListJson, fetchSearchHotList } from "../src/musicApi";

type Props = {};

type State = {
  hotSearchList: HotSearchListJson;
};

export default class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hotSearchList: { result: { hots: [] } }
    };
  }

  async componentDidMount() {
    const hotSearchList = await fetchSearchHotList();
    this.setState({
      hotSearchList
    });
  }

  render() {
    const { hotSearchList } = this.state;

    if (!hotSearchList)
      return (
        <Layout meta={{}}>
          <div className="container">
            <p>Please Run Local Netease Cloud Music Api.</p>
          </div>
        </Layout>
      );
    return (
      <Layout meta={{}}>
        <div className="container">
          <h1 className="h1">热门搜索</h1>
          <div className="top-recommend">Test Content</div>
          <h1 className="h1">推荐歌单</h1>
          <div className="top-recommend">Test Content</div>
          <h1 className="h1">最新音乐</h1>
          <div className="top-recommend">Test Content</div>
        </div>
        <style jsx>{`
          .container {
            height: auto;
            padding-bottom: 100px;
          }
          .h1 {
            font-size: 18px;
            padding-left: 8px;
            line-height: 1;
            border-left: solid 3px #d43c33;
            margin: 10px 0;
          }
          .top-recommend {
            height: 300px;
          }
        `}</style>
      </Layout>
    );
  }
}
