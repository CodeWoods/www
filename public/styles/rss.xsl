<?xml version="1.0" encoding="utf-8"?>
<!--
@credit:
https://github.com/genmon/aboutfeeds/blob/main/tools/pretty-feed-v3.xsl
-->
<xsl:stylesheet version="3.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:atom="http://www.w3.org/2005/Atom"
                xmlns:dc="http://purl.org/dc/elements/1.1/"
                xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="zh-Hant-TW" dir="ltr">
      <head>
        <title><xsl:value-of select="/rss/channel/title"/> • RSS Feed</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="none" />
        <style>
          *,*::before,*::after{box-sizing: border-box;}::before,::after{text-decoration: inherit; vertical-align: inherit;}html{font-size: 16px; -webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); -webkit-tap-highlight-color: rgba(0, 0, 0, 0);}html:focus-within{scroll-behavior: smooth;}@media (prefers-reduced-motion: reduce){html:focus-within{scroll-behavior: auto;} *, *::before, *::after{animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; scroll-behavior: auto !important; transition-duration: 0.01ms !important;}}p,table,blockquote,address,pre,iframe,form,figure,dl{margin: 0;}body{font-family: ui-sans-serif, system-ui, -apple-system, blinkmacsystemfont, 'Segoe UI Variable Display', 'Segoe UI', 'Helvetica Neue', 'Source Han Sans TW', 'PingFang TC Regular', 'Heiti TC Regular', 'Microsoft JhengHei', '微軟正黑', Helvetica, Arial, sans-serif, 'Twitter Color Emoji', 'Twemoji Mozilla', 'Apple Color Emoji', 'Segoe UI Emoji', emoji; line-height: calc(0.25rem + 1em + 0.25rem); color: #24292e; background-color: #fff; word-wrap: break-word;}::-moz-selection{background: #fcebe4;}::selection{background: #fcebe4;}a{cursor: pointer; color: #0366d6; text-decoration: none;}a:hover{text-decoration: underline;}a:focus{outline: auto;}a:visited{color: #0366d6;}b,strong{font-weight: 600;}small{font-size: 90%;}.bg-white{background-color: #fff !important;}.bg-yellow-light{background-color: #fff5b1 !important;}.text-gray{color: #586069 !important;}.feed-container{width: 980px; margin-left: auto; margin-right: auto;}.feed-container-md{max-width: 768px; margin-left: auto; margin-right: auto;}.feed-container-lg{max-width: 1012px; margin-left: auto; margin-right: auto;}.feed-container-xl{max-width: 1280px; margin-left: auto; margin-right: auto;}.px-3{padding-right: 16px !important; padding-left: 16px !important;}.py-2{padding-top: 8px !important; padding-bottom: 8px !important;}.mt-2{margin-top: 8px !important;}.mt-md-5{margin-top: 32px !important;}.mb-5{margin-bottom: 32px !important;}.ml-n1{margin-left: -4px !important;}.px-1{padding-right: 4px !important; padding-left: 4px !important;}.py-1{padding-top: 4px !important; padding-bottom: 4px !important;}.mb-1{margin-bottom: 4px !important;}.py-3{padding-top: 16px !important; padding-bottom: 16px !important;}.py-5{padding-top: 32px !important; padding-bottom: 32px !important;}.pb-5{padding-bottom: 32px !important;}.mb-0{margin-bottom: 0 !important;}.border-0{border: 0 !important;}.text-content > * :first-child{margin-top: 0 !important;}.text-content > * :last-child{margin-bottom: 0 !important;}.text-content a:not([href]){color: inherit; text-decoration: none;}.text-content h1,.text-content h2,.text-content h3,.text-content h4,.text-content h5,.text-content h6{margin-top: 24px; margin-bottom: 16px; font-weight: 600; line-height: 1.1;}.text-content h1{font-size: 1.8rem;}.text-content h2{font-size: 1.6rem;}.text-content h3{font-size: 1.4rem;}.text-content h4{font-size: 1.2rem;}
        </style>
      </head>
        <body class="bg-white">
        <nav class="feed-container-md px-3 py-2 mt-2 mt-md-5 mb-5 text-content">
          <p class="bg-yellow-light ml-n1 px-1 py-1 mb-1">
            <strong>This is a web feed,</strong> also known as an RSS feed. <strong>Subscribe</strong> by copying the URL from the address bar into your newsreader.
          </p>
          <p class="text-gray">
            Visit <a href="https://aboutfeeds.com">About Feeds</a> to get started with newsreaders and subscribing. It’s free.
          </p>
        </nav>
        <div class="feed-container-md px-3 py-3 text-content">
          <header class="py-5">
            <h1 class="border-0">
              <!-- https://commons.wikimedia.org/wiki/File:Feed-icon.svg -->
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="vertical-align: text-bottom; width: 1.2em; height: 1.2em;" class="pr-1" id="RSSicon" viewBox="0 0 256 256">
                <defs>
                  <linearGradient x1="0.085" y1="0.085" x2="0.915" y2="0.915" id="RSSg">
                    <stop  offset="0.0" stop-color="#E3702D"/><stop  offset="0.1071" stop-color="#EA7D31"/>
                    <stop  offset="0.3503" stop-color="#F69537"/><stop  offset="0.5" stop-color="#FB9E3A"/>
                    <stop  offset="0.7016" stop-color="#EA7C31"/><stop  offset="0.8866" stop-color="#DE642B"/>
                    <stop  offset="1.0" stop-color="#D95B29"/>
                  </linearGradient>
                </defs>
                <rect width="256" height="256" rx="55" ry="55" x="0"  y="0"  fill="#CC5D15"/>
                <rect width="246" height="246" rx="50" ry="50" x="5"  y="5"  fill="#F49C52"/>
                <rect width="236" height="236" rx="47" ry="47" x="10" y="10" fill="url(#RSSg)"/>
                <circle cx="68" cy="189" r="24" fill="#FFF"/>
                <path d="M160 213h-34a82 82 0 0 0 -82 -82v-34a116 116 0 0 1 116 116z" fill="#FFF"/>
                <path d="M184 213A140 140 0 0 0 44 73 V 38a175 175 0 0 1 175 175z" fill="#FFF"/>
              </svg>

              Web Feed Preview
            </h1>
            <h2><xsl:value-of select="/rss/channel/title"/></h2>
            <p><xsl:value-of select="/rss/channel/description"/></p>
            <a class="head_link" target="_blank">
              <xsl:attribute name="href">
                <xsl:value-of select="/rss/channel/link"/>
              </xsl:attribute>
              Visit Website &#x2192;
            </a>
          </header>
          <h2>Recent Items</h2>
          <xsl:for-each select="/rss/channel/item">
            <div class="pb-5">
              <h4 class="mb-0">
                <a target="_blank">
                  <xsl:attribute name="href">
                    <xsl:value-of select="link"/>
                  </xsl:attribute>
                  <xsl:value-of select="title"/>
                </a>
              </h4>
              <small class="text-gray">
                Published: <xsl:value-of select="pubDate" />
              </small>
            </div>
          </xsl:for-each>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
