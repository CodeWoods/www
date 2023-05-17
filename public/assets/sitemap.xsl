<?xml version="1.0" encoding="UTF-8"?>
<!--
@credit: Copyright (c) 2008, Alexander Makarov ( https://github.com/samdark/sitemap )

部分修改參考 ghost.org
- https://ghost.org/resources/sitemap.xml
- https://ghost.org/resources/sitemap.xsl
-->
<xsl:stylesheet version="4.0"
                xmlns:html="http://www.w3.org/TR/html40"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="4.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
  <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
    <head>
      <title>XML Sitemap</title>
      <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="/assets/sitemap.css" media="screen" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" sizes="any" />
    </head>
    <body>
      <div id="content">
        <!-- Intro -->
        <h1>XML Sitemap</h1>
        <p class="desc">
          This is an XML Sitemap, meant for consumption by search engines.<br/>
          You can find more information about XML sitemaps on <a href="https://sitemaps.org" target="_blank" rel="noopener noreferrer nofollow">sitemaps.org</a>.
        </p>
        <hr/>
        <!-- 表格1：Sitemaps整理( Sitemap, Last Modified ) -->
        <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &gt; 0">
        <p class="desc">
          This XML Sitemap Index file contains <xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/> sitemaps.
        </p>
        <table id="sitemap" cellpadding="3">
          <thead>
            <tr>
              <th width="75%">Sitemap</th>
              <th width="25%">Last Modified</th>
            </tr>
          </thead>
          <!-- 表格( URL, Images, Last Modified ) -->
          <tbody>
            <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
              <xsl:variable name="sitemapURL">
                <xsl:value-of select="sitemap:loc"/>
              </xsl:variable>
              <tr>
                <td>
                  <a href="{$sitemapURL}"><xsl:value-of select="sitemap:loc"/></a>
                </td>
                <td>
                  <!-- ghost.org ( https://ghost.org/resources/sitemap.xsl ):
                  <xsl:value-of select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)))"/>
                  -->
                  <xsl:value-of select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat('', substring(sitemap:lastmod,20,6)))"/>
                </td>
              </tr>
            </xsl:for-each>
          </tbody>
        </table>
        </xsl:if>
        <!-- END 表格1：Sitemaps整理( Sitemap, Last Modified ) -->
        <!-- 表格2：Urls整理( URL, Images and Last Modified ) -->
        <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &lt; 1">
        <p class="desc">
          This XML Sitemap contains <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs.
        </p>
        <table id="sitemap" cellpadding="3">
          <thead>
            <tr>
              <th width="60%">URL (<xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> total)</th>
              <th width="15%">Images</th>
              <th title="Last Modification Time" width="25%">Last Modified</th>
            </tr>
          </thead>
          <tbody>
            <xsl:variable name="lower" select="'abcdefghijklmnopqrstuvwxyz'"/>
            <xsl:variable name="upper" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'"/>
            <xsl:for-each select="sitemap:urlset/sitemap:url">
              <tr>
                <!-- 表格2 // URL 欄位 -->
                <td>
                  <xsl:variable name="itemURL">
                    <xsl:value-of select="sitemap:loc"/>
                  </xsl:variable>
                  <a href="{$itemURL}">
                    <xsl:value-of select="sitemap:loc"/>
                  </a>
                </td>
                <!-- 表格2 // Images 欄位 -->
                <td>
                  <xsl:value-of select="count(image:image)"/>
                </td>
                <!-- 表格2 // Last Modified 欄位 -->
                <td>
                  <!-- ghost.org ( https://ghost.org/resources/sitemap.xsl ):
                  <xsl:value-of select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)))"/>
                  -->
                  <xsl:value-of select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat('', substring(sitemap:lastmod,20,6)))"/>
                </td>
              </tr>
            </xsl:for-each>
          </tbody>
        </table>
        <p class="desc"><a href="/" class="back-link">&#8592; Back to home</a></p>
        </xsl:if>
        <!-- END 表格2：Urls整理( URL, Images and Last Modified ) -->
      </div>
    </body>
  </html>
  </xsl:template>
</xsl:stylesheet>
