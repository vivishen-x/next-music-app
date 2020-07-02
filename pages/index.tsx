import * as React from "react";
import { Layout } from "../components/Layout";
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
    const { hotSearchList: songSearchResult } = this.state;
    if (!songSearchResult)
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
          <h1>Netease Cloud Music</h1>
          <ul>
            {songSearchResult.result.hots.map((hotSearch, index) => (
              <li key={index}>{hotSearch.first}</li>
            ))}
          </ul>
        </div>
      </Layout>
    );
  }
}
