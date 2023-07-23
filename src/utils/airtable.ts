import Airtable from "airtable";

export const airtableBase = new Airtable({
    apiKey:process.env.AIRTABLE_SECRET_API_TOKEN,
    endpointUrl:`https://api.airtable.com`
}).base('appvEbOiUVWDBU3tx')

