import * as React from "react";
import Router from "next/router";

type Props = {};

type State = {
  keywords: string;
};

export default class SearchInputBox extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      keywords: ""
    };
    this.onChangeKeywords = this.onChangeKeywords.bind(this);
    this.onSearchText = this.onSearchText.bind(this);
  }

  onChangeKeywords(e: any) {
    this.setState({ keywords: e.target.value });
  }

  onSearchText(e: any) {
    const { keywords } = this.state;
    const keywordsTrimmed = keywords.replace(/(^\s*)|(\s*$)/g, "");
    // Search when keywords are not empty
    if (keywordsTrimmed === "" || e.charCode != 13) return;
    Router.push(`/search/${keywords}`).then(() => {
      window.scrollTo(0, 0);
    });
  }

  render() {
    const { keywords } = this.state;
    return (
      <div className="container">
        <input
          type="search"
          id="keywords"
          className="search"
          placeholder="搜索歌曲"
          value={keywords}
          onChange={this.onChangeKeywords}
          onKeyPress={this.onSearchText}
        />
        <style jsx>
          {`
            .search {
              min-width: 220px;
              padding: 8px 15px;
              outline: 0;
              border: none;
              border-radius: 20px;
              letter-spacing: inherit;
            }
          `}
        </style>
      </div>
    );
  }
}
