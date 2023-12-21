import { Html as HTML, Head, Main, NextScript } from "next/document";

import HeadMetaTags from "~/components/MetaData/HeadMetaTags";
import HeadLinkTags from "~/components/MetaData/HeadLinkTags";

export default function Document() {
  return (
    <HTML lang="en">
      <Head>
        <HeadMetaTags />
        <HeadLinkTags />
      </Head>
      <body className="bg-slate-100 font-montserrat">
        <Main />
        <NextScript />
      </body>
    </HTML>
  );
}
