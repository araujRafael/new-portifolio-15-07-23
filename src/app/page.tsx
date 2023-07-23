import { DataAirtableMyStack } from "@/@types/airtable";
import { getAirTableData } from "@/api/handleApi";
import { Container } from "@/components/Atom/Container";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Profile | Rafael Diniz;',
  description: 'Full stack developer in Javascript and Typescript. Over 3 years of developer'
}

export default async function Home() {
  // Data
  const records = await getAirTableData<DataAirtableMyStack>('my stack')
  // hook

  return (
    <div className="h-full w-full">
      <Container >
        <div className="flex flex-col md:flex-row gap-5 items-center justify-center">
          <Image
            src={`https://github.com/araujrafael.png`}
            alt='Picture of me'
            width={100}
            height={100}
            className="rounded-full"
          />
          <div>
            <h1 className="font-extrabold text-[2rem] sm:text-4xl">
              {"Hello, I'am Rafael Diniz;"}
            </h1>
            <h1 className="text-primary-900 text-[1em] sm:text-2xl">
              FullStack
              {' '}
              <span className="!text-secondary-900">
                Developer
              </span>
              <span className="!text-white">
                {';'}
              </span>
            </h1>
          </div>
        </div>
        <div className={`gap-5 flex flex-col justify-center items-center my-10`}>
          <h1 className="text-2xl">My Stack</h1>
          <div className="flex  justify-center items-center">
            <pre className="max-w-xl">
              {/* {JSON.stringify(json, null, 2)} */}
            </pre>
            <ul className="grid gap-2 grid-cols-3 sm:grid-cols-4 text-center">
              {
                records?.map((x, i) => (
                  <li key={i.toString()} className="my-4 flex flex-col items-center">
                    <Image
                      key={i.toString()}
                      src={x.fields.image[0].thumbnails.small.url}
                      alt={x.fields.title}
                      width={35}
                      height={35}
                      className="rounded-md"
                    />
                    <h1 className="text-white">
                      {x.fields.title}
                    </h1>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}
