import Layout from "../components/Layout";
import TopFixBar from "../components/TopFixBar";
import NowPlayingBar from "../components/NowPlayingBar";

export default function Home() {
  return (
    <Layout meta={{}}>
      <div className="container">
        <div style={{ height: "300px" }}>Test Content</div>
        <div style={{ height: "300px" }}>Test Content</div>
        <div style={{ height: "300px" }}>Test Content</div>
      </div>
      <style jsx>{`
        .container {
          height: 100%;
        }
      `}</style>
    </Layout>
  );
}
