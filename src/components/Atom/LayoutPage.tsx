'use client'
import { Box } from "@chakra-ui/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"

interface LayoutPageProps {
	children: ReactNode
}

export const LayoutPage: React.FC<LayoutPageProps> = ({
	children
}) => {
	const pathname = usePathname()
	const inPathname = (path: string) => pathname === path

	// Render
	return (
		<Box fontFamily={'body'} className={`
					min-h-screen w-full
			`}>
			<menu className={`
							w-full !p-10 bg-transparent fixed !z-50 !bg-black
					`}>
				<ul className="w-full h-full flex justify-center gap-10">
					<li>
						<Link href={'/'} className={
							`${inPathname('/') ? 'text-primary-900' : ''}`
						}>
							Profile
						</Link>
					</li>

					<li>
						<Link href={'/projects'}
							className={
								`${inPathname('/projects') ? 'text-primary-900' : ''}`
							}
						>
							Projects
						</Link>
					</li>
					<li>
						<Link href={'/contact'}
							className={
								`${inPathname('/contact') ? 'text-primary-900' : ''}`
							}
						>
							Contact
						</Link>
					</li>
				</ul>
			</menu>
			<div className={`w-full min-h-full !pt-36 p-2 sm:p-12 overflow-y-auto`}>
				{children}
			</div>
		</Box>
	)
}