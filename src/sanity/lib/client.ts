import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'your-project-id', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset
  apiVersion: '2023-01-01', // Use a version that works for your project
  useCdn: process.env.NODE_ENV === 'production',
})

