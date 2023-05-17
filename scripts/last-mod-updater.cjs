// @credit: https://github.com/FatehAK/fatehak.dev/blob/main/scripts/last-mod-updater.js
const fs = require('fs').promises
const matter = require('gray-matter')

;(async () => {
  const [, , ...mdFilePaths] = process.argv

  const modifiedDate = new Date().toISOString()

  const handles = mdFilePaths.map(async (path) => {
    const file = matter.read(path)
    const { data: currentFrontmatter } = file

    if (!currentFrontmatter.isDraft) {
      // eslint-disable-next-line no-unused-vars
      const { pubDateTime, updatedDate: _, ...rest } = currentFrontmatter
      const updatedFrontmatter = {
        pubDateTime,
        updatedDate: modifiedDate,
        ...rest
      }
      file.data = updatedFrontmatter
      const updatedFileContent = matter.stringify(file)
      await fs.writeFile(path, updatedFileContent)
    }
  })
  await Promise.all(handles)
})()
console.info('✅ Done!')
