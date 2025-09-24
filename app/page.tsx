import { unstable_noStore as noStore}  from 'next/cache';
import { fetchManagementGroups } from './lib/data';

export default async function Home() {
  noStore();

  const data = await fetchManagementGroups();
  
  const timeOnServer = new Date().toLocaleTimeString('en-US');
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        Hybrid Rendering - Server Time {timeOnServer}
      </div>
      <div>
        DB: {process.env.DB_DATABASE}
      </div>
      <div>
      </div>
    </main>
  );
}
