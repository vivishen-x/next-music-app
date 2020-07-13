import Head from "next/head";
import TopFixBar from "./TopFixBar";
import NowPlayingBar from "./NowPlayingBar";
import LeftNavMenu from "./LeftNavMenu";

type Props = {
  children: React.ReactNode;
  meta: {
    title?: string;
  };
};

export const siteTitle = "云音乐";

export default function Layout({ children, meta }: Props) {
  const pageTitle = meta.title ? meta.title : siteTitle;
  return (
    <div style={{ height: "100%" }}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="Online Music Application Built with Next.js"
        />
        <meta name="og:title" content={pageTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>
        <TopFixBar />
        <div className="layout-body">
          <LeftNavMenu id={1} />
          <div className="main-view">{children}</div>
        </div>
        <NowPlayingBar musicIds={[1460626792]} />
      </main>
      <style jsx>{`
        .layout-body {
          height: calc(100vh - 70px - 90px);
          display: flex;
        }
        .main-view {
          width: 100%;
          height: 100%;
          padding: 20px 30px;
        }
      `}</style>
    </div>
  );
}
