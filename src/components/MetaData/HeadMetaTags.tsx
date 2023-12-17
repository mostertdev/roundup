import { type FC } from "react";

const HeadMetaTags: FC = () => {
  return (
    <>
      <meta name="application-name" content="roundUP" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="Search & Collect UGC from Twitter, Facebook & Instagram. Reshare, Create Live Feeds or Embed on your Website."
      />
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />
    </>
  );
};

export default HeadMetaTags;
