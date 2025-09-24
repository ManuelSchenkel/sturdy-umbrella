import { fetchManagementGroups } from '../lib/data';

export default async function Dashboard() {

    const data = await fetchManagementGroups();
    const timeOnServer = new Date().toLocaleTimeString('en-US');

    return(
        <div>
            <div>Sturdy Umbrella Dashboard</div>
            <div className="table-auto">
                {data?.map(group => (
                    <div className="table-row" key={group.id}>
                        <div className="table-cell px-4 py-2 border">{group.id}</div>
                        <div className="table-cell px-4 py-2 border">{group.name}</div>
                        <div className="table-cell px-4 py-2 border">{group.guid}</div>
                    </div>
                ))}
            </div>
            <div>Server Time: {timeOnServer}</div>
        </div>
    )
}