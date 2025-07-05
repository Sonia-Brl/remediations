import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
     docs: defineCollection({
      // Load every file inside the `content` directory
      source: 'modules/**',
      // Specify the type of content in this collection
      type: 'page'
    })
  }
})