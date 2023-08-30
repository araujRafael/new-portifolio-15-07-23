import { DataAirtableProjects } from "@/@types/airtable"
import { getAirTableData } from "@/api/handleApi"
import { Container } from "@/components/Atom/Container"
import moment from "moment"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { BiRightArrowAlt } from "react-icons/bi"

export const metadata: Metadata = {
	title: {
		template: 'Projects %s',
		default: 'Projects',
	},
	description: 'Look some projects made by me'
}
export default async function Projects() {
	// Get data
	const records = await getAirTableData<DataAirtableProjects>('projects')

	// Render
	return <div className="min-h-screen h-screen w-full px-4 sm:p-0">
		<Container >
			<ul className={`gap-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4`}>
				{
					records?.reverse().map(({ fields }, i) => {
						return <li key={i.toString()} className="w-full h-[280px] !max-h-[280px] bg-transparent">
							<div key={i.toString()} className="relative min-w-full min-h-min">
								<Link
									key={i.toString()}
									className=" h-[280px] !max-h-[280px]"
									href={fields.url} target="_blank"
								>
									<BiRightArrowAlt size={40} className="absolute z-50 top-[40%] bottom-[60%] right-0 fill-cyan-400 drop-shadow-lg" />
									<div key={i.toString()} className={`
									rounded-md
									absolute
										min-w-full min-h-full
										bg-gradient-to-r to-[rgba(0,0,0,0.35)] from-[rgba(0,0,0,0)]
									`}></div>
									{/* gradient-to-l to-black from-[rgba(0,0,0,0.67)] */}
									<Image
										key={i.toString()}
										src={fields.image[0]?.thumbnails?.full?.url}
										alt={'logo'}
										width={200}
										height={200}
										className="rounded-md w-full h-[180px] hover:scale-105 object-cover cursor-pointer"
									/>
								</Link>
							</div>
							<div key={i.toString()}>
								<p key={i.toString()} className="text-[.7rem] text-primary-700" >{
									moment(fields.created_at).fromNow()
								}</p>
								<p key={i.toString()}>{fields.title}</p>
								{fields.repo && <Link
									key={i.toString()}
									className="text-cyan-500"
									href={fields.repo}
									target="_blank"
								>
									{`code repository`}
								</Link>}
							</div>
						</li>
					})
				}
			</ul>
		</Container>
	</div>
}