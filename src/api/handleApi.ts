'use server'
export interface RecordAirtable<T> {
    records: T[]
}
type TableName =  'my stack' | 'projects-demo'|'projects-frontend'
export async function getAirTableData<T=unknown>
  (tableName:TableName):
    Promise<T[]| undefined | null> 
{
    const baseId = process.env.AIRTABLE_BASE_ID!
    const tableIdOrName = tableName
    const token = process.env.AIRTABLE_SECRET_API_TOKEN!
    try {
        const data = await fetch(
          `https://api.airtable.com/v0/${baseId}/${tableIdOrName}`
          , {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            cache: 'no-cache',
          }); 
        if(!data.ok) console.log(data.text())
        const json: RecordAirtable<T> = await data.json()
        return  json.records
    } catch (error) {
        console.log(error);
    }
}