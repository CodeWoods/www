// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
export const SITE_TITLE = 'Shining Blues';
export const SITE_DESCRIPTION = "Lin's personal website.";
export const TWITTER_HANDLE = '';
export const MY_NAME = 'H.Y. Lin';
export const LANG = 'zh-Hant-TW';
export const RSS_LANG = 'zh-tw';
export const OG_LOCALE = 'zh_TW';

// setup in astro.config.mjs
export const DOMAIN = 'neue.red';
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
