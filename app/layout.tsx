/* eslint-disable @next/next/no-page-custom-font */
import "./styles/globals.scss";
import "./styles/markdown.scss";
import "./styles/highlight.scss";
import { getBuildConfig } from "./config/build";
import React from "react";

const buildConfig = getBuildConfig();

export const metadata = {
  title: "LOVE100%",
  // description: "Your personal ChatGPT Chat Bot.",
  appleWebApp: {
    title: "LOVE100%",
    statusBarStyle: "default",
  },
  themeColor: "#fafafa",
};

const getAnalyticsTag = () => {
  return {
    __html: `
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?f8bccc5d25a8fa46016e032f53ad8bf1";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();`,
  };
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          async
          defer
          data-website-id="0db60109-70fb-4ca9-be1f-0df3e2b97221"
          src="https://analyse.arunningstar.com/umami.js"
        ></script>

        <script dangerouslySetInnerHTML={getAnalyticsTag()} />

        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta
          name="theme-color"
          content="#151515"
          media="(prefers-color-scheme: dark)"
        />
        <meta name="version" content={buildConfig.commitId} />
        <link rel="manifest" href="/site.webmanifest"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        ></link>
        <script src="/serviceWorkerRegister.js" defer></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
