import { unstable_noStore as noStore}  from 'next/cache';
//import { fetchManagementGroups } from './lib/data';

export default async function Home() {
  noStore();

  //const managementGroups = await fetchManagementGroups();
  //console.log(managementGroups);

  console.log("hellooo");
  console.log(process.env.DB_HOST);
  console.log(process.env.DB_PORT);
  console.log(process.env.DB_DATABASE);
  console.log(process.env.DB_USER);
  console.log(process.env.DB_PASSWORD);

  const timeOnServer = new Date().toLocaleTimeString('en-US');
  console.log("hellooo2");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        Hybrid Rendering - Server Time {timeOnServer}
      </div>
    </main>
  );
}
