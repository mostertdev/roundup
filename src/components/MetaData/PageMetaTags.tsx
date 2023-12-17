import { type FC } from "react";
import Head from "next/head";

interface PageMetaTagsProps {
  title: string;
}

const PageMetaTags: FC<PageMetaTagsProps> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default PageMetaTags;
