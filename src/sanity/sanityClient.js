import { createClient } from '@sanity/client';


const client = createClient({
  projectId: 'your_project_id', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset name
  useCdn: false,
  token: 'your_sanity_token', // Replace with your Sanity API token
});


export default client;
