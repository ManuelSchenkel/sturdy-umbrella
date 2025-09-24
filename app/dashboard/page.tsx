import { fetchManagementGroups } from '../lib/data';

export default async function Dashboard() {

    const data = await fetchManagementGroups();
    const timeOnServer = new Date().toLocaleTimeString('en-US');

    return(
        <div>
            <div>Sturdy Umbrella Dashboard</div>
            {data?.map(group => (
                <div key={group.id}>
                    {group.name}
                </div>
            ))}
            <div>Server Time: {timeOnServer}</div>
        </div>
    )
}