# <img src="https://api.iconify.design/twemoji:accordion.svg" width="40"  height="40"/> @codewoods/www

[![GitHub workflow: CodeQL][workflow-codeql]][workflow-codeql-url]
[![framework][framework-badge]][astro-url]
[![GitHub commit activity][activity-badge]][activity]
[![GitHub repository size][size-badge]][repo-url]

[Personal weblog][my-site] built with [![Astro](https://api.iconify.design/logos:astro.svg)][astro-url]. All site content is under src/content/pages in Markdown format.

## Prerequisites

- ![Git](https://api.iconify.design/vscode-icons:file-type-git.svg) **[Git](https://git-scm.com/)**
- ![Node.js](https://api.iconify.design/vscode-icons:file-type-node.svg)[Node.js](https://nodejs.org)\*\* - v16.12.0 or higher

<p align="right">(<a href="#top">back to top</a>)</p>

## Installation

To clone it and get started:

```sh
git clone --depth=1 git@github.com:codewoods/www.git
cd www
npm install
npm run astro telemetry disable
npm run dev
```

> **Note** > [How to disable telemetry in Astro project?](https://ansidev.xyz/posts/2022-12-31-how-to-disable-astro-telemetry)

Open up [localhost:9000](http://localhost:9000) and start clicking around.

Consult [astro.build][astro-url] for help getting started.

<p align="right">(<a href="#top">back to top</a>)</p>

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:9000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

<p align="right">(<a href="#top">back to top</a>)</p>

## Technolgies used

- [Astro][astro-url] framework
- Package management: ![npm](https://api.iconify.design/logos:npm-icon.svg) npm
- Style with Vanilla CSS
- Write posts with Markdown/MDX
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)
- Linting, typechecking and formatting on by default using [`husky`](https://github.com/typicode/husky) for commit hooks

<p align="right">(<a href="#top">back to top</a>)</p>

## Frontmatter

```yaml
---
title: Docker 공부 (3) - 도커 이미지 # required
isDraft: true
pubDateTime: 2022-10-30T00:00:00.000Z # required
updatedDate: 2023-04-30T17:45:08.552Z
---
```

<p align="right">(<a href="#top">back to top</a>)</p>

## License

- code: MIT License.
- content(posts, pages, markdown content, etc.): [Creative Commons Attribution-NonCommercial 4.0 International Public License](https://spdx.org/licenses/CC-BY-NC-4.0.html).
- Photos are sourced from [Unsplash](https://unsplash.com/) under the [Unsplash license](https://unsplash.com/license), unless stated otherwise.
- This site is typeset in [Alegreya Sans](https://github.com/fontsource/fontsource/tree/main/fonts/google/alegreya-sans) by [Juan Pablo del Peral](https://github.com/huertatipografica/Alegreya-Sans), [Londrina Shadow](https://github.com/fontsource/fontsource/tree/main/fonts/google/londrina-shadow) by [Marcelo Magalhães](https://github.com/marcelommp/Londrina-Typeface) and [LXGW WenKai TC(霞鶩文楷 TC)](https://github.com/lxgw/LxgwWenkaiTC) by lxgw. `Alegreya Sans`, `Londrina Shadow` and `LXGW WenKai TC(霞鶩文楷 TC)` are licensed under the [SIL Open Font License 1.1](https://scripts.sil.org/OFL)

<!-- links: -->

[my-site]: https://neue.red
[repo-url]: https://github.com/CodeWoods/www
[astro-url]: https://astro.build/
[workflow-codeql]: https://img.shields.io/github/actions/workflow/status/codewoods/www/codeql.yml?branch=main&style=for-the-badge&logo=github&labelColor=111b27
[workflow-codeql-url]: https://github.com/codewoods/www/actions/workflows/codeql.yml
[framework-badge]: https://img.shields.io/badge/framework-Astro-c0d6e4.svg?style=for-the-badge&logo=astro&labelColor=111b27&logoColor=white
[activity-badge]: https://img.shields.io/github/commit-activity/m/codewoods/www.svg?style=for-the-badge&logo=git&labelColor=111b27&color=%2300a8ff
[activity]: https://github.com/codewoods/www/graphs/commit-activity
[size-badge]: https://img.shields.io/github/repo-size/codewoods/www.svg?style=for-the-badge&logo=files&labelColor=111b27&logoColor=white&color=ff69b4
