import Layout from "../components/Layout";
import TopFixBar from "../components/TopFixBar";
import NowPlayingBar from "../components/NowPlayingBar";

export default function Home() {
  return (
    <Layout meta={{}}>
      <div className="container">
        <TopFixBar />
        <NowPlayingBar />
      </div>
    </Layout>
  );
}
