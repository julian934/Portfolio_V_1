import createImageUrlBuilder from '@sanity/image-url'



const imageBuilder = createImageUrlBuilder({
  baseUrl:'http://localhost:3000',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || '',
})

export const urlForImage = (source) => {
  return imageBuilder?.image(source).auto('format').fit('max')
}
