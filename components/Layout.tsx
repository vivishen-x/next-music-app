import Head from "next/head";

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
      <main>{children}</main>
    </div>
  );
}
