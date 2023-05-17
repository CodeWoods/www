// @credit: https://github.com/TheOtterlord/astro-search
export async function get() {
  return {
    body: 'export const search = () => {return { results }}'
  }
}
