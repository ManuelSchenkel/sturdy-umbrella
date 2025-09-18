import { ManagementGroup } from './definitions'
import sql from './db'

export async function fetchManagementGroups() {
    try {
      // Artificially delay a response for demo purposes.
      // Don't do this in production :)
  
      // console.log('Fetching revenue data...');
      // await new Promise((resolve) => setTimeout(resolve, 3000));
  
      const data = await sql`SELECT * FROM management_groups`;
  
      // console.log('Data fetch completed after 3 seconds.');
  
      return data;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch revenue data.');
    }
  }