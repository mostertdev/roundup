/* eslint-disable @next/next/no-page-custom-font */

import { type FC } from "react";

const HeadLinkTags: FC = () => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" sizes="192x192" href="/assets/icon.png" />
      <link rel="apple-touch-icon" href="/assets/icon.png" />
      <link rel="mask-icon" href="/assets/icon.png" color="#FFFFFF" />
    </>
  );
};

export default HeadLinkTags;
