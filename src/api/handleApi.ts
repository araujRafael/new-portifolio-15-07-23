
export interface RecordAirtable<T> {
    records: T[]
}
type TableName =  'my stack' | 'projects'
export async function getAirTableData<T=unknown>
  (tableName:TableName):
    Promise<T[]| undefined | null> 
{
    const baseId = 'appvEbOiUVWDBU3tx'
    const tableIdOrName = tableName
    const token = process.env.AIRTABLE_SECRET_API_TOKEN
    try {
        const data = await fetch(
          `https://api.airtable.com/v0/${baseId}/${tableIdOrName}`
          , {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            cache: 'no-cache',
            next: {
              revalidate: 1
            }
          }); // tblLZ7nOF95nDsIEr
        if(!data.ok) console.log(data.text())
        const json: RecordAirtable<T> = await data.json()
        return  json.records
    } catch (error) {
        console.log(error);
    }
}