import Head from "next/head";

type Props = {
  children: React.ReactNode;
  meta: {
    title?: string;
  };
};

const siteTitle = "Next Music App";

export function Layout({ children, meta }: Props) {
  const title = meta.title ? meta.title : siteTitle;
  return (
    <div style={{ height: "100%" }}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
        <meta
          name="description"
          content="Online Music Application Built with Next.js"
        />
        <meta name="og:title" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>{children}</main>
    </div>
  );
}
